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
  padding: 0 0 1rem;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children, bgdark }) => {
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
        <GlobalStyle bgdark={bgdark} />
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

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  bgdark: PropTypes.bool,
};

Layout.defaultProps = {
  bgdark: false,
};

export default Layout;
