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
        name: `${'1'.green}. Create task`,
      },
      {
        value: "2",
        name: `${'2'.green}. Show task`,
      },
      {
        value: "3",
        name: `${'3'.green}. Show completed task`,
      },
      {
        value: "4",
        name: `${'4'.green}. Show uncompleted task`,
      },
      {
        value: "5",
        name: `${'5'.green}. Complete a task`,
      },
      {
        value: "6",
        name: `${'6'.green}. Delete task`,
      },
      {
        value: "0",
        name: `${'0'.green}. Exit`,
      },
    ],
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("==========================".green);
  console.log("Select an option".rainbow);
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
const readInput = async (input) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message: input,
      validate(value) {
        if (value.length === 0) {
          return 'Please enter a value'
        }
        return true
      }
    }
  ]
  const { desc } = await inquirer.prompt(question)
  return desc
}
const deleteOptions = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    return {
      value: `${task.id}`,
      name: `${i + 1}. ${task['description']}`,

    }
  })
  choices.unshift({
    value: '0',
    name: '0'.green + '. Cancel'
  })
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices
    }
  ]
  const { id } = await inquirer.prompt(questions)
  return id

}
const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message
    }
  ]
  const { ok } = await inquirer.prompt(question)
  return ok
}
const multipleOptions = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    return {
      value: `${task.id}`,
      name: `${i + 1}. ${task['description']}`,
      checked: (task.completeDate) ? true : false

    }
  })
  const question = [
    {
      type: 'checkbox',
      name: 'ids',
      message: 'Select options',
      choices
    }
  ]
  const { ids } = await inquirer.prompt(question)
  return ids

}
module.exports = {
  inquirerMenu,
  pause,
  readInput,
  deleteOptions,
  confirm,
  multipleOptions
};
