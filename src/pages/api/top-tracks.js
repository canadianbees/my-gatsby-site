import { getTopTracks } from '../../../lib/spotify.js';


export default async function getMyTopTracks(req, res) {
    const response = await getTopTracks();

    const { items } = await response.json();
    const tracks = items.slice(0, 10).map((track) => ({
        artist: track.artists.map((_artist) => _artist.name).join(', '),
        songUrl: track.preview_url,
        title: track.name,
        img: track.album.images[0],
    }));

    return tracks;
};