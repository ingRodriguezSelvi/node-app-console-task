import * as colors from "colors";

import {confirm, inquirerMenu, listTaskForCheck, listTaskForDelete, pause, readInput} from "./helpers/inquirer.js";
import {Tasks} from "./models/tasks.js";
import {fileRead, saveDB} from "./helpers/fileSave.js";

const main = async () => {
    let opt = '';
    const taskDB = fileRead();
    const tasks = new Tasks();
    if (taskDB){
        tasks.loadTaskForArray(taskDB);
    }
    do {
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //create task
                const desc = await readInput('Descripcion: ')
                tasks.createdTask(desc);
                break;
            case '2':
                tasks.listAllTask();
                break;
            case '3':
                tasks.listForStatus();
                break;
            case '4':
                tasks.listForStatus(false);
                break
            case '5':
                const ids = await listTaskForCheck(tasks.listArr);
                tasks.toggleCompletes(ids)
                break;
            case '6':
                const id = await listTaskForDelete(tasks.listArr)
                if (id === 0 ) continue;
                const confirmDelete = await confirm('¿ Estas seguro ?')
                if (confirmDelete) tasks.deleteTask(id);
                break;
        }
        saveDB(tasks.listArr);
        await pause();
    } while (opt !== '0');
}

main().then();
