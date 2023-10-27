/**
 * Piped API's playlist Endpoint
 */
const endpoint = 'https://pipedapi.kavin.rocks/playlists/';

/**
 * "OMORI Animatics" playlist ID
 */
const playlist = 'PLN0RqFX2ugKWd5zj3s7uobPsqNIpbxgfD';

/**
 * Request to Piped for playlist data
 */
export default (
	async (source: string) => {
		const response = await fetch(source);
		const rawData = await response.json();

		return rawData.relatedStreams;
	}
)(endpoint + playlist);
