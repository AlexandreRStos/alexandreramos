import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { Layout, Article } from 'components';
import { Content, Wrapper, SectionTitle } from '../../elements';
import media from '../../utils/media';

const Hero = styled.div`
  grid-column: 2;
  padding: 3rem 2rem 1rem;
  /* text-shadow: 0 12px 30px rgba(0, 0, 0, 0.15); */
  color: ${props => props.theme.colors.text.title};

  p {
    font-size: 1.45rem;
    margin-top: -1rem;

    @media ${media.tablet.up} {
      font-size: ${props => props.theme.fontSize.default};
    }

    @media ${media.phone.up} {
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
    <Wrapper>
      <Hero>
        <h1>Olá.</h1>
        <p>Seja bem vindo ao meu blog, aqui escrevo sobre coisas que gosto e outras coisas que aprendendo!</p>
        {/* <Link to="/contact">
          <Button big>
            <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
            </svg>
            Contact
          </Button>
        </Link> */}
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
