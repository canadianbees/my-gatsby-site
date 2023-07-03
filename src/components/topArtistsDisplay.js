import styled from 'styled-components';
import React from 'react';

const ArtistCard = styled.div
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
        border-radius: 1rem;
        background-color: pink;
    }
`;


const Artist = styled.div
    `
    display: flex;
    justify-content: space-between;
    align-items: center;

    div{
        display: flex;
        gap: 10px;
    }
`;


const ArtistImg = styled.img
    `
width: 75px;
height: 75px;
right:5px;
position: center;
border-radius: .5rem;
`;

const ArtistInfo = styled.div
    `
    display: flex;
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


const ArtistCardDisplay = ({ name, image, url}) => {
    
    return (
        <ArtistCard>
            <Artist>
                <div>
                    <ArtistImg src={image} alt=""/>
                    <ArtistInfo>
                        <span>{name}</span>
                        <a href={url}>Check this artist out</a>
                    </ArtistInfo>
                </div>
            </Artist>
        </ArtistCard>
    )
}

export default ArtistCardDisplay