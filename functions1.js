function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
printName(`Noor`, `NoorALDeen`);

function printAge(birthYear) {
  const age = birthYear - 2024;
  console.log(`${birthYear}`);
}

printAge(2001);

function printAgeAndName(birthYear, name) {
  console.log(`hello ${birthYear} you are ${name}years old`);
}
printAgeAndName(`sara`, 27);

function printHello(language, name) {
  console.log(`${language}  ${name}`);
}
printHello("hello", "noor");
printHello("hola", "noor");
printHello("bonjour", "noor");
printHello("merhaba", "noor");

function printMax(fistnum, seconnum) {
  if (fistnum > seconnum) {
    console.log(`biggest num is ${fistnum}`);
  } else if (seconnum > fistnum) {
    console.log(`biggest num is ${seconnum}`);
  }
}
printMax(10, 8);
