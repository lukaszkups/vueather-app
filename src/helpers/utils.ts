import { useNotificationsStore } from "@/store/notifications";
import type { IToastNotification } from "./interfaces";
import { notificationTypeEnum } from "./dictionaries";

export const getQueryParameter = (paramName: string) => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
}

export const getYourTimezoneOffset = () => {
  const d = new Date();
  return d.getTimezoneOffset() * 60;
}

export const getCurrentTimeWithoutOffset = () => {
  const localTime = new Date();
  const utcTime = new Date(
    localTime.getUTCFullYear(),
    localTime.getUTCMonth(),
    localTime.getUTCDate(),
    localTime.getUTCHours(),
    localTime.getUTCMinutes(),
    localTime.getUTCSeconds()
  );
  return utcTime;
}

export const sleep = async (time: number) => await new Promise(resolve => setTimeout(resolve, time));

export const notifyAboutError = (err: string | Error) => {
  const notifyStore = useNotificationsStore();
  const errNotification: IToastNotification = {
    id: Date.now(),
    title: err.toString(),
    url: '',
    type: notificationTypeEnum.error,
  }
  notifyStore.notifications.push(errNotification);
}
