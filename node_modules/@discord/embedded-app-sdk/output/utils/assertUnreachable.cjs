'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Assets x is statically unreachable at build-time,
 * and throws at runtime if data is dynamic.
 */
function assertUnreachable(_x, runtimeError) {
    throw runtimeError;
}

exports.default = assertUnreachable;
