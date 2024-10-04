import { useMemo } from "react";
import UAParser from "ua-parser-js";

// 📝 NOTE: https://github.com/mcollina/my-ua-parser?tab=readme-ov-file#readme
// Access window.navigator.userAgent only once, this prevents browser from re-rendering
const defaultUAString = window.navigator.userAgent;
const uaParser = new UAParser.UAParser();

type IUseUAReturn = Omit<UAParser.IResult, "ua">;

function useUA(uaString = defaultUAString) {
  return useMemo<IUseUAReturn | null>(() => {
    uaParser.setUA(uaString);
    const { ua, ...result } = uaParser.getResult();
    return {
      ...result,
    };
  }, [uaString]);
}

function useIsIOSDevice(uaString = defaultUAString) {
  return useMemo<boolean>(() => {
    uaParser.setUA(uaString);
    const { browser, device, os } = uaParser.getResult();

    const { name: browserName = "" } = browser;
    if (/Mobile Safari|Safari/.test(browserName)) {
      return true;
    }

    const { name: osName = "" } = os;
    if (/iOS|Mac OS/.test(osName)) {
      return true;
    }

    const { vendor = "" } = device;
    if (/Apple/.test(vendor)) {
      return true;
    }

    return false;
  }, [uaString]);
}

function useIsMobile(uaString = defaultUAString) {
  return useMemo<boolean>(() => {
    uaParser.setUA(uaString);
    const { device } = uaParser.getResult();

    const { type = "" } = device;
    if (/mobile/.test(type)) {
      return true;
    }

    return false;
  }, [uaString]);
}

export { useUA, useIsIOSDevice, useIsMobile };
