import { create } from 'zustand';
import { User } from '@/domain/user';

type AuthState = {
    user?: User;
    setUser: (user?: User) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: undefined,
    setUser: (user) => set({ user })
}))
