const initialName = "Abd ulha mid";

firstName = initialName.substring(0, 2);
firstArray = initialName.split("");

console.log(firstArray[3]);
console.log();
capitalName = initialName[2];
restName = initialName.substring(3);
// console.log(capitalName);
// funnyName2 = funnyName1[2].toUpperCase();
console.log(
  firstName.toLowerCase() + capitalName.toUpperCase() + restName.toLowerCase()
);

// console.log();
// middleName = magician.substring(
//   magician.indexOf(" "),
//   magician.lastIndexOf(" ")
// );
// lastName = magician.substring(magician.lastIndexOf(" "));

// console.log("The first name is " + firstName);
// console.log("The middle name is " + middleName);
// console.log("The last name is " + lastName);
