import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import { FiFileText, FiUser, FiPhone, FiMail, FiLock } from 'react-icons/fi';
import { Container, Banner, Content, FormDiv } from './styles';

import NavBar from '../_components/navbar';
import Input from '../_components/input';
import Button from '../_components/button';
import Footer from '../_components/footer';

const Main: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('name required'),
        email: Yup.string()
          .required('email required')
          .email('Email has to be valid'),
        number: Yup.string().min(4).max(20).required('Phone number required'),
        message: Yup.string().required('required'),
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
        <NavBar />
        <Banner>
          <h1>
            "We connect bussiness and IT professionals, in a simple and
            innovative way."
          </h1>
        </Banner>
        <Content>
          <section>
            <h2>Space solution</h2>
            <p>
              More than space solution, iTenterprises is a greate improvement
              opportunity for both IT business and profissionals.
              <br />
              <br />
              Search the best companies for you based on your skills set on our
              <br />
              <Link to="/discovery">Discovery</Link>
              &nbsp; section now.
            </p>
          </section>

          <aside />

          <section>
            <h2>How it works</h2>
            <p>
              Whenever IT comapanies and business have empity spaces in their
              offices their can offer it for a price or for free.
              <br />
              <br />
              If you're an It professional looking for a productive space to
              work send your request for your favorite company or starup now.
              <br />
              <Link to="/register">Get Started</Link>
            </p>
          </section>
        </Content>
        <FormDiv>
          <Form onSubmit={handleSubmit}>
            <h1>Contact Us</h1>
            <br />
            <Input name="name" icon={FiUser} placeholder="name" />
            <br />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <br />
            <Input
              name="number"
              icon={FiPhone}
              type="number"
              placeholder="Phone number"
            />
            <br />
            <Input
              name="message"
              icon={FiFileText}
              placeholder="Your message"
            />
            <Button type="submit">Submit</Button>
            <br />
            <br />
          </Form>
        </FormDiv>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
