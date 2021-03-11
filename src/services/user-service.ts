import api from './api';

const UserService = {
  postLogin: (loginData: any) => api.post('/login', loginData),
  getUserData: (id: any) => api.get(`/users/${id}`)
}


export default UserService;
