import dayjs from "dayjs";

export function formatDate(date: Date | string, format: string = "YYYY-MM-DD") {
  return dayjs(date).format(format);
}
