import React from 'react';
import LoginForm from '../../components/LoginForm';
import Bee from '../../assets/flying-bee.png';
import Partner from '../../assets/parceiro-ambev.png';
import { Container } from './styles';

const Login = () => {

  return (
    <Container>
      <div id="top-half">
        <img src={Bee} alt="Logo" />
        <h1>Login</h1>
      </div>
      <LoginForm />

      <div id="bottom-half">
        <img src={Partner} alt="Parceiro Ambev" />
      </div>
    </Container>
  );
}

export default Login;