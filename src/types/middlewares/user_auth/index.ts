import * as t from "io-ts";

export const TokenType = t.string;

export const UserRoleType = t.union([
  t.literal("admin"),
  t.literal("user"),
]);
export const DeviceTokenType = t.string;
export const LanguageType = t.string;

export const AuthResultType = t.type({
  authToken: t.union([TokenType, t.null]),
  userRole: t.union([UserRoleType, t.null]),
  isAuthenticated: t.boolean,
  deviceToken: t.union([t.string, t.null]),
  lang: t.union([t.string, t.null]),
});

export type UserRole = t.TypeOf<typeof UserRoleType>;
export type AuthResult = t.TypeOf<typeof AuthResultType>;
