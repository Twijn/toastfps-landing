import { redirect } from '@sveltejs/kit';

const links: string[] = [
	'https://streamelements.com/ToastFPS/tip',
	'https://onlyfans.com/toastfps'
];

function randomLink(): string {
	return links[(links.length * Math.random()) << 0];
}

export async function load() {
	return redirect(307, randomLink());
}
