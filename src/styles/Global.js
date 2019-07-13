import { createGlobalStyle } from 'styled-components';
import theme from './Theme';
import media from '../utils/media';
import extLink from '../images/external-link.png';

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: ${theme.colors.bg.white};
    background: ${theme.colors.primary};
  }
  
  html {
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body {
    background: ${({ bgdark }) => (bgdark ? '#eee' : theme.colors.bg.white)};
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

  a[target="_blank"]{
    color: #111;
    font-weight: bold;

    &::after {
      content:  ' ';
      background: url(${extLink}) right bottom  / 20px no-repeat;
      width: 24px;
      height: 24px;
      display: inline-block;
      vertical-align: center;
      margin: 0 0 -4px 0;
      padding: 0;
    }
  }

  h1, h2, h3, h4 {
    color: ${theme.colors.text.title};
  }

  blockquote {
    font-style: italic;
    position: relative;
    max-width: 850px !important;    
  }

  blockquote::before {
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
