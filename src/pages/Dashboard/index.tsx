import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as UsersActions from '../../store/ducks/users/actions';
import * as ProductsActions from '../../store/ducks/products/actions';

import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';

import { SquareDiv } from './styles';
import EmporioLogo from '../../assets/svgs/LogoEmporio';

const Dashboard = () => {

  const { name } = useSelector((state: any) => state.users.data)
  const token = localStorage.getItem("token")
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(UsersActions.loadUsersRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    dispatch(ProductsActions.getProductsRequest());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { usersList } = useSelector((state: any) => state.users)

  const { products } = useSelector((state: any) => state.products)

  return (
    <>
      { token ? (
        <>
          <Sidebar />
          <div className="content-area">
            <h1>Bem-vindo(a), {name}!</h1>
            <p>Confira abaixo os dados referentes ao site:</p>
            <div className="data-area">
              <EmporioLogo />
              <div className="data">
                <SquareDiv>
                  <p>{usersList.length}</p>
                  <strong>usuários cadastrados</strong>
                </SquareDiv>
                <SquareDiv>
                  <p>{products.length}</p>
                  <strong>produtos cadastrados</strong>
                </SquareDiv>
              </div>
            </div>
          </div>
          <UserInfo />
        </>
      ) : <Redirect to="/" />}
    </>
  );
}

export default Dashboard;