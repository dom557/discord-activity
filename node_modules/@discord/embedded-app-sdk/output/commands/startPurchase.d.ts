import { TSendCommand } from '../schema/types';
export interface StartPurchaseInput {
    sku_id: string;
    pid?: number;
}
/**
 *
 */
export declare const startPurchase: (sendCommand: TSendCommand) => (args: StartPurchaseInput) => Promise<{
    type: 1 | 4 | 3 | -1 | 2 | 5 | 6 | 7;
    id: string;
    sku_id: string;
    application_id: string;
    user_id: string;
    gift_code_flags: number;
    gifter_user_id?: string | null | undefined;
    branches?: string[] | null | undefined;
    starts_at?: string | null | undefined;
    ends_at?: string | null | undefined;
    parent_id?: string | null | undefined;
    consumed?: boolean | null | undefined;
    deleted?: boolean | null | undefined;
    gift_code_batch_id?: string | null | undefined;
}[] | null>;
