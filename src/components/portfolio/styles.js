import styled from 'styled-components';
import Img from 'gatsby-image';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 0.8rem;

  > * {
    margin: 5px;
  }
`;

export const Item = styled.div`
  grid-column: ${props => props.column && props.column};
  grid-row: ${props => props.row && props.row};
  justify-self: center;
  align-self: center;
  width: 100%;
  position: relative;
  transition: all ${({ theme }) => theme.transitions.normal};

  :hover > div {
    opacity: 1;
    > a {
      opacity: 1;
    }
  }
`;

export const Hover = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #7159c1df;
  opacity: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

export const Link = styled.a`
  opacity: 0;
  color: ${({ theme }) => theme.colors.bg.default};
  transition: all ${({ theme }) => theme.transitions.normal};
  padding: 0 0.5rem;

  svg {
    transform: translateY(2px);
    path {
      transition: all ${({ theme }) => theme.transitions.normal};
    }
  }

  :hover {
    color: #ff916f;
    path {
      fill: #ff916f;
    }
  }
`;

export const Image = styled(Img)`
  max-width: 100%;
  margin: 0;
  box-shadow: 4px 4px 1px rgba(50, 50, 50, 0.1);
`;
