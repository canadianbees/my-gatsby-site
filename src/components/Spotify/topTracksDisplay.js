import styled from 'styled-components';
import React, { useState } from 'react';
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
    width: 110%;
    gap: 10rem;
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

    const [playing, setPlaying] = useState(false);


    const soundPlay = () => {

        audio = new Howl({
            src: [song],
            html5: true,
        })

        audio.volume(0.3);
        audio.play();
        setPlaying(true);
    }

    const stopPlay = () => {
        if (audio != null) {

            audio.stop();
            audio.unload();
            audio = null;
            setPlaying(false);
        }

        else {
            setPlaying(false);
        }
    }

    return (
        <SongCard >
            <Song>
                <div>
                    <SongImg src={image} alt="" />
                    <SongNameInfo>
                        <div onClick={() => {
                            playing ? stopPlay() : soundPlay()
                        }}>
                            <span>{name}</span>
                            <span>{artist}</span>
                        </div>
                        <a onClick={stopPlay} href={url}>Open this song in Spotify</a>
                    </SongNameInfo>

                </div>
            </Song>
        </SongCard>
    )
}

export default SongCardDisplay