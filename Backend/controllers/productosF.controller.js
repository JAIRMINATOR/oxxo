import { productosfM } from "../models/productosF.model.js";

const test = ()=>{
    console.log('llamando a productos faltantes')
}

productosfM.create({
    name:'red cola',
    quantity: 23,
    description: 'bebida con azucar'
})

export default test;