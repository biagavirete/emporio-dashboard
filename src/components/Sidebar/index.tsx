import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IoPersonSharp, IoBeerSharp, IoLogOutSharp, IoHome } from 'react-icons/io5'
import { Aside } from './styles';
import Bee from '../../assets/bee.png';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const history = useHistory();

  const { role } = useSelector((state: any) => state.users.data)

  const logout = () => {
    localStorage.clear();
    history.push('/');
  }
  return (
    <Aside>
      { role === 'admin' ? (
        <>
          <div className="logo-links">
            <div className="logo">
              <img src={Bee} alt="Bee" />
              <h2>BEES - Área Administrativa</h2>
            </div>
            <div className="links">
              <Link to="/dashboard"><IoHome /> Home</Link>
              <Link to="/users"><IoPersonSharp /> Usuários</Link>
              <Link to="/products"><IoBeerSharp /> Produtos</Link>
            </div>
          </div>
          <div className="logout">
            <button onClick={logout}><IoLogOutSharp /> Logout</button>
          </div>
        </>
      ) : (
        <>
          <div className="logo-links">
            <div className="logo">
              <img src={Bee} alt="Bee" />
              <h2>BEES - Área Administrativa</h2>
            </div>
            <div className="links">
              <Link to="/dashboard"><IoHome /> Home</Link>
              <Link to="/products"><IoBeerSharp /> Produtos</Link>
            </div>
          </div>
          <div className="logout">
            <button onClick={logout}><IoLogOutSharp /> Logout</button>
          </div>
        </>
      )}
    </Aside>
  );
}

export default Sidebar;