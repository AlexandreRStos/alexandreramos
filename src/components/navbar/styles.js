import styled from 'styled-components';
import media from '../../utils/media';

import { Wrapper } from '../../elements';

export const Nav = styled.nav`
  width: 100%;
  position: fixed;
  border-bottom: 1px solid rgba(150, 150, 150, 0.1);
  background-color: rgba(255, 255, 255, 0.9);

  z-index: 10;
  top: 0;
  left: 0;

  > ${Wrapper} {
    width: 100%;
    padding: 0.5rem;

    @media ${media.phone.up} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
    }
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  @media ${media.phone.down} {
    padding-top: 0.5rem;
  }
`;
export const Item = styled.li`
  padding: 0 0.1875rem;
  font-size: 0.7rem;
  font-weight: 500;
  margin: 0;
  @media ${media.phone.up} {
    font-size: ${({ theme }) => theme.fontSize.small};
    padding: 0 0.4375rem;
  }
`;
export const Logotipo = styled.h1`
  font-size: 1.1rem;
  text-align: center;
  margin: 0;
`;
