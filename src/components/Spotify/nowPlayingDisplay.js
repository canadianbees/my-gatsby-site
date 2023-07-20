import styled from 'styled-components';
import React from 'react';
import PlayingAnimation from './PlayingAnimation';
import { Spotify } from '@styled-icons/fa-brands';
import { MusicNoteBeamed } from '@styled-icons/bootstrap';
import { keyframes } from 'styled-components';

const PlayingCard = styled.div`    
    display:grid;
    grid-template-columns: 1fr 1fr;
    background-color: #C3B59F;
    width:460px;
    min-height:357px;
    box-shadow:0px 0px 20px 10px #756d5f;
    border-radius:1rem;
    position: relative;

    a{
        color:#191414;
    }

    //large moba
    @media (max-width:425px){

    grid-template-row: 1fr;
    width:400px;
    column-gap:50px;
    }


    @media (max-width:400px){

    grid-template-row: 1fr;
    width:375px;
    }


    //iphone SE - medium moba
    @media (max-width:375px){

    width:325px;
    }

    //small moba
    @media (max-width:320px){
        width:300px;
    }

      
`;

const Right = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:space-around;

//iphone SE
@media (max-width:375px){
    flex-direction:row;
  justify-content:normal;
  align-items:normal;
      
}
 

`;

const SpotifyLogo = styled(Spotify)`
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


    @media (max-width:1054px){

        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:space-around;
      
      }

`;

const Listening = styled.span`
    font-size:30px;
    font-weight:600;
    display:inline-block;
    position:relative;

    @media (max-width:375px)
    {
        height:40px;
        width:150px;
        margin-top:10px;
        margin-left: -115px;
    }

`;

const Animation = styled.div`
 margin-bottom:95px;

 //iphone SE
 @media (max-width:375px){
    display:none;
      
}
   
`;

const loadAnimation = keyframes`
    0% {color: #191414;}
    50% {color: #1DB954;}
    100% {color: #191414;}

`;

const Left = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;
 float:right;
 justify-content:space-between;
 text-align:center;
 position:relative;


 //iphone SE
 @media (max-width:375px){
    margin-right:-50px;
  margin-left:50px;
      
}
 
`;

const PlayingImg = styled.img`
    width: 200px;
    height: 200px;
    display:inline-block;
    border-radius:18px;
    border-color:#1DB954;
    border-width:3px;
    border-style:solid;
    margin-right:-50px;
    margin-top: 50px;
    

     //iphone SE
 @media (max-width:375px){
    margin-top:50px;
      
}


`;

const PlayingInfo = styled.span`  
    font-size:20px;
    display:block;
    font-weight:600;
    position:relative;
    margin-right:-50px;
    margin-bottom:40px;

     //iphone SE
     @media (max-width:375px){
    margin-top:-10px;
    margin-bottom: 40px;
      
}
 
`;

const Offline = styled.span`
    font-size:30px;
    font-weight:600;
    display:block;
    text-align: center;
`;

const Loading = styled(MusicNoteBeamed)`
 animation: 1.25s ease-in-out ${loadAnimation} infinite;

 height:100px;
 width:100px;
 text-shadow: 0 0 8px #FF0000;
 position:relative;

`;

const NowPlayingDisplay = ({ name, artist, image, trackUrl, isPlaying, loaded, online }) => {
    const LoadingFormat =
    {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }

    if (loaded) {
        if (online) {


            return (

                <>
                    {/* if im online and playing anything it will display it, if im just online but the music is paused it will display not playing anything right now */}
                    {isPlaying ?


                        <>
                            <PlayingCard>


                                <Left> <PlayingImg src={image} alt="" />
                                    <br></br>
                                    <PlayingInfo>{name}<br></br>{artist}</PlayingInfo>
                                </Left>

                                <Right>
                                    <Listening>Now Playing</Listening>
                                    <Animation>{isPlaying && <PlayingAnimation />} </Animation>
                                    <a href={trackUrl} aria-label="Open song" title="Interested? Click to open the song in Spotify!"><SpotifyLogo></SpotifyLogo></a>
                                </Right>


                            </PlayingCard>


                        </>

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
            <SpotifyLogo style={{ color: '#C3B59F' }} ></SpotifyLogo>
        </PlayingCard>
        )
    }

};
export default NowPlayingDisplay