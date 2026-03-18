"use client";

import { ActionFor, Resource } from "@/domain";
import { usePermission } from "@/features/auth/hooks/use-permission";

export const PermissionGuard = <R extends Resource>({
    resource,
    action,
    children
}: {
    resource: R;
    action: ActionFor<R>;
    children: React.ReactNode;
}) => {
    const { check } = usePermission();

    if (!check(resource, action)) {
        return null;
    }

    return children;
}
