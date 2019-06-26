import styled from 'styled-components';
import { rgba } from 'polished';
import Img from 'gatsby-image';
import media from '../../utils/media';

export const Rounded = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  border: 3px solid ${props => rgba(props.theme.colors.primary, 0.4)};
  @media ${media.phone.up} {
    margin-right: 1rem;
  }
`;
export const Image = styled(Img)`
  border-radius: 50%;
  display: block;
  margin: 0;
  padding: 0;
  transform: scale(0.94) translateY(-1px);
`;
export const Headline = styled.h2`
  font-size: ${props => props.theme.fontSize.title};
  padding: 1rem 0 3rem;
  margin-bottom: 0;
  color: rgba(255, 255, 255, 0.8);

  @media ${media.phone.up} {
    padding: 2rem 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
