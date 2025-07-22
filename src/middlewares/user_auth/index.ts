import { isRight } from "fp-ts/Either";
import {
  AuthResult,
  AuthResultType,
  DeviceTokenType,
  TokenType,
  UserRoleType,
} from "../../types/middlewares/user_auth/index";
import { getCookie } from "../../utils/cookies";

export const authMiddleware = (): AuthResult => {
  const tokenFromCookie = getCookie("authToken") ?? null;
  const userRoleFromCookie = getCookie("userRole") ?? null;
  const deviceTokenFromCookie = getCookie("deviceToken") ?? null;

  const tokenValidation = TokenType.decode(tokenFromCookie);
  const roleValidation = UserRoleType.decode(userRoleFromCookie);
  const deviceTokenValidation = DeviceTokenType.decode(deviceTokenFromCookie);

  const result: AuthResult = {
    authToken: null,
    userRole: null,
    isAuthenticated: false,
    deviceToken: null,
  };

  if (isRight(tokenValidation) && isRight(roleValidation) && isRight(deviceTokenValidation)) {
    result.authToken = tokenValidation.right;
    result.userRole = roleValidation.right;
    result.isAuthenticated = true;
    result.deviceToken = deviceTokenValidation.right;
  }
  const validatedResult = AuthResultType.decode(result);
  if (isRight(validatedResult)) {
    return validatedResult.right;
  } else {
    return {
      authToken: null,
      userRole: null,
      isAuthenticated: false,
      deviceToken: null,
    };
  }
};