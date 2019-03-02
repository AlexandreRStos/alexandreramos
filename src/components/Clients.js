import React from 'react';
import styled from 'styled-components';

import { Wrapper, Content, Title } from '../elements';
import AsiaMed from '../images/asiamed.png';
import AsiaService from '../images/asiaservice.png';
import AgenciaRed from '../images/agenciared.png';
import AromaGospel from '../images/aromagospel.png';

const Grid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  > * {
    padding: 0 5px;
  }
`;

const Img = styled.img`
  height: 50px;
  opacity: 0.7;
  user-select: none;
  text-align: center;
`;

const Clients = () => (
  <Wrapper as="section">
    <Content>
      <Title>Alguns parceiros e clientes</Title>
      <Grid>
        <div>
          <Img src={AsiaMed} alt="Asiamed" />
        </div>
        <div>
          <Img src={AromaGospel} alt="Aroma Gospel" />
        </div>
        <div>
          <Img src={AgenciaRed} alt="Agencia Red" />
        </div>
        <div>
          <Img src={AsiaService} alt="Asia Service" />
        </div>
      </Grid>
    </Content>
  </Wrapper>
);

export default Clients;
