

const mostrarEstuidante=(estudiante:Estudiante)=>{
    console.log(`nombre:${estudiante.nombre}`);
console.log(`apellido:${estudiante.apellido}`);
console.log(`edad:${estudiante.edad}`);
console.log(`edad:${estudiante.edad}`);
console.log("direccion")

estudiante.address?.forEach(function(direccion:address){
    console.log(`calle:${direccion.street}`)
    console.log(`numero:${direccion.numero}`)
    console.log(`ciudad:${direccion.ciudad}`)
    console.log("--------direccion-------")

});
}

export default mostrarEstuidante;
