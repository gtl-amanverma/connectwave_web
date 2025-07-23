import { isRight } from "fp-ts/Either";
import {
  AuthResult,
  AuthResultType,
  DeviceTokenType,
  LanguageType,
  TokenType,
  UserRoleType,
} from "../../types/middlewares/user_auth/index";
import { getCookie } from "../../utils/cookies";

export const authMiddleware = (): AuthResult => {
  const tokenFromCookie = getCookie("authToken");
  const userRoleFromCookie = getCookie("userRole");
  const deviceTokenFromCookie = getCookie("token");
  const langFromCookie = getCookie("lang");

  const tokenValidation = tokenFromCookie
    ? TokenType.decode(tokenFromCookie)
    : undefined;
  const roleValidation = userRoleFromCookie
    ? UserRoleType.decode(userRoleFromCookie)
    : undefined;
  const deviceTokenValidation = deviceTokenFromCookie
    ? DeviceTokenType.decode(deviceTokenFromCookie)
    : undefined;
  const langValidation = langFromCookie
    ? LanguageType.decode(langFromCookie)
    : undefined;

  const result: AuthResult = {
    authToken:
      tokenValidation && isRight(tokenValidation)
        ? tokenValidation.right
        : null,
    userRole:
      roleValidation && isRight(roleValidation)
        ? roleValidation.right
        : null,
    deviceToken:
      deviceTokenValidation && isRight(deviceTokenValidation)
        ? deviceTokenValidation.right
        : null,
    lang:
      langValidation && isRight(langValidation)
        ? langValidation.right
        : null,
    isAuthenticated: false,
  };

  result.isAuthenticated = Boolean(
    result.authToken || result.userRole || result.deviceToken || result.lang
  );

  const validatedResult = AuthResultType.decode(result);
  return isRight(validatedResult)
    ? validatedResult.right
    : {
        authToken: null,
        userRole: null,
        isAuthenticated: false,
        deviceToken: null,
        lang: null,
      };
};
