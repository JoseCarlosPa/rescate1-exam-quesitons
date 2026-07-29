export const GUARDIAS = [
    'Viernes Nocturna',
    'Sábado Diurna',
    'Sábado Nocturna',
    'Domingo Diurna',
] as const;

export type Guardia = typeof GUARDIAS[number];

export const GUARD_ROLES = [
    'Jefe de Guardia',
    'Sub-jefe de Guardia',
    'Naranja',
    'Cadete',
] as const;

export type GuardRole = typeof GUARD_ROLES[number];

const GUARD_LEADER_ROLES: GuardRole[] = ['Jefe de Guardia', 'Sub-jefe de Guardia'];

/** Un Jefe/Sub-jefe de guardia administra (alta/edición) a los elementos de su propia guardia. */
export function isGuardLeader(guardRole?: GuardRole | null): boolean {
    return !!guardRole && GUARD_LEADER_ROLES.includes(guardRole);
}
