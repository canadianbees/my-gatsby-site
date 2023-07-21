import * as React from "react"
import styled from 'styled-components'
import { useState } from "react"
import Modal from '../Slideshow/Modal.js'
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    flex-wrap: wrap;

 //large moba
@media (max-width:425px){

width:400px;
}


@media (max-width:400px){

width:375px;
}


//iphone SE - medium moba
@media (max-width:375px){

width:325px;
}

//small moba
@media (max-width:320px){
width:300px;
}
    
`;

const Content = styled.div`

    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    background: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0) 0,
                rgba(0, 0, 0, 1)
            );
    position: absolute;
    width: 400px;
    height: 300px;
    border-radius:  0 0 1rem 1rem;
    max-height: 420px;
    margin-top: -300px;
    z-index: 3;

    color:white;

    div
    {
        margin-top:120px;

    }

//large moba
@media (max-width:425px){

    width:400px;
}


@media (max-width:400px){

    width:375px;
}


//iphone SE - medium moba
@media (max-width:375px){

    width:325px;
}

//small moba
@media (max-width:320px){
    width:300px;
}
    
`;

const ImageBox = styled.div`

box-shadow:0px 0px 10px 10px #756d5f;
border-radius: 1rem;
height: 420px;
position:relative;

 &:after
{
    
    position:absolute;
    content: "";
    background: linear-gradient(180deg, #FFB2C0, #000);
    width: 400px;
    height: 420px;
    z-index: 2; 
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    opacity: 0;
    border-radius: 1rem;
    top: 0;
    left: 0;

    @media (max-width:425px){

width:400px;
}


@media (max-width:400px){

width:375px;
}


//iphone SE - medium moba
@media (max-width:375px){

width:325px;
}

//small moba
@media (max-width:320px){
width:300px;
}
 
}

&:hover
{
    ${Content}
    {
        background-color: rgba(0,0,0,0);
    }
}

&:hover:after
    {
        opacity: 0.85;
    
    }

`;

const Image = styled(GatsbyImage)`

    height: 420px;
    width: 400px;
    object-fit:cover;
    border-radius: 1rem;

    //large moba
@media (max-width:425px){

width:400px;
}


@media (max-width:400px){

width:375px;
}


//iphone SE - medium moba
@media (max-width:375px){

width:325px;
}

//small moba
@media (max-width:320px){
width:300px;
}

`;

const Title = styled.p`
margin-left:15px;
margin-top: 0px;
margin-bottom: 0px;


`;

const Role = styled.p`
margin-left:15px;
margin-top: 0px;
margin-bottom: 0px;


`;

const Tools = styled.p`
margin-left:15px;
margin-top: 0px;
margin-bottom: 0px;
letter-spacing: 3.3px;
font-size:20px;



`;

const View = styled.button`
    margin-left:15px;
    margin-top:10px;
    height: 40px;
    line-height: 34px;
    border: 2px solid  #FFB2C0;
    border-radius: 4px;
    font-size: 14px;
    color: #fff;
    background: transparent;
    text-transform: uppercase;
    font-weight: 700;
    transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;


    &:hover
    {
        transition: .3s;
        background:  #FFB2C0;
    }


`;

const RenderPortfolio = () => {

    const sourceData = useStaticQuery(query)
    const [data] = useState(sourceData.allPortfolioJson.nodes[0].portfolio);
    const [open, setOpen] = useState(false);
    const [modalActive, setModalActive] = useState(
        {
            id: null,
            status: false

        });
    const handleClick = (project) => {

        //if project has a url, open it in a new tab
        if (project.url) {
            window.open(project.url, "_blank");
        }

    }

    return (
        <ImageContainer>
            {

                data.map((port, idx) => {

                    const cover = getImage(port.src)
                    return (
                        <div key={idx}>
                            <ImageBox>
                                <Image image={cover} alt='portfolio'>
                                </Image>

                                <Content>
                                    <div>
                                        <Title>{port.title}</Title>
                                        <Role>{port.role}</Role>
                                        <Tools>{port.tools}</Tools>
                                        {
                                            port.url ?
                                                <View onClick={() => handleClick(port)}>View</View>
                                                : <></>
                                        }
                                        <View onClick={() => {
                                            //get which prject we clickjed
                                            setModalActive(
                                                {
                                                    id: idx,
                                                    status: !modalActive.status
                                                });

                                            //modal is open
                                            setOpen(true)
                                        }}>
                                            Learn More
                                        </View>
                                    </div>
                                </Content>
                            </ImageBox>
                            <>
                                {/* open the modal if the id's match and the particular modal is active */}
                                {open && modalActive.status && idx === modalActive.id
                                    ? <Modal closeModal={setOpen} portfolio={port} modalStatus={setModalActive} />
                                    : <></>
                                }
                            </>
                        </div>
                    )
                })

            }
        </ImageContainer >


    )


}

export default RenderPortfolio
export const query = graphql`
query MyQuery {
    allPortfolioJson {
      nodes {
        portfolio {
          description
          role
          title
          tools
          url
          src {
            childImageSharp {
              gatsbyImageData(aspectRatio: 1.5, transformOptions: {fit: FILL})
            }
          }
          media {
            src {
              childImageSharp {
                gatsbyImageData(aspectRatio: 1.25, transformOptions: {fit: FILL})
              }
            }
          }
        }
      }
    }
  }



`
