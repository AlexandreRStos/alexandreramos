import React from 'react';
import Typing from 'react-typist';
import { graphql, useStaticQuery } from 'gatsby';

import { Rounded, Image, Headline, Wrapper } from './styles';

const Hero = () => {
  const data = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "alexandre.png" }) {
        childImageSharp {
          fixed(width: 200, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <Wrapper>
      <Rounded>
        <Image fixed={data.avatarImage.childImageSharp.fixed} alt="Foto Alexandre Ramos" />
      </Rounded>
      <Headline>
        Ola, <br />
        <Typing tyle={{ display: 'inline' }} startDelay={500} cursor={{ hideWhenDone: true }}>
          <span>Sou desenvolvedor Web </span>
          <Typing.Backspace count={18} delay={1250} />
          <span>Front-end </span>
          <Typing.Backspace count={10} delay={1250} />
          <span>Freelancer </span>
        </Typing>
      </Headline>
    </Wrapper>
  );
};

export default Hero;
