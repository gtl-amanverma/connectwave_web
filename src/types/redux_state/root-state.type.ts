import * as t from "io-ts";

// Define the DeviceDetailsState codec
export const DeviceDetailsState = t.type({
  deviceDetails: t.type({
    browserName: t.union([t.string, t.null]),
    browserVersion: t.union([t.string, t.null]),
    browserId: t.union([t.string, t.null]),
    browserOS: t.union([t.string, t.null]),
    browserEngine: t.union([t.string, t.null]),
    ipAddress: t.union([t.string, t.null]),
    macAddress: t.union([t.string, t.null]),
  }),
  action: t.type({
    loading: t.boolean,
    data: t.union([t.any, t.null]),
  }),
});

// Define the RootStates codec and structure
export const RootState = t.type({
  deviceDetailsState: DeviceDetailsState,  // Device details is a part of root state
  _persist: t.any,  // Adjust this according to your persisted state structure
});

// Export types for TypeScript type inference
export type RootStates = t.TypeOf<typeof RootState>;  // RootStates is derived from the codec
export type DeviceDetailsStateType = t.TypeOf<typeof DeviceDetailsState>;
