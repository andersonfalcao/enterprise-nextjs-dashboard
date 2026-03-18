import { Role } from "./user";
import { ActionFor, Resource, permissions } from "./permissions";

export const can = <R extends Resource>(
    role: Role,
    resource: R,
    action: ActionFor<R>) => {
        const allowed = permissions[resource]?.[action] ?? [];
        return (allowed as readonly Role[])?.includes(role) ?? false;
}
