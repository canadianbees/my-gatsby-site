import { getNowPlaying } from "../../lib/spotify";

export default async function GetNowPlaying(req, res) {
    const response = await getNowPlaying();

    //not listening to spotify, offline or error 
    if (response.status !== 200) {
        return null;
    }


    //TODO GET IMAGE INCASE SPOTIFY IMAGE CANT LOAD

    const song = await response.json();
    let image;

    if (song.item.album.images[0]) {
        image = song.item.album.images[0].url;
    }

    else {
        image = null;
    }


    const result = {
        name: song.item.name,
        trackUrl: song.item.uri,
        image: image,
        isPlaying: song.is_playing,
        artist: song.item.artists.map((_artist) => _artist.name).join(', '),
    };


    return result;
}