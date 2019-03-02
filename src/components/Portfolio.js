import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

import { Title, Content, Wrapper } from '../elements';

import zanoncini from '../images/Zanoncini-home.png';
import example from '../images/example-home.png';
import chamanozap from '../images/chamanozap.png';
import alberto from '../images/alberto-home.png';
import atargojunior from '../images/AtargaJunior-tela.png';
import aromagosple from '../images/aromagospel-home.png';
import asiamed from '../images/asiamed-home.png';

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
`;

const Img = styled.img`
  max-width: 100%;
  margin: 0;
  box-shadow: 4px 4px 1px rgba(50, 50, 50, 0.1);
`;

const Portfolio = ({ id }) => (
  <Wrapper as="section" id={id} background>
    <Content>
      <Title>Algumas coisas que eu fiz</Title>
      <Grid>
        <Item column="1/2">
          <Link to="">
            <Img src={zanoncini} alt="Zanoncini site institucional" />
          </Link>
        </Item>
        <Item column="2/3">
          <Link to="">
            <Img src={alberto} alt="Tela de Captura de Email" />
          </Link>
        </Item>
        <Item column="3/4" row="1/4">
          <Link to="/#">
            <Img src={chamanozap} alt="Webapp Chama no Zap" />
          </Link>
        </Item>
        <Item column="1/2">
          <Link to="/#">
            <Img src={example} alt="Site Example App onepage" />
          </Link>
        </Item>
        <Item column="2/3">
          <Link to="/#">
            <Img src={asiamed} alt="Site Example App onepage" />
          </Link>
        </Item>
        <Item column="1/2">
          <Link to="/#">
            <Img src={atargojunior} alt="landing page deputado Atargo Junior " />
          </Link>
        </Item>
        <Item column="2/3">
          <Link to="/#">
            <Img src={aromagosple} alt="landing page deputado Atargo Junior " />
          </Link>
        </Item>
      </Grid>
    </Content>
  </Wrapper>
);

export default Portfolio;

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
};
