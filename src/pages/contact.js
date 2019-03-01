/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { Layout, Header } from '../components';
import { Content, Button, Wrapper } from '../elements';

import config from '../../config/SiteConfig';

const Form = styled.form`
  p {
    label,
    input {
      display: block;
    }
    input {
      min-width: 275px;
      margin-top: 0.5rem;
    }
    textarea {
      resize: vertical;
      min-height: 150px;
      width: 100%;
      margin-top: 0.5rem;
    }
  }
`;

const Contact = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
        <h1>Contato</h1>
        {/* <p>Super cool intro text to get people contacting me! It uses Netlify's form feature.</p> */}
        <Form name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
          <p>
            <label htmlFor="contact-name">
              Name
              <input name="name" id="contact-name" type="text" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-email">
              E-Mail <input name="email" id="contact-email" type="email" required />
            </label>
          </p>
          <p>
            <label htmlFor="contact-message">
              Your Message <textarea name="message" id="contact-message" required />
            </label>
          </p>
          <p>
            <Button>Send</Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </Form>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
