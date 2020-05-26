import React from 'react';

import { TiCode } from 'react-icons/ti';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <TiCode size={200} />

          <form>
            <h1>Login in your account</h1>

            <input placeholder="E-mail" />

            <input type="password" placeholder="User name" />

            <button type="submit">Submit</button>

            <br />
            <a href="">I forgot my password</a>
          </form>
          <br />

          <a href="">
            <FiLogIn />
            Create account
          </a>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
