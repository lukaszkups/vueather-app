export const parseUnixToLocalTime = (date: Date, timezoneShiftInSeconds: number) => {
  try {
    const milliseconds = timezoneShiftInSeconds * 1000;
    const shiftedTimestamp = date.getTime() + milliseconds;
    const shiftedDate = new Date(shiftedTimestamp);
    return shiftedDate;
  } catch (err) {
    throw new Error(`There was a problem when converting ${date}, ${timezoneShiftInSeconds}: ${err}`);
  }
};

export const parseKmToMiles = (km: number) => (km / 1.609).toFixed(1);

export const parseTimeTo12HourFormat = (time: string) => {
  const timeArr = time.split(":");
  const hours = Number(timeArr[0]) % 12;
  const minutes = timeArr[1];
  return `${hours || 12}:${minutes}`;
};

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

export const getNiceTime = (date: Date) => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  // Format the hours and minutes to ensure they have two digits
  const formattedHours = hours < 10 ? `0${hours}` : hours;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  // Concatenate hours and minutes in HH:MM format
  const timeInHHMMFormat = `${formattedHours}:${formattedMinutes}`;
  return timeInHHMMFormat;
}
