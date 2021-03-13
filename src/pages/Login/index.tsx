import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { toast, Toaster } from 'react-hot-toast';
import * as UserActions from '../../store/ducks/users/actions';
import Bee from '../../assets/flying-bee.png';
import Partner from '../../assets/parceiro-ambev.png';
import { Container, Form } from './styles';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, errors } = useForm();

  const dispatch = useDispatch();
  const history = useHistory();

  const { formSubmitted } = useSelector((state: any) => state.users)

  useEffect(() => {
    if (formSubmitted) {
      history.push("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted]);

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
        <div id="top-half">
          <img src={Bee} alt="Logo" />
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
      </Container>
    </>
  );
}

export default Login;