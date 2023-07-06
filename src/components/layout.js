import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import '../styles/links.css';
import { useEffect } from 'react';

const Container = styled.div
    `
  flex-direction:column;
  align-items:center;
  justify-content:center;
  position: relative;
  display:flex;
  font-family: Coolvet;
`;
const Main = styled.main
    `
display:flex;
flex-direction:column;
align-items:center;

`;
const Heading = styled.div
    `
    color: #090C08;
    font-size: 3rem;
    text-align: center;

    @media (max-width:320px){
        
        font-size:50px;
      
      }

      @media (max-width:375px){
        
        font-size:60px;
      
      }
`;


const NavLinks = styled.ul
    `
    display: flex;
    list-style: none;
`;

const NavLinkItem = styled.li
    `
padding-right: 2rem;
`;

const Name = styled.p
    `
text-align: center;

`

const Layout = ({ pageTitle, children }) => {


    function consoleText(words, id, colors) {

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
        }

        if (pageTitle === 'My Spotify') {

            consoleText(['my Spotify.', 'click a track!', 'ariana rocks.'], 'text', ['#FFB2C0', '#FFB2C0', '#FFB2C0']);
        }

        if (pageTitle === 'About Me') {

            consoleText(['who am i?', 'glad you asked.'], 'text', ['#FFB2C0', '#FFB2C0']);
        }

        if (pageTitle === 'Projects') {

            consoleText(['PROJECTS!', 'ENJOY!'], 'text', ['#FFB2C0', '#FFB2C0']);
        }


    }
    useEffect(() => {

        fetchData();

    }, []);



    return (

        <>
            <Container>
                <nav>
                    <NavLinks>
                        <NavLinkItem>
                            <Link to="/" className="nav-link-text"> HOME</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link to="/about" className="nav-link-text">ABOUT</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link className="nav-link-text" to="/myProjects">PROJECTS</Link>
                        </NavLinkItem>
                        <NavLinkItem>
                            <Link className="nav-link-text" to="/mySpotify">SPOTIFY</Link>
                        </NavLinkItem>
                    </NavLinks>
                </nav>
                <Main>


                    {pageTitle === 'Home Page' ?
                        <>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <br></br><br></br>
                            <Heading>
                                <span id='text'></span>
                                <div class='console-underscore' id='console'>&#95;
                                </div>
                            </Heading>

                            <Name>
                                <br></br><br></br>
                                <br></br><br></br>
                                <br></br><br></br>
                                <br></br><br></br>
                                <br></br><br></br>
                                <br></br><br></br>
                                by celina alzenor
                                <br></br>
                                student, frontend, creative

                            </Name>
                        </> :
                        <>
                            <Heading>
                                <span id='text'></span>
                                <div class='console-underscore' id='console'>
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