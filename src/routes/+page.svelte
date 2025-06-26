<script lang="ts">
	import LinkNav from '$lib/components/LinkNav.svelte';
</script>

<svelte:head>
	<title>TittyWorld.org</title>

	<meta name="description" content="Watch ToastFPS live on Twitch, Kick, and YouTube." />

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://tittyworld.org/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="ToastFPS" />
	<meta property="og:description" content="Watch ToastFPS live on Twitch, Kick, and YouTube." />
	<meta property="og:image" content="https://tittyworld.org/images/background-image.webp" />

	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="tittyworld.org" />
	<meta property="twitter:url" content="https://tittyworld.org/" />
	<meta name="twitter:title" content="ToastFPS" />
	<meta name="twitter:description" content="Watch ToastFPS live on Twitch, Kick, and YouTube." />
	<meta name="twitter:image" content="https://tittyworld.org/images/background-image.webp" />
</svelte:head>

<section>
	<h2>Livestreaming Platforms</h2>
	<LinkNav type="stream" />
	<h2>Discord</h2>
	<LinkNav type="discord" />
	<h2>Socials</h2>
	<LinkNav type="social" />
</section>

<style>
	h2 {
		font-size: 1rem;
		text-transform: uppercase;
		margin: 0.5rem 0;
	}

	@media only screen and (max-width: 1100px) {
		section {
			background-color: rgba(25, 25, 25, 0.75);
			backdrop-filter: blur(1em);
			width: calc(100% - 4em);
			max-width: 27.5em;
			padding: 1em;
			margin: 1em auto;
			border-radius: 0.25em;
			box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
		}
	}
</style>
