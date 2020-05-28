import React from 'react';

import { FiFileText, FiUser, FiPhone, FiMail } from 'react-icons/fi';
import { Container, Banner, Content, Form } from './styles';

import NavBar from '../_components/navbar';
import Input from '../_components/input';
import Button from '../_components/button';

const Main: React.FC = () => {
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
            Whenever you want rent free spaces in you company iTenterprises is
            the best solution.
          </section>

          <aside>aaa</aside>

          <section>
            <h1>How it works</h1>
            <p>
              Companies and IT business can rent empity spaces in their offices,
              greate opportunity for professionals develop their skills and
              companies discovery new talents.
            </p>
          </section>
        </Content>
        <Form>
          <form id="">
            <h1>Contact Us</h1>
            <br />
            <Input name="name" icon={FiUser} placeholder="name" />
            <br />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <br />
            <Input
              type="number"
              name="email"
              icon={FiPhone}
              placeholder="Phone number"
            />
            <br />
            <Input
              name="message"
              icon={FiFileText}
              placeholder="Your message"
            />
            <br />
          </form>
        </Form>
      </Container>
    </>
  );
};

export default Main;
