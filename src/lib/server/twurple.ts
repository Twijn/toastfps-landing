import { RefreshingAuthProvider } from '@twurple/auth';
import { PRIVATE_TWITCH_CLIENT_SECRET } from '$env/static/private';
import { PUBLIC_TWITCH_CLIENT_ID } from '$env/static/public';
import { ApiClient } from '@twurple/api';

const authProvider = new RefreshingAuthProvider({
	clientId: PUBLIC_TWITCH_CLIENT_ID,
	clientSecret: PRIVATE_TWITCH_CLIENT_SECRET
});

export default new ApiClient({
	authProvider
});
