<script lang="ts">
	export let title: string;
	export let desc: string;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={desc} />
</svelte:head>

<header>
	<h1>{title}</h1>
	<p>{desc}</p>
</header>

<style>
	header {
		padding: 1rem;
		background: black;
		color: white;
		text-align: center;
		border-bottom: solid 0.3rem white;
	}

	header h1 {
		margin: 0;
	}
</style>
