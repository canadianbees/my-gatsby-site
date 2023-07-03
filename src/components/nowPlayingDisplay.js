import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import GetNowPlaying from '../api/currently-playing';
import PlayingAnimation from './PlayingAnimation';
import { Spotify } from '@styled-icons/fa-brands';
import { MusicNoteBeamed } from '@styled-icons/bootstrap';
import { keyframes } from 'styled-components';

const PlayingCard = styled.div
    `    
    transform:translatex(706px) translatey(-10px);
    display:inline-block;
    width:467px;
    height:323px;
    min-height:357px;
    border-radius:18px;
    box-shadow:0px 0px 25px 5px #c1bdbd;
    a
    {
        color:#191414;
    }
`;

const SpotifyLogo = styled(Spotify)
    `
    width: 30px;
    height: 30px;
    transform:translatex(423px) translatey(-67px);
    &:hover
    {
        color: #1DB954;
    }
`;

const Listening = styled.span
    `
    font-size:30px;
    font-weight:600;
    display:inline-block;
    transform:translatex(59px) translatey(-152px);
`;

const Offline = styled.span
    `
    font-size:30px;
    font-weight:600;
    display:block;
    text-align: center;
`;

const Animation = styled.div
    `
transform:translatex(267px) translatey(-109px);
`;

const PlayingImg = styled.img
    `
    width: 200px;
    height: 200px;
    display:inline-block;
 transform:translatex(22px) translatey(48px);
 border-radius:18px;
 border-color:#1DB954;
 border-width:2px;
 border-style:solid;

`;

const PlayingInfo = styled.span
    `  
    font-size:20px;
    display:block;
    transform:translatex(17px) translatey(-45px);
    font-weight:600;
    position:relative;
    top:8px;
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
 position:relative;
 text-align:right;
 transform:translatex(-764px) translatey(-278px);

`;

const NowPlayingDisplay = () => {

    const [loaded, setLoading] = useState(false);
    const [nowPlaying, setNowPlaying] = useState();

    async function fetchData() {

        let playingResult = await GetNowPlaying();
        setNowPlaying(playingResult);
        setLoading(true);

        console.log(nowPlaying);
    }

    useEffect(() => {
        fetchData();

    }, []); //! Important

    if (loaded) {
        if (nowPlaying) {


            return (

                <>

                    {nowPlaying.isPlaying ?


                        <>
                            <PlayingCard>
                                <PlayingImg src={nowPlaying.image} alt="" />
                                <Listening>Now Playing</Listening>
                                <Animation>{nowPlaying.isPlaying && <PlayingAnimation />} </Animation>
                                <PlayingInfo>{nowPlaying.name}<br></br>{nowPlaying.artist}</PlayingInfo>
                                <a href={nowPlaying.trackUrl}><SpotifyLogo></SpotifyLogo></a>
                            </PlayingCard>

                        </>


                        : <Offline>Not playing anything at the moment</Offline>}


                </>

            )
        }

        else {
            return (<Offline>Currently offline</Offline>)
        }

    }

    else {
        return (<PlayingCard>
            
            <Loading />
            <PlayingInfo style={{color:'white',  transform:'translate(4px,174px)', cursor:'default'}}>BLAAAAAAAAAAAAAAAAAAAAAAAH<br></br>BLAAAAAAAAAAAAAAAAAAAAAAAH</PlayingInfo>
            <SpotifyLogo style={{color:'white',  transform:'translate(423px,-67px)'}} ></SpotifyLogo>

        </PlayingCard>
        )
    }

};
export default NowPlayingDisplay