import styled from 'styled-components';
import React from 'react';
import { Howl } from "howler";

const SongCard = styled.div
    `
    width: 100%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    background-color: white;
    align-self: center;
    padding: 2%;

    &:hover
    {
        border-radius: 0rem;
        background-color: #CDBEE0;
        cursor: pointer;
    }

    h3
    {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--purple);

    }
`;


const Song = styled.div
    `
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        gap: 10px;
    }
`;


const SongImg = styled.img
    `
width: 75px;
height: 75px;
right:5px;
position: relative;
`;

const SongNameInfo = styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span:nth-of-type(1){
        font-weight: bold;
        font-size:20px;
    }
    
`;

var audio = null;

const SongCardDisplay = ({ name, artist, image, url}) => {
    
    const soundPlay = () => {

        //check if its already playing, if it is then stop
        if (audio != null) {
           
            audio.stop();
            audio.unload();
            audio = null;
        }

        //if not play the song
        else{
            audio = new Howl({
                src: [url],
                html5: true,
            })

            audio.volume(0.1);
            audio.play();
        }
        
        
    }

    return (
        <SongCard onClick={soundPlay}>
            <Song>
                <div>
                    <SongImg src={image} alt=""/>
                    <SongNameInfo>
                        <span>{name}</span>
                        <span>{artist}</span>
                    </SongNameInfo>
                </div>
            </Song>
        </SongCard>
    )
}

export default SongCardDisplay