import * as React from 'react'
import { useEffect, useState } from "react"
import styled from 'styled-components';
import Layout from '../components/layout'
import GetMyTopTracks from '../api/top-tracks'
import GetMyTopArtists from '../api/top-artists'
import GetMySavedAlbums from '../api/saved-albums';
import SongCardDisplay from '../components/topTracksDisplay'
import ArtistCardDisplay from '../components/topArtistsDisplay';
import AlbumCardDisplay from '../components/savedAlbumsDisplay';
import NowPlayingDisplay from '../components/nowPlayingDisplay';
import { MusicNoteBeamed } from '@styled-icons/bootstrap';
import { keyframes } from 'styled-components';

const Container = styled.div
    `
    display: grid;

    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2rem;
    text-align:center;

`;

const loadAnimation = keyframes
    `
    0% {color: #191414;}
    50% {color: #1DB954;}
    100% {color: #191414;}

`;

const Loading = styled(MusicNoteBeamed)
    `
 animation: 1.25s ease-in-out ${loadAnimation} infinite;

 height:100px;
 width:100px;
 text-shadow: 0 0 8px #FF0000;
 bottom:-200px;
 top:400px;
 right:400px;
 left:952px;
 position:fixed;

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
    const [loaded, setLoading] = useState(false);

    async function fetchData() {
        let trackResult = await GetMyTopTracks();
        let artistResult = await GetMyTopArtists();
        let albumResult = await GetMySavedAlbums();
        //
        setTracks(trackResult);
        setArtists(artistResult);
        setAlbums(albumResult);

        setLoading(true);
    }
    //
    useEffect(() => {
        fetchData();

    }, []); //! Important


    if (loaded) {
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
        return (<Loading />)

    }


}

export const Head = () => <title>My Spotify</title>

export default MySpotifyPage