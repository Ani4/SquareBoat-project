let months = [
  "jan",
  "feb",
  "mar",
  "apr",
  "may",
  "jun",
  "jul",
  "aug",
  "sep",
  "oct",
  "nov",
  "dec"
];
let d = new Date();

let DateArray = document.getElementsByClassName("datePut");
// console.log(DateArray);
for (let i = 0; i < DateArray.length; i++)
  DateArray[i].innerHTML =
    months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
