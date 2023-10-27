<script lang="ts">
	const youtube = ['https://youtube.com', 'https://piped.video'];

	export let data: any;
	const { uploaderName, uploadedDate, thumbnail, title, url } = data;
</script>

<a href={youtube[0] + url} target="_blank" rel="noreferrer noopener">
	<img src={thumbnail} alt="Video thumbnail" />
	<section>
		<p><small>{uploadedDate}</small> - by {uploaderName}</p>
		<p><strong>{title}</strong></p>
	</section>
</a>

<style>
	/* Card */
	a {
		background: black;
		border: var(--border);
		transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
	}

	/* Highlight upon hovering */
	a:hover {
		color: silver;
	}

	/* Responsive thumbnail image */
	img {
		width: 100%;
		height: auto;
	}

	/* Metadata */
	section {
		padding: 0.5rem;
		padding-top: 0;
	}
</style>
