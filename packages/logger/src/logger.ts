export type LogLevel = "info" | "warn" | "error" | "debug";

const isDevelopment = () => {
    const processEnv = (globalThis as {
        process?: {
            env?: {
                NODE_ENV?: string;
            };
        };
    }).process?.env;

    return processEnv?.NODE_ENV === "development";
};

export const logger = {
    info: (...args: unknown[]) => {
        console.info("[INFO]", ...args);
    },
    warn: (...args: unknown[]) => {
        console.warn("[WARN]", ...args);
    },
    error: (...args: unknown[]) => {
        console.error("[ERROR]", ...args);
    },
    debug: (...args: unknown[]) => {
        if (isDevelopment()) {
            console.debug("[DEBUG]", ...args);
        }
    }
}
