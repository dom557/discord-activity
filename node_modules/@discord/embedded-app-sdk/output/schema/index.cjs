'use strict';

var index = require('../lib/zod@3.22.4/lib/zod/lib/index.cjs');
var events = require('./events.cjs');
var responses = require('./responses.cjs');
var common = require('./common.cjs');
var Constants = require('../Constants.cjs');

index.object({
    frame_id: index.string(),
    platform: index.nativeEnum(Constants.Platform).optional().nullable(),
});
index.object({
    v: index.literal(1),
    encoding: index.literal('json').optional(),
    client_id: index.string(),
    frame_id: index.string(),
});
const ClosePayload = index.object({
    code: index.number(),
    message: index.string().optional(),
});
const IncomingPayload = index.object({
    evt: index.string().nullable(),
    nonce: index.string().nullable(),
    data: index.unknown().nullable(),
    cmd: index.string(),
})
    .passthrough();
function parseIncomingPayload(payload) {
    const incoming = IncomingPayload.parse(payload);
    if (incoming.evt != null) {
        if (incoming.evt === events.ERROR) {
            return events.ErrorEvent.parse(incoming);
        }
        return events.parseEventPayload(events.EventFrame.parse(incoming));
    }
    else {
        return responses.parseResponsePayload(responses.ResponseFrame.passthrough().parse(incoming));
    }
}

exports.Responses = responses;
exports.Common = common;
exports.ClosePayload = ClosePayload;
exports.IncomingPayload = IncomingPayload;
exports.parseIncomingPayload = parseIncomingPayload;
