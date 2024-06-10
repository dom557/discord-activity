import { TSendCommand } from '../schema/types';
/**
 * Returns an object with information about platform behaviors
 * This command can be utilized to inform and react to a breaking change in platform behavior
 *
 * @returns {GetPlatformBehaviorsPayload} payload - The command return value
 * @returns {boolean} payload.data.iosKeyboardResizesView - If on iOS the webview is resized when the keyboard is opened
 */
export declare const getPlatformBehaviors: (sendCommand: TSendCommand) => (args: void) => Promise<{
    iosKeyboardResizesView?: boolean | undefined;
}>;
