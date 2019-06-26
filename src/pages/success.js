/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import { Layout, Header } from '../components';
import { Content, Section } from '../elements';

import config from '../../config';

const Success = () => (
  <Layout>
    <Helmet title={`Contact | ${config.siteTitle}`} />
    <Header>
      <Link to="/">{config.siteTitle}</Link>
    </Header>
    <Section>
      <Content>
        <h1>Your message was sent!</h1>
        <p>I'll answer your request as quick as possible.</p>
      </Content>
    </Section>
  </Layout>
);

export default Success;
