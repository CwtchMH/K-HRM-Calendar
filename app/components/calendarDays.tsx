
export default function CalendarDays({dayDate} : {dayDate: Date}) {
  const firstDayOfMonth = new Date(
    dayDate.getFullYear(),
    dayDate.getMonth(),
    1
  );
  const weekdayOfFirstDay = firstDayOfMonth.getDay();
  const currentDays = [];

  for (let day = 0; day < 42; day++) {
    if (day === 0 && weekdayOfFirstDay === 0) {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 6);
    } else if (day === 0) {
      firstDayOfMonth.setDate(
        firstDayOfMonth.getDate() + (day - weekdayOfFirstDay + 1)
      );
    } else {
      firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
    }

    const calendarDay = {
      currentMonth: firstDayOfMonth.getMonth() === dayDate.getMonth(),
      date: new Date(firstDayOfMonth),
      month: firstDayOfMonth.getMonth(),
      number: firstDayOfMonth.getDate(),
      selected: firstDayOfMonth.toDateString() === dayDate.toDateString(),
      year: firstDayOfMonth.getFullYear(),
    };

    currentDays.push(calendarDay);
  }

  const lastIndex = currentDays[35].currentMonth ? 42 : 35;

  return (
    <div className="table-content h-full grid grid-cols-7">
      {currentDays.slice(0, lastIndex).map((day) => {
        return (
          <div
            key={day.date.toDateString()}
            className={`calendar-day border text-end text-sm ${day.currentMonth ? "text-black" : "text-gray-400"}`}
          >
            {day.number.toString().padStart(2, '0')}/{(day.month + 1).toString().padStart(2, '0')}
          </div>
        );
      })}
    </div>
  );
}
