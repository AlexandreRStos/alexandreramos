import styled from 'styled-components';
import media from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  overflow: hidden;
  z-index: 9000;
  padding: 2rem 0;
  @media ${media.phone.up} {
    padding: 3rem 3rem;
  }
  @media ${media.tablet.up} {
    padding: 3rem 6rem;
  }
`;

export default Content;
