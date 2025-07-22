import {
  LOGIN_USER_EMAIL_ADDRESS,
  LOGIN_USER_PASSWORD,
  LOGIN_USER_REMEMBER_ME,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../../../constants/public/login/index";

// Define the action type
export const loginUserEmailAddress = (userEmailAddress: string | null) => {
  return {
    type: LOGIN_USER_EMAIL_ADDRESS,
    payload: userEmailAddress,
  };
};
export const loginUserPassword = (userPassword: string | null) => {
  return {
    type: LOGIN_USER_PASSWORD,
    payload: userPassword,
  };
};
export const loginUserRememberMe = (userRememberMe: boolean) => {
  return {
    type: LOGIN_USER_REMEMBER_ME,
    payload: userRememberMe,
  };
};

export const loginUserRequest = () => {
  return {
    type: LOGIN_USER_REQUEST,
  };
};
export const loginUserSuccess = (response: any) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: response,
  };
};
export const loginUserFailure = (error: any) => {
  return {
    type: LOGIN_USER_FAILURE,
    payload: error,
  };
};
