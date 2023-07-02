import { getTopArtists }  from '../../../lib/spotify.js';



export default async function GetMyTopArtists(req,res) {
    const response = await getTopArtists();
    const { items } = await response.json();

    const result = items.slice(0, 10).map((artists) => ({
        name: artists.name,
        artistUrl: artists.uri,
        img: artists.images[0].url,
    }));


    return result;
}