import { TSendCommand } from '../schema/types';
/**
 *
 */
export declare const encourageHardwareAcceleration: (sendCommand: TSendCommand) => (args: void) => Promise<{
    enabled: boolean;
}>;
