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
          Me chamo Alexandre e desenvolvo sites e aplicativos atraente que ganham vida usando transições e animações,
          com as tecnologias mais sofisticadas disponíveis atualmente.
        </p>
        <p>
          Adoro trabalhar com agências e empreendedores para ajudá-los a atingir seu objetivo de criar propriedades
          digitais verdadeiramente notáveis que obtêm a elas e seus clientes os resultados de que precisam.
        </p>
        <p>Sou apaixonado pelo poder das cores e formas no desenvolvimento de um ótimo design.</p>
        <p>
          É importante para mim não apenas ser criativo, mas também prestar atenção meticulosa aos detalhes para que
          meus projetos obtenham os melhores resultados.
        </p>
      </Content>
    </Wrapper>

    <Wrapper as="section" id="servicos">
      <Content>
        <Title>Algumas soluções que posso desenvolver para você</Title>
        <Subtitle>Sites</Subtitle>
        <p>
          <strong>
            <i>
              Já possui um site? Ou o seu site não tem um design legal, está lento ou não esta aparecendo nas busca do
              Google?
            </i>
          </strong>
          <br />
          Posso te ajudar desenvovendo, atualizando ou Otimizando seu site com as principais tecnologias do mercado. Os
          sites que eu crio são desenvolvidos para serem extremamente leves, rápidos e totalmente responsivos. Também
          são otimizados para melhorar o <i>SEO</i>, assim seu site apareça nas pesquisa dos pricinpias buscadores como
          o<strong> Google</strong>.
        </p>
        <Subtitle>Sistemas e APIs</Subtitle>
        <p>
          <strong>
            <i>Precisa de um sistema simples, ou um bem elaborado?</i>
          </strong>
          <br />
          Desenvolvo sistema que atender suas necessidades. O seu sistema pode trabalhar com pagamentos, dados em tempo
          real ou gráficos, o que for melhor para suas necessidades e do seu negócio.
        </p>
        <Subtitle>SPA &amp; PWA</Subtitle>
        <p>
          Os sites e sistemas que desenvolvo utiliza o conceito de <i>Single-Page Applications (SPA)</i>, permitindo que
          sejam muito mais rápido e leve, o que não irá consumir muitos dados de rede, quando forem visitado através de
          redes móveis. Com <i>Progressive Web Apps (PWA)</i>, o seu site ou sistema pode até ser acessado quando você
          ou o visitante não estiverem conectados na Internet (offline).
          <strong>
            {' '}
            <i>Este site inclusive já funciona offline, testa aí.</i>
          </strong>
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
