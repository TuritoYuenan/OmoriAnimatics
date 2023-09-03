<script lang="ts">
	import Header from './lib/Header.svelte';
	import Footer from './lib/Footer.svelte';
	import Card from './lib/Card.svelte';

	import { animatics } from './animatics';
</script>

<Header />
<main>
	{#each animatics as animatic}
		<Card {animatic} />
	{/each}
</main>
<Footer />

<style>
	main {
		min-height: 80vh;
		padding: 1rem;
		gap: 1rem;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
	}

	@media (max-width: 500px) {
		main {
			padding: 0.6rem;
			grid-template-columns: auto;
		}
	}
</style>
