<script lang="ts">
	import LinkNav from '$lib/components/LinkNav.svelte';
</script>

<svelte:head>
	<title>TittyWorld.org</title>

	<meta property="og:title" content="ToastFPS" />
	<meta property="og:description" content="Watch ToastFPS live on Twitch, Kick, and YouTube." />
	<meta property="og:image" content="https://tittyworld.org/images/background-image.webp" />
	<meta property="og:url" content="https://tittyworld.org" />
	<meta property="og:type" content="website" />
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
			margin: .5rem 0;
	}

	@media only screen and (max-width: 1100px) {
			section {
          background-color: rgba(25,25,25,0.75);
          backdrop-filter: blur(1em);
          width: calc(100% - 4em);
          max-width: 27.5em;
          padding: 1em;
          margin: 1em auto;
          border-radius: .25em;
          box-shadow: 0 0 1em rgba(0,0,0,0.25);
			}
	}
</style>
