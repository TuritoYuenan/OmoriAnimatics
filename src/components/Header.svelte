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
	<slot />
</header>

<style>
	header {
		margin: 1rem;
		padding-inline: 1rem;
		padding-block: 2rem;
		background: black;
		text-align: center;
		border: var(--border);
	}
</style>
