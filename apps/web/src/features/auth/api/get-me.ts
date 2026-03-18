import { apiClient } from "@api";

import { User } from "@/domain/user";

export const getMe = async () => {
    return apiClient<User>('/api/me');
}
