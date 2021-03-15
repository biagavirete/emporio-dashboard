import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router';

import { useDispatch, useSelector } from 'react-redux';
import { Data } from '../../store/ducks/users/types';
import * as UserActions from '../../store/ducks/users/actions';

import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';
import NewUserForm from '../../components/NewUserForm';

import { MainContainer } from '../Dashboard/styles';
import { NewUserButton, Table } from './styles';
import { IoTrashOutline } from 'react-icons/io5';

const Users = () => {
  const [showAddNewUser, setShowAddNewUser] = useState(false);
  const dispatch = useDispatch();

  const { role } = useSelector((state: any) => state.users.data)
  const token = localStorage.getItem("token")

  useEffect(() => {
    dispatch(UserActions.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { usersList, formSubmitted } = useSelector((state: any) => state.users);

  const toggleAddNewUser = () => {
    setShowAddNewUser(!showAddNewUser);
  }

  const deleteUser = (id: any) => {
    try {
      dispatch(UserActions.deleteUserRequest(id))
    } catch (e) {
      console.log(e)
    }
    dispatch(UserActions.loadUsersRequest())
  }

  useEffect(() => {
    dispatch(UserActions.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted, usersList])

  return (
    <>
      { token ? (
        <MainContainer>
          <Sidebar />
          <div className="content-area">
            {role === 'admin' ? (
              <>
                <h1>Usuários</h1>

                <div className="table-users">
                  <Table>
                    <thead>
                      <tr>
                        <th>Nome</th>
                        <th>Permissão</th>
                      </tr>
                    </thead>
                    <tbody>
                      {usersList !== undefined && usersList.map((item: Data) => (
                        <>
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.role}</td>
                            <td><button onClick={() => deleteUser(item.id)}><IoTrashOutline size={20} /></button></td>
                          </tr>
                        </>
                      ))}
                    </tbody>
                  </Table>
                </div>
                <div className="new-user">
                  <NewUserButton onClick={toggleAddNewUser}>Adicionar novo usuário</NewUserButton>

                  {showAddNewUser && (
                    <>
                      <h3>Novo usuário</h3>
                      <NewUserForm />
                    </>
                  )}
                </div>
              </>
            ) : <Redirect to="/" />}
          </div>
          <UserInfo />
        </MainContainer>
      ) : <Redirect to="/" />}
    </>
  );
}

export default Users;