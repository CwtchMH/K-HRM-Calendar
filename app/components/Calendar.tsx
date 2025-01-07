import React from "react";
import { useState } from "react";
import CalendarDays from "./CalendarDays";

export default function Calendar() {
  const weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const [currentDate, setCurrentDate] = useState(new Date());

  const changeCurrentDay = (day) => {
    setCurrentDate(new Date(day.year, day.month, day.number));
  };

  return (
    <div className="calendar w-[92%] h-[80%] border mt-10">
      <div
        id="calendar-header"
        className="w-[100%] h-[5%] flex items-center border"
      >
        <div className="font-bold">
          Tháng {(currentDate.getMonth() + 1).toString().padStart(2, "0")} /{" "}
          {currentDate.getFullYear()}
        </div>
      </div>
      <div className="calendar-body w-[100%] h-[95%] grid grid-cols-7">
        <div className="calendar-content h-[100%] col-span-6 grid grid-rows-12 border">
          <div className=" grid grid-cols-7">
            {weekdays.map((weekday, idx) => {
              return (
                <div key={idx} className="weekday place-content-center text-center border">
                  {weekday}
                </div>
              );
            })}
          </div>
          <div className="row-span-11 border">
            <CalendarDays
              day={currentDate}
              changeCurrentDay={changeCurrentDay}
            />
          </div>
        </div>
        <div className="statistic"></div>
      </div>
    </div>
  );
}
