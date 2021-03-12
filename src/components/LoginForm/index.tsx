import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { toast, Toaster } from 'react-hot-toast';
import * as UserActions from '../../store/ducks/users/actions';
import { Container } from './styles';

const LoginForm = () => {
  const [authorized, setAuthorized] = useState(false);

  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();

  const { error } = useSelector((state: any) => state.users)

  const onSubmit = async (data: any) => {
    const token = localStorage.getItem("token")
    try {
      dispatch(UserActions.loginRequest(data));
      if (error) {
        toast.error('Login/senha incorretos')
      }
      if (token) {
        setAuthorized(true);
      } else {
        toast.error('Login/senha incorretos')
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="E-mail"
          name="email"
          ref={register({
            required: 'Campo obrigatório',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "E-mail inválido"
            }
          })} />
        {errors.email && <p
          role="alert"
          data-testid="email-error">{errors.email.message}</p>
        }

        <input
          type="password"
          placeholder="Digite sua senha"
          name="password"
          ref={register({
            required: 'Campo obrigatório'
          })} />
        {errors.password && <p
          role="alert"
          data-testid="password-error">{errors.password.message}</p>
        }
        <button type="submit">Login</button>
      </form>
      <Toaster />
      { authorized && <Redirect to="/dashboard" />}
    </Container>
  );
}

export default LoginForm;