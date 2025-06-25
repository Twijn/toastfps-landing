<script lang="ts">
	import type { Link } from '$lib/links';

	const { link }: {
		link: Link
	} = $props();
</script>

<a href={link.url} target="_blank">
	<i class={link.icon} style={link?.color ? `background-color: ${link.color};` : undefined}></i>
	<div class="link-info">
		<h3>{link.name}</h3>
		<p>{link.description}</p>
	</div>
</a>

<style>
	a {
			display: flex;
			position: relative;
			align-items: center;
			gap: .6em;
			background-color: var(--background-color-2);
			color: white;
			text-decoration: none;
			border-radius: .25em;
			padding: .5em;
			overflow: hidden;
	}

	a::before {
			content: '';
			position: absolute;
			top: 0;
			right: 100%;
			width: 125%;
			height: 100%;
			transform: skew(-15deg);
			opacity: 0;
			background-color: var(--background-color-1);
			transition: .30s;
	}

	a:hover::before, a:focus-visible::before {
			right: -10%;
			opacity: 1;
	}

	i {
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 1.75rem;
			width: 3rem;
			height: 3rem;
			text-shadow: .1em .1em .6em rgba(0,0,0,0.25);
			border-radius: .25em;
			z-index: 10;
	}

	.link-info {
      z-index: 10;
	}

	h3 {
			margin: 0 0 .1em 0;
			text-transform: uppercase;
	}

	p {
			font-size: .9em;
			margin: 0;
	}
</style>
