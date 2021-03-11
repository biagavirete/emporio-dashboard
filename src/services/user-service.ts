import api from './api';

const UserService = {
  postLogin: (loginData: any) => api.post('/login', loginData)
}

export default UserService;
