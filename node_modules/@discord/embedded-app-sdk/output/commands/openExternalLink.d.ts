import { TSendCommand } from '../schema/types';
export interface OpenExternalLinkInput {
    url: string;
}
/**
 *
 */
export declare const openExternalLink: (sendCommand: TSendCommand) => (args: OpenExternalLinkInput) => Promise<{} | null>;
