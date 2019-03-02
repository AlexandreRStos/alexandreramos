/* eslint jsx-a11y/label-has-for:0 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Layout, Header, HeaderHome } from '../components';
import { Content, Button, Wrapper } from '../elements';

import config from '../../config/SiteConfig';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.bg.default};
`;

const Form = styled.form`
  p {
    label,
    input {
      display: block;
    }
    input {
      width: 100%;
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
    <HeaderHome />
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Title>Contato</Title>
      </Header>
      <Content>
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
            <Button>
              <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
              </svg>
              Enviar
            </Button>
          </p>
          <input type="hidden" name="form-name" value="contact-form" />
        </Form>
      </Content>
    </Wrapper>
  </Layout>
);

export default Contact;
