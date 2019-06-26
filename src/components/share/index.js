import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FaFacebookF, FaTwitter, FaWhatsapp, FaGooglePlusG, FaLinkedinIn, FaRedditAlien } from 'react-icons/fa';

import {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';

const brandColors = {
  facebook: '#3b5998',
  twitter: '#1da1f2',
  googleplus: '#dd4b39',
  linkedin: '#0077b5',
  reddit: '#ff4500',
  whatsapp: '#128c7e',
};

const Wrapper = styled.div`
  text-align: center;
  padding: 1rem 0;
`;

const WrapperSocial = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  .icon {
    padding: 0.25rem 0.5rem 0.25rem 0;
    width: 20px;
  }

  .button {
    margin: 0.5rem 0.25rem;
    border-radius: 1rem;
    padding: 0.25rem 1rem;
    cursor: pointer;
    border: 1px solid;
    outline: none;
    transition: all ${({ theme }) => theme.transitions.normal} ease-out;
    font-size: ${({ theme }) => theme.fontSize.smallest};
    font-weight: 500;

    &.twitter {
      color: ${brandColors.twitter};
      border-color: ${brandColors.twitter};
      &:hover {
        background-color: ${brandColors.twitter};
        border-color: ${brandColors.twitter};
        color: #fff;
      }
    }
    &.googleplus {
      color: ${brandColors.googleplus};
      border-color: ${brandColors.googleplus};
      &:hover {
        background-color: ${brandColors.googleplus};
        border-color: ${brandColors.googleplus};
        color: #fff;
      }
    }
    &.linkedin {
      color: ${brandColors.linkedin};
      border-color: ${brandColors.linkedin};
      &:hover {
        background-color: ${brandColors.linkedin};
        border-color: ${brandColors.linkedin};
        color: #fff;
      }
    }
    &.reddit {
      color: ${brandColors.reddit};
      border-color: ${brandColors.reddit};
      &:hover {
        background-color: ${brandColors.reddit};
        border-color: ${brandColors.reddit};
        color: #fff;
      }
    }
    &.facebook {
      color: ${brandColors.facebook};
      border-color: ${brandColors.facebook};
      &:hover {
        background-color: ${brandColors.facebook};
        border-color: ${brandColors.facebook};
        color: #fff;
      }
    }
    &.whatsapp {
      color: ${brandColors.whatsapp};
      border-color: ${brandColors.whatsapp};
      &:hover {
        background-color: ${brandColors.whatsapp};
        border-color: ${brandColors.whatsapp};
        color: #fff;
      }
    }
  }
`;

const Share = ({ socialConfig, tags }) => (
  <Wrapper>
    <h3>Espalhe a palavra!</h3>
    <p>Compartilhe este artigo nas redes sociais.</p>
    <WrapperSocial>
      <FacebookShareButton url={socialConfig.config.url} className="button facebook">
        <span className="icon">
          <FaFacebookF />
        </span>
        <span className="text">Facebook</span>
      </FacebookShareButton>
      <TwitterShareButton
        url={socialConfig.config.url}
        className="button twitter"
        title={socialConfig.config.title}
        via={socialConfig.twitterHandle.split('@').join('')}
        hashtags={tags}
      >
        <span className="icon">
          <FaTwitter />
        </span>
        <span className="text">Twitter</span>
      </TwitterShareButton>
      <GooglePlusShareButton url={socialConfig.config.url} className="button googleplus">
        <span className="icon">
          <FaGooglePlusG />
        </span>
        <span className="text">Google+</span>
      </GooglePlusShareButton>
      <LinkedinShareButton url={socialConfig.config.url} className="button linkedin" title={socialConfig.config.title}>
        <span className="icon">
          <FaLinkedinIn />
        </span>
        <span className="text">LinkedIn</span>
      </LinkedinShareButton>
      <RedditShareButton url={socialConfig.config.url} className="button reddit" title={socialConfig.config.title}>
        <span className="icon">
          <FaRedditAlien />
        </span>
        <span className="text">Reddit</span>
      </RedditShareButton>
      <WhatsappShareButton url={socialConfig.config.url} className="button whatsapp" title={socialConfig.config.title}>
        <span className="icon">
          <FaWhatsapp />
        </span>
        <span className="text">WhatsApp</span>
      </WhatsappShareButton>
    </WrapperSocial>
  </Wrapper>
);

Share.propTypes = {
  socialConfig: PropTypes.shape({
    twitterHandle: PropTypes.string.isRequired,
    config: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;
