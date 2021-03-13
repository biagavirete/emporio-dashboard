import React from 'react';
import { Badge, UserInformation } from './styles';
import ManAvatar from '../../assets/man-avatar.jpg';
import WomanAvatar from '../../assets/woman-avatar.jpg';
import { useSelector } from 'react-redux';


const UserInfo = () => {

  const { name, email, role } = useSelector((state: any) => state.users.data);

  return (
    <UserInformation>
      { role === 'admin' ? (
        <img src={WomanAvatar} alt="Avatar" />
      ) : (
        <img src={ManAvatar} alt="Avatar" />
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