import * as zod from 'zod';
import { OrientationLockState } from '../schema/common';
import { TSendCommand } from '../schema/types';
export interface SetOrientationLockStateInputFallback {
    lock_state: zod.infer<typeof OrientationLockState>;
    picture_in_picture_lock_state?: zod.infer<typeof OrientationLockState> | null;
}
export interface SetOrientationLockStateInput extends SetOrientationLockStateInputFallback {
    grid_lock_state?: zod.infer<typeof OrientationLockState> | null;
}
export declare const setOrientationLockState: (sendCommand: TSendCommand) => (args: SetOrientationLockStateInput) => Promise<{} | null>;
