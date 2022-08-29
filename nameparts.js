const magician = "Albus Percival Wulfric Brian Dumbledore";
// console.log();
// firstName = magician.substring(magician.indexOf(""), " ");
// const [firstName, middleName, lastName] = magician.split(" ");
// console.log(magician.split(" "));

// middleName = magician.substring(
//     magician.indexOf(" "),
//   );
firstName = magician.substring("", magician.indexOf(" "));

middleName = magician.substring(
  magician.indexOf(" "),
  magician.lastIndexOf(" ")
);
lastName = magician.substring(magician.lastIndexOf(" "));

console.log("The first name is " + firstName);
console.log("The middle name is " + middleName);
console.log("The last name is " + lastName);
