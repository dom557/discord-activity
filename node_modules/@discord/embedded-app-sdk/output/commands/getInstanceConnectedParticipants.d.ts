/**
 * Gets all participants connected to the instance
 */
export declare const getInstanceConnectedParticipants: (sendCommand: import("../schema/types").TSendCommand) => (args: void) => Promise<{
    participants: {
        username: string;
        discriminator: string;
        id: string;
        bot: boolean;
        flags: number;
        global_name?: string | null | undefined;
        avatar?: string | null | undefined;
        avatar_decoration_data?: {
            asset: string;
            skuId?: string | undefined;
        } | null | undefined;
        premium_type?: number | null | undefined;
        nickname?: string | undefined;
    }[];
}>;
