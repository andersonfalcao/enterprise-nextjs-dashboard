import { ADMIN, MANAGER, USER } from "./user";

const all = [ADMIN, MANAGER, USER] as const;

export const permissions = {
    user: {
        read: [ADMIN, MANAGER] as const,
        write: [ADMIN] as const
    },

    dashboard: {
        view: all,
    }
} as const;

export type Resource = keyof typeof permissions;
export type ActionFor<R extends Resource> = keyof typeof permissions[R];