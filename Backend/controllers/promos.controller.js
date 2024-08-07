import { promosM } from "../models/promos.model.js";

const test = ()=>{
    console.log('llamando a prooms')
}
promosM.create({
    name:'2x1 en mosters',
    type:'cumulo',
    product:'bebida',
    sale_off: 33
})
export default test;
