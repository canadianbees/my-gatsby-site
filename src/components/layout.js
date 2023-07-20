import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Hamburger from "./hamburger";
import data from "./Facts/facts.json";


const Container = styled.div`
    flex-direction:column;
    align-items:center;
    justify-content:center;
    position: relative;
    display:flex;
    font-family: Coolvet;
    width:100%;
`;

const Main = styled.main`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;

`;

const Nav = styled.nav`
    width:100%;
    min-height:100px;

    display:flex;
    justify-content:center;

`;

const Heading = styled.div`
    color: #090C08;
    font-size: 2.75rem;
    text-align: center;

    @media (max-width:1000px){
        max-width:885px;
        font-size:2.5rem;
      
      
      }
   
    @media (max-width:425px){
        max-width:375px;
        font-size:2rem;
      
      }

`;


const Fact = styled.a`
text-align:center;
font-size:.75rem;
    text-decoration: none;
    color: #090C08;

    &:hover {
        color: #FFB2C0;
        transition: .3s;
                            
    }

`;
const NavLinks = styled.ul`
 
    display: flex;
    list-style: none;
    align-self:center;
`;

const NavLinkItem = styled.li`
    padding-right: 2rem;
`;

const Name = styled.p`
    text-align: center;

    position: fixed;
    bottom:90px;

`;

const Lunch = styled.div`


`;

 const RNG = (length) => {

    return Math.floor(Math.random() * ((length - 1) - 0 + 1)) + 0;
}

const Layout = ({ pageTitle, children }) => {

    const [hamburgerOpen, setBurger] = useState(false);
    const [fact, setFact] = useState({});

    const toggleBurger = () => {

        if (hamburgerOpen) {
            setBurger(false);
        }

        else {

            setBurger(true);
        }
    };


    const consoleText = (words, id, colors) => {

        //if colors are bad, make the text black
        if (colors === undefined) colors = ['#fff'];
        var visible = true;
        var con = document.getElementById('console'); //underscore
        var letterCount = 1;
        var x = 1;
        var waiting = false;
        var target = document.getElementById(id) //span tag
        target.style.fontSize = '3em';
        target.setAttribute('style', 'color:' + colors[0])
        window.setInterval(function () {

            //if there is no word shown
            if (letterCount === 0 && waiting === false) {
                waiting = true;
                target.innerHTML = words[0].substring(0, letterCount)
                window.setTimeout(function () {
                    var usedColor = colors.shift();
                    colors.push(usedColor);
                    var usedWord = words.shift();
                    words.push(usedWord);
                    x = 1;
                    target.setAttribute('style', 'color:' + colors[0])
                    letterCount += x;
                    waiting = false;
                }, 1000)


            } else if (letterCount === words[0].length + 1 && waiting === false) {
                waiting = true;
                window.setTimeout(function () {
                    x = -1;
                    letterCount += x;
                    waiting = false;
                }, 1000)
            } else if (waiting === false) {
                target.innerHTML = words[0].substring(0, letterCount)
                letterCount += x;
            }
        }, 100)
        window.setInterval(function () {
            if (visible === true) {
                con.className = 'console-underscore hidden'
                visible = false;

            } else {
                con.className = 'console-underscore'
                visible = true;
            }
        }, 400)
    }

    async function fetchData() {


        if (pageTitle === 'Home Page') {
            consoleText(['welcome!', 'go ahead and look around.', 'made with React.'], 'text', ['#FFB2C0', '#FFB2C0', '#FFB2C0']);
            let index = RNG(data.list.length)
            setFact(data.list[index]);
        }

        if (pageTitle === 'My Spotify') {

            consoleText(['my Spotify.', 'click a track!'], 'text', ['#FFB2C0', '#FFB2C0']);
        }

        if (pageTitle === 'About Me') {

            consoleText(['who am i?', 'glad you asked.'], 'text', ['#FFB2C0', '#FFB2C0']);
        }

        if (pageTitle === 'Portfolio') {

            consoleText(['my work'], 'text', ['#FFB2C0']);
        }




    }
    useEffect(() => {

        fetchData();

    }, []);

    return (

        <>
            <Container>
                <Nav className='navigation'>
                    <Lunch onClick={toggleBurger}>
                        <Hamburger isOpen={hamburgerOpen} ></Hamburger>
                    </Lunch>
                    <NavLinks className='words'>
                        <NavLinkItem>
                            <Link to="/" className="nav-link-text"> HOME</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link to="/about" className="nav-link-text">ABOUT</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link className="nav-link-text" to="/mySpotify">SPOTIFY</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link className="nav-link-text" to="/Projects">PORTFOLIO</Link>
                        </NavLinkItem>
                    </NavLinks>


                    <style>
                        {
                            `
                            .nav-link-text {
                                color: #090C08;
                                text-decoration: none;

                            }
                            
                            
                            .nav-link-text:hover {
                                color: #FFB2C0;
                                transition: .3s;
                            
                            }
                            
                            .console-underscore {
                                display:inline-block;
                               position:relative;
                               top:-0.14em;
                               left:10px;
                             }
                            
                             .hidden {
                                opacity:0;
                              }

                            @media (max-width:768px)
                            {

                                .words{

                                    display:inline;
                                    visibility:${hamburgerOpen ? 'visbile' : 'hidden'};
                                    position:fixed;
                                    padding-left: 8px;
                                    margin-top: 200px;
                                    z-index:10;
                                    background-color:white;
                                    width: 150px;
                                }

                                .navigation
                                {
                                    justify-content: normal;   
    
                                }

                            }

                            `
                        }
                    </style>

                </Nav>
                <Main>


                    {pageTitle === 'Home Page' ?
                        <>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Heading>
                                <span id='text'></span>
                                <div className='console-underscore' id='console'>&#95;
                                </div>
                            </Heading>
                            <br></br>
                            <br></br>
                            <br></br>
                            <Fact href={fact.url} > {fact.fact}</Fact>
                            <Name>
                                by celina alzenor
                                <br></br>
                                student
                            </Name>
                        </> :
                        <>
                            <Heading>
                                <span id='text'></span>
                                <div className='console-underscore' id='console'>
                                    &#95;
                                </div>
                            </Heading>
                        </>}
                    {children}
                </Main>
            </Container>
        </>
    )
}

export default Layout