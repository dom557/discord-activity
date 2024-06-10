export declare const consoleLevels: readonly ["log", "warn", "debug", "info", "error"];
export type ConsoleLevel = (typeof consoleLevels)[number];
export declare function wrapConsoleMethod(console: any, level: ConsoleLevel, callback: (level: ConsoleLevel, msg: string) => void): void;
