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
	/* Card */ a {
		padding: 0.5em;
		background: black;
		border: var(--border);
	}

	/* Highlight upon hover */ a:hover {
		background: white;
		color: black;
	}

	/* Animation */ a, a:hover {
		transition: 0.5s ease;
	}
</style>
