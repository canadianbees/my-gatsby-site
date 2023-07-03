import { getSavedAlbums } from "../../lib/spotify";

export default async function GetMySavedAlbums (req,res) {
    const response = await getSavedAlbums();
    const { items } = await response.json();
if(items)
{
    const result = items.slice(0, 10).map((catalog) => ({
        name: catalog.album.name,
        tracks: catalog.album.total_tracks,
        image: catalog.album.images[0].url,
        artist: catalog.album.artists[0].name,
        url: catalog.album.uri
    }));

    
    return result;
}
    return null;
}