import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { Title, Content, Wrapper } from '../elements';

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  > * {
    margin: 5px;
  }
`;

const Portfolio = () => (
  <Wrapper as="section">
    <Content>
      <Title>Algumas coisas que eu fiz</Title>
      <Grid>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img src="https://via.placeholder.com/250" alt="placeholder" />
          </Link>
        </div>
      </Grid>
    </Content>
  </Wrapper>
);

export default Portfolio;
