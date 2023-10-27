<script lang="ts">
	export let state: 'loading' | 'error';
	export let errorMSG: string = 'no error';
</script>

<div>
	{#if state == 'loading'}
		<h1>Loading...</h1>
		<p>Getting data from Piped API</p>
	{:else if state == 'error'}
		<h1>Crashed!!!</h1>
		<p>Error: {errorMSG}</p>
	{/if}
</div>

<style>
	div {
		padding: 1rem;
		background: black;
		display: grid;
		place-items: center;
	}
</style>
