<script>
	import Header from "./lib/Header.svelte";
	import Footer from "./lib/Footer.svelte";

	import Card from "./lib/Card.svelte";
	import list from "./db/animatics.json";

	// Print the imported list
	console.log(list);
	console.log("Type of imported JSON file: " + typeof list);
</script>

<Header />
<main>
	{#each list as { yt_id, date, channel, title }}
		<Card {yt_id} {date} {channel} {title} />
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
