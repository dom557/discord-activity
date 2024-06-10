import { devLogCommandConfig, devLogCommand } from 'robo.js/dist/core/debug.js';

const config = devLogCommandConfig;
var logs_default = devLogCommand;

export { config, logs_default as default };
