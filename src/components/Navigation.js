import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Button } from '../elements';
import media from '../utils/media';

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 0;
`;
const Item = styled.li`
  padding: 0.1875rem;
  font-size: 0.7rem;
  font-weight: 500;
  @media ${media.phone.up} {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 0.1875rem 0.4375rem;
  }
`;

const LinkCustom = styled(Link)`
  color: white;
  font-size: 0.5rem;

  @media ${media.phone.up} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }

  :hover {
    color: white;
  }
`;

const Navigation = () => (
  <nav>
    <List>
      <Item>
        <Link to="/#sobre">Sobre</Link>
      </Item>
      <Item>
        <Link to="/#servicos">Serviços</Link>
      </Item>
      <Item>
        <Link to="/#portfolio">Portifolio</Link>
      </Item>
      <Item>
        <Link to="/contact">Contato</Link>
      </Item>
      <Item>
        <LinkCustom to="/blog">
          <Button>Blog</Button>
        </LinkCustom>
      </Item>
    </List>
  </nav>
);

export default Navigation;
