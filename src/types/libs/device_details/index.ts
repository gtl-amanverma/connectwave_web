import * as t from "io-ts";

export const deviceDetails = t.type({
  deviceType: t.union([
    t.literal("mobile"),
    t.literal("tablet"),
    t.literal("desktop"),
    t.literal("browser"),
  ]),
  deviceName: t.union([t.string, t.null]),
  osVersion: t.union([t.string, t.null]),
  deviceId: t.union([t.string, t.null]),
  browserName: t.union([t.string, t.null]),
  browserVersion: t.union([t.string, t.null]),
  browserId: t.union([t.string, t.null]),
  browserOS: t.union([t.string, t.null]),
  browserEngine: t.union([t.string, t.null]),
  ipAddress: t.union([t.string, t.null]),
  macAddress: t.union([t.string, t.null]),
});

export type DeviceDetailsType = t.TypeOf<typeof deviceDetails>;
