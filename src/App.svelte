<script lang="ts">
	// Load UI components

	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Card from './components/Card.svelte';

	// Load data fetching function

	import promise from './animatics';
</script>

<!-- Header showing title, subtitle and setting -->
<Header
	title="OMORI Animatics"
	desc="Collection of OMORI animatic videos on Youtube" />
<main>
	{#await promise}
		<h1>Loading</h1>
	{:then videos}
		<!-- Lay out each video in a grid -->
		{#each videos as video}
			<Card data={video} site={selected} />
		{/each}
	{:catch error}
		<h1>{error.message}</h1>
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

	@media (max-width: 500px) {
		main {
			padding: 0.6rem;
			grid-template-columns: auto;
		}
	}
</style>
