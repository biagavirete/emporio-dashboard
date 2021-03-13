import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { IoPersonSharp, IoBeerSharp, IoLogOutSharp, IoHome } from 'react-icons/io5'
import { Aside } from './styles';
import Bee from '../../assets/b-logo.png';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const history = useHistory();

  const { role } = useSelector((state: any) => state.users.data)

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  }

  return (
    <Aside>
      { role === 'admin' ? (
        <>
          <div className="logo-links">
            <div className="logo">
              <img src={Bee} alt="Bee" />
              <strong>Área Administrativa</strong>
            </div>
            <div className="links">
              <NavLink to="/dashboard" activeClassName="selected">
                <i><IoHome /></i>
                <strong>Home</strong>
              </NavLink>
              <NavLink to="/users" activeClassName="selected">
                <i><IoPersonSharp /></i>
                <strong>Usuários</strong>
              </NavLink>
              <NavLink to="/products" activeClassName="selected">
                <i><IoBeerSharp /></i>
                <strong>Produtos</strong>
              </NavLink>
            </div>
          </div>
          <div className="logout">
            <button onClick={logout}>
              <IoLogOutSharp />
              <strong>Logout</strong>
            </button>
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
              <NavLink to="/dashboard" activeClassName="selected">
                <i><IoHome /></i>
                <strong>Home</strong>
              </NavLink>
              <NavLink to="/products" activeClassName="selected">
                <i><IoBeerSharp /></i>
                <strong>Produtos</strong>
              </NavLink>
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