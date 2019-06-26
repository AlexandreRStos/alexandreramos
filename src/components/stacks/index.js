import React from 'react';
import styled from 'styled-components';
import { Section, Wrapper, Title } from '../../elements';
import SvgJs from '../../images/svg/javascript.svg';
import SvgReact from '../../images/svg/reactjs.svg';
import SvgNode from '../../images/svg/nodejs.svg';
import media from '../../utils/media';

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;

  > * {
    width: 90px;
    height: 90px;
    padding: 0.2rem;

    @media ${media.phone.up} {
      transition: transform ${props => props.theme.transitions.normal};
      width: 140px;
      height: 140px;

      :hover {
        transform: scale(1.04);
      }
    }
    @media ${media.tablet.up} {
      width: 200px;
      height: 200px;
    }
  }
`;

const Stacks = () => (
  <Section>
    <Wrapper>
      <Title>As principais tecnologias que utilizo</Title>
      <Grid>
        <SvgReact />
        <SvgJs />
        <SvgNode />
      </Grid>
      <p>
        A principal tecnologia com que desenvolvo é o <i>javascript</i>, e seus principais frameworks como react, gatsby
        e nodejs. Assim consigo desenvolver com muito mais agilidade e rapidez. Tendo o maior conhecimento possivel da
        tecnologia usanda desenvolvo projetos mais consistente sem bug.
      </p>
    </Wrapper>
  </Section>
);

export default Stacks;
