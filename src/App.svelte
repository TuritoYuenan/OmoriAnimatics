<script lang="ts">
	// Load UI components

	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Handle from './components/Handle.svelte';
	import Card from './components/Card.svelte';

	// Load data fetching function

	import promise from './animatics';

	// Choose which site to arrive when clicking on a video

	let selected: string;

	const sites = [
		{ title: 'Youtube', url: 'https://youtube.com' },
		{ title: 'Piped', url: 'https://piped.video' }
	];
</script>

<!-- Header showing title, subtitle and setting -->
<Header
	title="OMORI Animatics"
	desc="Collection of OMORI animatic videos on Youtube">
	<br />
	<label for="sites">Preferred website when clicking on a video: </label>
	<select name="sites" id="sites" bind:value={selected}>
		{#each sites as site}
			<option value={site.url}>{site.title}</option>
		{/each}
	</select>
</Header>

<main>
	{#await promise}
		<!-- Show a loading message while loading (which doesn't happens long) -->
		<Handle state="loading" />
	{:then videos}
		<!-- Lay out each video in a grid -->
		{#each videos as video}
			<Card data={video} site={selected} />
		{/each}
	{:catch error}
		<!-- Show error message upon error (which never happens (hopefully)) -->
		<Handle state="error" errorMSG={error.message} />
	{/await}
</main>

<!-- Footer showing credit -->
<Footer />

<style>
	main {
		padding-inline: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
		gap: 1rem;
	}

	#sites {
		background-color: inherit;
		color: inherit;
		border: solid 2px currentColor;
		border-radius: 0;
		font-family: inherit;
		font-size: 1rem;

		&:focus-visible {
			outline: none;
		}
	}
</style>
