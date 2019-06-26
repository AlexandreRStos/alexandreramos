import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FooterStyle } from './styles';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query LayoutQuery {
      site {
        buildTime(formatString: "DD.MM.YYYY")
      }
    }
  `);

  return (
    <FooterStyle>
      &copy; {new Date().getFullYear()} por Alexandre Ramos. <br />
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/alexandreramosdev/alexandreramosdev">
        Repositorio GitHub
      </a>
      <br />
      <span>Last build: {data.site.buildTime}</span>
    </FooterStyle>
  );
};

export default Footer;
