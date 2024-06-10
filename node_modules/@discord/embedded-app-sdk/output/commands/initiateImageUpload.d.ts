/**
 * Triggers the file upload flow in the Discord app. The user will be prompted to select a valid image file
 * and then it will be uploaded on the app side to the Discord CDN.
 *
 * NOTE: The URL provided by the API is an ephemeral attachment URL, so the image will not be permanently
 * accessible at the link provided.
 *
 * @returns {Promise<{image_url: string}>}
 */
export declare const initiateImageUpload: (sendCommand: import("../schema/types").TSendCommand) => (args: void) => Promise<{
    image_url: string;
}>;
