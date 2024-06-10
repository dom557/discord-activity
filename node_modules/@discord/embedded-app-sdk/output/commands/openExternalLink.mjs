import { Commands } from '../schema/common.mjs';
import { EmptyResponse } from '../schema/responses.mjs';
import { commandFactory } from '../utils/commandFactory.mjs';

/**
 *
 */
const openExternalLink = (sendCommand) => commandFactory(sendCommand, Commands.OPEN_EXTERNAL_LINK, EmptyResponse);

export { openExternalLink };
