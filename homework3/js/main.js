const input1 = +prompt("Введите первое число", 0),
      input2 = +prompt("Введите второе число", 0);

const add = input1 + input2,
      subtr = input1 - input2,
      mult = input1 * input2,
      division = input1 / input2;

const message = `${input1} + ${input2} = ${add}
${input1} - ${input2} = ${subtr}
${input1} * ${input2} = ${mult}
${input1} / ${input2} = ${division}`

alert(message);

// const resultAdd = `${input1} + ${input2} = ${add}\n`,
//       resultSubtr = `${input1} - ${input2} = ${subtr}\n`,
//       resultMult = `${input1} * ${input2} = ${mult}\n`,
//       resultDivision = `${input1} / ${input2} = ${division}\n`;

// const message = resultAdd + resultSubtr + resultMult + resultDivision;

// alert(message);