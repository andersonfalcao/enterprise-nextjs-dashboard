import { ActionFor, Resource } from "@/domain";
import { useAuthStore } from "../store/auth-store"
import { can } from "@/domain/can";

export const usePermission = () => {
    const user = useAuthStore((s) => s.user);

    const check = <R extends Resource>(resource: R, action: ActionFor<R>) => {
        if (!user) return false;

        return can(user.role, resource, action);
    }

    return {
        check
    }
}

