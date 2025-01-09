export type calendarDay = {
  currentMonth: boolean;
  date: Date;
  month: number;
  number: number;
  selected: boolean;
  year: number;
};

export type Month = {
  number: number;
  name: string;
};

export type MonthCalProps = {
  selectedMonth?: Date;
  onMonthSelect?: (date: Date) => void;
  onYearForward?: () => void;
  onYearBackward?: () => void;
  callbacks?: {
    yearLabel?: (year: number) => string;
    monthLabel?: (month: Month) => string;
  };
  variant?: {
    calendar?: {
      main?: ButtonVariant;
      selected?: ButtonVariant;
    };
    chevrons?: ButtonVariant;
  };
  minDate?: Date;
  maxDate?: Date;
  disabledDates?: Date[];
};

export type ButtonVariant =
  | "default"
  | "outline"
  | "ghost"
  | "link"
  | "destructive"
  | "secondary"
  | null
  | undefined;

export type State = {
  toggleSideNav: boolean;
}