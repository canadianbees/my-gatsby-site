import styled from 'styled-components';
import React from 'react';
import { Howl } from "howler";

const SongNameInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 90%;
    text-align:left;
    max-width:420px;

    

    span:nth-of-type(1){
        font-weight: bold;
        font-size:1.87vw;
    }

    @media (max-width:768px){
        span:nth-of-type(1){
            font-size:25px;
        }
        font-size:20px;
      
    }

    a{
        
        color: #090C08;
        text-decoration: none;        
    }

    a:hover{
        color:  #1DB954;
        transition: color 0.2s;

        /* span:hover{
            color:  #AF5B6C;
            transition: color 0.2s;
        } */
    }

    div{
        width: 100%;
        flex-direction: column;
    }


`;

const SongCard = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    align-self: center;
    padding: 5%;
    transition: background-color 0.5s;
    border-radius: 1rem;
    
    &:hover
    {
        background-color: #C3B59F;
        box-shadow:0px 0px 15px 4px #756d5f;
        cursor: pointer;

        img
        {
            width: 95px;
            height: 95px;
        }

        ${SongNameInfo}
        {
            span
            {
                
                  color:  #AF5B6C;
                  transition: color 0.2s;
                
            }
        }
    }


       @media (max-width:768px){
        width:90%;
    }

`;


const Song = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
   min-height:100px;

    div{
        display: flex;
        gap: 10px;
    }
`;


const SongImg = styled.img`
    width: 75px;
    height: 75px;
    border-radius: .5rem;
    transition: width .5s, height .5s;
`;

const fadeOut = (audio) => {
    setTimeout(
        function () {
            audio.fade(0.5, 0.0, 5000);
        }, 10000
    )
}

const fadeIn = (audio) => {
    audio.fade(0.0, 0.5, 5000);
}

const stopPlaying = (audio) => {
    audio.stop();
    audio.unload();
    audio = null;
}


var audio = null;
const SongCardDisplay = ({ name, artist, image, song, url }) => {

    const makeAudio = () => {
        return new Howl({
            src: [song],
            html5: true,
            volume: 0.5,
        })

    }
    const soundManager = (location) => {

        if (location === "card") {
            //something is playing
            if (audio != null) {

                //if user clicks on the song that is already playing
                if (audio._src[0] === song) {

                    //if it is currently playing stop it
                    if (audio.playing()) {
                        stopPlaying(audio);

                    }

                    //if the song is clicked on after it is done playing, play the song again
                    else {

                        audio.play();
                        fadeIn(audio)   //trigger fade in for the first 3 seconds of the song
                        fadeOut(audio);    //trigger fade out for the last 3 seconds of the song
                    }

                }

                //if user clicks on a song that is not currently playing, play the song that the user clicked on
                else {

                    //stop current audio
                    stopPlaying(audio);

                    //load new audio in
                    audio = makeAudio();
                    audio.play();
                    fadeIn(audio)
                    fadeOut(audio);

                }

            }

            //if nothing is playing, play the song the user clicked on
            //will be the first case always
            else {

                audio = makeAudio();
                audio.play();
                fadeIn(audio)
                fadeOut(audio);

            }

        }

        //user clicked to open a song in spotify, stop audio if any is playing
        else {
            if (audio != null) {
                stopPlaying(audio);
            }
        }
    }

    const handleSpotify = (event) => {
        event.stopPropagation();
        soundManager("link")
    }

    return (
        <>
            <SongCard onClick={() => {
                soundManager("card")
            }}>
                <Song>
                    <div>
                        <SongImg src={image} alt="" />
                        <SongNameInfo>
                            <span>{name}</span>
                            <span>{artist}</span>
                            <a onClick={event => handleSpotify(event)} href={url}>Open this song in Spotify</a>
                        </SongNameInfo>
                    </div>
                </Song>
            </SongCard>
        </>
    )
}

export default SongCardDisplay