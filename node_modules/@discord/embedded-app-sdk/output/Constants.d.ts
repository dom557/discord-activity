export declare enum RPCCloseCodes {
    CLOSE_NORMAL = 1000,
    CLOSE_UNSUPPORTED = 1003,
    CLOSE_ABNORMAL = 1006,
    INVALID_CLIENTID = 4000,
    INVALID_ORIGIN = 4001,
    RATELIMITED = 4002,
    TOKEN_REVOKED = 4003,
    INVALID_VERSION = 4004,
    INVALID_ENCODING = 4005
}
export declare enum RPCErrorCodes {
    INVALID_PAYLOAD = 4000,
    INVALID_COMMAND = 4002,
    INVALID_EVENT = 4004,
    INVALID_PERMISSIONS = 4006
}
/**
 * @deprecated use OrientationTypeObject instead
 */
export declare enum Orientation {
    LANDSCAPE = "landscape",
    PORTRAIT = "portrait"
}
export declare enum Platform {
    MOBILE = "mobile",
    DESKTOP = "desktop"
}
export declare const Permissions: Readonly<{
    CREATE_INSTANT_INVITE: import("./utils/BigFlagUtils").BigFlag;
    ADMINISTRATOR: import("./utils/BigFlagUtils").BigFlag;
}>;
