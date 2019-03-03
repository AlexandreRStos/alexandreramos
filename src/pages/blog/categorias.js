import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { Layout, Header, HeaderHome } from '../../components';
import { Wrapper, SectionTitle } from '../../elements';
import media from '../../utils/media';

import config from '../../../config/SiteConfig';

const Content = styled.div`
  grid-column: 2 / span 1;
  padding: 2rem 1.5rem;
  z-index: 9000;
  @media ${media.tablet.up} {
    padding: 2rem 4rem;
  }
  @media ${media.phone.up} {
    padding: 3rem 3rem;
  }
`;

const Title = styled.h3`
  margin-bottom: 0.75rem;
`;

const Category = ({
  data: {
    allMarkdownRemark: { group },
  },
}) => (
  <Layout>
    <HeaderHome />
    <Wrapper>
      <Helmet title={`Categorias | ${config.siteTitle}`} />
      <Header columnCenter>
        <SectionTitle>Categorias</SectionTitle>
      </Header>
      <Content>
        {group.map(category => (
          <Title key={category.fieldValue}>
            <Link to={`/blog/categorias/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link> (
            {category.totalCount})
          </Title>
        ))}
      </Content>
    </Wrapper>
  </Layout>
);

export default Category;

Category.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const postQuery = graphql`
  query CategoriesPage {
    allMarkdownRemark {
      group(field: frontmatter___category) {
        fieldValue
        totalCount
      }
    }
  }
`;
