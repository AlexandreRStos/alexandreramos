import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.div`
  display: flex;
  margin: 2rem auto;
  max-width: 900px;
  padding: 0 1rem;
  justify-items: center;

  a {
    color: ${props => props.theme.colors.primary};
    display: flex;
    align-items: center;
  }
`;

const Prev = styled.div`
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const Next = styled.div`
  margin-left: auto;
  text-align: right;
  span {
    text-transform: uppercase;
    font-size: 0.8rem;
    color: ${props => props.theme.colors.grey.light};
  }
`;

const PrevNext = ({ next, prev }) => (
  <Wrapper>
    {prev && (
      <Prev>
        <span>Previous</span>
        <Link to={prev.fields.slug}>{prev.frontmatter.title}</Link>
      </Prev>
    )}

    {next && (
      <Next>
        <span>Next</span>
        <Link to={next.fields.slug}>{next.frontmatter.title}</Link>
      </Next>
    )}
  </Wrapper>
);

export default PrevNext;

PrevNext.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

PrevNext.defaultProps = {
  next: null,
  prev: null,
};
