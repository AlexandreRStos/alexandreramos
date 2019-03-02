import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article } from 'components';
import { Content, Wrapper, SectionTitle } from '../../elements';
import media from '../../utils/media';
import { HeaderHome } from '../../components';

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 1rem;
  color: ${props => props.theme.colors.text.title};

  p {
    font-size: ${props => props.theme.fontSize.default};
    margin-top: -1rem;

    @media ${media.phone.up} {
      font-size: 1.45rem;
    }

    @media ${media.tablet.up} {
      font-size: 1.68rem;
    }
  }
`;

const BlogPage = ({
  data: {
    allMarkdownRemark: { edges: postEdges },
  },
}) => (
  <Layout>
    <HeaderHome />
    <Wrapper>
      <Hero>
        <h1>Olá.</h1>
        <p>Seja bem vindo ao meu blog, aqui escrevo sobre coisas que gosto e outras coisas que aprendendo!</p>
      </Hero>
      <Content>
        <SectionTitle>Latest stories</SectionTitle>
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
    </Wrapper>
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
