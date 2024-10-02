import * as React from 'react'
import Layout from '../components/layout'
import styled from 'styled-components'
import { Html5, Python, ReactLogo } from '@styled-icons/fa-brands'
import { Javascript, Java } from '@styled-icons/simple-icons'
import { keyframes } from 'styled-components'
import CProg from '../assets/images/icons8-c-programming.svg'
import { Timeline } from '../components/Timeline/timeline'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  text-align: center;
  margin-left: 100px;
  margin-right: 100px;

  @media (max-width: 1045px) {
    grid-template-rows: 0.5fr 0.5fr 1fr;
    grid-template-columns: 1fr 1fr;
  }
`

const Me = styled.div`
  grid-row-start: 1;
  grid-column-start: 1;
  grid-row-end: 2;
  grid-column-end: 2;

  @media (max-width: 1045px) {
    grid-row-start: 1;
    grid-column-start: 1;

    grid-row-end: 2;
    grid-column-end: 3;
  }

  @media (max-width: 425px) {
    p {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (max-width: 400px) {
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (max-width: 375px) {
    p {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (max-width: 320px) {
    p {
      padding-left: 75px;
      padding-right: 75px;
    }
  }
`

const Goal = styled.div`
  grid-row-start: 2;
  grid-column-start: 1;
  grid-row-end: 3;
  grid-column-end: 2;

  @media (max-width: 1045px) {
    grid-row-start: 2;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;
  }

  @media (max-width: 425px) {
    p {
      padding-left: 10px;
      padding-right: 10px;
    }
  }

  @media (max-width: 375px) {
    p {
      padding-left: 40px;
      padding-right: 40px;
    }
  }

  @media (max-width: 320px) {
    grid-row-start: 2;
    grid-column-start: 1;

    grid-row-end: 3;
    grid-column-end: 3;

    p {
      padding-left: 75px;
      padding-right: 75px;
    }
  }
`

const Cube = styled.div`
  width: 425px;
  height: 425px;
  grid-row-start: 1;
  grid-column-start: 2;
  grid-row-end: 3;
  grid-column-end: 3;
  margin-left: auto;
  margin-right: auto;

  overflow: hidden;
  /* align-self: center;
  justify-self: center; */
  position: relative;

  @media (max-width: 1045px) {
    grid-row-start: 3;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 3;
  }
`

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

`

const Spinner = styled.div`
  animation-name: ${SpinCube};
  animation-timing-function: ease-in-out;
  animation-duration: 12s;
  animation-iteration-count: infinite;
  transform-style: preserve-3d;
  transform-origin: 100px 100px 0;
  margin-left: calc(50% - 100px);
  margin-top: calc(40% - 100px);

  div {
    display: flex;
    position: absolute;
    width: 200px;
    height: 200px;
    background: rgb(9, 12, 8);
    justify-content: center;
    font-size: 50px;
  }
`

const Face1 = styled.div`
  transform: translateZ(100px);
`

const Face2 = styled.div`
  transform: rotateY(90deg) translateZ(100px);
`

const Face3 = styled.div`
  transform: rotateY(90deg) rotateX(90deg) translateZ(100px);
`

const Face4 = styled.div`
  transform: rotateY(180deg) rotateZ(90deg) translateZ(100px);
`

const Face5 = styled.div`
  transform: rotateY(-90deg) rotateZ(90deg) translateZ(100px);
`

const Face6 = styled.div`
  transform: rotateX(-90deg) translateZ(100px);
`

const Headers = styled.h1`
  letter-spacing: 3px;
`

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Container>
        <Me>
          <Headers>ME</Headers>
          <p>
            Hi there! My name is Celina Alzenor. I graduated from the University
            of Central Florida with a degree in Computer Science in May 2024. In
            addition to my degree in Computer Science, I have minors in
            International Engineering, Mathematics, and Political Science.
            Currently, I'm a Snap Up! Apprenctice Software Engineer at{' '}
            <a href="https://www.snap.com/">Snap Inc.</a> working on projects
            that will streamline our development processes.
          </p>
        </Me>
{/* 
        <Cube>
          <Headers>SKILLS</Headers>
          <Spinner>
            <Face1>
              <Html5 style={{ color: '#f06529' }} />
            </Face1>
            <Face2>
              <Python style={{ color: '#FFD43B' }} />
            </Face2>
            <Face3>
              <ReactLogo style={{ color: '#61DBFB' }} />
            </Face3>
            <Face4>
              <Java style={{ color: '#FFFFFF' }} />
            </Face4>
            <Face5>
              <Javascript style={{ color: '#F0DB4F' }} />
            </Face5>
            <Face6>
              <img src={CProg} alt="c language" />
            </Face6>
          </Spinner>
        </Cube> */}
        <Timeline></Timeline>
      </Container>
    </Layout>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage
