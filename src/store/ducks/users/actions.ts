import { action } from "typesafe-actions";
import { UserTypes } from './types';

export const loginRequest = (loginData: any) => action(UserTypes.POST_LOGIN_REQUEST, loginData);
export const loginSuccess = (data: any) => action(UserTypes.POST_LOGIN_SUCCESS, data);
export const loginFailure = () => action(UserTypes.POST_LOGIN_FAILURE);

export const loadUsersRequest = () => action(UserTypes.GET_USERSLIST_REQUEST);
export const loadUsersSuccess = (data: any) => action(UserTypes.GET_USERSLIST_SUCCESS, data);
export const loadUsersFailure = () => action(UserTypes.GET_USERSLIST_FAILURE);

export const signUpRequest = (signUpData: any) => action(UserTypes.POST_SIGNUP_REQUEST, signUpData);
export const signUpSuccess = (data: any) => action(UserTypes.POST_SIGNUP_SUCCESS, data);
export const signUpFailure = () => action(UserTypes.POST_SIGNUP_FAILURE);

export const deleteUserRequest = (id: any) => action(UserTypes.DELETE_USER_REQUEST, id);
export const deleteUserSuccess = () => action(UserTypes.DELETE_USER_SUCCESS);
export const deleteUserFailure = () => action(UserTypes.DELETE_USER_FAILURE);