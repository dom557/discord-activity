import { DiscordSDK, DiscordSDKMock } from "@discord/embedded-app-sdk";
import { useState, useEffect, useCallback, useRef, createContext, useContext } from "react";
const queryParams = new URLSearchParams(window.location.search);
const isEmbedded = queryParams.get('frame_id') != null;
let discordSdk;
if (isEmbedded) {
    discordSdk = new DiscordSDK(import.meta.env.VITE_DISCORD_CLIENT_ID);
} else {
    // We're using session storage for user_id, guild_id, and channel_id
    // This way the user/guild/channel will be maintained until the tab is closed, even if you refresh
    // Session storage will generate new unique mocks for each tab you open
    // Any of these values can be overridden via query parameters
    // i.e. if you set https://my-tunnel-url.com/?user_id=test_user_id
    // this will override this will override the session user_id value
    const mockUserId = getOverrideOrRandomSessionValue('user_id');
    const mockGuildId = getOverrideOrRandomSessionValue('guild_id');
    const mockChannelId = getOverrideOrRandomSessionValue('channel_id');
    discordSdk = new DiscordSDKMock(import.meta.env.VITE_DISCORD_CLIENT_ID, mockGuildId, mockChannelId);
    const discriminator = String(mockUserId.charCodeAt(0) % 5);
    discordSdk._updateCommandMocks({
        authenticate: async ()=>{
            return {
                access_token: 'mock_token',
                user: {
                    username: mockUserId,
                    discriminator,
                    id: mockUserId,
                    avatar: null,
                    public_flags: 1
                },
                scopes: [],
                expires: new Date(2112, 1, 1).toString(),
                application: {
                    description: 'mock_app_description',
                    icon: 'mock_app_icon',
                    id: 'mock_app_id',
                    name: 'mock_app_name'
                }
            };
        }
    });
}
export { discordSdk };
var SessionStorageQueryParam;
(function(SessionStorageQueryParam) {
    SessionStorageQueryParam["user_id"] = "user_id";
    SessionStorageQueryParam["guild_id"] = "guild_id";
    SessionStorageQueryParam["channel_id"] = "channel_id";
})(SessionStorageQueryParam || (SessionStorageQueryParam = {}));
function getOverrideOrRandomSessionValue(queryParam) {
    const overrideValue = queryParams.get(queryParam);
    if (overrideValue != null) {
        return overrideValue;
    }
    const currentStoredValue = sessionStorage.getItem(queryParam);
    if (currentStoredValue != null) {
        return currentStoredValue;
    }
    // Set queryParam to a random 8-character string
    const randomString = Math.random().toString(36).slice(2, 10);
    sessionStorage.setItem(queryParam, randomString);
    return randomString;
}
const DiscordContext = /*#__PURE__*/ createContext({
    accessToken: null,
    authenticated: false,
    discordSdk: discordSdk,
    error: null,
    session: {
        user: {
            id: '',
            username: '',
            discriminator: '',
            avatar: null,
            public_flags: 0
        },
        access_token: '',
        scopes: [],
        expires: '',
        application: {
            rpc_origins: undefined,
            id: '',
            name: '',
            icon: null,
            description: ''
        }
    },
    status: 'pending'
});
export function DiscordContextProvider(props) {
    const { authenticate, children, loadingScreen = null, scope } = props;
    const setupResult = useDiscordSdkSetup({
        authenticate,
        scope
    });
    if (loadingScreen && ![
        'error',
        'ready'
    ].includes(setupResult.status)) {
        return /*#__PURE__*/ React.createElement(React.Fragment, null, loadingScreen);
    }
    return /*#__PURE__*/ React.createElement(DiscordContext.Provider, {
        value: setupResult
    }, children);
}
export function useDiscordSdk() {
    return useContext(DiscordContext);
}
/**
 * Authenticate with Discord and return the access token.
 * See full list of scopes: https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes
 *
 * @param scope The scope of the authorization (default: ['identify', 'guilds'])
 * @returns The result of the Discord SDK `authenticate()` command
 */ export async function authenticateSdk(options) {
    const { scope = [
        'identify',
        'guilds'
    ] } = options ?? {};
    await discordSdk.ready();
    const { code } = await discordSdk.commands.authorize({
        client_id: import.meta.env.VITE_DISCORD_CLIENT_ID,
        response_type: 'code',
        state: '',
        prompt: 'none',
        scope: scope
    });
    const response = await fetch('/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code
        })
    });
    const { access_token } = await response.json();
    // Authenticate with Discord client (using the access_token)
    const auth = await discordSdk.commands.authenticate({
        access_token
    });
    if (auth == null) {
        throw new Error('Authenticate command failed');
    }
    return {
        accessToken: access_token,
        auth
    };
}
export function useDiscordSdkSetup(options) {
    const { authenticate, scope } = options ?? {};
    const [accessToken, setAccessToken] = useState(null);
    const [session, setSession] = useState(null);
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('pending');
    const setupDiscordSdk = useCallback(async ()=>{
        try {
            setStatus('loading');
            await discordSdk.ready();
            if (authenticate) {
                setStatus('authenticating');
                const { accessToken, auth } = await authenticateSdk({
                    scope
                });
                setAccessToken(accessToken);
                setSession(auth);
            }
            setStatus('ready');
        } catch (e) {
            console.error(e);
            if (e instanceof Error) {
                setError(e.message);
            } else {
                setError('An unknown error occurred');
            }
            setStatus('error');
        }
    }, [
        authenticate
    ]);
    useStableEffect(()=>{
        setupDiscordSdk();
    });
    return {
        accessToken,
        authenticated: !!accessToken,
        discordSdk,
        error,
        session,
        status
    };
}
/**
 * React in development mode re-mounts the root component initially.
 * This hook ensures that the callback is only called once, preventing double authentication.
 */ function useStableEffect(callback) {
    const isRunning = useRef(false);
    useEffect(()=>{
        if (!isRunning.current) {
            isRunning.current = true;
            callback();
        }
    }, []);
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcZGlzY29yZC1hY3Rpdml0eVxcc3JjXFxob29rc1xcdXNlRGlzY29yZFNkay50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzY29yZFNESywgRGlzY29yZFNES01vY2sgfSBmcm9tICdAZGlzY29yZC9lbWJlZGRlZC1hcHAtc2RrJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHR5cGUgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcblxudHlwZSBVbndyYXBQcm9taXNlPFQ+ID0gVCBleHRlbmRzIFByb21pc2U8aW5mZXIgVT4gPyBVIDogVFxudHlwZSBEaXNjb3JkU2Vzc2lvbiA9IFVud3JhcFByb21pc2U8UmV0dXJuVHlwZTx0eXBlb2YgZGlzY29yZFNkay5jb21tYW5kcy5hdXRoZW50aWNhdGU+PlxudHlwZSBBdXRob3JpemVJbnB1dCA9IFBhcmFtZXRlcnM8dHlwZW9mIGRpc2NvcmRTZGsuY29tbWFuZHMuYXV0aG9yaXplPlswXVxudHlwZSBTZGtTZXR1cFJlc3VsdCA9IFJldHVyblR5cGU8dHlwZW9mIHVzZURpc2NvcmRTZGtTZXR1cD5cblxuY29uc3QgcXVlcnlQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpXG5jb25zdCBpc0VtYmVkZGVkID0gcXVlcnlQYXJhbXMuZ2V0KCdmcmFtZV9pZCcpICE9IG51bGxcblxubGV0IGRpc2NvcmRTZGs6IERpc2NvcmRTREsgfCBEaXNjb3JkU0RLTW9ja1xuXG5pZiAoaXNFbWJlZGRlZCkge1xuXHRkaXNjb3JkU2RrID0gbmV3IERpc2NvcmRTREsoaW1wb3J0Lm1ldGEuZW52LlZJVEVfRElTQ09SRF9DTElFTlRfSUQpXG59IGVsc2Uge1xuXHQvLyBXZSdyZSB1c2luZyBzZXNzaW9uIHN0b3JhZ2UgZm9yIHVzZXJfaWQsIGd1aWxkX2lkLCBhbmQgY2hhbm5lbF9pZFxuXHQvLyBUaGlzIHdheSB0aGUgdXNlci9ndWlsZC9jaGFubmVsIHdpbGwgYmUgbWFpbnRhaW5lZCB1bnRpbCB0aGUgdGFiIGlzIGNsb3NlZCwgZXZlbiBpZiB5b3UgcmVmcmVzaFxuXHQvLyBTZXNzaW9uIHN0b3JhZ2Ugd2lsbCBnZW5lcmF0ZSBuZXcgdW5pcXVlIG1vY2tzIGZvciBlYWNoIHRhYiB5b3Ugb3BlblxuXHQvLyBBbnkgb2YgdGhlc2UgdmFsdWVzIGNhbiBiZSBvdmVycmlkZGVuIHZpYSBxdWVyeSBwYXJhbWV0ZXJzXG5cdC8vIGkuZS4gaWYgeW91IHNldCBodHRwczovL215LXR1bm5lbC11cmwuY29tLz91c2VyX2lkPXRlc3RfdXNlcl9pZFxuXHQvLyB0aGlzIHdpbGwgb3ZlcnJpZGUgdGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBzZXNzaW9uIHVzZXJfaWQgdmFsdWVcblx0Y29uc3QgbW9ja1VzZXJJZCA9IGdldE92ZXJyaWRlT3JSYW5kb21TZXNzaW9uVmFsdWUoJ3VzZXJfaWQnKVxuXHRjb25zdCBtb2NrR3VpbGRJZCA9IGdldE92ZXJyaWRlT3JSYW5kb21TZXNzaW9uVmFsdWUoJ2d1aWxkX2lkJylcblx0Y29uc3QgbW9ja0NoYW5uZWxJZCA9IGdldE92ZXJyaWRlT3JSYW5kb21TZXNzaW9uVmFsdWUoJ2NoYW5uZWxfaWQnKVxuXG5cdGRpc2NvcmRTZGsgPSBuZXcgRGlzY29yZFNES01vY2soaW1wb3J0Lm1ldGEuZW52LlZJVEVfRElTQ09SRF9DTElFTlRfSUQsIG1vY2tHdWlsZElkLCBtb2NrQ2hhbm5lbElkKVxuXHRjb25zdCBkaXNjcmltaW5hdG9yID0gU3RyaW5nKG1vY2tVc2VySWQuY2hhckNvZGVBdCgwKSAlIDUpXG5cblx0ZGlzY29yZFNkay5fdXBkYXRlQ29tbWFuZE1vY2tzKHtcblx0XHRhdXRoZW50aWNhdGU6IGFzeW5jICgpID0+IHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGFjY2Vzc190b2tlbjogJ21vY2tfdG9rZW4nLFxuXHRcdFx0XHR1c2VyOiB7XG5cdFx0XHRcdFx0dXNlcm5hbWU6IG1vY2tVc2VySWQsXG5cdFx0XHRcdFx0ZGlzY3JpbWluYXRvcixcblx0XHRcdFx0XHRpZDogbW9ja1VzZXJJZCxcblx0XHRcdFx0XHRhdmF0YXI6IG51bGwsXG5cdFx0XHRcdFx0cHVibGljX2ZsYWdzOiAxXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNjb3BlczogW10sXG5cdFx0XHRcdGV4cGlyZXM6IG5ldyBEYXRlKDIxMTIsIDEsIDEpLnRvU3RyaW5nKCksXG5cdFx0XHRcdGFwcGxpY2F0aW9uOiB7XG5cdFx0XHRcdFx0ZGVzY3JpcHRpb246ICdtb2NrX2FwcF9kZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0aWNvbjogJ21vY2tfYXBwX2ljb24nLFxuXHRcdFx0XHRcdGlkOiAnbW9ja19hcHBfaWQnLFxuXHRcdFx0XHRcdG5hbWU6ICdtb2NrX2FwcF9uYW1lJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KVxufVxuXG5leHBvcnQgeyBkaXNjb3JkU2RrIH1cblxuZW51bSBTZXNzaW9uU3RvcmFnZVF1ZXJ5UGFyYW0ge1xuXHR1c2VyX2lkID0gJ3VzZXJfaWQnLFxuXHRndWlsZF9pZCA9ICdndWlsZF9pZCcsXG5cdGNoYW5uZWxfaWQgPSAnY2hhbm5lbF9pZCdcbn1cblxuZnVuY3Rpb24gZ2V0T3ZlcnJpZGVPclJhbmRvbVNlc3Npb25WYWx1ZShxdWVyeVBhcmFtOiBgJHtTZXNzaW9uU3RvcmFnZVF1ZXJ5UGFyYW19YCkge1xuXHRjb25zdCBvdmVycmlkZVZhbHVlID0gcXVlcnlQYXJhbXMuZ2V0KHF1ZXJ5UGFyYW0pXG5cdGlmIChvdmVycmlkZVZhbHVlICE9IG51bGwpIHtcblx0XHRyZXR1cm4gb3ZlcnJpZGVWYWx1ZVxuXHR9XG5cblx0Y29uc3QgY3VycmVudFN0b3JlZFZhbHVlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShxdWVyeVBhcmFtKVxuXHRpZiAoY3VycmVudFN0b3JlZFZhbHVlICE9IG51bGwpIHtcblx0XHRyZXR1cm4gY3VycmVudFN0b3JlZFZhbHVlXG5cdH1cblxuXHQvLyBTZXQgcXVlcnlQYXJhbSB0byBhIHJhbmRvbSA4LWNoYXJhY3RlciBzdHJpbmdcblx0Y29uc3QgcmFuZG9tU3RyaW5nID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc2xpY2UoMiwgMTApXG5cdHNlc3Npb25TdG9yYWdlLnNldEl0ZW0ocXVlcnlQYXJhbSwgcmFuZG9tU3RyaW5nKVxuXHRyZXR1cm4gcmFuZG9tU3RyaW5nXG59XG5cbmNvbnN0IERpc2NvcmRDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxTZGtTZXR1cFJlc3VsdD4oe1xuXHRhY2Nlc3NUb2tlbjogbnVsbCxcblx0YXV0aGVudGljYXRlZDogZmFsc2UsXG5cdGRpc2NvcmRTZGs6IGRpc2NvcmRTZGssXG5cdGVycm9yOiBudWxsLFxuXHRzZXNzaW9uOiB7XG5cdFx0dXNlcjoge1xuXHRcdFx0aWQ6ICcnLFxuXHRcdFx0dXNlcm5hbWU6ICcnLFxuXHRcdFx0ZGlzY3JpbWluYXRvcjogJycsXG5cdFx0XHRhdmF0YXI6IG51bGwsXG5cdFx0XHRwdWJsaWNfZmxhZ3M6IDBcblx0XHR9LFxuXHRcdGFjY2Vzc190b2tlbjogJycsXG5cdFx0c2NvcGVzOiBbXSxcblx0XHRleHBpcmVzOiAnJyxcblx0XHRhcHBsaWNhdGlvbjoge1xuXHRcdFx0cnBjX29yaWdpbnM6IHVuZGVmaW5lZCxcblx0XHRcdGlkOiAnJyxcblx0XHRcdG5hbWU6ICcnLFxuXHRcdFx0aWNvbjogbnVsbCxcblx0XHRcdGRlc2NyaXB0aW9uOiAnJ1xuXHRcdH1cblx0fSxcblx0c3RhdHVzOiAncGVuZGluZydcbn0pXG5cbmludGVyZmFjZSBEaXNjb3JkQ29udGV4dFByb3ZpZGVyUHJvcHMge1xuXHRhdXRoZW50aWNhdGU/OiBib29sZWFuXG5cdGNoaWxkcmVuOiBSZWFjdE5vZGVcblx0bG9hZGluZ1NjcmVlbj86IFJlYWN0Tm9kZVxuXHRzY29wZT86IEF1dGhvcml6ZUlucHV0WydzY29wZSddXG59XG5leHBvcnQgZnVuY3Rpb24gRGlzY29yZENvbnRleHRQcm92aWRlcihwcm9wczogRGlzY29yZENvbnRleHRQcm92aWRlclByb3BzKSB7XG5cdGNvbnN0IHsgYXV0aGVudGljYXRlLCBjaGlsZHJlbiwgbG9hZGluZ1NjcmVlbiA9IG51bGwsIHNjb3BlIH0gPSBwcm9wc1xuXHRjb25zdCBzZXR1cFJlc3VsdCA9IHVzZURpc2NvcmRTZGtTZXR1cCh7IGF1dGhlbnRpY2F0ZSwgc2NvcGUgfSlcblxuXHRpZiAobG9hZGluZ1NjcmVlbiAmJiAhWydlcnJvcicsICdyZWFkeSddLmluY2x1ZGVzKHNldHVwUmVzdWx0LnN0YXR1cykpIHtcblx0XHRyZXR1cm4gPD57bG9hZGluZ1NjcmVlbn08Lz5cblx0fVxuXG5cdHJldHVybiA8RGlzY29yZENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3NldHVwUmVzdWx0fT57Y2hpbGRyZW59PC9EaXNjb3JkQ29udGV4dC5Qcm92aWRlcj5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVzZURpc2NvcmRTZGsoKSB7XG5cdHJldHVybiB1c2VDb250ZXh0KERpc2NvcmRDb250ZXh0KVxufVxuXG5pbnRlcmZhY2UgQXV0aGVudGljYXRlU2RrT3B0aW9ucyB7XG5cdHNjb3BlPzogQXV0aG9yaXplSW5wdXRbJ3Njb3BlJ11cbn1cblxuLyoqXG4gKiBBdXRoZW50aWNhdGUgd2l0aCBEaXNjb3JkIGFuZCByZXR1cm4gdGhlIGFjY2VzcyB0b2tlbi5cbiAqIFNlZSBmdWxsIGxpc3Qgb2Ygc2NvcGVzOiBodHRwczovL2Rpc2NvcmQuY29tL2RldmVsb3BlcnMvZG9jcy90b3BpY3Mvb2F1dGgyI3NoYXJlZC1yZXNvdXJjZXMtb2F1dGgyLXNjb3Blc1xuICpcbiAqIEBwYXJhbSBzY29wZSBUaGUgc2NvcGUgb2YgdGhlIGF1dGhvcml6YXRpb24gKGRlZmF1bHQ6IFsnaWRlbnRpZnknLCAnZ3VpbGRzJ10pXG4gKiBAcmV0dXJucyBUaGUgcmVzdWx0IG9mIHRoZSBEaXNjb3JkIFNESyBgYXV0aGVudGljYXRlKClgIGNvbW1hbmRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGF1dGhlbnRpY2F0ZVNkayhvcHRpb25zPzogQXV0aGVudGljYXRlU2RrT3B0aW9ucykge1xuXHRjb25zdCB7IHNjb3BlID0gWydpZGVudGlmeScsICdndWlsZHMnXSB9ID0gb3B0aW9ucyA/PyB7fVxuXG5cdGF3YWl0IGRpc2NvcmRTZGsucmVhZHkoKVxuXHRjb25zdCB7IGNvZGUgfSA9IGF3YWl0IGRpc2NvcmRTZGsuY29tbWFuZHMuYXV0aG9yaXplKHtcblx0XHRjbGllbnRfaWQ6IGltcG9ydC5tZXRhLmVudi5WSVRFX0RJU0NPUkRfQ0xJRU5UX0lELFxuXHRcdHJlc3BvbnNlX3R5cGU6ICdjb2RlJyxcblx0XHRzdGF0ZTogJycsXG5cdFx0cHJvbXB0OiAnbm9uZScsXG5cdFx0c2NvcGU6IHNjb3BlXG5cdH0pXG5cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS90b2tlbicsIHtcblx0XHRtZXRob2Q6ICdQT1NUJyxcblx0XHRoZWFkZXJzOiB7XG5cdFx0XHQnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG5cdFx0fSxcblx0XHRib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNvZGUgfSlcblx0fSlcblx0Y29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdC8vIEF1dGhlbnRpY2F0ZSB3aXRoIERpc2NvcmQgY2xpZW50ICh1c2luZyB0aGUgYWNjZXNzX3Rva2VuKVxuXHRjb25zdCBhdXRoID0gYXdhaXQgZGlzY29yZFNkay5jb21tYW5kcy5hdXRoZW50aWNhdGUoeyBhY2Nlc3NfdG9rZW4gfSlcblxuXHRpZiAoYXV0aCA9PSBudWxsKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdBdXRoZW50aWNhdGUgY29tbWFuZCBmYWlsZWQnKVxuXHR9XG5cdHJldHVybiB7IGFjY2Vzc1Rva2VuOiBhY2Nlc3NfdG9rZW4sIGF1dGggfVxufVxuXG5pbnRlcmZhY2UgVXNlRGlzY29yZFNka1NldHVwT3B0aW9ucyB7XG5cdGF1dGhlbnRpY2F0ZT86IGJvb2xlYW5cblx0c2NvcGU/OiBBdXRob3JpemVJbnB1dFsnc2NvcGUnXVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlRGlzY29yZFNka1NldHVwKG9wdGlvbnM/OiBVc2VEaXNjb3JkU2RrU2V0dXBPcHRpb25zKSB7XG5cdGNvbnN0IHsgYXV0aGVudGljYXRlLCBzY29wZSB9ID0gb3B0aW9ucyA/PyB7fVxuXHRjb25zdCBbYWNjZXNzVG9rZW4sIHNldEFjY2Vzc1Rva2VuXSA9IHVzZVN0YXRlPHN0cmluZyB8IG51bGw+KG51bGwpXG5cdGNvbnN0IFtzZXNzaW9uLCBzZXRTZXNzaW9uXSA9IHVzZVN0YXRlPERpc2NvcmRTZXNzaW9uIHwgbnVsbD4obnVsbClcblx0Y29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKVxuXHRjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGU8J2F1dGhlbnRpY2F0aW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCAncGVuZGluZycgfCAncmVhZHknPigncGVuZGluZycpXG5cblx0Y29uc3Qgc2V0dXBEaXNjb3JkU2RrID0gdXNlQ2FsbGJhY2soYXN5bmMgKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHRzZXRTdGF0dXMoJ2xvYWRpbmcnKVxuXHRcdFx0YXdhaXQgZGlzY29yZFNkay5yZWFkeSgpXG5cblx0XHRcdGlmIChhdXRoZW50aWNhdGUpIHtcblx0XHRcdFx0c2V0U3RhdHVzKCdhdXRoZW50aWNhdGluZycpXG5cdFx0XHRcdGNvbnN0IHsgYWNjZXNzVG9rZW4sIGF1dGggfSA9IGF3YWl0IGF1dGhlbnRpY2F0ZVNkayh7IHNjb3BlIH0pXG5cdFx0XHRcdHNldEFjY2Vzc1Rva2VuKGFjY2Vzc1Rva2VuKVxuXHRcdFx0XHRzZXRTZXNzaW9uKGF1dGgpXG5cdFx0XHR9XG5cblx0XHRcdHNldFN0YXR1cygncmVhZHknKVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZSlcblx0XHRcdGlmIChlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdFx0c2V0RXJyb3IoZS5tZXNzYWdlKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2V0RXJyb3IoJ0FuIHVua25vd24gZXJyb3Igb2NjdXJyZWQnKVxuXHRcdFx0fVxuXHRcdFx0c2V0U3RhdHVzKCdlcnJvcicpXG5cdFx0fVxuXHR9LCBbYXV0aGVudGljYXRlXSlcblxuXHR1c2VTdGFibGVFZmZlY3QoKCkgPT4ge1xuXHRcdHNldHVwRGlzY29yZFNkaygpXG5cdH0pXG5cblx0cmV0dXJuIHsgYWNjZXNzVG9rZW4sIGF1dGhlbnRpY2F0ZWQ6ICEhYWNjZXNzVG9rZW4sIGRpc2NvcmRTZGssIGVycm9yLCBzZXNzaW9uLCBzdGF0dXMgfVxufVxuXG4vKipcbiAqIFJlYWN0IGluIGRldmVsb3BtZW50IG1vZGUgcmUtbW91bnRzIHRoZSByb290IGNvbXBvbmVudCBpbml0aWFsbHkuXG4gKiBUaGlzIGhvb2sgZW5zdXJlcyB0aGF0IHRoZSBjYWxsYmFjayBpcyBvbmx5IGNhbGxlZCBvbmNlLCBwcmV2ZW50aW5nIGRvdWJsZSBhdXRoZW50aWNhdGlvbi5cbiAqL1xuZnVuY3Rpb24gdXNlU3RhYmxlRWZmZWN0KGNhbGxiYWNrOiAoKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPikge1xuXHRjb25zdCBpc1J1bm5pbmcgPSB1c2VSZWYoZmFsc2UpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoIWlzUnVubmluZy5jdXJyZW50KSB7XG5cdFx0XHRpc1J1bm5pbmcuY3VycmVudCA9IHRydWVcblx0XHRcdGNhbGxiYWNrKClcblx0XHR9XG5cdH0sIFtdKVxufVxuIl0sIm5hbWVzIjpbIkRpc2NvcmRTREsiLCJEaXNjb3JkU0RLTW9jayIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlQ2FsbGJhY2siLCJ1c2VSZWYiLCJjcmVhdGVDb250ZXh0IiwidXNlQ29udGV4dCIsInF1ZXJ5UGFyYW1zIiwiVVJMU2VhcmNoUGFyYW1zIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJpc0VtYmVkZGVkIiwiZ2V0IiwiZGlzY29yZFNkayIsImVudiIsIlZJVEVfRElTQ09SRF9DTElFTlRfSUQiLCJtb2NrVXNlcklkIiwiZ2V0T3ZlcnJpZGVPclJhbmRvbVNlc3Npb25WYWx1ZSIsIm1vY2tHdWlsZElkIiwibW9ja0NoYW5uZWxJZCIsImRpc2NyaW1pbmF0b3IiLCJTdHJpbmciLCJjaGFyQ29kZUF0IiwiX3VwZGF0ZUNvbW1hbmRNb2NrcyIsImF1dGhlbnRpY2F0ZSIsImFjY2Vzc190b2tlbiIsInVzZXIiLCJ1c2VybmFtZSIsImlkIiwiYXZhdGFyIiwicHVibGljX2ZsYWdzIiwic2NvcGVzIiwiZXhwaXJlcyIsIkRhdGUiLCJ0b1N0cmluZyIsImFwcGxpY2F0aW9uIiwiZGVzY3JpcHRpb24iLCJpY29uIiwibmFtZSIsIlNlc3Npb25TdG9yYWdlUXVlcnlQYXJhbSIsInF1ZXJ5UGFyYW0iLCJvdmVycmlkZVZhbHVlIiwiY3VycmVudFN0b3JlZFZhbHVlIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwicmFuZG9tU3RyaW5nIiwiTWF0aCIsInJhbmRvbSIsInNsaWNlIiwic2V0SXRlbSIsIkRpc2NvcmRDb250ZXh0IiwiYWNjZXNzVG9rZW4iLCJhdXRoZW50aWNhdGVkIiwiZXJyb3IiLCJzZXNzaW9uIiwicnBjX29yaWdpbnMiLCJ1bmRlZmluZWQiLCJzdGF0dXMiLCJEaXNjb3JkQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJjaGlsZHJlbiIsImxvYWRpbmdTY3JlZW4iLCJzY29wZSIsInNldHVwUmVzdWx0IiwidXNlRGlzY29yZFNka1NldHVwIiwiaW5jbHVkZXMiLCJQcm92aWRlciIsInZhbHVlIiwidXNlRGlzY29yZFNkayIsImF1dGhlbnRpY2F0ZVNkayIsIm9wdGlvbnMiLCJyZWFkeSIsImNvZGUiLCJjb21tYW5kcyIsImF1dGhvcml6ZSIsImNsaWVudF9pZCIsInJlc3BvbnNlX3R5cGUiLCJzdGF0ZSIsInByb21wdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJqc29uIiwiYXV0aCIsIkVycm9yIiwic2V0QWNjZXNzVG9rZW4iLCJzZXRTZXNzaW9uIiwic2V0RXJyb3IiLCJzZXRTdGF0dXMiLCJzZXR1cERpc2NvcmRTZGsiLCJlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJ1c2VTdGFibGVFZmZlY3QiLCJjYWxsYmFjayIsImlzUnVubmluZyIsImN1cnJlbnQiXSwicmFuZ2VNYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLFVBQVUsRUFBRUMsY0FBYyxRQUFRLDRCQUEyQjtBQUN0RSxTQUFTQyxRQUFRLEVBQUVDLFNBQVMsRUFBRUMsV0FBVyxFQUFFQyxNQUFNLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxRQUFRLFFBQU87QUFRM0YsTUFBTUMsY0FBYyxJQUFJQyxnQkFBZ0JDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTTtBQUM5RCxNQUFNQyxhQUFhTCxZQUFZTSxHQUFHLENBQUMsZUFBZTtBQUVsRCxJQUFJQztBQUVKLElBQUlGLFlBQVk7SUFDZkUsYUFBYSxJQUFJZixXQUFXLFlBQVlnQixHQUFHLENBQUNDLHNCQUFzQjtBQUNuRSxPQUFPO0lBQ04sb0VBQW9FO0lBQ3BFLGtHQUFrRztJQUNsRyx1RUFBdUU7SUFDdkUsNkRBQTZEO0lBQzdE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