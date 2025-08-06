import { Dayjs } from "dayjs";

export interface CalendarProps {
  value: Dayjs | null;
  onChange: (value: Dayjs | null) => void;
}