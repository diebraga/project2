import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { TiCode } from 'react-icons/ti';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('name required'),
        email: Yup.string()
          .required('email required')
          .email('Email has to be valid'),
        password: Yup.string().min(4, 'Minimun of 4 caracters'),
      });
      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
