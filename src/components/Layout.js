/* eslint no-unused-expressions:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';

import SEO from './SEO';
import theme from '../styles/Theme';
import GlobalStyle from '../styles/Global';

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        buildTime(formatString: "DD.MM.YYYY")
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <>
        <SEO />
        <GlobalStyle />
        {children}
        <Footer>
          &copy; {new Date().getFullYear()} por Alexandre Ramos. <br />
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexandreramosdev/alexandreramosdev">
            Repositorio GitHub
          </a>{' '}
          <br />
          <span>Last build: {data.site.buildTime}</span>
        </Footer>
      </>
    </ThemeProvider>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
