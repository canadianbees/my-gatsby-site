import querystring from 'query-string';
export let Buffer = require("buffer").Buffer

const client_id = process.env.GATSBY_SPOTIFY_CLIENT_ID;
const client_secret = process.env.GATSBY_SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.GATSBY_SPOTIFY_REFRESH_TOKEN;
const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

//get my access token
const getAccessToken = async () => {
    const response = await fetch(TOKEN_ENDPOINT, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${basic}`,
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token,
        }),

    });
    return response.json();
};

//spotify endpoints
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`;
const SAVED_ALBUMS_ENDPOINT = `https://api.spotify.com/v1/me/albums`;
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term`;
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;


export const getTopTracks = async () => {
    const { access_token } = await getAccessToken();

    return fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getSavedAlbums = async () => {
    const { access_token } = await getAccessToken();
    return fetch(SAVED_ALBUMS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};

export const getTopArtists = async () => {
    const { access_token } = await getAccessToken();

    return fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });


};

export const getNowPlaying = async () => {
    const { access_token } = await getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        },
    });
};