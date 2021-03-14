import React from 'react';
import { useSelector } from 'react-redux';

import Bee from '../../assets/bee-standing.png';
import FlyingBee from '../../assets/bee-flying.png';

import { Badge, UserInformation } from './styles';

const UserInfo = () => {

  const { name, email, role } = useSelector((state: any) => state.users.data);

  return (
    <UserInformation>
      { role === 'admin' ? (
        <img src={Bee} alt="Avatar" />
      ) : (
        <img src={FlyingBee} alt="Avatar" />
      )}
      <h2>{name}</h2>
      <p>{email}</p>
      <Badge>
        <strong>{role}</strong>
      </Badge>
    </UserInformation >
  );
}

export default UserInfo;