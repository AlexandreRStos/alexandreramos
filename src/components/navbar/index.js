import React from 'react';
import { Link } from 'gatsby';
import { Button, Wrapper } from '../../elements';

import { Nav, Logotipo, List, Item } from './styles';

const Navbar = () => (
  <Nav>
    <Wrapper>
      <Logotipo>
        <Link to="/">Alexandre Ramos</Link>
      </Logotipo>

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
          <Link to="/blog">
            <Button small>Blog</Button>
          </Link>
        </Item>
      </List>
    </Wrapper>
  </Nav>
);

export default Navbar;
