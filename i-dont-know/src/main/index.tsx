import React from 'react';
import { Link } from 'react-router-dom';

import { FiFileText, FiUser, FiPhone, FiMail } from 'react-icons/fi';
import { Container, Banner, Content, Form } from './styles';

import NavBar from '../_components/navbar';
import Input from '../_components/input';
import Button from '../_components/button';
import Footer from '../_components/footer';

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
          <Button>Send</Button>
        </Form>
        <Footer />
      </Container>
    </>
  );
};

export default Main;
