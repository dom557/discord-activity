import BigFlagUtils from './utils/BigFlagUtils.mjs';

var RPCCloseCodes;
(function (RPCCloseCodes) {
    RPCCloseCodes[RPCCloseCodes["CLOSE_NORMAL"] = 1000] = "CLOSE_NORMAL";
    RPCCloseCodes[RPCCloseCodes["CLOSE_UNSUPPORTED"] = 1003] = "CLOSE_UNSUPPORTED";
    RPCCloseCodes[RPCCloseCodes["CLOSE_ABNORMAL"] = 1006] = "CLOSE_ABNORMAL";
    RPCCloseCodes[RPCCloseCodes["INVALID_CLIENTID"] = 4000] = "INVALID_CLIENTID";
    RPCCloseCodes[RPCCloseCodes["INVALID_ORIGIN"] = 4001] = "INVALID_ORIGIN";
    RPCCloseCodes[RPCCloseCodes["RATELIMITED"] = 4002] = "RATELIMITED";
    RPCCloseCodes[RPCCloseCodes["TOKEN_REVOKED"] = 4003] = "TOKEN_REVOKED";
    RPCCloseCodes[RPCCloseCodes["INVALID_VERSION"] = 4004] = "INVALID_VERSION";
    RPCCloseCodes[RPCCloseCodes["INVALID_ENCODING"] = 4005] = "INVALID_ENCODING";
})(RPCCloseCodes || (RPCCloseCodes = {}));
var RPCErrorCodes;
(function (RPCErrorCodes) {
    RPCErrorCodes[RPCErrorCodes["INVALID_PAYLOAD"] = 4000] = "INVALID_PAYLOAD";
    RPCErrorCodes[RPCErrorCodes["INVALID_COMMAND"] = 4002] = "INVALID_COMMAND";
    RPCErrorCodes[RPCErrorCodes["INVALID_EVENT"] = 4004] = "INVALID_EVENT";
    RPCErrorCodes[RPCErrorCodes["INVALID_PERMISSIONS"] = 4006] = "INVALID_PERMISSIONS";
})(RPCErrorCodes || (RPCErrorCodes = {}));
/**
 * @deprecated use OrientationTypeObject instead
 */
var Orientation;
(function (Orientation) {
    Orientation["LANDSCAPE"] = "landscape";
    Orientation["PORTRAIT"] = "portrait";
})(Orientation || (Orientation = {}));
var Platform;
(function (Platform) {
    Platform["MOBILE"] = "mobile";
    Platform["DESKTOP"] = "desktop";
})(Platform || (Platform = {}));
const Permissions = Object.freeze({
    CREATE_INSTANT_INVITE: BigFlagUtils.getFlag(0),
    ADMINISTRATOR: BigFlagUtils.getFlag(3),
});

export { Orientation, Permissions, Platform, RPCCloseCodes, RPCErrorCodes };
