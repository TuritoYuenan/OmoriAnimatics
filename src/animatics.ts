/**
 * Piped API's playlist Endpoint
 */
const endpoint = 'https://pipedapi.kavin.rocks/playlists/';

/**
 * Array of videos in the playlist
 */
let videos;

/**
 * Request playlist data from Piped
 */
export default (async (source: string) => {
	const response = await fetch(endpoint + source);
	const rawData = await response.json();
	videos = rawData.relatedStreams;
})('PLN0RqFX2ugKWd5zj3s7uobPsqNIpbxgfD');

export { videos };
