import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { Wrapper, Content, Button, Title } from '../elements';

const Contact = ({ id }) => (
  <Wrapper as="section" background id={id}>
    <Content>
      <Title center>Gostou do que você leu aqui sobre mim e do que faço e que conversar ?</Title>
      <Link to="/contato">
        <Button big center>
          <svg width="1792" height="1792" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
            <path d="M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-453-185-242 295q-18 23-49 23-13 0-22-4-19-7-30.5-23.5t-11.5-36.5v-349l864-1059-1069 925-395-162q-37-14-40-55-2-40 32-59l1664-960q15-9 32-9 20 0 36 11z" />
          </svg>
          Contato
        </Button>
      </Link>
    </Content>
  </Wrapper>
);

export default Contact;

Contact.propTypes = {
  id: PropTypes.string.isRequired,
};
