
const Tasks = require("./models/tasks");
const { inquirerMenu, pause, readInput, deleteOptions, confirm, multipleOptions } = require("./helpers/inquirer");
const { saveInfo } = require("./helpers/db");
const { readInfo } = require("./helpers/db");
const main = async () => {
  console.clear();
  let opt = "";
  const tasks = new Tasks();
  const tasksDB = readInfo();
  if(tasksDB){
    tasks.loadTasksFromArray(tasksDB)
  }
  do {
    opt = await inquirerMenu();
    switch (opt) {
      case '1':
        //create task
        const desc = await readInput('Enter description of new task: ')
        tasks.createTask(desc)
        break;
      case '2':
        // show tasks
        tasks.printList()
        break;
      case '3':
        tasks.printCompletedTasks()
        break;
      case '4':
        tasks.printUncompletedTasks()
        break;
      case '5':
        const ids = await multipleOptions(tasks.listArray)
        tasks.toggleComplete(ids)
        break;
      case '6':
        const id = await deleteOptions(tasks.listArray)
        if(id !== '0'){
          const ok  = await confirm('Are you sure ?')
          if(ok) {
            tasks.deleteTask(id)
            console.log('Task deleted'.red)
          } 
        }
        break;
      case '0':
        break;
    }
    saveInfo(tasks.listArray)
    await pause();
  } while (opt !== "0");
};
main();
