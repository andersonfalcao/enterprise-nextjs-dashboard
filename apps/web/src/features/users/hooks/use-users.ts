import { useQuery } from '@tanstack/react-query';
import { getUsers } from '@/features/users/api/get-users';
import { queryKeys } from '@/lib/query-keys';

export const useUsers = () => {
    return useQuery({
        queryKey: queryKeys.users.list(),
        queryFn: getUsers
    });
}
