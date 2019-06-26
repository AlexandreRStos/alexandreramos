import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';
import { Layout, Article, Header } from '../../components';
import { Content, SectionTitle } from '../../elements';
import config from '../../../config';

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) => (
  <Layout bgdark>
    <Helmet title={`Blog | ${config.siteTitle}`} />

    <Header>
      <h1 styles={{ color: 'rgba(255, 255, 255, 0.8)' }}>Olá.</h1>
      <p>Seja bem vindo ao meu blog, aqui escrevo sobre coisas que gosto e outras coisas que aprendendo!</p>
    </Header>

    <Content>
      <SectionTitle>Ultimos Posts</SectionTitle>
      {postEdges.map(post => (
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
  </Layout>
);

export default BlogPage;

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const BlogQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "DD.MM.YYYY")
            category
          }
          excerpt(pruneLength: 200)
          timeToRead
        }
      }
    }
  }
`;
