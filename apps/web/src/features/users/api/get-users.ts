import {
    apiClient
} from '@api';
import { User } from '@/domain/user';

export const getUsers = async () => {
    return apiClient<User[]>('/api/users');
}
