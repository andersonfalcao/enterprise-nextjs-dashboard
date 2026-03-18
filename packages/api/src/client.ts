import { logger } from '@logger';

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
   try {
        const response = await fetch(url, {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options?.headers || {}),
            },
        });

        const data = await response.json().catch(() => null);
        
        
        if (!response.ok) {
            logger.error("Api Error", url, data);
            throw new ApiError(response.status, data);
        }

        return data;
   } catch (error) {
        logger.error("Api Error", url, error);
        throw new ApiError(500, error);
    }
}

