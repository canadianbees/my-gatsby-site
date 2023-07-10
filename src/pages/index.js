import * as React from "react";
import Layout from '../components/layout'
import { Linkedin } from "@styled-icons/fa-brands";
import styled from 'styled-components'
import { Handshake } from "@styled-icons/fa-regular";
import { Indeed } from '@styled-icons/simple-icons';
import { Github } from '@styled-icons/bootstrap'


const Logos = styled.div`
  display:flex;
  width:300px;
  justify-content: space-between;
  position: fixed;
  bottom: 40px;
  
`;
const LinkedinLogo = styled(Linkedin)`
  width: 50px;
  height: 50px;
  color: #090C08;
  transition: 0.3s;
  &:hover{
    color: #FFB2C0;
  }

`;

const HandshakeLogo = styled(Handshake)`
  width: 50px;
  height: 50px;
  color: #090C08;
  transition: 0.3s;
  &:hover{
    color: #FFB2C0;
  }
`;

const IndeedLogo = styled(Indeed)`
  width: 50px;
  height: 50px;
  color: #090C08;
  transition: 0.3s;
  &:hover{
    color: #FFB2C0;
  }
`;

const GithubLogo = styled(Github)`
  width: 50px;
  height: 50px;
  color: #090C08;
  transition: 0.3s;
  &:hover{
    color: #FFB2C0;
  }
`;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <Logos>
        <a href='https://linkedin.com/in/celina-alzenor-073b7a237'><LinkedinLogo /></a>
        <a href='https://ucf.joinhandshake.com/stu/users/26313927'><HandshakeLogo /></a>
        <a href='https://profile.indeed.com/?hl=en_US&co=US&from=gnav-employer--post-press--jobseeker'><IndeedLogo /></a>
        <a href='https://github.com/canadianbees'><GithubLogo/></a>
      </Logos>
    </Layout>

  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage

