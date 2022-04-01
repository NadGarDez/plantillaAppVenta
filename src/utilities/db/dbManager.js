import { userTableSchema,chatTableSchema } from "./dbConstants";
import { dbConnection } from "./dbConection";


const trasaction = (query)=>{
    return new Promise(
        async (resolve, reject)=>{
            const db = await dbConnection();
            db.transaction(
                (trans)=>{
                    trans.executeSql(
                        query,
                        [],
                        (tr,res)=>{
                            resolve(res)
                        }
                    )   
                },
                (err)=>{
                    console.log(err)
                    reject(err);
                }
            )
        }
    )
}

export const createTable = async (name,schema) => {
    // create table if not exists
    const db = await dbConnection();
    const query = `CREATE TABLE IF NOT EXISTS ${name}(
          ${schema}
    );`;


    try {
        
       const result = await trasaction(query);
    } catch (error) {
        console.log(error);
    }
  
    
};

export const initializeTables = async ()=> {
    // const a = await trasaction(`DROP TABLE chat`);
  
   // console.log(a);

    try {
        await createTable('users', userTableSchema);
    }
    catch(error){
        console.log(error)
    }

    try {
        await createTable('chat', chatTableSchema);
    } catch (error) {
        console.log(error)
    }
    
}

export const saveUser = async (obj)=>{
    const {avatar,user,_id} = obj;
    const query = `INSERT INTO table_name (_id,avatar, user) VALUES ('${_id}','${avatar}', '${user}');`;
    try {
        result = await trasaction(query); 
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}

export const saveUsers = async (arr)=>{
    const values = arr.reduce(
        (acumulator, current)=>{
            const {avatar,user,_id} = current;
            acumulator+= acumulator === '' ? `('${avatar}','${user}', '${_id}')` : `, ('${avatar}','${user}', '${_id}')`;
            return acumulator
        },
        ''
    );
    const query = `INSERT INTO table_name (_id,avatar, user) VALUES ${values};`;
    let result;
    try {
        result = await trasaction(query); 
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }

}

export const saveMessage = async (obj)=>{
    const {_id ,content ,fromUser ,toUser ,key, status, type,group_member, create_at} = obj;
    const query = `INSERT INTO table_name (_id ,content ,fromUser ,toUser ,key, status, type,group_member, create_at) VALUES ('${_id}','${content}', '${fromUser}' , '${toUser}', '${key}', ${status},  '${type}','${group_member}',  ${create_at});`
    let result;
    try {
        result = await trasaction(query); 
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}

export const saveMessages = async (arr)=>{
    if ( Array.isArray(arr) && arr.length > 0) {
        const values = arr.reduce(
            (acumulator, current)=>{
                const {_id ,content ,fromUser ,toUser , status, type,group_member, create_at} = current;
                acumulator+= acumulator === '' ? `('${_id}','${content}', '${fromUser}' , '${toUser}', '', ${status}, '${type}', '${group_member}', '${create_at}')` : `, ('${_id}','${content}', '${fromUser}' , '${toUser}', '', ${status},  '${type}', '${group_member}','${create_at}')`;
                return acumulator
            },
            ''
        );
        
        const query = `INSERT INTO chat (_id ,content ,fromUser ,toUser ,key, status, type,group_member, create_at) VALUES ${values}`
        try {
            const result = await trasaction(query); 
            console.log(result, 'save mesage')
            return {
                status:'succes',
                data:result
            }
        } catch (error) {
            console.log(error)
            return {
                status:'error',
                data:error 
            }
        }
    }
    else{
        return {
            status:'succes',
            data:'no one has been set'
        }
    }
    
}

export const getLastMessage = async(id)=>{
    const query =`SELECT _id FROM chat WHERE group_member LIKE '%${id}%' ORDER BY create_at DESC LIMIT 1`;
    let result;
    try {
        result = await trasaction(query); 
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}


export const getLastMesages = async (id)=>{
    const query = `SELECT * FROM chat WHERE group_member LIKE '%${id}%' GROUP BY group_member ORDER BY create_at DESC `;
    let result;
    try {
        result = await trasaction(query); 
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }

}


export const getMessages = async (id)=>{
    const query = `SELECT * FROM chat WHERE group_member LIKE '%${id}%' ORDER BY create_at ASC `;
    let result;
    try {
        result = await dbConnection.executeSql(query); 
        // must be ordered later
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}

export const getUser = async (partnerId)=>{
    const query = `SELECT * FROM users WHERE _id='${partnerId}'`;
    let result;
    try {
        result = await dbConnection.executeSql(query); 
        // must be ordered later
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}

export const rowToArray = (row)=>{
    let arr = [];
    for (let index = 0; index < row.length; index++) {
        arr.push(row.item(index))
        
    }

    return arr;

}

export const updateUser = async (obj, userId)=>{
    let values = '';
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
           values += values === '' ?`${key}='${obj[key]}'`:`, ${key}='${obj[key]}'`
            
        }
    }
   const query = `UPATE TABLE users SET $values WHERE _id=${userId}`;
   let result;
    try {
        result = await dbConnection.executeSql(query); 
        // must be ordered later
        return {
            status:'succes',
            data:result
        }
    } catch (error) {
        return {
            status:'error',
            data:error 
        }
    }
}



