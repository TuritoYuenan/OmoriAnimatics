<script lang="ts">
	// Load components
	import Header from './components/Header.svelte';
	import Footer from './components/Footer.svelte';
	import Card from './components/Card.svelte';

	// Load data
	import promise from './animatics';
</script>

<Header
	title="OMORI Animatics"
	desc="Collection of OMORI animatic videos on Youtube" />
<main>
	{#await promise}
		<h1>Loading</h1>
	{:then videos}
		{#each videos as video}
			<Card data={video} />
		{/each}
	{:catch error}
		<h1>{error.message}</h1>
	{/await}
</main>
<Footer />

<style>
	main {
		padding: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
		gap: 1rem;
	}

	@media (max-width: 500px) {
		main {
			padding: 0.6rem;
			grid-template-columns: auto;
		}
	}
</style>
