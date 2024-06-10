import * as zod from 'zod';
import { ZodDefault, ZodTypeAny } from 'zod';
type ValueOf<T> = T[keyof T];
interface UnhandledObject {
    readonly UNHANDLED: -1;
}
/**
 * This is a helper function which coerces an unsupported arg value to the key/value UNHANDLED: -1
 * This is necessary to handle a scenario where a new enum value is added in the Discord Client,
 * so that the sdk will not throw an error when given a (newly) valid enum value.
 *
 * To remove the requirement for consumers of this sdk to import an enum when parsing data,
 * we instead use an object cast as const (readonly). This maintains parity with the previous
 * schema (which used zod.enum), and behaves more like a union type, i.e. 'foo' | 'bar' | -1
 *
 * @param inputObject This object must include the key/value pair UNHANDLED = -1
 */
export declare function zodCoerceUnhandledValue<T extends UnhandledObject>(inputObject: T): zod.ZodEffects<zod.ZodType<ValueOf<T>, zod.ZodTypeDef, ValueOf<T>>, ValueOf<T>, unknown>;
export interface ZodEffectOverlayType<T extends ZodTypeAny> extends zod.ZodEffects<T> {
    overlayType: T;
    innerType(): never;
    _def: never;
}
/**
 * Fallback to the default zod value if parsing fails.
 */
export declare function fallbackToDefault<T extends ZodDefault<ZodTypeAny>>(schema: T): ZodEffectOverlayType<T>;
export {};
