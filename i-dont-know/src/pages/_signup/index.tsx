import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { TiCode } from 'react-icons/ti';
import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import getValidationErrors from '../../utils/getValidationErros';

import Input from '../../_components/input';
import Button from '../../_components/button';

import {
  Container,
  Content,
  Background,
} from '../../_styles_css/_signup/styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('required'),
        email: Yup.string().required('required').email('Email not valid'),
        password: Yup.string().min(4, 'Min 4 dig'),
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
        <Background />

        <Content>
          <TiCode color="#ff9000" size={200} />

          <Form ref={formRef} onSubmit={handleSubmit}>
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
