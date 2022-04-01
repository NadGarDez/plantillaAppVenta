import {openDatabase} from 'react-native-sqlite-storage';


export const dbConnection = async ()=>{
    return openDatabase({name:'sellTemplete.db',location:'default'});
}

