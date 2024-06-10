'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var common = require('../schema/common.cjs');
var schemas = require('../generated/schemas.cjs');

function commandFactory(sendCommand, cmd, response, transferTransform = () => undefined) {
    const payload = common.ReceiveFramePayload.extend({
        cmd: index.literal(cmd),
        data: response,
    });
    return async (args) => {
        const reply = await sendCommand({ cmd, args, transfer: transferTransform(args) });
        const parsed = payload.parse(reply);
        return parsed.data;
    };
}
function schemaCommandFactory(cmd, transferTransform = () => undefined) {
    const response = schemas.Schemas[cmd].response;
    const payload = common.ReceiveFramePayload.extend({
        cmd: index.literal(cmd),
        data: response,
    });
    return (sendCommand) => async (args) => {
        const reply = await sendCommand({
            // @ts-expect-error - Merge commands
            cmd: cmd,
            args,
            transfer: transferTransform(args),
        });
        const parsed = payload.parse(reply);
        return parsed.data;
    };
}

exports.commandFactory = commandFactory;
exports.schemaCommandFactory = schemaCommandFactory;
