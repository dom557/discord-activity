import { TSendCommand } from '../schema/types';
/**
 *
 */
export declare const userSettingsGetLocale: (sendCommand: TSendCommand) => (args: void) => Promise<{
    locale: string;
}>;
