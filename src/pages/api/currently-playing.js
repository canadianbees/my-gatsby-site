import {getNowPlaying} from "../../../lib/spotify";

export default async function GetNowPlaying(req,res) {
    const response = await getNowPlaying();

    //not listening to spotify, offline
    if(response.status === 204)
    {
        return null;
    }
    const song = await response.json();
   
    const result = {
        name: song.item.name,
        trackUrl: song.item.uri,
        image: song.item.album.images[0].url,
        isPlaying: song.is_playing,
        artist: song.item.artists[0].name
    };


    return result;
}