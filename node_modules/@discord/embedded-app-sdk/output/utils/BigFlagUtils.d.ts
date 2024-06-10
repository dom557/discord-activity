/**
 * Context: Due to Discord supporting more than 32 permissions, permission calculation has become more complicated than naive
 * bit operations on `number`s. To support this generically, we have created BigFlagUtils to work with bit-flags greater
 * than 32-bits in size.
 *
 * Ideally, we would like to use BigInt, which is pretty efficient, but some JavaScript engines do not support it.
 *
 * This file is intended to be a set of lower-level operators that act directly on "BigFlags".
 *
 * If you're working with permissions, in most cases you can probably use PermissionUtils.
 */
declare class HighLow {
    parts: number[];
    str: string | undefined;
    static fromString(value: string): HighLow;
    static fromBit(index: number): HighLow;
    constructor(parts: number[], str?: string);
    and({ parts }: HighLow): HighLow;
    or({ parts }: HighLow): HighLow;
    xor({ parts }: HighLow): HighLow;
    not(): HighLow;
    equals({ parts }: HighLow): boolean;
    /**
     * For the average case the string representation is provided, but
     * when we need to convert high and low to string we just let the
     * slower big-integer library do it.
     */
    toString(): string;
    toJSON(): string;
}
declare global {
    interface BigInt {
        toJSON(): string;
    }
}
/**
 * Technically, it should be one or the other, but Typescript doesn't seem
 * to have the power to express that dynamically yet.
 */
export type BigFlag = bigint | HighLow;
export declare const isBigFlag: (value: any) => value is BigFlag;
declare function flagOrMultiple(...flags: BigFlag[]): BigFlag;
declare function flagHas(base: BigFlag, flag: BigFlag): boolean;
declare function flagHasAny(base: BigFlag, flag: BigFlag): boolean;
declare function flagAdd(base: BigFlag, flag: BigFlag): BigFlag;
declare function flagRemove(base: BigFlag, flag: BigFlag): BigFlag;
declare const _default: {
    combine: typeof flagOrMultiple;
    add: typeof flagAdd;
    remove: typeof flagRemove;
    filter: (first: BigFlag, second: BigFlag) => BigFlag;
    invert: (first: BigFlag | undefined) => BigFlag;
    has: typeof flagHas;
    hasAny: typeof flagHasAny;
    equals: (first: BigFlag | undefined, second: BigFlag | undefined) => boolean;
    deserialize: (value: string | number | BigFlag) => BigFlag;
    getFlag: (index: number) => BigFlag;
};
export default _default;
