/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import UserInfo from '../../components/UserInfo';
import { MainContainer } from './styles';

const Dashboard = () => {

  const [adminAuth, setAdminAuth] = useState(false);
  const { name, role } = useSelector((state: any) => state.users.data)
  const token = localStorage.getItem("token")

  useEffect(() => {
    if (role === 'admin') {
      setAdminAuth(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


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
            </div>
            <UserInfo />
          </MainContainer>
        </>
      ) : <Redirect to="/" />}
    </>
  );
}

export default Dashboard;