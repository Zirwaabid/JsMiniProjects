const MonthNameE1 = document.getElementById("month-name");
const DayNameE1 = document.getElementById("day-name");
const DayNumE1 = document.getElementById("day-number");
const YearNameE1 = document.getElementById("year");

const date = new Date();
MonthNameE1.innerText = date.toLocaleDateString("en", {
    month: "long"
});
DayNameE1.innerText = date.toLocaleDateString("en", {
    weekday: "long"
});


DayNumE1.innerText = date.getDate();
YearNameE1.innerText = date.getFullYear();