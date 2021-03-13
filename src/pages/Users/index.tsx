import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as UserActions from '../../store/ducks/users/actions';
import { Data } from '../../store/ducks/users/types';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'react-hot-toast';
import api from '../../services/api';
import { Redirect } from 'react-router';
import { MainContainer } from '../Dashboard/styles';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';

const Users = () => {
  const { register, handleSubmit, errors } = useForm();
  const token = localStorage.getItem("token")
  const dispatch = useDispatch();

  const getUsers = async () => {
    try {
      await api.get('/users')
        .then(response => dispatch(UserActions.loadUsers(response.data)))
    } catch (e) {
      console.log(e)
    }
  }

  const { usersList } = useSelector((state: any) => state.users);

  useEffect(() => {
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const onSubmit = async (data: any) => {
    try {
      dispatch(UserActions.signUpRequest(data));
    } catch (e) {
      console.log(e)
    }
    toast.success('Cadastro realizado')
  }

  return (
    <MainContainer>
      <Sidebar />
      <div className="content-area">
        {token ? (
          <>
            <h1>Usuários</h1>

            <button>Cadastrar novo usuário</button>

            {usersList !== undefined && usersList.map((item: Data) => (
              <ul>
                <li>
                  <p>Nome:</p>{item.name}
                  <p>Permissão:</p>{item.role}

                </li>
              </ul>
            ))}

            <h1>Novo usuário</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <label>
                Nome
<input
                  type="text"
                  placeholder="Digite o nome"
                  name="name"
                  ref={register({
                    required: 'Campo obrigatório',
                  })} />
              </label>
              {errors.name && <p
                role="alert"
                data-testid="email-error">{errors.name.message}</p>
              }
              <label>
                E-mail
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
              </label>
              {errors.email && <p
                role="alert"
                data-testid="email-error">{errors.email.message}</p>
              }

              <label>
                Senha
<input
                  type="password"
                  placeholder="Digite a senha"
                  name="password"
                  ref={register({
                    required: 'Campo obrigatório',
                    minLength: 6
                  })} />
              </label>
              {errors.password && <p
                role="alert"
                data-testid="password-error">{errors.password.message}</p>
              }

              <label>Tipo</label>

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
                  name="married"
                  value="editor"
                  ref={register({ required: true })} />
        Editor
    </label>
              <Toaster />
              <button type="submit">Cadastrar</button>
            </form>
          </>
        ) : <Redirect to="/" />}
      </div>
      <UserInfo />
    </MainContainer>
  );
}

export default Users;