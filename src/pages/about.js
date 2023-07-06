import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Html5, Python, ReactLogo, RProject} from '@styled-icons/fa-brands';
import { Javascript } from '@styled-icons/simple-icons';
import { keyframes } from 'styled-components';
import CProg from '../assets/images/icons8-c-programming.svg'

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;;
    column-gap:100px;

    text-align:center;
    margin-left:100px;
    height:100%;
    
`;

const Me = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;
`;

const Goal = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;
`;

const Cube = styled.div`
  width:500px;
  height:500px;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 3;

  overflow:hidden;
  align-self: center;
  justify-self: center;
  position: relative;

  top:-33px;
 

`;



const SpinCube = keyframes`
    
    from,
    to{
      transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }

    16%{
      transform: rotateY(-90deg);
    }

    32%{
      transform: rotateY(-90deg) rotateZ(90deg);
    }

    48%{
      transform: rotateY(-180deg) rotateZ(90deg);
    }

    64%{
      transform: rotateY(-270deg) rotateX(90deg);
    }

    80%{
      transform: rotateX(90deg);
    }

`;

const Spinner = styled.div`

  animation-name: ${SpinCube};
  animation-timing-function: ease-in-out;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);
  margin-top: calc(40% - 100px);

  div
  {
    display: flex;
    position:absolute;
    width:200px;
    height:200px;
    background: rgb(9, 12, 8);
    justify-content: center;
    font-size:50px;

  }

`;

const Face1 = styled.div`
  transform: translateZ(100px);
`;

const Face2 = styled.div`
  transform:   rotateY(90deg) translateZ(100px); 
`;

const Face3 = styled.div`
  transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
`;

const Face4 = styled.div`
 transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);

`;

const Face5 = styled.div`
 transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);

`;

const Face6 = styled.div`
 transform: rotateX(-90deg) translateZ(100px);

`;

const Headers = styled.h1`

  letter-spacing: 3px;
`;


const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Container>

        <Me>
          <Headers>
            ME
          </Headers>
          <p>
            Hi there! My name is Celina Alzenor. I'm a computer science student studying at the University of Central Florida with a graduation date of May 2024.
            I started at UCF in June 2020 and I've learned a lot about different technologies and computer science concepts since then. I am ready to apply what I've learned
            and am eager to start my professional career in the tech industry.
          </p>
        </Me>

        <Cube>
          <Headers>
            SKILLS
          </Headers>
          <Spinner>
            <Face1><Html5 style={{ color: '#f06529' }} /></Face1>
            <Face2><Python style={{ color: '#FFD43B' }} /></Face2>
            <Face3><ReactLogo style={{ color: '#61DBFB' }} /></Face3>
            <Face4><RProject style={{ color: '#165CAA' }} /></Face4>
            <Face5><Javascript style={{ color: '#F0DB4F' }} /></Face5>
            <Face6><img src={CProg}/></Face6>
          </Spinner>
        </Cube>

        <Goal>
          <Headers>
            MY GOALS
          </Headers>
          <p>
            I would like to obtain a position as an entry-level software developer or an entry-level data analyst. I am a very fast learner and I'm determined to thrive in any position I am put in.
            I have an interest in politics and would like to some day work at a civc technology company.
          </p>
        </Goal>


      </Container>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage