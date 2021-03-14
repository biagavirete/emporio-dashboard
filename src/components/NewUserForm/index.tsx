import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import * as UsersService from '../../store/ducks/users/actions';
import { Form } from './styles';

const NewUserForm = () => {
  const { register, handleSubmit, errors, reset } = useForm();
  const dispatch = useDispatch();

  const { error } = useSelector((state: any) => state.users)

  const onSubmit = async (data: any) => {
    try {
      dispatch(UsersService.signUpRequest(data));
    } catch (e) {
      console.log(e);
    }
    reset({});
    toast.success('Cadastro realizado')
  }

  if (error) {
    toast.error('Erro ao cadastrar usuário!')
  }


  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Digite o nome"
        name="name"
        ref={register({
          required: 'Campo obrigatório',
        })} />
      {errors.name && <p
        role="alert"
        data-testid="email-error">{errors.name.message}</p>
      }
      <input
        type="email"
        placeholder="Digite o e-mail"
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
        placeholder="Digite a senha"
        name="password"
        ref={register({
          required: 'Campo obrigatório',
          minLength: 6
        })} />

      {errors.password && <p
        role="alert"
        data-testid="password-error">{errors.password.message}</p>
      }
      <div className="radio-inputs">
        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            ref={register({ required: true })} />
        Administrador
    </label>

        <label>
          <input
            type="radio"
            name="role"
            value="editor"
            ref={register({ required: true })} />
        Editor
    </label>
      </div>
      <button type="submit">Cadastrar</button>
      <Toaster />
    </Form>
  );
}

export default NewUserForm;