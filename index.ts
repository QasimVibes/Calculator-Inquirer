import inquirer, { QuestionCollection, Answers } from "inquirer";

// Calculator using async await
const Calculator = async () => {
  try {
    let answer: Answers = await inquirer.prompt([
      {
        name: "Num1",
        type: "input",
        message: "Enter your first number",
      },
      {
        name: "Num2",
        type: "input",
        message: "Enter your second number",
      },
      {
        name: "Operator",
        type: "list",
        message: "Select your operator",
        choices: ["+", "-", "*", "/", "%", "^"],
      },
    ]);
    const Num1 = parseFloat(answer.Num1);
    const Num2 = parseFloat(answer.Num2);

    if (!isNaN(answer.Num1) && !isNaN(answer.Num2)) {
      switch (answer.Operator) {
        case "+":
          console.log(`${Num1} + ${Num2} = ${Num1 + Num2}`);
          break;
        case "-":
          console.log(`${Num1} - ${Num2} = ${Num1 - Num2}`);
          break;
        case "*":
          console.log(`${Num1} * ${Num2} = ${Num1 * Num2}`);
          break;
        case "/":
          console.log(`${Num1} / ${Num2} = ${Num1 / Num2}`);
          break;
        case "%":
          console.log(`${Num1} % ${Num2} = ${Num1 % Num2}`);
          break;
        case "^":
          console.log(`${Num1} ^ ${Num2} = ${Num1 ** Num2}`);
          break;
      }
    } else {
      console.error("Please enter valid numbers");
    }
  } catch (error) {
    console.error(error);
  }
};

Calculator(); // Call the async function

// Calculator using Promise
const question: QuestionCollection = [
  {
    name: "Num1",
    type: "input",
    message: "Enter your first number",
  },
  {
    name: "Num2",
    type: "input",
    message: "Enter your second number",
  },
  {
    name: "Operator",
    type: "list",
    message: "Select your operator",
    choices: ["+", "-", "*", "/", "%", "^"],
  },
];
let promiseResult: Answers = inquirer.prompt(question);
promiseResult
  .then((answer: Answers) => {
    const Num1 = parseFloat(answer.Num1);
    const Num2 = parseFloat(answer.Num2);
    if (!isNaN(answer.Num1) && !isNaN(answer.Num2)) {
      switch (answer.Operator) {
        case "+":
          console.log(`${Num1} + ${Num2} = ${Num1 + Num2}`);
          break;
        case "-":
          console.log(`${Num1} - ${Num2} = ${Num1 - Num2}`);
          break;
        case "*":
          console.log(`${Num1} * ${Num2} = ${Num1 * Num2}`);
          break;
        case "/":
          console.log(`${Num1} / ${Num2} = ${Num1 / Num2}`);
          break;
        case "%":
          console.log(`${Num1} % ${Num2} = ${Num1 % Num2}`);
          break;
        case "^":
          console.log(`${Num1} ^ ${Num2} = ${Num1 ** Num2}`);
          break;
      }
    } else {
      console.error("Please enter valid numbers");
    }
  })
  .catch((err: Answers) => {
    console.error(err);
  });
