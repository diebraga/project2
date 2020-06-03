import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { TiCode } from 'react-icons/ti';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
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
        <Background />

        <Content>
          <TiCode color="#ff9000" size={200} />

          <Form onSubmit={handleSubmit}>
            <h1>Signup for free</h1>
            <Input name="name" icon={FiUser} placeholder="name" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Your password"
            />
            <Button type="submit">Submit</Button>
            <br />
            <br />
          </Form>
          <br />

          <Link to="/login">
            <FiArrowLeft />
            <>I already have an account</>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default SignUp;
