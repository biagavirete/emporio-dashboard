import React from 'react';
import { Badge, UserInformation } from './styles';
import AdminAvatar from '../../assets/admin.png';
import EditorAvatar from '../../assets/user.png';
import { useSelector } from 'react-redux';


const UserInfo = () => {

  const { name, email, role } = useSelector((state: any) => state.users.data);

  return (
    <UserInformation>
      { role === 'admin' ? (
        <img src={AdminAvatar} alt="Avatar" />
      ) : (
        <img src={EditorAvatar} alt="Avatar" />
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