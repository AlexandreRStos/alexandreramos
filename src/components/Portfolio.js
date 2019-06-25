import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import SvgExternalLink from '../images/svg/external-link-symbol.svg';
import { Title, Content, Wrapper } from '../elements';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.8rem;

  > * {
    margin: 5px;
  }
`;

const Item = styled.div`
  grid-column: ${props => props.column && props.column};
  grid-row: ${props => props.row && props.row};
  justify-self: center;
  align-self: center;
  width: 100%;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.normal};

  :hover > div {
    opacity: 1;
    > a {
      opacity: 1;
    }
  }
`;

const Hover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7159c1df;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const Link = styled.a`
  opacity: 0;
  color: ${({ theme }) => theme.colors.bg.default};
  transition: all ${({ theme }) => theme.transitions.normal};
  padding: 0 0.5rem;

  svg {
    transform: translateY(2px);
    path {
      transition: all ${({ theme }) => theme.transitions.normal};
    }
  }

  :hover {
    color: #ff916f;
    path {
      fill: #ff916f;
    }
  }
`;

const Image = styled(Img)`
  max-width: 100%;
  margin: 0;
  box-shadow: 4px 4px 1px rgba(50, 50, 50, 0.1);
`;

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
    <Wrapper as="section" id={id} background>
      <Content>
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
      </Content>
    </Wrapper>
  );
};

export default Portfolio;

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
};
