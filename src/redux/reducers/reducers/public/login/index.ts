import { ActionStateType } from "../../../../../types/redux_state/action.type";
import {
  LOGIN_USER_EMAIL_ADDRESS,
  LOGIN_USER_PASSWORD,
  LOGIN_USER_REMEMBER_ME,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
} from "../../../../constants/public/login/index";

const initialState = {
  loginForm: {
    userEmailAddress: null,
    userPassword: null,
    userRememberMe: false,
  },
  loginRequest: {
    loginRequestState: {
      isLoading: false,
      isSuccess: false,
      isError: false,
    },
    loginRequestResponse: {
      Type: "Success",
      Success: false,
      Status: 0,
      Message: "",
      Data: null,
    },
  },
};

export const loginState = (state = initialState, action: ActionStateType) => {
  switch (action.type) {
    case LOGIN_USER_EMAIL_ADDRESS:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          userEmailAddress: action.payload,
        },
      };
    case LOGIN_USER_PASSWORD:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          userPassword: action.payload,
        },
      };
    case LOGIN_USER_REMEMBER_ME:
      return {
        ...state,
        loginForm: {
          ...state.loginForm,
          userRememberMe: action.payload,
        },
      };
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        loginRequest: {
          ...state.loginRequest,
          loginRequestState: {
            isLoading: true,
            isSuccess: false,
            isError: false,
          },
        },
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loginRequest: {
          ...state.loginRequest,
          loginRequestState: {
            isLoading: false,
            isSuccess: true,
            isError: false,
          },
          loginRequestResponse: action.payload,
        },
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        loginRequest: {
          ...state.loginRequest,
          loginRequestState: {
            isLoading: false,
            isSuccess: false,
            isError: true,
          },
          loginRequestResponse: action.payload,
        },
      };
    default:
      return state;
  }
};
