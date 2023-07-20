import * as React from "react"
import Layout from '../components/layout'
import styled from 'styled-components'
import RenderPortfolio from "../components/Portfolio/renderPort.js"


const PortfolioPage = () =>
{
 
  return (
    <Layout pageTitle="Portfolio">
      <br></br>
     <RenderPortfolio></RenderPortfolio>
    </Layout>
  
  )

 
}




export const Head = () => <title>Portfolio</title>
export default PortfolioPage