import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { TiCode } from 'react-icons/ti';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import getValidationErrors from '../utils/getValidationErros';

import Input from '../_components/input';
import Button from '../_components/button';

import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('required').email('Email not valid'),
        password: Yup.string().min(4, 'min 4 dig'),
      });
      console.log(data);

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);

      const errors = getValidationErrors(err);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <>
      <Container>
        <Content>
          <TiCode color="#ff9000" size={200} />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>iTenterprises</h1>

            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Your password"
            />

            <Button type="submit">Submit</Button>

            <br />
          </Form>
          <br />

          <Link to="/register">
            <FiLogIn />
            Create account
          </Link>
        </Content>

        <Background />
      </Container>
    </>
  );
};

export default SignIn;
