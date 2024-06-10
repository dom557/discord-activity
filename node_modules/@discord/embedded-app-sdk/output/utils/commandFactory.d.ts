import * as zod from 'zod';
import { Commands } from '../schema/common';
import type { TSendCommand } from '../schema/types';
import { Command, Schemas } from '../generated/schemas';
export declare function commandFactory<Args extends any, Response extends zod.ZodTypeAny>(sendCommand: TSendCommand, cmd: Exclude<Commands, Commands.SUBSCRIBE | Commands.UNSUBSCRIBE>, response: zod.ZodTypeAny, transferTransform?: (args: Args) => Transferable[] | undefined): (args: Args) => Promise<zod.infer<Response>>;
type InferArgs<T extends Command> = zod.infer<(typeof Schemas)[T]['request']>;
type InferResponse<T extends Command> = zod.infer<(typeof Schemas)[T]['response']>;
export declare function schemaCommandFactory<T extends Command, TArgs = InferArgs<T>>(cmd: T, transferTransform?: (args: TArgs) => Transferable[] | undefined): (sendCommand: TSendCommand) => (args: TArgs) => Promise<InferResponse<T>>;
export {};
