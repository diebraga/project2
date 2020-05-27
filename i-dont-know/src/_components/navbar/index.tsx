import React from 'react';
import { Link } from 'react-router-dom';

import { TiCode } from 'react-icons/ti';
import { FiUser } from 'react-icons/fi';

import { Container, Content, LoginSide } from './styles';

const NavBar: React.FC = () => {
  return (
    <>
      <Container>
        <Content>
          <nav>
            <Link to="/">
              <p>iTinterprises</p>
            </Link>
            <TiCode size={50} />
            &nbsp; &nbsp;&nbsp;
            <Link to="/">For Business</Link>
            &nbsp; &nbsp;&nbsp;
            <Link to="/">For Users</Link>
          </nav>

          <aside>
            <LoginSide>
              <div>
                <Link to="/login">
                  <strong>
                    Log In &nbsp;
                    <FiUser />
                  </strong>
                </Link>
              </div>
            </LoginSide>
          </aside>
        </Content>
      </Container>
    </>
  );
};

export default NavBar;
