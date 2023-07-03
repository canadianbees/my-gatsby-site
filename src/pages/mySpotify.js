import * as React from 'react'
import { useEffect, useState } from "react"
import styled from 'styled-components';
import Layout from '../components/layout'
import GetMyTopTracks from './api/top-tracks'
import GetMyTopArtists from './api/top-artists'
import GetMySavedAlbums from './api/saved-albums';
import GetNowPlaying from './api/currently-playing';
import SongCardDisplay from '../components/topTracksDisplay'
import ArtistCardDisplay from '../components/topArtistsDisplay';
import AlbumCardDisplay from '../components/savedAlbumsDisplay';
import NowPlayingDisplay from '../components/nowPlayingDisplay';

const Container = styled.div
    `
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    text-align:center;

`;


const TopSongs = styled.div
    `
    
`;

const TopArtists = styled.div
    `   

`;

const SavedAlbums = styled.div
    `   

`;

const Greeting = styled.p
`
    text-align: center;
`;

const MySpotifyPage = () => {
    const [tracks, setTracks] = useState();
    const [artists, setArtists] = useState();
    const [albums, setAlbums] = useState();
    const [nowPlaying, setNowPlaying] = useState();

    async function fetchData() {
        let trackResult = await GetMyTopTracks();
        let artistResult = await GetMyTopArtists();
        let albumResult = await GetMySavedAlbums();
        let playingResult = await GetNowPlaying();
//
        setTracks(trackResult);
        setArtists(artistResult);
        setAlbums(albumResult);
        setNowPlaying(playingResult);

    }
//
    useEffect(() => {
        fetchData();
    }, []); //! Important


    if (tracks) {
        return (
            <Layout pageTitle="My Spotify">
                <Greeting>Here you can see what I listen to! Updates every month.</Greeting>
               
                        <NowPlayingDisplay>
                        </NowPlayingDisplay>
                  
                <Container>
                    
                    <TopSongs>
                        <p>MY TOP SONGS!</p>


                        {
                            tracks.map((song, id) => {
                                return (
                                    <div key={id}>
                                        <SongCardDisplay name={song.title} artist={song.artist} image={song.img.url} url={song.songUrl}></SongCardDisplay>
                                    </div>
                                )
                            })


                        }

                    </TopSongs>
                    <TopArtists>
                        <p>MY TOP ARTISTS!</p>


                        {
                            artists.map((artist, id) => {
                                return (
                                    <div key={id}>
                                        <ArtistCardDisplay name={artist.name} image={artist.img} url={artist.artistUrl}></ArtistCardDisplay>
                                    </div>
                                )
                            })


                        }
                    </TopArtists>
                    <SavedAlbums>
                        <p>MY SAVED ALBUMS!</p>
                        {
                            albums.map((album, id) => {
                                return (
                                    <div key={id}>
                                        <AlbumCardDisplay name={album.name} artist={album.artist} image={album.image} url={album.url}></AlbumCardDisplay>
                                    </div>
                                )
                            })


                        }
                    </SavedAlbums>
                   
                </Container>
            </Layout>
        )
    }

    else {
        <p>SONGS DIDNT LOAD</p>
    }


}

export const Head = () => <title>My Spotify</title>

export default MySpotifyPage