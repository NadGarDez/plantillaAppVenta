export default class FetchManager{


  constructor(url){
    this.url = url
    this.postJson = this.postJson.bind(this)
  }

  async getText(auth=null){

  }

  async getJson(params,auth=null){
    let options = {
      method:"get",
      headers:{
        "Content-Type":"application/json",
        "Authorization":`Bearer ${auth}`
      }
    }
    return new Promise(
      (resolve,reject)=>{
        fetch(`${this.url+params}`)
        .then(res => resolve(res.json()))
        .catch(error => reject("Error:",error))
      }
    )
  }

  async postText(auth=null){

  }

  async postJson(body,auth=null){
    let options = {
      method:"post",
      body:JSON.stringify(body),
      headers:{
        "Content-Type":"application/json",

      }

    }
    return new Promise(
      (resolve, reject)=>{
        fetch(this.url,options).then(res => resolve(res.json()))
        .catch(error => reject('Error:', error))

      }
    )
    /*
    try{
      let result = await fetch(this.url,options)
      console.log(result)
      return result
    }
    catch(e){
      return e
    }
    */
  }
}
