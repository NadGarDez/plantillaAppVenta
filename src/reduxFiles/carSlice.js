import {createSlice} from "@reduxjs/toolkit"


const calcularInfo = (products)=>{
  let sub = 0
  let impuestos = 0
  products.forEach((item, i) => {
    sub += item.price * item.amount
    /* probablemente use un perfil para impuesto que estar asignado a cada producto con el fin de identificar correctamente su tipo de impoision.
       Esto nos serviria en caso de que todos los productos tengan el mismo tipo de imposicion o uno diferente
    */
  });
  let obj = {
    subtotal:sub,
    impuestos:impuestos,
    total:impuestos + sub
  }
  return obj

}

const inCar = (id,car)=>{
  let dentro  = false

  for (var i of car) {
    if (i.id == id) {
      dentro = true
    }
  }
  console.log(dentro,"dDDd")
  return dentro
}



export const carSlice = createSlice({
  name:"car",
  initialState:{
    car:{
      products:[],
      info:{
        subtotal:0,
        impuestos:0,
        total:0
      }
    }
  },
  reducers:{
    setProduct:(state,action)=>{

      if (inCar(action.payload.id,state.car.products)==true) {
        for (var variable of state.car.products) {
          if ( variable.id == action.payload.id ) {
            variable.amount += action.payload.amount
          }
        }
      }
      else{
          state.car.products.push(action.payload)
      }

      state.car.info = calcularInfo(state.car.products)

    },
    unset:(state,action)=>{
      const itemFilter = state.car.products.slice();
      /*
      let indice = 0

      for (var item of state.products) {
        if(item.id == action.payload){
          console.log("enro");
          state.car.products = state.car.products.splice(indice,1)
          break
        }
        indece++
      }
      */
      return {
            ...state,
            car:{
                ...state.car,
                products:itemFilter.filter(
                  (item,index)=>action.payload !== item.id
                ),
                info:calcularInfo(
                  itemFilter.filter(
                    (item,index)=>action.payload !== item.id
                  )
                )
            }
      }


    },
    unsetAll:(state,action)=>{


        return {
              ...state,
              car:{
                  ...state.car,
                  products:[],
                  info:{
                    subtotal:0,
                    impuestos:0,
                    total:0
                  }
              }
        }


  }
}
})

export const {setProduct,unset,unsetAll} = carSlice.actions

export const selectProducts = state => state.car.car.products
export const selectInfo = state => state.car.car.info

export default carSlice.reducer
