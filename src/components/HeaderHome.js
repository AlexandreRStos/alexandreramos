import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { rgba } from 'polished';
import { Link, graphql, StaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { Navigation } from '.';
import media from '../utils/media';

const Header = styled.header`
  padding: 1rem;
  background-color: ${props => props.background && props.theme.colors.bg.default};
`;

const Hero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media ${media.phone.up} {
    flex-direction: row;
    padding: 2rem 0;
  }
`;
const Logotipo = styled.h1`
  font-size: ${props => props.theme.fontSize.title};
  text-align: center;
`;
const Rounded = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid ${props => rgba(props.theme.colors.primary, 0.4)};
  @media ${media.phone.up} {
    margin-right: 1rem;
  }
`;
const Image = styled(Img)`
  border-radius: 50%;
  display: block;
  margin: 0;
  padding: 0;
  transform: scale(0.94) translateY(-1px);
`;
const Headline = styled.h2`
  font-size: ${props => props.theme.fontSize.title};
  padding: 1rem 0 3rem;
  margin-bottom: 0;
  @media ${media.phone.up} {
    padding: 2rem 0;
  }
`;

const HeaderHome = ({ hero }) => (
  <StaticQuery
    query={graphql`
      query {
        avatarImage: file(relativePath: { eq: "alexandre.png" }) {
          childImageSharp {
            fixed(width: 200, height: 200) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Header>
        <Link to="/">
          <Logotipo>Alexandre Ramos</Logotipo>
        </Link>
        <Navigation />
        {hero && (
          <Hero>
            <Rounded>
              <Image fixed={data.avatarImage.childImageSharp.fixed} alt="Foto Alexandre Ramos" />
            </Rounded>
            <Headline>
              Ola, <br /> Sou desenvolvedor Web_
            </Headline>
          </Hero>
        )}
      </Header>
    )}
  />
);

export default HeaderHome;

HeaderHome.propTypes = {
  hero: PropTypes.bool,
};

HeaderHome.defaultProps = {
  hero: false,
};
