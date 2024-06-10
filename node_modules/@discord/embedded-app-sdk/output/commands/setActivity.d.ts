import * as zod from 'zod';
import { TSendCommand } from '../schema/types';
export declare const SetActivity: zod.ZodNullable<zod.ZodObject<{
    timestamps: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        start: zod.ZodOptional<zod.ZodNumber>;
        end: zod.ZodOptional<zod.ZodNumber>;
    }, "strip", zod.ZodTypeAny, {
        start?: number | undefined;
        end?: number | undefined;
    }, {
        start?: number | undefined;
        end?: number | undefined;
    }>>>;
    details: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    state: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
    party: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        id: zod.ZodNullable<zod.ZodOptional<zod.ZodString>>;
        size: zod.ZodNullable<zod.ZodOptional<zod.ZodArray<zod.ZodNumber, "many">>>;
    }, "strip", zod.ZodTypeAny, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }, {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    }>>>;
    assets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        large_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        large_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_image: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
        small_text: zod.ZodOptional<zod.ZodNullable<zod.ZodString>>;
    }, "strip", zod.ZodTypeAny, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    }, {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    }>>>;
    secrets: zod.ZodNullable<zod.ZodOptional<zod.ZodObject<{
        join: zod.ZodOptional<zod.ZodString>;
        match: zod.ZodOptional<zod.ZodString>;
    }, "strip", zod.ZodTypeAny, {
        join?: string | undefined;
        match?: string | undefined;
    }, {
        join?: string | undefined;
        match?: string | undefined;
    }>>>;
    type: zod.ZodOptional<zod.ZodNumber>;
    instance: zod.ZodOptional<zod.ZodNullable<zod.ZodOptional<zod.ZodBoolean>>>;
}, "strip", zod.ZodTypeAny, {
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    details?: string | null | undefined;
    state?: string | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    type?: number | undefined;
    instance?: boolean | null | undefined;
}, {
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    details?: string | null | undefined;
    state?: string | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    type?: number | undefined;
    instance?: boolean | null | undefined;
}>>;
export interface SetActivityInput {
    activity: zod.infer<typeof SetActivity>;
}
/**
 *
 * @description
 * RPC documentation here: https://discord.com/developers/docs/topics/rpc#setactivity
 * Calling setActivity allows modifying how your activity's rich presence is displayed in the Discord App
 *
 * Supported Platforms
 * | Web | iOS | Android |
 * |-----|-----|---------|
 * | ✅  | ✅  | ✅      |
 *
 * Required scopes: [rpc.activities.write]
 *
 * @example
 * await discordSdk.commands.setActivity({
 *   activity: {
 *     type: 0,
 *     details: 'Details',
 *     state: 'Playing',
 *   },
 * });
 */
export declare const setActivity: (sendCommand: TSendCommand) => (args: SetActivityInput) => Promise<{
    type: number;
    name: string;
    url?: string | null | undefined;
    created_at?: number | null | undefined;
    timestamps?: {
        start?: number | undefined;
        end?: number | undefined;
    } | null | undefined;
    application_id?: string | null | undefined;
    details?: string | null | undefined;
    state?: string | null | undefined;
    emoji?: {
        id: string;
        name?: string | null | undefined;
        roles?: string[] | null | undefined;
        user?: {
            username: string;
            discriminator: string;
            id: string;
            bot: boolean;
            avatar_decoration_data: {
                asset: string;
                sku_id?: string | undefined;
            } | null;
            global_name?: string | null | undefined;
            avatar?: string | null | undefined;
            flags?: number | null | undefined;
            premium_type?: number | null | undefined;
        } | null | undefined;
        require_colons?: boolean | null | undefined;
        managed?: boolean | null | undefined;
        animated?: boolean | null | undefined;
        available?: boolean | null | undefined;
    } | null | undefined;
    party?: {
        id?: string | null | undefined;
        size?: number[] | null | undefined;
    } | null | undefined;
    assets?: {
        large_image?: string | null | undefined;
        large_text?: string | null | undefined;
        small_image?: string | null | undefined;
        small_text?: string | null | undefined;
    } | null | undefined;
    secrets?: {
        join?: string | undefined;
        match?: string | undefined;
    } | null | undefined;
    instance?: boolean | null | undefined;
    flags?: number | null | undefined;
}>;
