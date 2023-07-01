import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div
    `
  margin: auto;
  max-width: 500px;
  font-family: sans-serif;

`;

const Heading = styled.div
    `
color: rebeccapurple;
font-size: 6rem;
`;

const NavLinks = styled.ul
    `
display: flex;
  list-style: none;
  padding-left: 0;

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
        <Container>
            <nav>
                <NavLinks>
                    <NavLinkItem>
                        <NavLinkText><Link to="/">Home</Link></NavLinkText>
                    </NavLinkItem>

                    <NavLinkItem>
                        <NavLinkText><Link to="/about">About</Link></NavLinkText>
                    </NavLinkItem>
                </NavLinks>
            </nav>
            <main>
                <Heading>{pageTitle}</Heading>
                {children}
            </main>
        </Container>
    )
}

export default Layout