/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const [adminAuth, setAdminAuth] = useState(false);
  const { name, role } = useSelector((state: any) => state.users.data)

  useEffect(() => {
    if (role === 'admin') {
      setAdminAuth(true);
    }
  }, [])


  return (
    <>
      <h1>Dashboard</h1>
      <p>Bem-vindo(a), {name}</p>
      { adminAuth ? <p>Pode ver tudo</p> : <p>Não vê users</p>}
    </>
  );
}

export default Dashboard;