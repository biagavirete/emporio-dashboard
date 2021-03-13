import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Data } from '../../store/ducks/users/types';
import * as UsersService from '../../store/ducks/users/actions';
import { Redirect } from 'react-router';
import { MainContainer } from '../Dashboard/styles';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';
import { IoTrashOutline } from 'react-icons/io5';
import NewUserForm from '../../components/NewUserForm';

const Users = () => {
  const [showAddNewUser, setShowAddNewUser] = useState(false);
  const token = localStorage.getItem("token")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersService.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { usersList, formSubmitted } = useSelector((state: any) => state.users);

  const toggleAddNewUser = () => {
    setShowAddNewUser(!showAddNewUser);
  }

  const deleteUser = (id: any) => {
    try {
      dispatch(UsersService.deleteUserRequest(id))
    } catch (e) {
      console.log(e)
    }
    // dispatch(UsersService.loadUsersRequest())
  }

  useEffect(() => {
    dispatch(UsersService.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formSubmitted])

  return (
    <MainContainer>
      <Sidebar />
      <div className="content-area">
        {token ? (
          <>
            <h1>Usuários</h1>

            <div className="table-users">
              <table>
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
              </table>
            </div>
            <div className="new-user">
              <button onClick={toggleAddNewUser}>Adicionar novo produto</button>

              {showAddNewUser && (
                <>
                  <h1>Novo usuário</h1>
                  <NewUserForm />
                </>
              )}
            </div>
          </>
        ) : <Redirect to="/" />}
      </div>
      <UserInfo />
    </MainContainer>
  );
}

export default Users;