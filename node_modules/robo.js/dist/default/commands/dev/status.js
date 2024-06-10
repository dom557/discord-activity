import { devStatusCommandConfig, devStatusCommand } from 'robo.js/dist/core/debug.js';

const config = devStatusCommandConfig;
var status_default = devStatusCommand;

export { config, status_default as default };
