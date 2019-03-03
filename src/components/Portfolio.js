import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Title, Content, Wrapper } from '../elements';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  justify-items: center;
  align-items: center;

  > * {
    margin: 5px;
  }
`;

const Item = styled.div`
  grid-column: ${props => props.column && props.column};
  grid-row: ${props => props.row && props.row};
  max-width: 300px;
  min-width: 80px;
  width: 100%;
`;

const Image = styled(Img)`
  max-width: 100%;
  margin: 0;
  box-shadow: 4px 4px 1px rgba(50, 50, 50, 0.1);
`;

const Portfolio = ({ id }) => (
  <StaticQuery
    query={graphql`
      query {
        zanonciniImage: file(relativePath: { eq: "Zanoncini-home.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        albertoImage: file(relativePath: { eq: "alberto-home.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        chamanozapImage: file(relativePath: { eq: "chamanozap.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        examploImage: file(relativePath: { eq: "example-home.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        asiamedImage: file(relativePath: { eq: "asiamed-home.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        atargojuniorImage: file(relativePath: { eq: "AtargaJunior-tela.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        aromagospelImage: file(relativePath: { eq: "aromagospel-home.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper as="section" id={id} background>
        <Content>
          <Title>Algumas coisas que eu fiz</Title>
          <Grid>
            <Item column="1/2">
              <Image fluid={data.zanonciniImage.childImageSharp.fluid} alt="Zanoncini site institucional" />
            </Item>
            <Item column="2/3">
              <Image fluid={data.albertoImage.childImageSharp.fluid} alt="Tela de Captura de Email" />
            </Item>
            <Item column="3/4" row="1/4">
              <Image fluid={data.chamanozapImage.childImageSharp.fluid} alt="Webapp Chama no Zap" />
            </Item>
            <Item column="1/2">
              <Image fluid={data.examploImage.childImageSharp.fluid} alt="Site Example App onepage" />
            </Item>
            <Item column="2/3">
              <Image fluid={data.asiamedImage.childImageSharp.fluid} alt="Site Example App onepage" />
            </Item>
            <Item column="1/2">
              <Image fluid={data.atargojuniorImage.childImageSharp.fluid} alt="landing page deputado Atargo Junior " />
            </Item>
            <Item column="2/3">
              <Image fluid={data.aromagospelImage.childImageSharp.fluid} alt="landing page deputado Atargo Junior " />
            </Item>
          </Grid>
        </Content>
      </Wrapper>
    )}
  />
);

export default Portfolio;

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
};
