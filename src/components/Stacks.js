import React from 'react';
import styled from 'styled-components';
import { Wrapper, Content, Title } from '../elements';
import SvgJs from '../images/svg/javascript.svg';
import SvgReact from '../images/svg/reactjs.svg';
import SvgNode from '../images/svg/nodejs.svg';
import media from '../utils/media';

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
  <Wrapper as="section">
    <Content>
      <Title>Minhas principais Stacks</Title>
      <Grid>
        <SvgReact />
        <SvgJs />
        <SvgNode />
      </Grid>
      <p>
        A principal tecnologia que atuo é o javascript, e seus principais frameworks como react, gatsby, node, mando bem
        em Sass e gosto bantante css.
      </p>
    </Content>
  </Wrapper>
);

export default Stacks;
