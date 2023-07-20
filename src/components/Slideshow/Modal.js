import React from "react";
import styled from "styled-components";
import { Close } from '@styled-icons/material'
import { Carosuel } from "./Carousel";

const Background = styled.div`
min-height:100vh;
min-width:100vw;
left: 0;
top: 0;
background-color: rgba(0,0,0,0.4);
position: fixed;
z-index: 4;

display:flex;
justify-content: center;
align-items: center;

`;
const Container = styled.div`
    display: grid; 
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    min-height:700px;

    width:1250px;

    position:absolute;
    z-index:4;

    box-shadow:0px 0px 200px 0px  black;
    border-radius: 1rem;
    background-color: #C3B59F;

    @media (max-width:768px){
        grid-template-rows: auto;
        grid-template-columns: auto;
        width:600px;
        min-height:auto;

    }

    //large moba
    @media (max-width:425px){

        width:300px;
    }


    @media (max-width:400px){

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

const Bio = styled.div`

   max-width: 500px;   
   grid-row-start: 1;
   grid-column-start: 1;

   grid-row-end: 3;
   grid-column-end: 2;

   
    @media (max-width:768px){

        width:600px;
        grid-row-start: 1;
        grid-column-start: 1;

        grid-row-end: 2;
        grid-column-end: 3;
    }

    //large moba
    @media (max-width:425px){

        width:100%;
    }
`;

const Slideshow = styled.div`

    display:flex;
    align-items: center;
    justify-content: center;
    grid-row-start: 1;
    grid-column-start: 2;

    grid-row-end: 3;
    grid-column-end: 3;

    position:relative;

    width:800px;

    @media (max-width:768px){
        grid-row-start: 2;
        grid-column-start: 1;

        grid-row-end: 3;
        grid-column-end: 3;
        width:600px;

        top:-20px
    }

//large moba
@media (max-width:425px){

display:none;
}


@media (max-width:400px){

display:none;
}


//iphone SE - medium moba
@media (max-width:375px){

    display:none;
}

//small moba
@media (max-width:320px){
display:none;
}


`;

const Words = styled.div`

    font-size: 20px;
    margin-top:-30px;
    text-align:justify;
    padding-left: 18px;

    h4{
    font-size: 30px;
    }

    p{

    margin-top: -40px;

    }

    @media (max-width:768px){
        font-size: .5rem;
        width:563px;
        padding-right:18px;
    }

    //large moba
    @media (max-width:425px){
        width: 263px;
        margin-right: 18px;
    }


    @media (max-width:400px){

        width:91%;
        margin-right: 18px;
    }


    //iphone SE - medium moba
    @media (max-width:375px){

        width:89%;
        margin-right: 18px;
    }

    //small moba
    @media (max-width:320px){
        width:275px;
        padding-right:10px;
        padding-left: 13px;
    }

`;

const CloseButton = styled.div`
   
    padding-left:10px;
    padding-top:10px;
    width:5%;
`;

const X = styled(Close)`
  
    cursor: pointer;

    &:hover{

        color: #FFB2C0;
        transition: .3s;

    }


`;


const Modal = ({ closeModal, portfolio, modalStatus }) => {
    return (
        <Background>
            <Container status={modalStatus.status}>
                <Bio>
                    <CloseButton>
                        <X size='48' onClick={() => {
                            closeModal(false);
                            modalStatus({
                                id: "",
                                status: false
                            })
                        }}
                        />
                    </CloseButton>
                    <Words>
                        <h4> {portfolio.title}</h4>
                        <br></br>
                        <p>{portfolio.description}</p>
                    </Words>
                </Bio>
                <Slideshow>
                    <Carosuel data={portfolio} />
                </Slideshow>

            </Container>
        </Background>
    )
}


export default Modal