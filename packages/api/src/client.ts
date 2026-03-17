export class ApiError extends Error {
    constructor(
        public status: number,
        public data: unknown
    ) {
        super("Api Error");
    }
}

export const apiClient = async <T>(
    url: string,
    options?: RequestInit
): Promise<T> => {
    const response = await fetch(url, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(options?.headers || {}),
        },
    });
    
    if (!response.ok) {
        throw new ApiError(response.status, await response.json());
    }

    return response.json();
}
