import styled from 'styled-components';
import media from '../utils/media';

const Title = styled.h2`
  position: relative;
  margin-bottom: 2rem;
  font-size: ${props => props.theme.fontSize.title};
  color: ${props => props.theme.colors.text.title};
  text-align: center;
  @media ${media.phone.up} {
    text-align: ${props => (props.center ? 'center' : 'left')};
  }
`;

export default Title;
