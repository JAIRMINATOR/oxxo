import { productosM } from "../models/producto.model.js";
const test = ()=>{
    console.log('llamando a productos')
}
productosM.create({
    name:'cerveza',
    quantity: 33,
    description:'cerveza corona'
})

export default test;