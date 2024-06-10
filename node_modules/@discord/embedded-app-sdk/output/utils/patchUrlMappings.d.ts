export interface Mapping {
    prefix: string;
    target: string;
}
export interface RemapInput {
    url: URL;
    mappings: Mapping[];
}
interface PatchUrlMappingsConfig {
    patchFetch?: boolean;
    patchWebSocket?: boolean;
    patchXhr?: boolean;
    patchSrcAttributes?: boolean;
}
export declare function patchUrlMappings(mappings: Mapping[], { patchFetch, patchWebSocket, patchXhr, patchSrcAttributes }?: PatchUrlMappingsConfig): void;
export declare function attemptRemap({ url, mappings }: RemapInput): URL;
export {};
