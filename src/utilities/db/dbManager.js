import {openDatabase} from 'react-native-sqlite-storage';


export const dbConnection = async ()=>{
    return openDatabase({name:'sellTempleteDb',location:'default'});
}