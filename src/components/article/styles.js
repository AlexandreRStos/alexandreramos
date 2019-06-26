import styled from 'styled-components';
import media from '../../utils/media';

export const Post = styled.article`
  display: flex;
  flex-direction: column;

  margin-top: 3.5rem;
  margin-right: 1rem;
  margin-left: 1rem;

  margin-bottom: 3.5rem;
  border: 1px solid #eee;
  padding: 45px 35px 20px;
  border-radius: 5px;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  max-width: 900px;

  @media ${media.tablet.up} {
    margin-right: auto;
    margin-left: auto;
  }
`;

export const Title = styled.h2`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  margin-bottom: 0.75rem;
  color: ${props => props.theme.colors.text.title};
`;

export const Initiale = styled.span`
  position: absolute;
  font-size: 5rem;
  transform: translate(-50%, -50%);
  opacity: 0.08;
  user-select: none;
  z-index: 1;
`;

export const Excerpt = styled.p`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;
