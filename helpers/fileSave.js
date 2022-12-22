import {existsSync, writeFileSync, readFileSync} from "fs";


const file = './db/data.json'
export const saveDB = ( data ) => {
    writeFileSync(file,JSON.stringify(data));
}
export const fileRead = () =>{
    if ( !existsSync(file)) return null;
    return JSON.parse(readFileSync(file, { encoding: 'utf-8'}));
}
