export enum UserTypes {
  POST_LOGIN_REQUEST = '@users/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS = '@users/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE = '@users/POST_LOGIN_FAILURE',

  GET_USERDATA_REQUEST = '@users/GET_USERDATA_REQUEST',
  GET_USERDATA_SUCCESS = '@users/GET_USERDATA_REQUEST',
  GET_USERDATA_FAILURE = '@users/GET_USERDATA_REQUEST',
}

export interface Users {
  email: string,
  password: string
}

export interface Data {
  name: string,
  email: string,
  role: string,
  password: string,
  id: string
}

export interface UserState {
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: boolean;
  data: string
}
