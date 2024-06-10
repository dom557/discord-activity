/**
 * Opens the Share Moment Dialog in the user's client, allowing them to share the media at mediaUrl as a message.
 *
 * @param {string} mediaUrl - a Discord CDN URL for the piece of media to be shared.
 * @returns {Promise<void>}
 */
export declare const openShareMomentDialog: (sendCommand: import("../schema/types").TSendCommand) => (args: {
    mediaUrl: string;
}) => Promise<{} | null | undefined>;
