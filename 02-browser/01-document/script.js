const ageTable = document.querySelector("#age-table");
const allLabel = ageTable.querySelectorAll("label");
const firstTd = ageTable.querySelector("td");
const searchForm = document.querySelector("form[name=search]");
const firstInputInForm = searchForm.querySelector("input");
const lastInputInForm = document.querySelector("form[name=search] > input");

firstTd.style.fontSize = "30px";
searchForm.style.backgroundColor = "green";
allLabel.forEach((element) => (element.style.background = "blue"));

firstInputInForm.style.fontSize = "40px";
lastInputInForm.style.fontSize = "30px";
