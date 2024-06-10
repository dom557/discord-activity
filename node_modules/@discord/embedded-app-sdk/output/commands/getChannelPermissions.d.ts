import { TSendCommand } from '../schema/types';
/**
 * Returns a bigint representing Permissions for the current user in the currently connected channel. Use PermissionsUtils to calculate if a user has a particular permission.
 * Always returns `0n` (no valid permissions) in a (G)DM context, so is unnecessary to call when discordSdk.guildId == null.
 */
export declare const getChannelPermissions: (sendCommand: TSendCommand) => (args: void) => Promise<{
    permissions: string | bigint;
}>;
