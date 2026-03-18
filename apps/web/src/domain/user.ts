

const roles = {
    ADMIN: 'admin',
    MANAGER: 'manager',
    USER: 'user'
} as const;

export type Role = (typeof roles)[keyof typeof roles];

export type User = {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;
    role: Role;
}

export const { ADMIN, MANAGER, USER } = roles;