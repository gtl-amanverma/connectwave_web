import * as t from "io-ts";

export const ActionStateCodec = t.type({
  type: t.string,
  action: t.string,
  payload: t.string,
});

export type ActionStateType = t.TypeOf<typeof ActionStateCodec>;
