<script lang="ts">
	import { links, type LinkType } from '$lib/links';
	import Link from '$lib/components/Link.svelte';

	const {
		type = null
	}: {
		type?: LinkType | null;
	} = $props();
</script>

<nav>
	{#each links.filter((l) => !type || l.type === type) as link (link.id)}
		<Link {link} />
	{/each}
</nav>

<style>
	nav {
		display: flex;
		flex-direction: column;
		gap: 0.5em;
	}
</style>
