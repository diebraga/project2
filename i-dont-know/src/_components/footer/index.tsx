import React from 'react';
import { Link } from 'react-router-dom';

import { TiCode } from 'react-icons/ti';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { Container, Content } from './styles';

const Footer: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <Link to="/">
              <p>iTinterprises</p>
            </Link>
            <TiCode size={50} />
            &nbsp; &nbsp;&nbsp;
            <a href="https://github.com/diebraga">
              <AiFillGithub size={50} />
            </a>
            &nbsp; &nbsp;&nbsp;
            <a href="https://www.instagram.com/diebraga/">
              <AiFillInstagram size={50} />
            </a>
            &nbsp; &nbsp;&nbsp;
            <a href="https://www.linkedin.com/in/diebraga/">
              <AiFillLinkedin size={50} />
            </a>
          </nav>
        </Content>
      </Container>
    </>
  );
};

export default Footer;
