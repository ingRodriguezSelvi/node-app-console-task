import {Task} from "./task.js";

/**
 * _listTask:
 * {
 *     'uuid-1234-567-890: { id:12, desc: 'desc', completedDate: 987}
 * }
 */
export class Tasks {
    _listTask = {};

    get listArr() {
        const list = [];
        Object.keys(this._listTask).forEach(key => list.push(this._listTask[key]))
        return list
    }

    constructor() {
        this._listTask = {};
    }

    deleteTask( id = ''){
        if (this._listTask[id]) delete this._listTask[id];
    }

    loadTaskForArray(tasks = []) {
        tasks.forEach(task => this._listTask[task.id] = task)
        console.log(this._listTask)
    }

    createdTask(desc = '') {
        const task = new Task(desc);
        this._listTask[task.id] = task;
    }

    listAllTask() {
        console.log('\n');
        this.listArr.map((task, index) => {
            console.log(`${index + 1}. ${task.desc} :: ${task.completedDate !== null ? 'Completado'.green : 'Pendiente'.red}`)
        })
    }
    listForStatus(status = true) {
        console.log('\n');
        this.listArr
            .filter(task => {
                if (status) {
                    return task.completedDate !== null;
                }
                return task.completedDate === null;
            })
            .map((task, index) => {
                console.log(`${index + 1}. ${task.desc} :: ${task.completedDate !== null ? 'Completado'.green : 'Pendiente'.red}`)
            })
    }

    toggleCompletes( ids = []){
        ids.forEach( id => {
            const task = this._listTask[id];
            if ( !task.completedDate ){
                task.completedDate = new Date().toISOString();
            }
        });
        this.listArr.forEach(task =>{
            if (!ids.includes(task.id)){
                this._listTask[task.id].completedDate = null;
            }
        })
    }
}
