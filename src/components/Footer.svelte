<script>
	const links = {
		omocat: 'https://omocat.com/bio',
		turito: 'https://turitoyuenan.github.io/portfolio'
	};
</script>

<footer>
	<p>&COPY; OMORI by <a href={links.omocat}>OMOCAT</a>.</p>
	<p>
		Svelte project by
		<a target="_blank" href={links.turito}> Turito Yuenan </a>
	</p>
</footer>

<style>
	footer {
		margin: 1rem;
		padding: 1rem;
		background: black;
		text-align: center;
		border: var(--border);

		& a {
			color: yellow;
		}

		& a::after {
			content: " (external link)";
		}
	}
</style>
