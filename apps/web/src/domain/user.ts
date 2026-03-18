export type User = {
    id: number;
    name: string;
    email: string;
    avatarUrl?: string;
    role: 'admin' | 'user';
}
