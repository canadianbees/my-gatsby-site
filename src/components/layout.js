import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div
`
  font-family: sans-serif;
`;

const Heading = styled.div
`
    color: rebeccapurple;
    font-size: 3rem;
    text-align: center;
`;


//TODO: make nav links centered
const NavLinks = styled.ul
`
    display: flex;
    list-style: none;
   

`;

const NavLinkItem = styled.li
    `
padding-right: 2rem;
`

const NavLinkText = styled.p
    `
color: black;
`;

const Layout = ({ pageTitle, children }) => {
    return (
        <>
            <Container>
                <nav>
                    <NavLinks>
                        <NavLinkItem>
                            <NavLinkText><Link to="/">Home</Link></NavLinkText>
                        </NavLinkItem>

                        <NavLinkItem>
                            <NavLinkText><Link to="/about">About</Link></NavLinkText>
                        </NavLinkItem>

                        <NavLinkItem>
                            <NavLinkText><Link to="/mySpotify">My Spotify</Link></NavLinkText>
                        </NavLinkItem>
                    </NavLinks>
                </nav>
                <main>
                    <Heading>{pageTitle}</Heading>
                    {children}
                </main>
            </Container>
        </>
    )
}

export default Layout