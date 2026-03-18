import { useQuery } from "@tanstack/react-query"
import { getMe } from "../api/get-me"
import { queryKeys } from "@/lib/query-keys"

export const useMe = () => {
    return useQuery({
        queryKey: queryKeys.auth.me,
        queryFn: getMe
    })
}
