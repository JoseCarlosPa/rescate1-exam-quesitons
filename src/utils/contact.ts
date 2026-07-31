/**
 * Helpers para generar enlaces de contacto rápido (teléfono, WhatsApp, correo)
 * a partir de los datos de un elemento. Lógica pura y testeable.
 */

/** Deja solo dígitos de un teléfono para usarlo en tel: y wa.me. */
export function sanitizePhone(phone?: string | null): string {
    return (phone ?? '').replace(/\D/g, '');
}

/**
 * Normaliza a formato E.164 sin '+' para wa.me. Si el número no trae código de
 * país (10 dígitos, típico de México), antepone 52.
 */
export function toWhatsAppNumber(phone?: string | null): string {
    const digits = sanitizePhone(phone);
    if (!digits) return '';
    if (digits.length === 10) return `52${digits}`;
    return digits;
}

export function telHref(phone?: string | null): string | null {
    const digits = sanitizePhone(phone);
    return digits ? `tel:${digits}` : null;
}

export function whatsAppHref(phone?: string | null, message?: string): string | null {
    const wa = toWhatsAppNumber(phone);
    if (!wa) return null;
    const base = `https://wa.me/${wa}`;
    return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function mailtoHref(email?: string | null): string | null {
    const trimmed = (email ?? '').trim();
    return trimmed ? `mailto:${trimmed}` : null;
}
