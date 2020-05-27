import React from 'react';

import { TiCode } from 'react-icons/ti';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <TiCode color="#ff9000" size={200} />

          <form>
            <h1>iTenterprises</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="User name"
            />

            <Button type="submit">Submit</Button>

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
