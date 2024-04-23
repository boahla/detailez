import { formatInTimeZone, utcToZonedTime } from "date-fns-tz";

export const getZonedDateFromISO: (
  raw: string,
  timeZone?: string
) => ReturnType<typeof utcToZonedTime> = (raw, timeZone = "Asia/Seoul") => {
  const hasTimezone = raw.match(/[+Z]/);
  const date = new Date(raw.concat(!hasTimezone ? "Z" : ""));

  return utcToZonedTime(date, timeZone);
};

export const formatISOFromZonedDate: (
  zonedDate: Date,
  timeZone?: string
) => string = (zonedDate, timeZone = "Asia/Seoul") => {
  //   return format(zonedDate, "yyyy-MM-dd'T'HH:mm:ssXXX", { timeZone });
  return formatInTimeZone(zonedDate, timeZone, "yyyy-MM-dd'T'HH:mm:ssXXX");
};
