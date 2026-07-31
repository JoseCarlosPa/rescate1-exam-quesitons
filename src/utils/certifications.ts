/**
 * Certificaciones del personal operativo (paramédicos).
 *
 * Retrocompatibilidad: los elementos creados antes de introducir el
 * vencimiento guardan `certifications` como `string[]`. Aquí normalizamos
 * ambos formatos a `CertRecord` para que el resto de la app solo trabaje
 * con objetos. Al guardar, exportamos de vuelta a un formato serializable
 * para Firestore (fechas como cadenas ISO `YYYY-MM-DD`).
 */

/** Certificación normalizada usada en la UI. */
export interface CertRecord {
    name: string;
    /** Fecha de emisión en ISO `YYYY-MM-DD` (opcional para certs heredadas). */
    issuedAt?: string;
    /** Fecha de vencimiento en ISO `YYYY-MM-DD` (opcional; sin ella no caduca). */
    expiresAt?: string;
}

/** Formato tal como puede venir de Firestore: string heredado u objeto. */
export type StoredCert = string | Partial<CertRecord>;

export type CertStatus = 'vigente' | 'por-vencer' | 'vencida' | 'sin-fecha';

/** Días de antelación con los que una certificación se marca "por vencer". */
export const EXPIRY_WARNING_DAYS = 60;

/** Convierte un valor almacenado (string u objeto) en un CertRecord. */
export function normalizeCert(stored: StoredCert): CertRecord {
    if (typeof stored === 'string') {
        return {name: stored};
    }
    return {
        name: stored.name ?? '',
        issuedAt: stored.issuedAt || undefined,
        expiresAt: stored.expiresAt || undefined,
    };
}

/** Normaliza el arreglo completo, descartando entradas sin nombre. */
export function normalizeCerts(stored?: StoredCert[] | null): CertRecord[] {
    if (!stored) return [];
    return stored.map(normalizeCert).filter(c => c.name.trim().length > 0);
}

/**
 * Serializa para Firestore. Las certificaciones sin fechas se guardan como
 * string simple (para no inflar el documento ni romper lecturas antiguas);
 * las que tienen fecha se guardan como objeto sin campos `undefined`
 * (Firestore rechaza `undefined`).
 */
export function serializeCerts(certs: CertRecord[]): StoredCert[] {
    return certs
        .filter(c => c.name.trim().length > 0)
        .map(c => {
            if (!c.issuedAt && !c.expiresAt) return c.name.trim();
            const obj: CertRecord = {name: c.name.trim()};
            if (c.issuedAt) obj.issuedAt = c.issuedAt;
            if (c.expiresAt) obj.expiresAt = c.expiresAt;
            return obj;
        });
}

/**
 * Días restantes hasta el vencimiento (negativo si ya venció).
 * `now` es inyectable para pruebas deterministas.
 */
export function daysUntilExpiry(expiresAt: string, now: Date = new Date()): number {
    const expiry = new Date(expiresAt + 'T00:00:00');
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const MS_PER_DAY = 24 * 60 * 60 * 1000;
    return Math.round((expiry.getTime() - today.getTime()) / MS_PER_DAY);
}

/** Estado de una certificación según su fecha de vencimiento. */
export function certStatus(cert: CertRecord, now: Date = new Date()): CertStatus {
    if (!cert.expiresAt) return 'sin-fecha';
    const days = daysUntilExpiry(cert.expiresAt, now);
    if (days < 0) return 'vencida';
    if (days <= EXPIRY_WARNING_DAYS) return 'por-vencer';
    return 'vigente';
}

/** Etiqueta y colores para pintar el estado en la UI. */
export function certStatusMeta(status: CertStatus): {label: string; color: string; bg: string} {
    switch (status) {
        case 'vencida':   return {label: 'Vencida', color: '#dc2626', bg: '#fee2e2'};
        case 'por-vencer': return {label: 'Por vencer', color: '#d97706', bg: '#fef3c7'};
        case 'vigente':   return {label: 'Vigente', color: '#16a34a', bg: '#dcfce7'};
        default:          return {label: 'Sin fecha', color: '#64748b', bg: '#f1f5f9'};
    }
}

/** Resumen para alertas: cuántas certs están vencidas o por vencer. */
export function certsSummary(certs: CertRecord[], now: Date = new Date()) {
    let vencidas = 0, porVencer = 0, vigentes = 0;
    for (const c of certs) {
        const s = certStatus(c, now);
        if (s === 'vencida') vencidas++;
        else if (s === 'por-vencer') porVencer++;
        else if (s === 'vigente') vigentes++;
    }
    return {total: certs.length, vencidas, porVencer, vigentes};
}
