export interface MatchAndRewriteURLInputs {
    originalURL: URL;
    prefixHost: string;
    prefix: string;
    target: string;
}
/**
 *
 * Attempts to map the actual url (i.e. google.com) to a url path, per the url
 * mappings set up in the embedded application. If the target contains `{foo}`
 * tokens, they will be replace with the values contained in the original URL,
 * via the pattern described in the prefix
 *
 * @returns  null if URL doesn't match prefix, otherwise return rewritten URL
 */
export declare function matchAndRewriteURL({ originalURL, prefix, prefixHost, target }: MatchAndRewriteURLInputs): URL | null;
export declare function absoluteURL(url: string, protocol?: string, host?: string): URL;
