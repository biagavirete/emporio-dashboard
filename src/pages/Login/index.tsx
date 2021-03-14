import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../store/ducks/users/actions';

import Bee from '../../assets/bee-bg.png';
import Partner from '../../assets/parceiro-ambev.png';
import { Container, Form } from './styles';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const { formSubmitted, error } = useSelector((state: any) => state.users)

  useEffect(() => {
    if (formSubmitted) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

  if (error) {
    toast.error('Não foi possível realizar o login!');
  }

  const onSubmit = async (data: any) => {
    try {
      dispatch(UserActions.loginRequest(data));
    } catch (e) {
      console.log(e)
      toast.error('Ocorreu um erro, tente novamente')
    }
  }

  return (
    <>
      <Container>
        <div className="left">
          <img src={Bee} alt="Bee" />
        </div>
        <div className="right">
          <div id="top-half">
            <h1>Login</h1>
          </div>
          <h3>Área restrita</h3>
          <Form>
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
            <button onClick={handleSubmit(onSubmit)}>Login</button>
            <Toaster />
          </Form>
          <div id="bottom-half">
            <img src={Partner} alt="Parceiro Ambev" />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Login;