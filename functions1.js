function printName(firstName, lastName) {
  console.log(`${firstName} ${lastName}`);
}
printName(`Noor`, `NoorALDeen`);

function printAge(birthYear) {
  //const currentYear = newDate().getFullYear();
  const age = 2024 - birthYear;
  console.log(` age is ${age} `);

  //const age = birthYear - 2024;
  //console.log(`${birthYear}`);
}

printAge(2001);

function printAgeAndName(birthYear, name) {
  const currentYear = newDate().getFullYear();
  const age = currentYear - birthYear;
  console.log(`hello ${name} you are ${age}years old`);
}
printAgeAndName(27, `sara`);
//printAgeAndName(1996, `sara`); assuming birth year

function printHello(name, language) {
  const greeting = {
    es: `hola ${name}`,
    en: `hello ${name}`,
    fr: `bonjour ${name}`,
    tr: `merhaba ${name}`,
  };
  console.log(`${name}  ${language}`);
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
