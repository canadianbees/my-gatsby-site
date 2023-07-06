import styled from 'styled-components';
import React from 'react';

const ArtistCard = styled.div
    `
    width: 90%;
    gap: 10rem;
    display: flex;
    flex-direction: column;
    font-size: 1.5vw;
    align-self: center;
    padding: 5%;

    &:hover
    {
        border-radius: 1rem;
        background-color: #C3B59F;
        box-shadow:0px 0px 15px 4px #756d5f;

        img
        {
            width: 95px;
            height: 95px;
        }

    }

    @media (max-width:375px){
        width:90%
        }
   
`;


const Artist = styled.div
    `
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height:100px;

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
transition: width .5s, height .5s;
`;

const ArtistInfo = styled.div
    `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align:left;

    span:nth-of-type(1){
        font-weight: bold;
        font-size:1.75vw;
    }

    a{
        font-weight: bold;
    color: #090C08;
    text-decoration: none;  
    }

    a:hover{
        color:  #AF5B6C;
    }

    @media (max-width:768px){
        span:nth-of-type(1){
            font-size:25px;
        }
        font-size:20px;
      
      }
`;


const ArtistCardDisplay = ({ name, image, url, genre }) => {

    return (
        <ArtistCard>
            <Artist>
                <div>
                    <ArtistImg src={image} alt="" />
                    <ArtistInfo>
                        <span>{name}</span>
                        <span>{genre}</span>
                        <a href={url}>Check this artist out</a>
                    </ArtistInfo>
                </div>
            </Artist>
        </ArtistCard>
    )
}

export default ArtistCardDisplay