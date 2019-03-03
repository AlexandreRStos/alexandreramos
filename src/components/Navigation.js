import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from '../elements';
import media from '../utils/media';

const Nav = styled.nav`
  z-index: 10000;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  @media ${media.phone.down} {
    padding-top: 0.5rem;
  }
`;
const Item = styled.li`
  padding: 0 0.1875rem;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0;
  @media ${media.phone.up} {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 0 0.4375rem;
  }
`;

const LinkCustom = styled(Link)`
  color: white;
  > * {
    font-size: 0.7rem;
    @media ${media.phone.up} {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
  }

  :hover {
    color: white;
  }
`;

const Navigation = () => (
  <Nav>
    <List>
      <Item>
        <Link to="/#sobre">Sobre</Link>
      </Item>
      <Item>
        <Link to="/#servicos">Serviços</Link>
      </Item>
      <Item>
        <Link to="/#portfolio">Portfolio</Link>
      </Item>
      <Item>
        <Link to="/contato">Contato</Link>
      </Item>
      <Item>
        <LinkCustom to="/blog">
          <Button>Blog</Button>
        </LinkCustom>
      </Item>
    </List>
  </Nav>
);

export default Navigation;
