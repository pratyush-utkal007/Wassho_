import React, { useState, useEffect } from "react";
import TimeSlot from "./TimeSlot";

const Calendar = ({ onDateSelect, onTimeSelect }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();

  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [calendarData, setCalendarData] = useState([]);

  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    updateCalendar(currentMonth, currentYear);
  }, [currentMonth, currentYear, selectedDate]);

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  const updateCalendar = (targetMonth, targetYear) => {
    const currentDate = new Date();
    const firstDay = new Date(targetYear, targetMonth, 1);
    const daysInMonth = new Date(targetYear, targetMonth + 1, 0).getDate();
    const startDay = firstDay.getDay();
  
    const prevMonthLastDay = new Date(targetYear, targetMonth, 0);
    const daysInPrevMonth = prevMonthLastDay.getDate();
    const prevMonthFirstDay = new Date(
      targetYear,
      targetMonth - 1,
      daysInPrevMonth - startDay + 1
    );
  
    const calendarDays = [];
  
    for (let i = 0; i < startDay; i++) {
      const prevMonthDay = prevMonthFirstDay.getDate() + i;
      calendarDays.push({
        date: prevMonthDay,
        isCurrentMonth: false,
        isDisabled: true, // Disable previous month's dates
      });
    }
  
    for (let day = 1; day <= daysInMonth; day++) {
      const currentDateInMonth = new Date(targetYear, targetMonth, day);
      calendarDays.push({
        date: day,
        isCurrentMonth: true,
        isDisabled:
          (currentDateInMonth.getMonth() < currentDate.getMonth() ||
            (currentDateInMonth.getMonth() === currentDate.getMonth() &&
              currentDateInMonth.getDate() < currentDate.getDate())) &&
          currentDateInMonth.getFullYear() === currentDate.getFullYear() &&
          !day.isCurrentMonth, // Disable past dates, except for today
      });
    }
  
    setCalendarData(calendarDays);
  };
  



  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <>
      <section>
        <div className="calendar mx-auto">
          <div className="calendar-header flex justify-between bg-slate-950 text-white px-4 py-2 md:text-xl border-b">
            <button onClick={prevMonth}>Previous</button>
            <h2>{`${months[currentMonth]} ${currentYear}`}</h2>
            <button onClick={nextMonth}>Next</button>
          </div>
          <div className="grid grid-cols-7 text-center bg-black text-white md:text-xl text-sm font-bold w-full">
            {weekdays.map((day, index) => {
              return (
                <div className="md:ms-5 ms-2 py-2" key={index}>
                  {day}
                </div>
              );
            })}
          </div>

          <div className="calendar-grid grid grid-cols-7">
            {calendarData.map((day, index) => (
              <div
                key={index}
                className={`cursor-pointer calendar-day md:px-12 md:py-6 grid place-content-center border ${day.isDisabled ? "disabled text-gray-400" : ""
                  } ${day.isCurrentMonth ? "" : "prev-day"} ${selectedDate &&
                    selectedDate.getDate() === day.date &&
                    selectedDate.getMonth() === currentMonth &&
                    selectedDate.getFullYear() === currentYear &&
                    day.isCurrentMonth
                    ? "bg-blue-500 text-white"
                    : ""
                  }`}
                onClick={() => {
                  if (!day.isDisabled && day.isCurrentMonth) {
                    setSelectedDate(new Date(currentYear, currentMonth, day.date));
                    onDateSelect(
                      `${months[currentMonth]} ${day.date}, ${currentYear}`
                    );
                  }
                }}
              >
                {day.date}
              </div>
            ))}


          </div>
        </div>
        <div className="my-8">
          <TimeSlot selectedDate={selectedDate} onTimeSelect={onTimeSelect} />
        </div>
      </section>
    </>
  );
};

export default Calendar;