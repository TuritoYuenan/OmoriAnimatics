<script lang="ts">
	import { type Animatic } from '../animatics';
	export let animatic: Animatic;

	const { yt_id, title, channel, date } = animatic;
	const href: string = 'https://youtu.be/' + yt_id;
</script>

<a {href} target="_blank" rel="noreferrer noopener">
	<h3>{title}</h3>
	<p>{channel} - <small>{date}</small></p>
</a>

<style>
	/* Card */
	a {
		padding: 0.5rem;
		background: black;
		border: var(--border);
		transition: 0.5s ease;
	}

	/* Highlight upon hovering */
	a:hover {
		background: white;
		color: black;
	}
</style>
