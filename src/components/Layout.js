/* eslint no-unused-expressions:0 */

import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import styled, { ThemeProvider } from 'styled-components';
import { SEO } from 'components';
import theme from '../styles/Theme';
import GlobalStyle from '../styles/Global';

const Footer = styled.footer`
  text-align: center;
  padding: 3rem 0;
  span {
    font-size: 0.75rem;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          buildTime(formatString: "DD.MM.YYYY")
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <SEO />
          <GlobalStyle />
          {children}
          <Footer>
            &copy; 2018 by Alexandre Ramos. All rights reserved. <br />
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AlexandreRStos/blog-alexandreramos">
              GitHub Repository
            </a>{' '}
            <br />
            <span>Last build: {data.site.buildTime}</span>
          </Footer>
        </React.Fragment>
      </ThemeProvider>
    )}
  />
);

export default Layout;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
