"use client";

import { useAuthStore } from "@/features/auth/store/auth-store";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const user = useAuthStore((s) => s.user);

    if (!user) {
        return <div>You must be logged in to view this page.</div>;
    }

    return children;
};
