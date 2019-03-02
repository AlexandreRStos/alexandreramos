import React from 'react';
import styled from 'styled-components';

import { Layout, Portfolio, Stacks, Clients, Contact, HeaderHome } from '../components';
import { Title, Content, Wrapper } from '../elements';

const Subtitle = styled.h3`
  font-size: ${props => props.theme.fontSize.default};
  margin-bottom: 1rem;
`;

const IndexPage = () => (
  <Layout>
    <HeaderHome hero />
    <Wrapper as="section" id="sobre" background>
      <Content>
        <Title>Sobre mim e o que faço</Title>
        <p>
          Me chamo Alexandre Ramos e desenvolvo projetos atraente que ganham vida usando transições e animações que
          atendem aos meus clientes, usando as tecnologias mais sofisticadas disponíveis atualmente para websites e
          aplicativos totalmente interativos e responsivos.
        </p>
        <p>
          Eu adoro trabalhar com agências e marcas para ajudá-las a atingir seu objetivo de criar propriedades digitais
          verdadeiramente notáveis que obtêm a elas e seus clientes os resultados de que precisam.
        </p>
        <p>Sou apaixonado pelo poder das cores e formas no desenvolvimento de um ótimo design.</p>
        <p>
          É claro que o diabo está nos detalhes, e é por isso que é importante para mim não apenas ser criativo, mas
          também prestar atenção meticulosa aos detalhes para que meus clientes obtenham os resultados desejados.
        </p>
      </Content>
    </Wrapper>

    <Wrapper as="section" id="servicos">
      <Content>
        <Title>Algumas soluçoes que posso desenvolver para voçê</Title>
        <Subtitle>Sites</Subtitle>
        <p>
          Já possui um site ? Ou o seu site não tem um design legal, está lento ou não te agrada? Posso te ajudar com
          sites estáticos, com os principais tecnologias do mercado, ou ainda posso desenvolver um CMS exclusivamente
          seu. Os sites são criados para serem extremamente leves, rápidos e totalmente responsivos. Também são
          utilizadas boas práticas para melhorar o SEO e seu site apareça nas pesquisa dos pricinpias buscadores como o
          GOOGLE.
        </p>
        <Subtitle>Sistemas e APIs</Subtitle>
        <p>
          Precisa de um sistema simples, ou um bem elaborado? Desenvolvo seu sistema que atender suas necessidades. O
          seu sistema pode trabalhar com pagamentos, dados em tempo real ou gráficos, o que for melhor para o seu
          negócio.
        </p>
        <Subtitle>SPA &amp; PWA</Subtitle>
        <p>
          O site, ou sistema, é desenvolvido utilizando o conceito de Single-Page Applications (SPA), permitindo que
          sejam muito rápidos e leves, o que não irá consumir muitos dados de rede, quando forem visitados através de
          redes móveis. Com Progressive Web Apps (PWA), o seu site, ou sistema, pode até mesmo ser acessado quando você,
          ou o visitante, não estiverem conectados na Internet. Este site inclusive já funciona offline, testa aí ;.
        </p>
      </Content>
    </Wrapper>
    <Portfolio id="portfolio" />
    <Stacks />
    <Clients />
    <Contact id="contato" />
  </Layout>
);

export default IndexPage;
