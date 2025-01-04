
//   task 1
let arr1 = [1, 2, 3, 4, 5];
document.writeln(arr1.length);
document.writeln("<br>");

//   task 2
let tas = [1, 2, 3, 4, 5];
for (let x of tas) {
  document.writeln(x);
}
document.writeln("<br>");

//   task 3
let tas1 = [1, 2, 3, 4, 5];
for (let x of tas1) {
  document.writeln(x);
}
document.writeln("<br>");

//   task 4
let tas2 = [1, 2, 3, 4, 5];
document.writeln(Array.isArray(tas2));
document.writeln("<br>");

//   task 5
let tas3 = { 0: "a", 1: "b", 2: "c", length: 3 };
document.writeln(Array.from(tas3));
document.writeln("<br>");

//   task 6
let tas4 = [1, 2, 3, 4, 5];
tas4.forEach(function (tas4) {
  document.writeln(tas4);
});
document.writeln(tas4.push(6));
document.writeln("<br>");

//   task 7
const tas5 = [1, 2, 3];
const tas6 = [4, 5, 6];
document.writeln(tas5.concat(tas6));
document.writeln("<br>");

//   task 8
let tas7 = [1, 2, 3, 4, 5];
document.writeln(
  tas7.indexOf(1) + 1,
  tas7.indexOf(2) + 1,
  tas7.indexOf(3) + 1,
  tas7.indexOf(4) + 1,
  tas7.indexOf(5) + 1
);
document.writeln("<br>");

//   task 9
let tas8 = [1, 2, 3, 4, 5, 6];
let tas10 = tas8.slice(0, 2);
let tas9 = tas8.slice(4);
let tas11 = tas10.concat(tas9);
document.writeln(tas11);
document.writeln("<br>");

//   task 10
let tas12 = [1, 2, 3, 4];
let tas13 = tas12.splice(2, 2, 6, 7);
document.writeln(tas12);
document.writeln("<br>");

//   task 11
let tas14 = [1, 2, 3, 4, 5];
let tas15 = tas14.join("");
document.writeln(tas15);
document.writeln("<br>");

//   task 12
let tas16 = "1,2,3,4,5";
let tas17 = tas16.split(",");
document.writeln(tas17);
document.writeln("<br>");


//   task 13
let tas18 = Array.of(1, 2, 3);
document.writeln(tas18);
document.writeln("<br>");


//   task 14
let tas19 = [1, 2, 3, 4, 5];
tas19.fill(0, 0, 3);
document.writeln(tas19);
document.writeln("<br>");

