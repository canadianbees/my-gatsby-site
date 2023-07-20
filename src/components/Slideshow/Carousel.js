import React, { useState } from 'react';
import styled from 'styled-components';
import { ArrowRightSquareFill, ArrowLeftSquareFill } from '@styled-icons/bootstrap';


const Container = styled.div`
    display:flex;
    justify-content: center;
    align-items:center;
    position: relative;
    
    @media (max-width:768px){

        margin-top:0px;
        margin-bottom: 0px;

}

//large moba
@media (max-width:425px){

width:400px;
}


`;

const Slide = styled.img`
    border-radius: 1rem;
    width: 750px;
    height: 600px;

    display: ${props => props.status === 'show' ? 'block'
            : 'none'};

    user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;

    
    @media (max-width:768px){

    width:400px;
    height: 300px;
    }

    //large moba
    @media (max-width:425px){

    width:400px;
    }
`;

const VideoSlide = styled.video`
    border-radius: 1rem;
    width: 750px;
    height: 600px;
    
    object-fit: fill;
    display: ${props => props.status === 'show' ? 'block'
            : 'none'};

    user-select: none;
        -moz-user-select: none;
        -khtml-user-select: none;
        -webkit-user-select: none;
        -o-user-select: none;

        @media (max-width:768px){

width:400px;
height: 300px;
}

//large moba
@media (max-width:425px){

width:400px;
}

`;


const RightArrow = styled(ArrowRightSquareFill)`

    position:absolute;
    width:2rem;
    height: 2rem;
    right: 0rem;
    cursor: pointer;
    color: gray;

    z-index: 5;

    &:hover
    {
        color: #FFB2C0;
        transition: .3s;
    }

    @media (max-width:768px){

        height: 1rem;
        width:1rem;
    }

    @media (max-width:400px){

    
    right: 2rem;
    }



`;

const LeftArrow = styled(ArrowLeftSquareFill)`

    position:absolute;
    width:2rem;
    height: 2rem;
    left: 0rem;
    cursor: pointer;
    color: gray;

    z-index: 5;

    &:hover
    {
        color: #FFB2C0;
        transition: .3s;
    }

    @media (max-width:768px){

    height: 1rem;
    width:1rem;
    }

    @media (max-width:400px){

    
    left: 2rem;
    }

`;

const Indicator = styled.span`

    display:flex;
    position: absolute;
    bottom: 1rem;


`;

const PhotoButton = styled.button`
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 100%;
    border: none;
    outline: none;
    box-shadow: 0px 0px 5px #555;
    margin: 0 0.2rem;
    cursor:pointer;
    transition: .3s ease-out;


    background-color: ${props => props.status === 'active' ? 'white'
            : 'gray'};


`;

export const Carosuel = (project) => {
    const [slide, setSlide] = useState(0);

    const getFileExtension = (filename) => {
        return filename.split('.').pop();
    }

    const nextSlide = () => {
        if (slide === project.data.media.length - 1) {
            setSlide(0)
        }


        else {
            setSlide(slide + 1);

        }

    }

    const prevSlide = () => {

        if (slide === 0) {
            setSlide(project.data.media.length - 1)
        }

        else {
            setSlide(slide - 1);
        }

    }

    return (
        <Container>
            <LeftArrow onClick={prevSlide} />

            {
                project.data.media.map((item, idx) => {
                    return (

                        <>
                            {

                                getFileExtension(item.src) === 'png'
                                    ?
                                    <Slide key={idx} src={item.src} alt={item.alt} status={slide === idx ? "show" : "hide"}></Slide>

                                    : <VideoSlide key={idx} alt={item.alt} status={slide === idx ? "show" : "hide"} autoPlay loop muted>

                                        <source src={item.src} type='video/mp4'></source>
                                    </VideoSlide>


                            }



                        </>
                    )
                })
            }

            <RightArrow onClick={nextSlide} />
            <Indicator>

                {
                    project.data.media.map((_, idx) => {
                        return (

                            <PhotoButton key={idx} onClick={() => setSlide(idx)} status={slide === idx ? "active" : "inactive"}></PhotoButton>
                        )
                    })
                }

            </Indicator>
        </Container>
    )
}