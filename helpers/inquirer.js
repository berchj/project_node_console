const inquirer = require("inquirer");
const colors = require("colors");
const questions = [
  {
    type: "list",
    name: "option",
    message: "Select an option",
    choices: [
      {
        value: "1",
        name: "1. Create task",
      },
      {
        value: "2",
        name: "2. Show task",
      },
      {
        value: "3",
        name: "3. Show completed task",
      },
      {
        value: "4",
        name: "4. Show uncompleted task",
      },
      {
        value: "5",
        name: "5. Complete a task",
      },
      {
        value: "6",
        name: "6. Delete task",
      },
      {
        value: "0",
        name: "0. Exit",
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".green);
  console.log("Select an option".green);
  console.log("==========================".green);
  const { option } = await inquirer.prompt(questions);
  return option;
};
const pause = async () => {
  const question = [
    {
      types: "input",
      name: "pause",
      message: `Press ${"ENTER".green} to continue`,
    },
  ];
  await inquirer.prompt(question);
};
module.exports = {
  inquirerMenu,
  pause,
};
