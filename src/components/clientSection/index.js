import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Section, Wrapper, Title } from '../../elements';

import { Slide, Slider, Grid } from './styles';

const ClientSection = () => {
  const data = useStaticQuery(graphql`
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
  `);

  return (
    <Section>
      <Wrapper>
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
      </Wrapper>
    </Section>
  );
};

export default ClientSection;
