export const queryKeys = {
    users: {
        all: ['users'],
        list: () => [...queryKeys.users.all, 'list'],
        detail: (id: number) => [...queryKeys.users.all, 'detail', `${id}`]
    },
    auth: {
        me: ['me']
    }
}
