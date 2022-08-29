const magician = "Albus Percival Wulfric Brian Dumbledore";

firstName = magician.substring("", magician.indexOf(" "));

middleName = magician.substring(
  magician.indexOf(" "),
  magician.lastIndexOf(" ")
);
lastName = magician.substring(magician.lastIndexOf(" "));

console.log("The first name is " + firstName);
console.log("The middle name is " + middleName);
console.log("The last name is " + lastName);
