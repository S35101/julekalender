import { getDate, getMonth } from "date-fns";

enum Months {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export interface MessageProps {
  date: number;
  names: string[];
}

export const Message = ({ date, names }: MessageProps) => {
  const month = getMonth(date);

  if (month !== Months.December) {
    return <span>Det er ikke desember... enda! 🎅🏻</span>;
  }

  const day = getDate(date);

  if (day > 24) {
    return <span>God juleferie! 🎄</span>;
  }

  const index = (day - 1) % names.length;

  return (
    <span>
      {day}. {names[index]} 🎁
    </span>
  );
};
