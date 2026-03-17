import {
    apiClient
} from '@api';
import { User } from '../types/user';

export const getUsers = async () => {
    return apiClient<User[]>('/api/users');
}
