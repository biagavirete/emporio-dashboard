/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import * as UsersService from '../../store/ducks/users/actions';
import * as ProductsService from '../../store/ducks/products/actions';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';
import { MainContainer } from './styles';

const Dashboard = () => {

  const [adminAuth, setAdminAuth] = useState(false);
  const { name, role } = useSelector((state: any) => state.users.data)
  const token = localStorage.getItem("token")
  const dispatch = useDispatch();

  useEffect(() => {
    if (role === 'admin') {
      setAdminAuth(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(UsersService.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(ProductsService.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { usersList } = useSelector((state: any) => state.users)

  const { products } = useSelector((state: any) => state.products)

  return (
    <>
      { token ? (
        <>
          <MainContainer>
            <Sidebar />
            <div className="content-area">
              <h1>Dashboard</h1>
              <p>Bem-vindo(a), {name}</p>
              {adminAuth ? <p>Pode ver tudo</p> : <p>Não vê users</p>}
              <Link to="/users">Clique para ver os usuários</Link>
              <div className="user-quantity">
                <strong>{usersList.length}</strong>
              </div>
              <div className="products-quantity">
                <strong>{products.length}</strong>
              </div>
            </div>
            <UserInfo />
          </MainContainer>
        </>
      ) : <Redirect to="/" />}
    </>
  );
}

export default Dashboard;