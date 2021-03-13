import api from './api';

const UserService = {
  postLogin: (loginData: any) => api.post('/login', loginData),
  getUserData: (id: any) => api.get(`/users/${id}`),
  getUsersList: () => api.get('/users?role=admin&role=editor'),
  postNewUser: (signUpData: any) => api.post('/register', signUpData),
  deleteUser: (id: any) => api.delete(`/users/${id}`)
}

export default UserService;
