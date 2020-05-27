import React from 'react';

import { TiCode } from 'react-icons/ti';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <Container>
        <Background />

        <Content>
          <TiCode color="#ff9000" size={200} />

          <form>
            <h1>Signup for free</h1>
            <Input name="name" icon={FiUser} placeholder="name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="User name"
            />
            <Button type="submit">Submit</Button>
            <br />
            <br />
          </form>
          <br />

          <a href="">
            <FiArrowLeft />
            <>I already have an account</>
          </a>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
