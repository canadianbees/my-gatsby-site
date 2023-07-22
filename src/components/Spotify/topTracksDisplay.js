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
        font-size:2vw;
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
        color:  #AF5B6C;
        transition: color 0.2s;
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



var audio = null;


const SongCardDisplay = ({ name, artist, image, song, url }) => {

    const soundManager = (location) => {

        if (location === "card") {
            //something is playing
            if (audio != null) {

                //if user clicks on the song that is already playing
                if (audio._src[0] === song) {
                    //if it is currently playing stop it
                    if (audio.playing()) {
                        audio.stop();
                        audio.unload();
                        audio = null;

                    }

                    //if the song is clicked on after it is done playing, play the song again
                    else {
                        audio.play();
                    }

                }

                //if user clicks on a song that is not currently playing, play the song that the user clicked on
                else {
                    //stop current audio
                    audio.stop();
                    audio.unload();
                    audio = null;

                    //load new audio in
                    audio = new Howl({
                        src: [song],
                        html5: true,
                    })
                    audio.volume(0.3);
                    audio.play();
                    // audio.fade(1, 0, 2000);

                }

            }

            //if nothing is playing, play the song the user clicked on
            //will be the first case always
            else {
                audio = new Howl({
                    src: [song],
                    html5: true,
                })
                audio.volume(0.3);
                audio.play();
            }

        }

        else {
            if (audio != null) {

                console.log("STOPPING song")
                audio.stop();
                audio.unload();
                audio = null;

            }
        }



    }

    const handleSpotify = (event) =>
    {
        event.stopPropagation();
        soundManager("link")
    }

    return (
        <>

            <SongCard  onClick={() => {
                    soundManager("card")
                }}>
                <Song>
                    <div>
                        <SongImg src={image} alt="" />
                        <SongNameInfo>
                            <span>{name}</span>
                            <span>{artist}</span>
                            <a onClick={event => handleSpotify(event)}href={url}>Open this song in Spotify</a>
                        </SongNameInfo>

                    </div>
                </Song>

            </SongCard>
        </>

    )
}

export default SongCardDisplay