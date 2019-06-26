import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';
import kebabCase from 'lodash/kebabCase';
import { DiscussionEmbed } from 'disqus-react';
import { Layout, Header, SEO, PrevNext, HeaderHome, Share } from '../components';
import { Wrapper, Subline, Content, Button } from '../elements';

import config from '../../config';
import '../utils/prismjs-theme.css';
import media from '../utils/media';

const Title = styled.h1`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.bg.default};
  font-size: 2rem;
  @media ${media.phone.up} {
    font-size: 2.5rem;
  }
`;

const PostContent = styled.div`
  margin-top: 1rem;
`;

const Post = ({ pageContext: { slug, prev, next }, data: { markdownRemark: postNode } }) => {
  const post = postNode.frontmatter;

  const [isOpen, setIsOpen] = useState(false);

  const disqusShortname = 'blog-alexandreramos';
  const disqusConfig = {
    identifier: post.id,
    title: post.title,
  };

  return (
    <Layout>
      <HeaderHome />
      <Wrapper>
        <SEO postPath={slug} postNode={postNode} postSEO />
        <Helmet title={`${post.title} | ${config.siteTitle}`} />
        <Header>
          {/* <Link to="/">{config.siteTitle}</Link> */}
          <Title>{post.title}</Title>
          <Subline>
            {post.date} &mdash; {postNode.timeToRead} Min leitura &mdash; em{' '}
            <Link to={`/blog/categorias/${kebabCase(post.category)}`}> {post.category} </Link>
          </Subline>
        </Header>
        <Content>
          <PostContent dangerouslySetInnerHTML={{ __html: postNode.html }} />
          <Share
            socialConfig={{
              twitterHandle: `${config.userTwitter}`,
              config: {
                url: `${config.siteUrl}${slug}`,
                title: `${post.title}`,
              },
            }}
            tags={[`${post.category}`]}
          />
          <PrevNext prev={prev} next={next} />

          {isOpen ? (
            <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
          ) : (
            <Button center onClick={() => setIsOpen(true)}>Comentários</Button>
          )}
        </Content>
      </Wrapper>
    </Layout>
  );
};

export default Post;

Post.propTypes = {
  pageContext: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    next: PropTypes.object,
    prev: PropTypes.object,
  }),
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

Post.defaultProps = {
  pageContext: PropTypes.shape({
    next: null,
    prev: null,
  }),
};

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date(formatString: "DD.MM.YYYY")
        category
      }
      timeToRead
    }
  }
`;
