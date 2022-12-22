import * as readline from "readline";

export const showMenu = () => {

    return new Promise((resolve) => {
        console.log('========================'.green);
        console.log(' Seleccione una opcion '.green);
        console.log('========================'.green);

        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas cpmpletadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);

        const readlineConst = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        readlineConst.question('Seleccione una opcion: ', (otp) => {
            readlineConst.close();
            resolve(otp);
        })
    })
}
export const pause = () => {
    return new Promise((resolve) => {
        const readlineConst = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readlineConst.question(`Presione ${'ENTER'.green} para continuar`, (_) => {
            readlineConst.close();
            resolve();
        });
    });
}

