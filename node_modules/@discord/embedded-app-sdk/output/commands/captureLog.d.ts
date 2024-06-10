import { TSendCommand } from '../schema/types';
import { ConsoleLevel } from '../utils/console';
export interface CaptureLogInput {
    level: ConsoleLevel;
    message: string;
}
/**
 *
 */
export declare const captureLog: (sendCommand: TSendCommand) => (args: CaptureLogInput) => Promise<{} | null>;
