export interface ISDKError {
    code: number;
    message: string;
}
export declare class SDKError extends Error implements ISDKError {
    code: number;
    message: string;
    name: string;
    constructor(code: number, message?: string);
}
