import { format } from "date-fns";
import { getZonedDateFromISO } from "./timezone";

interface FormatDateProps {
  date: string;
  type?: string;
}

// date 형식인지 확인
const isCorrectDate = (date: Date): boolean =>
  date instanceof Date && isFinite(+date);

// date format
export const formatDate = ({ date, type }: FormatDateProps) => {
  if (!date) return "-";

  const target = getZonedDateFromISO(date);
  if (!isCorrectDate(target)) return date;

  let result = format(target, "yy/MM/dd HH:mm");

  return result;
};

// const getDays = ({ date }: FormatDateProps) => {
//   const days = ["일", "월", "화", "수", "목", "금", "토"];

//   const dayValue = new Date(date);
//   let day = dayValue.getDay(); // 4

//   return days[day];
// };
