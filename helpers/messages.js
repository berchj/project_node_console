const colors = require("colors");
const showMenu = () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("==========================".green);
    console.log("Select an option".green);
    console.log("==========================".green);

    console.log(`${"1.".green} Create task`);
    console.log(`${"2.".green} Show tasks`);
    console.log(`${"3.".green} Show completed tasks`);
    console.log(`${"4.".green} Show uncompleted tasks`);
    console.log(`${"5.".green} Complete a task`);
    console.log(`${"6.".green} Delete task`);
    console.log(`${"0.".green} Exit \n`);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question("Select an option: ", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readline.question(`\n Press ${"ENTER".green} to continue \n`, (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};
module.exports = {
  showMenu,
  pause,
};
