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

export const degreesToWorldDirection = (degrees: number) => {
  // Define wind directions and their corresponding degree ranges
  const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
  const degreeRanges = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];

  // Find the index of the direction based on the degree
  const directionIndex = degreeRanges.findIndex((range, index) => {
    const nextRange = index === degreeRanges.length - 1 ? 360 + degreeRanges[0] : degreeRanges[index + 1];
    return degrees >= range && degrees < nextRange;
  });

  // Use the direction index to get the corresponding direction string
  const windDirection = directions[directionIndex];
  return windDirection;
}

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
