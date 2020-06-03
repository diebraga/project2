import React from 'react';
import { Form } from '@unform/web';

import { TiCode } from 'react-icons/ti';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <>
      <Container>
        <Content>
          <TiCode color="#ff9000" size={200} />

          <Form onSubmit={handleSubmit}>
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
          </Form>
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
