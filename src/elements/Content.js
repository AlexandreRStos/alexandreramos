import styled from 'styled-components';
import media from '../utils/media';

const Content = styled.div`
  grid-column: 2;
  /* box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.25rem; */

  /* background-color: ${props => props.theme.colors.bg}; */
  /* margin-top: -3rem; */
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
