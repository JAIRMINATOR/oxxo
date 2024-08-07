import { empleadoM } from "../models/empleados.model.js";

const test =()=>{
    console.log('Se esta llamando a empleados')
}

empleadoM.create({
    first_name:'Pedro ',
    last_name:'Garcia',
    age:20,
    puesto:'Cajero'
})

export default test;