import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

import { Post, Title, Initiale, Excerpt } from './styles';
import { Subline } from '../../elements';

const Article = ({ title, date, excerpt, slug, timeToRead, category }) => {
  const firstChar = title.charAt(0);

  return (
    <Post>
      <Title>
        <Initiale>{firstChar}</Initiale>
        <Link to={slug}>{title}</Link>
      </Title>
      <Subline>
        {date} &mdash; {timeToRead} Min leitura &mdash; em{' '}
        <Link to={`/blog/categorias/${kebabCase(category)}`}>{category}</Link>
      </Subline>
      <Excerpt>{excerpt}</Excerpt>
    </Post>
  );
};

export default Article;

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};
