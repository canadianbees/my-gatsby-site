import styled from 'styled-components';
import React from 'react';
import PlayingAnimation from './PlayingAnimation';
import { Spotify } from '@styled-icons/fa-brands';
import { MusicNoteBeamed } from '@styled-icons/bootstrap';
import { keyframes } from 'styled-components';

const PlayingCard = styled.div
    `    
    display:inline-block;
    background-color: #C3B59F;
    width:467px;
    min-height:357px;
    box-shadow:0px 0px 15px 15px #756d5f;
    border-radius:18px;
    position: relative;
    a{
        color:#191414;
    }
`;

const SpotifyLogo = styled(Spotify)
    `
    width: 30px;
    height: 30px;
    position:absolute;
    bottom:0;
    right:0;
    padding-right:20px;
    padding-bottom: 15px;
    &:hover{
        color: #1DB954;
    }
`;

const Listening = styled.span
    `
    font-size:30px;
    font-weight:600;
    display:inline-block;
    position:relative;
    top:-157px;
    left:53px;
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
    border-width:3px;
    border-style:solid;

`;

const PlayingInfo = styled.span
    `  
    font-size:20px;
    display:block;
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
 position:relative;

`;

const Bottom = styled.div
`
display:flex;
padding-right:32px;
min-height:53px;
width:410px;
position:relative;
top:-54px;
left:22px;

`;

const NowPlayingDisplay = ({name, artist, image, trackUrl, isPlaying, loaded, online}) => {
    const LoadingFormat = 
    {
        display:'flex',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
    }

    if (loaded) {
        if (online) {


            return (

                <>
                    {/* if im online and playing anything it will display it, if im just online but the music is paused it will display not playing anything right now */}
                    {isPlaying ?


                   
                            <PlayingCard>
                                <PlayingImg src={image} alt="" />
                                <Listening>Now Playing</Listening>
                                <Animation>{isPlaying && <PlayingAnimation />} </Animation>
                                <Bottom>
                                <PlayingInfo>{name}<br></br>{artist}</PlayingInfo>
                                </Bottom>
                                <a href={trackUrl} aria-label="Open song" title="Interested? Click to open the song in Spotify!"><SpotifyLogo></SpotifyLogo></a>
                            </PlayingCard>

                      


                        : <Offline>Not playing anything at the moment<br></br><br></br></Offline>}


                </>

            )
        }
        // im not online
        else {
            return (<Offline>Currently offline<br></br><br></br></Offline>)
        }

    }

    //display loading animation if the player needs time to laod
    else {
        return (<PlayingCard style={LoadingFormat}>
            <Loading />
            <SpotifyLogo style={{color:'#C3B59F'}} ></SpotifyLogo>
        </PlayingCard>
        )
    }

};
export default NowPlayingDisplay