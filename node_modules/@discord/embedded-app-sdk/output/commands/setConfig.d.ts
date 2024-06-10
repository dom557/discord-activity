import { TSendCommand } from '../schema/types';
export interface SetConfigInput {
    use_interactive_pip: boolean;
}
/**
 *
 */
export declare const setConfig: (sendCommand: TSendCommand) => (args: SetConfigInput) => Promise<{
    use_interactive_pip: boolean;
}>;
