import * as React from 'react'
import { useEffect, useState } from "react"
import styled from 'styled-components';
import Layout from '../components/layout'
import GetMyTopTracks from '../api/top-tracks'
import GetMyTopArtists from '../api/top-artists'
import GetMySavedAlbums from '../api/saved-albums';
import GetNowPlaying from '../api/currently-playing';
import SongCardDisplay from '../components/Spotify/topTracksDisplay'
import ArtistCardDisplay from '../components/Spotify/topArtistsDisplay';
import AlbumCardDisplay from '../components/Spotify/savedAlbumsDisplay';
import NowPlayingDisplay from '../components/Spotify/nowPlayingDisplay';
import { MusicNoteBeamed } from '@styled-icons/bootstrap';
import { keyframes } from 'styled-components';
import cantFind from '../assets/images/cantFind.jpg'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 6.7rem;
    text-align:center;

    @media (max-width:1100px){

         display:flex;
         flex-direction:column;
        align-items:center;
       
       }

`;

const loadAnimation = keyframes`
    0% {color: #191414;}
    50% {color: #1DB954;}
    100% {color: #191414;}

`;

const Loading = styled(MusicNoteBeamed)`
 animation: 1.25s ease-in-out ${loadAnimation} infinite;

 height:100px;
 width:100px;
 text-shadow: 0 0 8px #FF0000;


`;


const TopSongs = styled.div`
    width:100%;
`;

const TopArtists = styled.div`   

    width:100%;

`;

const SavedAlbums = styled.div`   
    width:100%;

`;



const PlayingCard = styled.div`    
    width:467px;
    min-height:357px;
    position: relative;
    display:flex;
    align-items:center;
    justify-content:center;
`;

const MySpotifyPage = () => {
    const [tracks, setTracks] = useState();
    const [artists, setArtists] = useState();
    const [albums, setAlbums] = useState();
    const [loaded, setLoading] = useState(false);
    const [nowPlaying, setNowPlaying] = useState();
    const [playerLoaded, setPlayerLoaded] = useState(false);
    const [online, setOnline] = useState(false);


    async function fetchData() {
        let trackResult = await GetMyTopTracks();
        let artistResult = await GetMyTopArtists();
        let albumResult = await GetMySavedAlbums();
        let listenResult = await GetNowPlaying();


        //api call returns null that means im offline
        if (listenResult !== null) {
            setOnline(true);
        }

        setTracks(trackResult);
        setArtists(artistResult);
        setAlbums(albumResult);
        setNowPlaying(listenResult);
        setLoading(true);
        setPlayerLoaded(true);
    }


    useEffect(() => {
        fetchData();

        //update currently listening to every 45 seconds
        const interval = setInterval(async () => {
            let listenResult = await GetNowPlaying();

            //api call returns null that means im offline
            if (listenResult !== null) {
                setOnline(true);
            }

            setNowPlaying(listenResult);
        }, 45000);
        return () => clearInterval(interval);

    }, []); //! Important


    if (loaded) {


        return (
            <Layout pageTitle="My Spotify">
                <p></p>

                {/* if the now playing plater has loaded and im online display it, if not it should display currently offline */}
                {nowPlaying && online ?

                    //check if song has an image
                    nowPlaying.image ?

                        //song has an image
                        <NowPlayingDisplay name={nowPlaying.name} artist={nowPlaying.artist} image={nowPlaying.image} trackUrl={nowPlaying.trackUrl}
                            isPlaying={nowPlaying.isPlaying} loaded={playerLoaded} online={online} >
                        </NowPlayingDisplay>
                        :
                        //no image
                        <NowPlayingDisplay name={nowPlaying.name} artist={nowPlaying.artist} image={cantFind} trackUrl={nowPlaying.trackUrl} isPlaying={nowPlaying.isPlaying} loaded={playerLoaded} online={online} >
                        </NowPlayingDisplay>
                    //i'm offline
                    : <NowPlayingDisplay name={null} artist={null} image={null} trackUrl={null} isPlaying={null} loaded={playerLoaded} online={online} >
                    </NowPlayingDisplay>}

                <div><br></br><br></br></div>

                <Container>

                    <TopSongs>
                        <h2>Top Tracks for This Month</h2>
                        <br></br>
                        {
                            tracks.map((song, id) => {
                                return (
                                    <div key={id}>
                                        <SongCardDisplay name={song.title} artist={song.artist} image={song.img.url} song={song.songUrl} url={song.url}></SongCardDisplay>
                                        <br></br>
                                    </div>
                                )
                            })


                        }

                    </TopSongs>
                    <TopArtists>
                        <h2>Top Artists for This Month</h2>
                        <br></br>
                        {
                            artists.map((artist, id) => {
                                return (
                                    <div key={id}>
                                        <ArtistCardDisplay name={artist.name} image={artist.img} url={artist.artistUrl} genre={artist.genre}></ArtistCardDisplay>
                                        <br></br>
                                    </div>

                                )
                            })


                        }
                    </TopArtists>
                    <SavedAlbums>
                        <h2>Albums I Like</h2>
                        <br></br>
                        {
                            albums.map((album, id) => {
                                return (
                                    <div key={id}>
                                        <AlbumCardDisplay name={album.name} artist={album.artist} image={album.image} url={album.url}></AlbumCardDisplay>
                                        <br></br>
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
        return (<Layout pageTitle="My Spotify"><p><br></br><br></br></p><PlayingCard><Loading /></PlayingCard></Layout>)

    }


}

export const Head = () => <title>My Spotify</title>

export default MySpotifyPage