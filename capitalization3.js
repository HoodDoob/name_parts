// const initialName = "Abd ulha mid";

// firstName = initialName.substring(0, 2);
// firstArray = initialName.split("");

// console.log(firstArray[3]);
// console.log();
// capitalName = initialName[2];
// restName = initialName.substring(3);
// // console.log(capitalName);
// // funnyName2 = funnyName1[2].toUpperCase();
// console.log(
//   firstName.toLowerCase() + capitalName.toUpperCase() + restName.toLowerCase()
// );

// capitalize("dfgnkj");
// capitalize("joe cocker");

// function capitalize(str) {
//   console.log(str[0].toUpperCase() + str.substring(1));
// }

// getNameParts("robert kj orsdsd");
// function getNameParts(fullname) {
//   firstName = fullname.substring(fullname.indexOf(""), fullname.indexOf(" "));
//   middleName = fullname.substring(
//     fullname.indexOf(" "),
//     fullname.lastIndexOf(" ")
//   );

//   lastName = fullname.substring(fullname.lastIndexOf(" "));
//   if (middleName == "") {
//     middleName = "undefined";
//   }
//   console.log({ firstName, middleName, lastName });
// }
fullName("Potter", "Harry", "James");
fullName("Potter", "Harry");
fullName("Harry", "Potter");
fullName("Potter", "Harry", "James", "Pottypotpot");
function fullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    console.log(firstName + " " + lastName);
  } else {
    console.log(firstName + " " + middleName + " " + lastName);
  }
}
// console.log();
// middleName = magician.substring(
//   magician.indexOf(" "),
//   magician.lastIndexOf(" ")
// );
// lastName = magician.substring(magician.lastIndexOf(" "));

// console.log("The first name is " + firstName);
// console.log("The middle name is " + middleName);
// console.log("The last name is " + lastName);
