import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import SEO from '../seo';
import theme from '../../styles/Theme';
import GlobalStyle from '../../styles/Global';

import Navbar from '../navbar';
import Footer from '../footer';

const Layout = ({ children, bgdark }) => (
  <ThemeProvider theme={theme}>
    <>
      <SEO />
      <GlobalStyle bgdark={bgdark} />
      <Navbar />
      {children}
      <Footer />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
  bgdark: PropTypes.bool,
};

Layout.defaultProps = {
  bgdark: false,
};

export default Layout;
