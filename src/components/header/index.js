import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const Header = ({ children }) => <Wrapper>{children}</Wrapper>;

export default Header;

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
};
