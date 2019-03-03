import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Header, Article } from 'components';
import { Wrapper, Subline, SectionTitle } from '../elements';
import media from '../utils/media';
import config from '../../config/SiteConfig';
import { HeaderHome } from '../components';

const Content = styled.div`
  grid-column: 2 / 3;
  border-radius: 0.25rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media ${media.tablet} {
    padding: 3rem 3rem;
  }
  @media ${media.phone} {
    padding: 2rem 1.5rem;
  }
`;

const Category = ({ pageContext: { category }, data: { allMarkdownRemark } }) => {
  const { edges, totalCount } = allMarkdownRemark;
  const subline = `${totalCount} post${totalCount === 1 ? '' : 's'} com a tag "${category}"`;

  return (
    <Layout>
      <HeaderHome />
      <Wrapper>
        <Helmet title={`${category} | ${config.siteTitle}`} />
        <Header>
          <SectionTitle>Categoria &ndash; {category}</SectionTitle>
          <Subline sectionTitle>
            {subline} (Veja <Link to="/blog/categorias">todas categorias</Link>)
          </Subline>
        </Header>
        <Content>
          {edges.map(post => (
            <Article
              title={post.node.frontmatter.title}
              date={post.node.frontmatter.date}
              excerpt={post.node.excerpt}
              timeToRead={post.node.timeToRead}
              slug={post.node.fields.slug}
              category={post.node.frontmatter.category}
              key={post.node.fields.slug}
            />
          ))}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Category;

Category.propTypes = {
  pageContext: PropTypes.shape({
    category: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
      totalCount: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export const postQuery = graphql`
  query CategoryPage($category: String!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          fields {
            slug
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
