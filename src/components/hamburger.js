import React from 'react';
import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular'
import { Close } from '@styled-icons/material'


const Meal = styled.div`
   width:7%;
    height: 2rem;
    display: none;
    position:fixed;
    align-self: end;
    justify-self: left;
    cursor: pointer;
    z-index:10;
    transition: .3s;


    &:hover{
        color: #FFB2C0;
    }

   
    @media (max-width: 768px){
        display:flex;
        flex-direction:column;
        justify-content: space-around;

    }
    
`;



const Hamburger = ({ isOpen }) => {

    return (

        <>

            {isOpen ?

                <Meal>
                    <Close size='48' />
                </Meal>


                :
                <Meal>
                    <Menu size='48' />
                </Meal>


            }




        </>
    )







}

export default Hamburger