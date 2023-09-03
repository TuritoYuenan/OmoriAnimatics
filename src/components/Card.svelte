<script lang="ts">
	import { type Animatic } from '../animatics';

	// Video metadata
	export let animatic: Animatic;
	const { yt_id, title, channel, date } = animatic;

	// Link to Youtube
	const href: string = 'https://youtu.be/' + yt_id;

	// Load Youtube video thumbnail
	const imageFile: string = 'sddefault';
	const src: string = `https://i.ytimg.com/vi/${yt_id}/${imageFile}.jpg`;
</script>

<a {href} target="_blank" rel="noreferrer noopener">
	<img {src} alt="Video thumbnail" />
	<section>
		<p><small>{date}</small> - by {channel}</p>
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
