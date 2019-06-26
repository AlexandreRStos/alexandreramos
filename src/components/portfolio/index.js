import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import SvgExternalLink from '../../images/svg/external-link-symbol.svg';
import { Title, Wrapper, Section } from '../../elements';

import { Grid, Link, Item, Image, Hover } from './styles';

const Portfolio = ({ id }) => {
  const data = useStaticQuery(graphql`
    query {
      zanonciniImage: file(relativePath: { eq: "Zanoncini-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      albertoImage: file(relativePath: { eq: "alberto-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      chamanozapImage: file(relativePath: { eq: "chamanozap.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asiafacilitiesImage: file(relativePath: { eq: "asiafacilities.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      asiamedImage: file(relativePath: { eq: "asiamed-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      atargojuniorImage: file(relativePath: { eq: "AtargaJunior-tela.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      aromagospelImage: file(relativePath: { eq: "aromagospel-home.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Section id={id} background>
      <Wrapper>
        <Title>Veja alguns sites que desenvolvi</Title>
        <Grid>
          <Item>
            <Image fluid={data.zanonciniImage.childImageSharp.fluid} alt="Zanoncini site institucional" />
            <Hover>
              <Link href="http://zanoncini.com.br/" alt="site zanoncini" target="_blank" rel="noopener noreferrer">
                Site <SvgExternalLink />
              </Link>
            </Hover>
          </Item>

          <Item row="span 3">
            <Image fluid={data.chamanozapImage.childImageSharp.fluid} alt="Webapp Chama no Zap" />
            <Hover>
              <Link
                href="https://alexandreramosdev.github.io/chamanozap/"
                alt="site chama no zap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site <SvgExternalLink />
              </Link>{' '}
              <Link
                href="https://github.com/Alexandreramosdev/chamanozap"
                alt="codigo chama no zap"
                target="_blank"
                rel="noopener noreferrer"
              >
                Codigo <strong>&lt;\&gt;</strong>
              </Link>
            </Hover>
          </Item>

          <Item>
            <Image fluid={data.albertoImage.childImageSharp.fluid} alt="Tela de Captura de Email" />
            <Hover>
              <Link
                href="https://albertojosmar.com.br/"
                alt="site alberto josmar"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site <SvgExternalLink />
              </Link>
            </Hover>
          </Item>

          <Item>
            <Image fluid={data.asiafacilitiesImage.childImageSharp.fluid} alt="Site asia facilitie onepage" />
            <Hover>
              <Link
                href="http://asiafacilities.com.br"
                alt="site asia facilities"
                target="_blank"
                rel="noopener noreferrer"
              >
                Site <SvgExternalLink />
              </Link>
            </Hover>
          </Item>

          <Item>
            <Image fluid={data.asiamedImage.childImageSharp.fluid} alt="Site Example App onepage" />
            <Hover>
              <Link href="https://asiamed.com.br/" alt="site asiamed" target="_blank" rel="noopener noreferrer">
                Site <SvgExternalLink />
              </Link>
            </Hover>
          </Item>

          <Item>
            <Image fluid={data.atargojuniorImage.childImageSharp.fluid} alt="landing page deputado Atargo Junior " />
            {/* <Hover>
                <Link
                  href="https://artagaojunior.netlify.com/"
                  alt="artago junior"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site <SvgExternalLink />
                </Link>
              </Hover> */}
          </Item>

          <Item>
            <Image fluid={data.aromagospelImage.childImageSharp.fluid} alt="landing page deputado Atargo Junior " />
            {/*  <Hover>
                <Link
                  href="https://aromagospel.com.br/"
                  alt="site aroma gospel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site <SvgExternalLink />
                </Link> 
              </Hover> */}
          </Item>
        </Grid>
      </Wrapper>
    </Section>
  );
};

export default Portfolio;

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
};
