import styled from 'styled-components';
import React from 'react';
import { Howl } from "howler";

const SongCard = styled.div
    `
    width: 120%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    align-self: center;
 
    height:97px;
    padding: 5%;
    
    &:hover
    {
        border-radius: 1rem;
        background-color: #C3B59F;
        box-shadow:0px 0px 15px 4px #756d5f;
        cursor: pointer;

        img
        {
            width: 95px;
            height: 95px;
        }
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
    border-radius: .5rem;
    transition: width .5s, height .5s;
`;

const SongNameInfo = styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 90%;

    span:nth-of-type(1){
        font-weight: bold;
        font-size:30px;
    }
    
`;

var audio = null;

const SongCardDisplay = ({ name, artist, image, url }) => {
    const soundPlay = () => {

        //check if its already playing, if it is then stop
        if (audio != null) {

            audio.stop();
            audio.unload();
            audio = null;
        }

        //if not play the song
        else {
            audio = new Howl({
                src: [url],
                html5: true,
            })

            audio.volume(0.3);
            audio.play();
        }
    }

    return (
        <SongCard onClick={soundPlay}>
            <Song>
                <div>
                    <SongImg src={image} alt="" />
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