import { gerenteM } from "../models/gerente.model.js";

const test =()=>{
    console.log('llamando gerente')
}

gerenteM.create({
    first_name:'chris',
    last_name:'fuentes',
    age:32,
    puesto:'Gerencia'
})

export default test;