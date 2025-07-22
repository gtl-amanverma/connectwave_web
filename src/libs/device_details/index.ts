import { isRight } from "fp-ts/Either";
import { deviceDetails, DeviceDetailsType } from "../../types/libs/device_details";

export const getDeviceDetails =
  async (): Promise<DeviceDetailsType | null> => {
    const browserName = navigator.appName ?? null;
    const browserVersion = navigator.appVersion ?? null;
    const browserId = navigator.userAgent ?? null;
    const browserOS = navigator.platform ?? null;
    const browserEngine = navigator.product ?? null;
    const ip = null;
    let macAddress = "";

    const rawDeviceData = {
      browserName,
      browserVersion,
      browserId,
      browserOS,
      browserEngine,
      ip,
      macAddress,
    };

    const result = deviceDetails.decode(rawDeviceData);

    if (isRight(result)) {
      return result.right;
    } else {
      console.error("Device details validation failed:", result.left);
      return null;
    }
  };
