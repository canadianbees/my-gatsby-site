import styled from 'styled-components';
import React from 'react';

const AlbumCard = styled.div
    `
    width: 96%;
    gap: 2rem;
    display: flex;
    flex-direction: column;
    font-size: 13px;
    background-color: white;
    align-self: center;
    padding: 2%;

    &:hover
    {
        border-radius: 1rem;
        background-color: pink;
    }

`;


const Album = styled.div
    `
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        gap: 10px;
    }
`;


const AlbumImg = styled.img
    `
width: 75px;
height: 75px;
right:5px;
position: center;
border-radius: .5rem;
`;

const AlbumInfo = styled.div
    `
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    span:nth-of-type(1){
        font-weight: bold;
        font-size:17px;
    }
    
    a:hover
    {
        color: red;
    }
`;


const AlbumCardDisplay = ({ name, artist,image, tracks, url}) => {
    
    return (
        <AlbumCard>
            <Album>
                <div>
                    <AlbumImg src={image} alt=""/>
                    <AlbumInfo>
                        <span>{name}</span>
                        <span>by {artist}</span>
                        <a href={url}>Check this album out</a>
                    </AlbumInfo>
                </div>
            </Album>
        </AlbumCard>
    )
}

export default AlbumCardDisplay