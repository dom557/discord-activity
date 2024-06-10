import * as zod from 'zod';
import { Commands } from '../schema/common';
import { TSendCommand } from '../schema/types';
/**
 * @args - the primary args to send with the command.
 * @fallbackArgs - the args to try the command with in the case where an old Discord
 *  client doesn't support one of the new args.
 */
export default function compatCommandFactory<Args extends any, FallbackArgs extends any, Response extends zod.ZodTypeAny>({ sendCommand, cmd, response, fallbackTransform, transferTransform, }: {
    sendCommand: TSendCommand;
    cmd: Exclude<Commands, Commands.SUBSCRIBE | Commands.UNSUBSCRIBE>;
    response: zod.ZodTypeAny;
    fallbackTransform: (args: Args) => FallbackArgs;
    transferTransform?: (args: Args | FallbackArgs) => Transferable[] | undefined;
}): (args: Args) => Promise<zod.infer<Response>>;
