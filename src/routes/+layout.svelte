<script lang="ts">
	import("$lib/css/master.css");

	const { children } = $props();
</script>

<div id="app">
	<main>
		<img src="/images/profile-300x300.webp" alt="Profile of ToastFPS wearing a black Noveske Rifleworks LLC T-Shirt" />
		<h1>ToastFPS</h1>
		{@render children?.()}
	</main>
</div>

<style>
	#app {
			display: flex;
			flex-direction: column;
			min-height: 100vh;
			justify-content: center;
			align-items: flex-end;
	}

	main {
			width: 100%;
			margin: 1em 0;
	}

	img {
			display: block;
			width: 120px;
			height: 120px;
			border-radius: 50%;
			border: .1em solid var(--text-color);
			box-shadow: .1em .1em .4em rgba(0,0,0,0.25);
			margin: 0 auto;
	}

	h1 {
			color: black;
			font-size: 1.6em;
			text-align: center;
			margin-top: 0;
	}

  @media only screen and (min-width: 1100px) {
      h1 {
          color: white;
      }

      main {
          background-color: rgba(25,25,25,0.75);
          backdrop-filter: blur(1em);
          width: calc(100% - 4em);
          max-width: 27.5em;
          padding: 1em;
          margin: 1em;
          border-radius: .25em;
          box-shadow: 0 0 1em rgba(0,0,0,0.25);
      }
  }
</style>
