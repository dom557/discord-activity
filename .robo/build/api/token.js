export default (async (req)=>{
    const { code } = await req.json();
    // Exchange the code for an access_token
    const response = await fetch(`https://discord.com/api/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            client_id: process.env.VITE_DISCORD_CLIENT_ID,
            client_secret: process.env.DISCORD_CLIENT_SECRET,
            grant_type: 'authorization_code',
            code: code
        })
    });
    const { access_token } = await response.json();
    return {
        access_token
    };
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGNcXE9uZURyaXZlXFxEb2N1bWVudHNcXEdpdEh1YlxcZGlzY29yZC1hY3Rpdml0eVxcc3JjXFxhcGlcXHRva2VuLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgUm9ib1JlcXVlc3QgfSBmcm9tICdAcm9ib2pzL3NlcnZlcidcblxuaW50ZXJmYWNlIFJlcXVlc3RCb2R5IHtcblx0Y29kZTogc3RyaW5nXG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXE6IFJvYm9SZXF1ZXN0KSA9PiB7XG5cdGNvbnN0IHsgY29kZSB9ID0gKGF3YWl0IHJlcS5qc29uKCkpIGFzIFJlcXVlc3RCb2R5XG5cblx0Ly8gRXhjaGFuZ2UgdGhlIGNvZGUgZm9yIGFuIGFjY2Vzc190b2tlblxuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2Rpc2NvcmQuY29tL2FwaS9vYXV0aDIvdG9rZW5gLCB7XG5cdFx0bWV0aG9kOiAnUE9TVCcsXG5cdFx0aGVhZGVyczoge1xuXHRcdFx0J0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG5cdFx0fSxcblx0XHRib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcblx0XHRcdGNsaWVudF9pZDogcHJvY2Vzcy5lbnYuVklURV9ESVNDT1JEX0NMSUVOVF9JRCEsXG5cdFx0XHRjbGllbnRfc2VjcmV0OiBwcm9jZXNzLmVudi5ESVNDT1JEX0NMSUVOVF9TRUNSRVQhLFxuXHRcdFx0Z3JhbnRfdHlwZTogJ2F1dGhvcml6YXRpb25fY29kZScsXG5cdFx0XHRjb2RlOiBjb2RlXG5cdFx0fSlcblx0fSlcblx0Y29uc3QgeyBhY2Nlc3NfdG9rZW4gfSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuXG5cdHJldHVybiB7IGFjY2Vzc190b2tlbiB9XG59XG4iXSwibmFtZXMiOlsicmVxIiwiY29kZSIsImpzb24iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJVUkxTZWFyY2hQYXJhbXMiLCJjbGllbnRfaWQiLCJwcm9jZXNzIiwiZW52IiwiVklURV9ESVNDT1JEX0NMSUVOVF9JRCIsImNsaWVudF9zZWNyZXQiLCJESVNDT1JEX0NMSUVOVF9TRUNSRVQiLCJncmFudF90eXBlIiwiYWNjZXNzX3Rva2VuIl0sInJhbmdlTWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7IiwibWFwcGluZ3MiOiJBQU1BLGVBQWUsQ0FBQSxPQUFPQTtJQUNyQixNQUFNLEVBQUVDLElBQUksRUFBRSxHQUFJLE1BQU1ELElBQUlFLElBQUk7SUFFaEMsd0NBQXdDO0lBQ3hDLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEVBQUU7UUFDcEVDLFFBQVE7UUFDUkMsU0FBUztZQUNSLGdCQUFnQjtRQUNqQjtRQUNBQyxNQUFNLElBQUlDLGdCQUFnQjtZQUN6QkMsV0FBV0MsUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0I7WUFDN0NDLGVBQWVILFFBQVFDLEdBQUcsQ0FBQ0cscUJBQXFCO1lBQ2hEQyxZQUFZO1lBQ1pkLE1BQU1BO1FBQ1A7SUFDRDtJQUNBLE1BQU0sRUFBRWUsWUFBWSxFQUFFLEdBQUcsTUFBTWIsU0FBU0QsSUFBSTtJQUU1QyxPQUFPO1FBQUVjO0lBQWE7QUFDdkIsQ0FBQSxFQUFDIn0=