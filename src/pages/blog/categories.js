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
  grid-column: 2/3;

  border-radius: 0.25rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;

  @media ${media.tablet.down} {
    padding: 3rem 3rem;
  }
  @media ${media.phone.down} {
    padding: 2rem 1.5rem;
  }
`;

const Title = styled.h3`
  position: relative;
  text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
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
      <Helmet title={`Categories | ${config.siteTitle}`} />
      <Header>
        {/* <Link to="/blog/">{config.siteTitle}</Link> */}
        <SectionTitle>Categories</SectionTitle>
      </Header>
      <Content>
        {group.map(category => (
          <Title key={category.fieldValue}>
            <Link to={`/blog/categories/${kebabCase(category.fieldValue)}`}>{category.fieldValue}</Link> (
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
