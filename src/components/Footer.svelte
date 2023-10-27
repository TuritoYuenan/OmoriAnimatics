<script>
	const links = {
		omocat: 'https://omocat.com/bio',
		turito: 'https://turitoyuenan.github.io/portfolio'
	};
</script>

<footer>
	<p>
		&COPY; OMORI by <a href={links.omocat}>OMOCAT</a>.
	</p>
	<p>
		Svelte project by
		<a target="_blank" href={links.turito}> Turito Yuenan </a>
	</p>
</footer>

<style>
	footer {
		width: 100%;
		padding: 0.3rem;
		text-align: center;
		background: black;
		border-top: var(--border);
	}

	footer a {
		color: yellow;
	}
</style>
