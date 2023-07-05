import React from 'react';
import styled, { keyframes } from 'styled-components';

const Animation = keyframes`
    10% {
    transform: scaleY(0.3);
  }

  30% {
    transform: scaleY(1);
  }

  60% {
    transform: scaleY(0.5);
  }

  80% {
    transform: scaleY(0.75);
  }

  100% {
    transform: scaleY(0.5);
  }
`;

const Playing = styled.div
`
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100px;
    height: 100px;
    top:-1px;
    left:29px;
  
    @media (max-width:1054px){

  display:none;

}


    span {
        width: 25px;
        height: 150%;
        background-color: #1DB954;
        border-radius: 4px;
        animation: ${Animation} 5.2s ease infinite alternate;
        content: '';
        transform-origin: bottom;

        &:nth-of-type(2) {
            animation-delay: -5.2s;
        }
    
        &:nth-of-type(3) {
            animation-delay: -5.7s;
        }
        
    }
`;





const PlayingAnimation = () => {
  return (
    <Playing>
      <span />
      <span />
      <span />
    </Playing>
  )
};

export default PlayingAnimation;

