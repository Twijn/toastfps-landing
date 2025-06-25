import { error, redirect } from '@sveltejs/kit';
import { links } from '$lib/links';

export function load({ params }) {
	const destination = links.find(
		x => x.id.toLowerCase() === params.link.toLowerCase()
	)?.url;

	if (!destination) {
		throw error(404, "Short link not found");
	}

	return redirect(307, destination);
}
