import { useEffect, useState } from "react";
import { useDiscordSdk } from "../hooks/useDiscordSdk.js";
export const Activity = ()=>{
    const { authenticated, discordSdk, status } = useDiscordSdk();
    const [channelName, setChannelName] = useState();
    useEffect(()=>{
        // Requesting the channel in GDMs (when the guild ID is null) requires
        // the dm_channels.read scope which requires Discord approval.
        if (!authenticated || !discordSdk.channelId || !discordSdk.guildId) {
            return;
        }
        // Collect channel info over RPC
        // Enable authentication to see it! (App.tsx)
        discordSdk.commands.getChannel({
            channel_id: discordSdk.channelId
        }).then((channel)=>{
            if (channel.name) {
                setChannelName(channel.name);
            }
        });
    }, [
        authenticated,
        discordSdk
    ]);
    return /*#__PURE__*/ React.createElement("div", null, /*#__PURE__*/ React.createElement("img", {
        src: "/rocket.png",
        className: "logo",
        alt: "Discord"
    }), /*#__PURE__*/ React.createElement("h1", null, "Hello, World"), channelName ? /*#__PURE__*/ React.createElement("h3", null, "#", channelName) : /*#__PURE__*/ React.createElement("h3", null, status), /*#__PURE__*/ React.createElement("small", null, "Powered by ", /*#__PURE__*/ React.createElement("strong", null, "Robo.js")));
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcZGlzY29yZC1hY3Rpdml0eVxcc3JjXFxhcHBcXEFjdGl2aXR5LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VEaXNjb3JkU2RrIH0gZnJvbSAnLi4vaG9va3MvdXNlRGlzY29yZFNkaydcblxuZXhwb3J0IGNvbnN0IEFjdGl2aXR5ID0gKCkgPT4ge1xuXHRjb25zdCB7IGF1dGhlbnRpY2F0ZWQsIGRpc2NvcmRTZGssIHN0YXR1cyB9ID0gdXNlRGlzY29yZFNkaygpXG5cdGNvbnN0IFtjaGFubmVsTmFtZSwgc2V0Q2hhbm5lbE5hbWVdID0gdXNlU3RhdGU8c3RyaW5nPigpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHQvLyBSZXF1ZXN0aW5nIHRoZSBjaGFubmVsIGluIEdETXMgKHdoZW4gdGhlIGd1aWxkIElEIGlzIG51bGwpIHJlcXVpcmVzXG5cdFx0Ly8gdGhlIGRtX2NoYW5uZWxzLnJlYWQgc2NvcGUgd2hpY2ggcmVxdWlyZXMgRGlzY29yZCBhcHByb3ZhbC5cblx0XHRpZiAoIWF1dGhlbnRpY2F0ZWQgfHwgIWRpc2NvcmRTZGsuY2hhbm5lbElkIHx8ICFkaXNjb3JkU2RrLmd1aWxkSWQpIHtcblx0XHRcdHJldHVyblxuXHRcdH1cblxuXHRcdC8vIENvbGxlY3QgY2hhbm5lbCBpbmZvIG92ZXIgUlBDXG5cdFx0Ly8gRW5hYmxlIGF1dGhlbnRpY2F0aW9uIHRvIHNlZSBpdCEgKEFwcC50c3gpXG5cdFx0ZGlzY29yZFNkay5jb21tYW5kcy5nZXRDaGFubmVsKHsgY2hhbm5lbF9pZDogZGlzY29yZFNkay5jaGFubmVsSWQgfSkudGhlbigoY2hhbm5lbCkgPT4ge1xuXHRcdFx0aWYgKGNoYW5uZWwubmFtZSkge1xuXHRcdFx0XHRzZXRDaGFubmVsTmFtZShjaGFubmVsLm5hbWUpXG5cdFx0XHR9XG5cdFx0fSlcblx0fSwgW2F1dGhlbnRpY2F0ZWQsIGRpc2NvcmRTZGtdKVxuXG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxpbWcgc3JjPVwiL3JvY2tldC5wbmdcIiBjbGFzc05hbWU9XCJsb2dvXCIgYWx0PVwiRGlzY29yZFwiIC8+XG5cdFx0XHQ8aDE+SGVsbG8sIFdvcmxkPC9oMT5cblx0XHRcdHtjaGFubmVsTmFtZSA/IDxoMz4je2NoYW5uZWxOYW1lfTwvaDM+IDogPGgzPntzdGF0dXN9PC9oMz59XG5cdFx0XHQ8c21hbGw+XG5cdFx0XHRcdFBvd2VyZWQgYnkgPHN0cm9uZz5Sb2JvLmpzPC9zdHJvbmc+XG5cdFx0XHQ8L3NtYWxsPlxuXHRcdDwvZGl2PlxuXHQpXG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEaXNjb3JkU2RrIiwiQWN0aXZpdHkiLCJhdXRoZW50aWNhdGVkIiwiZGlzY29yZFNkayIsInN0YXR1cyIsImNoYW5uZWxOYW1lIiwic2V0Q2hhbm5lbE5hbWUiLCJjaGFubmVsSWQiLCJndWlsZElkIiwiY29tbWFuZHMiLCJnZXRDaGFubmVsIiwiY2hhbm5lbF9pZCIsInRoZW4iLCJjaGFubmVsIiwibmFtZSIsImRpdiIsImltZyIsInNyYyIsImNsYXNzTmFtZSIsImFsdCIsImgxIiwiaDMiLCJzbWFsbCIsInN0cm9uZyJdLCJyYW5nZU1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsiLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsU0FBUyxFQUFFQyxRQUFRLFFBQVEsUUFBTztBQUMzQyxTQUFTQyxhQUFhLFFBQVEsNEJBQXdCO0FBRXRELE9BQU8sTUFBTUMsV0FBVztJQUN2QixNQUFNLEVBQUVDLGFBQWEsRUFBRUMsVUFBVSxFQUFFQyxNQUFNLEVBQUUsR0FBR0o7SUFDOUMsTUFBTSxDQUFDSyxhQUFhQyxlQUFlLEdBQUdQO0lBRXRDRCxVQUFVO1FBQ1Qsc0VBQXNFO1FBQ3RFLDhEQUE4RDtRQUM5RCxJQUFJLENBQUNJLGlCQUFpQixDQUFDQyxXQUFXSSxTQUFTLElBQUksQ0FBQ0osV0FBV0ssT0FBTyxFQUFFO1lBQ25FO1FBQ0Q7UUFFQSxnQ0FBZ0M7UUFDaEMsNkNBQTZDO1FBQzdDTCxXQUFXTSxRQUFRLENBQUNDLFVBQVUsQ0FBQztZQUFFQyxZQUFZUixXQUFXSSxTQUFTO1FBQUMsR0FBR0ssSUFBSSxDQUFDLENBQUNDO1lBQzFFLElBQUlBLFFBQVFDLElBQUksRUFBRTtnQkFDakJSLGVBQWVPLFFBQVFDLElBQUk7WUFDNUI7UUFDRDtJQUNELEdBQUc7UUFBQ1o7UUFBZUM7S0FBVztJQUU5QixxQkFDQyxvQkFBQ1ksMkJBQ0Esb0JBQUNDO1FBQUlDLEtBQUk7UUFBY0MsV0FBVTtRQUFPQyxLQUFJO3NCQUM1QyxvQkFBQ0MsWUFBRyxpQkFDSGYsNEJBQWMsb0JBQUNnQixZQUFHLEtBQUVoQiw2QkFBb0Isb0JBQUNnQixZQUFJakIsdUJBQzlDLG9CQUFDa0IsZUFBTSw2QkFDSyxvQkFBQ0MsZ0JBQU87QUFJdkIsRUFBQyJ9