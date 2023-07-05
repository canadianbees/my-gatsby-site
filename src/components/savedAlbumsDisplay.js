import styled from 'styled-components';
import React from 'react';

const AlbumCard = styled.div
    `
    width: 80%;
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
transition: width .5s, height .5s;
`;

const AlbumInfo = styled.div
    `
    display: inline-block;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align:left;

    span:nth-of-type(1){
        font-weight: bold;
        font-size:1.75vw;
    }
    a{
        color:#191714;
        text-decoration: none;
        font-weight: bold;
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


const AlbumCardDisplay = ({ name, artist, image, url }) => {

    return (
        <AlbumCard>
            <Album>
                <div>
                    <AlbumImg src={image} alt="" />
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