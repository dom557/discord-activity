import * as zod from 'zod';
import * as Events from './events';
import * as Responses from './responses';
import * as Common from './common';
import { Platform } from '../Constants';
export declare const HelloPayload: zod.ZodObject<{
    frame_id: zod.ZodString;
    platform: zod.ZodNullable<zod.ZodOptional<zod.ZodNativeEnum<typeof Platform>>>;
}, "strip", zod.ZodTypeAny, {
    frame_id: string;
    platform?: Platform | null | undefined;
}, {
    frame_id: string;
    platform?: Platform | null | undefined;
}>;
export declare const ConnectPayload: zod.ZodObject<{
    v: zod.ZodLiteral<1>;
    encoding: zod.ZodOptional<zod.ZodLiteral<"json">>;
    client_id: zod.ZodString;
    frame_id: zod.ZodString;
}, "strip", zod.ZodTypeAny, {
    v: 1;
    frame_id: string;
    client_id: string;
    encoding?: "json" | undefined;
}, {
    v: 1;
    frame_id: string;
    client_id: string;
    encoding?: "json" | undefined;
}>;
export declare const ClosePayload: zod.ZodObject<{
    code: zod.ZodNumber;
    message: zod.ZodOptional<zod.ZodString>;
}, "strip", zod.ZodTypeAny, {
    code: number;
    message?: string | undefined;
}, {
    code: number;
    message?: string | undefined;
}>;
export { Events, Responses, Common };
export declare const IncomingPayload: zod.ZodObject<{
    evt: zod.ZodNullable<zod.ZodString>;
    nonce: zod.ZodNullable<zod.ZodString>;
    data: zod.ZodNullable<zod.ZodUnknown>;
    cmd: zod.ZodString;
}, "passthrough", zod.ZodTypeAny, zod.objectOutputType<{
    evt: zod.ZodNullable<zod.ZodString>;
    nonce: zod.ZodNullable<zod.ZodString>;
    data: zod.ZodNullable<zod.ZodUnknown>;
    cmd: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">, zod.objectInputType<{
    evt: zod.ZodNullable<zod.ZodString>;
    nonce: zod.ZodNullable<zod.ZodString>;
    data: zod.ZodNullable<zod.ZodUnknown>;
    cmd: zod.ZodString;
}, zod.ZodTypeAny, "passthrough">>;
export declare function parseIncomingPayload<K extends keyof typeof Events.EventSchema = keyof typeof Events.EventSchema>(payload: zod.infer<typeof IncomingPayload>): zod.infer<(typeof Events.EventSchema)[K]['payload']> | zod.infer<typeof Responses.ResponseFrame> | zod.infer<typeof Events.ErrorEvent>;
