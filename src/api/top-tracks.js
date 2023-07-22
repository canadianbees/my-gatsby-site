import { getTopTracks } from "../../lib/spotify";


export default async function getMyTopTracks(req, res) {
    const response = await getTopTracks();
    const { items } = await response.json();
    var tracksList;

    //filter through the list and check if each track has necessary requirements

    if (items) {
        tracksList = items.filter(function (track) {

            return track.preview_url !== null &&
                track.artists !== null &&
                track.name !== null &&
                track.album.images !== null;


        })

        if (tracksList) {
            //get the first 10 tracks from the filtered list
            const tracks = tracksList.slice(0, 10).map((track) => ({

                artist: track.artists.map((_artist) => _artist.name).join(', '),
                songUrl: track.preview_url,
                title: track.name,
                img: track.album.images[0],
                url: track.uri,

            }));

            return tracks;
        }

    };
    return null;
};