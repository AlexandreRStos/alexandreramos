import React from 'react';
import styled from 'styled-components';

import { graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Wrapper, Content, Title } from '../elements';

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > * {
    padding: 0 5px;
  }
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
      <Wrapper as="section">
        <Content>
          <Title>Alguns parceiros e clientes</Title>
          <Grid>
            <div>
              <Img fixed={data.asiamedImage.childImageSharp.fixed} alt="Asiamed" />
            </div>
            <div>
              <Img fixed={data.aromagospelImage.childImageSharp.fixed} alt="Aroma Gospel" />
            </div>
            <div>
              <Img fixed={data.agenciaredImage.childImageSharp.fixed} alt="Agencia Red" />
            </div>
            <div>
              <Img fixed={data.asiaserviceImage.childImageSharp.fixed} alt="Asia Service" />
            </div>
          </Grid>
        </Content>
      </Wrapper>
    )}
  />
);

export default Clients;
