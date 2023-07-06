import * as React from 'react'
import Layout from '../components/layout'
import download from '../assets/images/download.jpg'
import styled from 'styled-components';

const Image = styled.img`

      @media (max-width:425px){
        
        width:300px;
        height:300px;
      
      }


`;


const ProjectsPage = () => {
  return (
    <Layout pageTitle="Projects">
      <Image src={download}></Image>
    </Layout>
  )
}

export const Head = () => <title>Projects</title>

export default ProjectsPage