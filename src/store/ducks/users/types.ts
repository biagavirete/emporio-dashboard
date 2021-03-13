export enum UserTypes {
  POST_LOGIN_REQUEST = '@users/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS = '@users/POST_LOGIN_SUCCESS',
  POST_LOGIN_FAILURE = '@users/POST_LOGIN_FAILURE',

  GET_USERSLIST_REQUEST = '@users/GET_USERSLIST_REQUEST',
  GET_USERSLIST_SUCCESS = '@users/GET_USERSLIST_SUCCESS',
  GET_USERSLIST_FAILURE = '@users/GET_USERSLIST_FAILURE',

  POST_SIGNUP_REQUEST = '@users/POST_SIGNUP_REQUEST',
  POST_SIGNUP_SUCCESS = '@users/POST_SIGNUP_SUCCESS',
  POST_SIGNUP_FAILURE = '@users/POST_SIGNUP_FAILURE',

  DELETE_USER_REQUEST = '@users/DELETE_USER_REQUEST',
  DELETE_USER_SUCCESS = '@users/DELETE_USER_SUCCESS',
  DELETE_USER_FAILURE = '@users/DELETE_USER_FAILURE',
}

export interface Users {
  email: string,
  password: string
}

export interface Data {
  name: string,
  email: string,
  role: string,
  id: string
}

export interface UserState {
  readonly loading: boolean;
  readonly success: boolean;
  readonly error: boolean;
  readonly formSubmitted: boolean;
  data: string;
  usersList: any;
  newUserData: any;
}
