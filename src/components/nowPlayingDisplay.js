import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import GetNowPlaying from '../api/currently-playing';
import PlayingAnimation from './PlayingAnimation';
import { Spotify } from '@styled-icons/fa-brands';

const PlayingCard = styled.div
    `    
    transform:translatex(700px) translatey(19px);
 display:inline-block;
    width:467px;
    height:323px;
    min-height:357px;
    border-radius:18px;
    box-shadow:0px 0px 25px 5px #c1bdbd;
    a
    {
        color:black;
    }
`;

const SpotifyLogo = styled(Spotify)
    `
    width: 50px;
    height: 50px;
    transform:translatex(407px) translatey(-148px);

    &:hover
    {
        color: #1ed760;
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
 border-color:#1ed760;
 border-width:2px;
 border-style:solid;

`;

const PlayingInfo = styled.p
    `  
    font-size:20px;
    display:block;
    transform:translatex(18px) translatey(-108px);
    font-weight:600;
    position:relative;
    top:8px;
`;

const NowPlayingDisplay = () => {

    const [loading, setLoading] = useState(true);
    const [nowPlaying, setNowPlaying] = useState();

    async function fetchData() {

        let playingResult = await GetNowPlaying();
        setNowPlaying(playingResult);
        setLoading(false);

        console.log(nowPlaying);
    }

    useEffect(async() => {
        fetchData();
    }, []); //! Important

    if (nowPlaying) {


        return (


            <>
                {loading ?
                    <p>loading!!!!!</p> :

                    <>

                        {nowPlaying.isPlaying ?


                            <>
                                <PlayingCard>
                                    <PlayingImg src={nowPlaying.image} alt="" />
                                    <Listening>Now Playing</Listening>
                                    <Animation>{nowPlaying.isPlaying && <PlayingAnimation />} </Animation>
                                    <PlayingInfo>{nowPlaying.name}<br></br>{nowPlaying.artist}</PlayingInfo>
                                    {/* <a href={nowPlaying.trackUrl}><SpotifyLogo></SpotifyLogo></a> */}

                                </PlayingCard>

                            </>


                            : <Offline>Not playing anything at the moment</Offline>}


                    </>

                }
            </>


        )
    }

    else {
        return (<Offline>Currently offline</Offline>)
    }
};


export default NowPlayingDisplay