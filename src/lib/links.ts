export type LinkType = 'stream' | 'discord' | 'social';

export type Link = {
	id: string;
	type: LinkType;
	name: string;
	url: string;
	icon: string;
	color?: string;
	description: string;
};

export const links: Link[] = [
	// Streaming/Video Platforms
	{
		id: 'twitch',
		type: 'stream',
		name: 'Twitch',
		url: 'https://www.twitch.tv/toastfps',
		icon: 'fa-brands fa-twitch',
		color: '#a96fff',
		description: 'Watch the stream live where it all started!'
	},
	{
		id: 'kick',
		type: 'stream',
		name: 'Kick',
		url: 'https://kick.com/toastfps',
		icon: 'fa-solid fa-square-k',
		color: '#52fc18',
		description: 'Now multi-streaming on Kick and YouTube!'
	},
	{
		id: 'youtube',
		type: 'stream',
		name: 'YouTube',
		url: 'https://www.youtube.com/c/toastfps',
		icon: 'fa-brands fa-youtube',
		color: '#ff0033',
		description: 'Now multi-streaming on Kick and YouTube!'
	},
	// Discord
	{
		id: 'discord',
		type: 'discord',
		name: 'Discord',
		url: 'https://discord.com/invite/toastfps',
		icon: 'fa-brands fa-discord',
		color: '#5765f2',
		description: 'Chat with the community on Discord!'
	},
	// Social platforms
	{
		id: 'x-twitter',
		type: 'social',
		name: 'X / Twitter',
		url: 'https://x.com/TheToastFPS',
		icon: 'fa-brands fa-x-twitter',
		color: '#000000',
		description: 'Follow ToastFPS on Twitter!'
	},
	{
		id: 'instagram',
		type: 'social',
		name: 'Instagram',
		url: 'https://www.instagram.com/toastfps/',
		icon: 'fa-brands fa-instagram',
		color: '#ff3040',
		description: 'Follow ToastFPS on Instagram!'
	},
	{
		id: 'tiktok',
		type: 'social',
		name: 'TikTok',
		url: 'https://www.tiktok.com/@toastfps',
		icon: 'fa-brands fa-tiktok',
		color: '#25F4EE',
		description: 'Follow ToastFPS on TikTok!'
	},
	{
		id: 'onlyfans',
		type: 'social',
		name: 'OnlyFans',
		url: '/l/onlyfans',
		icon: 'fa-solid fa-pepper-hot',
		color: '#00AFF0',
		description: '🌶️ 🌶️ 🌶️'
	}
];
