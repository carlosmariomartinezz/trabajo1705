//definicion de typos
type address = {
    street:string,
    numero:number,
    sector?:string,
    ciudad?:string,
    postcode?:string
}


type Estudiante ={
    nombre: string,
    apellido: string,
    edad?: number
    address?:address[]
}
