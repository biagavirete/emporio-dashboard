import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';
import * as UserActions from '../../store/ducks/users/actions';


const Login = () => {
  const [authorized, setAuthorized] = useState(false);

  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data: any) => {
    try {
      dispatch(UserActions.loginRequest(data));
      setAuthorized(true);
    } catch (e) {
      console.log(e)
    }
    toast.success('Cadastro realizado')
  }
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          E-mail
      <input
            type="email"
            placeholder="Digite seu e-mail"
            name="email"
            ref={register({
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido"
              }
            })} />
        </label>
        {errors.email && <p
          role="alert"
          data-testid="email-error">{errors.email.message}</p>
        }

        <label>
          Senha
      <input
            type="password"
            placeholder="Digite sua senha"
            name="password"
            ref={register({
              required: 'Campo obrigatório'
            })} />
        </label>
        {errors.password && <p
          role="alert"
          data-testid="password-error">{errors.password.message}</p>
        }
        <Toaster />
        <button type="submit">Login</button>
      </form>
      {authorized && <Redirect to="/dashboard" />}
    </>
  );
}

export default Login;