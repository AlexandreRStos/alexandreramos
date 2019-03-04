import React from 'react';
import styled, { keyframes } from 'styled-components';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Wrapper, Content, Title } from '../elements';

const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-210px * 4))}
`;
const Slider = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;

  ::after {
    content: '';
    width: 35%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
    top: 0;
    left: 0;
    z-index: 1000;
  }
  ::before {
    content: '';
    width: 35%;
    height: 100%;
    position: absolute;
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
    top: 0;
    right: 0;
    z-index: 1000;
  }
`;

const Grid = styled.div`
  display: flex;
  animation: ${scroll} 40s linear infinite;
  width: calc(210px * 8);
  margin: 0 auto;
`;

const Slide = styled.div`
  width: 210px;
  text-align: center;
  opacity: 0.9;
`;

const Clients = () => (
  <StaticQuery
    query={graphql`
      query {
        asiamedImage: file(relativePath: { eq: "asiamed.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        aromagospelImage: file(relativePath: { eq: "aromagospel.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        agenciaredImage: file(relativePath: { eq: "agenciared.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        asiaserviceImage: file(relativePath: { eq: "asiaservice.png" }) {
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <Wrapper as="section">
          <Content>
            <Title>Alguns parceiros e clientes</Title>

            <Slider>
              <Grid>
                <Slide>
                  <Img fixed={data.asiamedImage.childImageSharp.fixed} alt="Asiamed" />
                </Slide>
                <Slide>
                  <Img fixed={data.aromagospelImage.childImageSharp.fixed} alt="Aroma Gospel" />
                </Slide>
                <Slide>
                  <Img fixed={data.agenciaredImage.childImageSharp.fixed} alt="Agencia Red" />
                </Slide>
                <Slide>
                  <Img fixed={data.asiaserviceImage.childImageSharp.fixed} alt="Asia Service" />
                </Slide>
                <Slide>
                  <Img fixed={data.asiamedImage.childImageSharp.fixed} alt="Asiamed" />
                </Slide>
                <Slide>
                  <Img fixed={data.aromagospelImage.childImageSharp.fixed} alt="Aroma Gospel" />
                </Slide>
                <Slide>
                  <Img fixed={data.agenciaredImage.childImageSharp.fixed} alt="Agencia Red" />
                </Slide>
                <Slide>
                  <Img fixed={data.asiaserviceImage.childImageSharp.fixed} alt="Asia Service" />
                </Slide>
              </Grid>
            </Slider>
          </Content>
        </Wrapper>
      </React.Fragment>
    )}
  />
);

export default Clients;
