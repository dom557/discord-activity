'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var Constants = require('../Constants.cjs');
var common = require('../schema/common.cjs');

/**
 * @args - the primary args to send with the command.
 * @fallbackArgs - the args to try the command with in the case where an old Discord
 *  client doesn't support one of the new args.
 */
function compatCommandFactory({ sendCommand, cmd, response, fallbackTransform, transferTransform = () => undefined, }) {
    const payload = common.ReceiveFramePayload.extend({
        cmd: index.literal(cmd),
        data: response,
    });
    return async (args) => {
        try {
            const reply = await sendCommand({ cmd, args, transfer: transferTransform(args) });
            const parsed = payload.parse(reply);
            return parsed.data;
        }
        catch (error) {
            if (error.code === Constants.RPCErrorCodes.INVALID_PAYLOAD) {
                const fallbackArgs = fallbackTransform(args);
                const reply = await sendCommand({ cmd, args: fallbackArgs, transfer: transferTransform(fallbackArgs) });
                const parsed = payload.parse(reply);
                return parsed.data;
            }
            else {
                throw error;
            }
        }
    };
}

exports.default = compatCommandFactory;
