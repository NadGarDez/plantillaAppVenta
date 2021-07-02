import {Dimensions} from "react-native"

let wh = (pw,ph,rw=null,rh=null)=>{

  let ancho = null
  let algo = null

  if(rw==null && rh==null){
    ancho = Dimensions.get("window").width
    alto = Dimensions.get("window").height
  }
  else{
    ancho = rw
    alto = rh
  }

  let a={
    width:(pw*ancho)/100,
    height:(ph*algo)/100
  }
  return a

}

let h = (ph,rh=null)=>{
  let alto = rh==null?Dimensions.get("window").height:rh
  let a={
    height:(ph*alto)/100
  }
  return a
}

let w = (pw,rw)=>{
  let ancho = rw==null?Dimensions.get("window").width:rw
  let a ={
    width:(pw*ancho)/100
  }
  return a
}

export {w,h,wh}
