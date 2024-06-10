'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var BigFlagUtils = require('./BigFlagUtils.cjs');

function can(permission, permissions) {
    return BigFlagUtils.default.has(BigFlagUtils.default.deserialize(permissions), permission);
}
var PermissionUtils = {
    can,
};

exports.default = PermissionUtils;
