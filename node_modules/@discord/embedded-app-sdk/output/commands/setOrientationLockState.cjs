'use strict';

var common = require('../schema/common.cjs');
var responses = require('../schema/responses.cjs');
var compatCommandFactory = require('../utils/compatCommandFactory.cjs');

const fallbackTransform = (args) => {
    return {
        lock_state: args.lock_state,
        picture_in_picture_lock_state: args.picture_in_picture_lock_state,
    };
};
const setOrientationLockState = (sendCommand) => compatCommandFactory.default({
    sendCommand,
    cmd: common.Commands.SET_ORIENTATION_LOCK_STATE,
    response: responses.EmptyResponse,
    fallbackTransform,
});

exports.setOrientationLockState = setOrientationLockState;
