import { createGlobalStyle } from 'styled-components';
import theme from './Theme';
import media from '../utils/media';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg.white};
    background: ${theme.colors.primary};
  }
  
  html {
    scroll-behavior: smooth;    
  }

  body {
    background: ${theme.colors.bg.white};
    color: ${theme.colors.text.body};
    font-display: auto;  
    font-size: 1rem;
    @media ${media.phone.up} {
      font-size: 18px;
    }
  }

  a {
    color: ${theme.colors.text.title};
    text-decoration: none;
    transition: all ${theme.transitions.normal};

    :hover {
      color: ${theme.colors.primary};
    }
  }

  h1, h2, h3, h4 {
    color: ${theme.colors.text.title};
  }

  blockquote {
    font-style: italic;
    position: relative;
  }

  blockquote:before {
    content: "";
    position: absolute;
    background: ${theme.colors.primary};
    height: 100%;
    width: 6px;
    margin-left: -1.6rem;
  }

  label {
    margin-bottom: .5rem;
    color: ${theme.colors.grey.dark};
  }

  input, textarea {
    border-radius: .1rem;
    border: none;
    background: rgba(0, 0, 0, 0.05);
    padding: .25rem 1rem;
    &:focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
