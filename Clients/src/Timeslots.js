export const TimeSlots = [];
for (let hour = 9; hour < 22; hour++) {
    let period = "AM";
    let formattedHour = hour;

    if (hour >= 12) {
        period = "PM";
        if (hour > 12) {
            formattedHour = hour - 12;
        }
    }

    const startTime = `${formattedHour < 10 ? '0' : ''}${formattedHour}:00 ${period}`;
    const endHour = (hour + 1) % 12 || 12;
    const endPeriod = hour + 1 >= 12 ? "PM" : "AM";
    const endTime = `${endHour < 10 ? '0' : ''}${endHour}:00 ${endPeriod}`;

    TimeSlots.push(`${startTime} - ${endTime}`);
}
