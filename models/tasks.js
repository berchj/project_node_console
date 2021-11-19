const Task = require('./task')
class Tasks {
    _list = {}

    get listArray() {
        const list = []
        Object.keys(this._list).forEach(key => {
            const task = this._list[key]
            list.push(task)
        })
        return list
    }
    constructor() {
        this._list = {}
    }
    loadTasksFromArray(tasks = []) {
        tasks.forEach(task => {
            this._list[task.id] = task
        })
    }
    createTask(desc) {
        const task = new Task(desc)
        this._list[task.id] = task
    }
    printList() {
        console.log()
        this.listArray.forEach((task, i) => {
            (task.completed)
                ? console.log(`${String(i + 1).green}. ${task.description} :: ${'Completed'.green}`)
                : console.log(`${String(i + 1).green}. ${task.description} :: ${'Pending'.red}`)
        })
        console.log()
    }
    printCompletedTasks() {
        console.log()
        this.listArray.forEach((task, i) => {
            if (task.completed) console.log(`${String(i + 1).green}. ${task.description} :: Completed date : ${task.completeDate}`)
        })
    }
    printUncompletedTasks() {
        this.listArray.forEach((task, i) => {
            if (!task.completed) console.log(`${String(i + 1).green}. ${task.description}`)
        })
    }
    deleteTask(id = '') {
        if (this._list[id]) {
            delete this._list[id]
        }
    }
    toggleComplete(ids = []) {
        ids.forEach(id => {
            const task = this._list[id]
            if (!task.completed) {
                task.completeDate = new Date().toISOString()
                task.completed = true
            }
        })
        this.listArray.forEach(task => {
            if (!ids.includes(task.id)) {
                this._list[task.id].completeDate = null
                task.completed = null
            }
        })
    }
}
module.exports = Tasks