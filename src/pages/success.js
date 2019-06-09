/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import { Layout, Header } from '../components';
import { Content, Wrapper } from '../elements';

import config from '../../config';

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Your message was sent!</h1>
        <p>I'll answer your request as quick as possible.</p>
      </Content>
    </Wrapper>
  </Layout>
);

export default Success;
