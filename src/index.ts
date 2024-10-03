import mostrarEstuidante from "./mostrarEstudiante";

// Definición de tipo
type address = {
    street: string,
    numero: number,
    sector?: string,
    ciudad?: string,
    postcode?: string
};

type Estudiante = {
    nombre: string,
    apellido: string,
    edad?: number,
    address?: address[]
};

// Definición de estudiantes
const e1: Estudiante = {
    nombre: "carlos",
    apellido: "martinez",
    edad: 56,
    address: [
        { street: "siempre", numero: 34, ciudad: "bogota" },
        { street: "xdxdx", numero: 23, ciudad: "medellin" }
    ]
};

const e2: Estudiante = {
    nombre: "juan",
    apellido: "lopez",
    edad: 17,
    address: [
        { street: "xdxdxdx", numero: 56, ciudad: "cordoba" },
        { street: "ffffff", numero: 67, ciudad: "cordoba" }
    ]
};

const e3: Estudiante = {
    nombre: "luis",
    apellido: "martinez",
    edad: 16,
    address: [
        { street: "fffffffff", numero: 98, ciudad: "bogota" }
    ]
};

const e4: Estudiante = {
    nombre: "danner",
    apellido: "arias",
    edad: 19,
    address: [
        { street: "cdcdc", numero: 65, ciudad: "bogota" }
    ]
};

// Ejemplos de elementos que no son estudiantes
const noEstudiantes = [
    56,
    "pepo",
    78,
    "xdxzdxdxd"
];

// Arreglo de estudiantes
let arregloEstudiante: Estudiante[] = [];

// Método para agregar un estudiante
const addEstudiante = (e: Estudiante) => {
    arregloEstudiante.push(e);
}

// Agregar estudiantes al arreglo
addEstudiante(e1);
addEstudiante(e2);
addEstudiante(e3);
addEstudiante(e4);

// Función para filtrar estudiantes por ciudad
function filtrarEstudiantesPorCiudad(ciudad: string): Estudiante[] {
    return arregloEstudiante.filter(estudiante => 
        estudiante.address?.some(dir => dir.ciudad?.toLowerCase() === ciudad.toLowerCase())
    );
}

// Ejemplo de uso de la función de filtrado
const estudiantesFiltrados = filtrarEstudiantesPorCiudad("bogota");
console.log("Estudiantes filtrados en Bogotá:", estudiantesFiltrados);

// Método para borrar un estudiante por nombre y apellido
function eliminarEstudiante(nombre: string, apellido: string): boolean {
    const initialLength = arregloEstudiante.length;

    arregloEstudiante = arregloEstudiante.filter(estudiante => 
        estudiante.nombre.toLowerCase() !== nombre.toLowerCase() || 
        estudiante.apellido.toLowerCase() !== apellido.toLowerCase()
    );

    return arregloEstudiante.length < initialLength; // Retorna true si se eliminó un estudiante
}


const fueEliminado = eliminarEstudiante("luis", "martinez");
console.log(fueEliminado ? "Estudiante eliminado." : "Estudiante no encontrado.");
console.log("Lista de estudiantes después de la eliminación:", arregloEstudiante);


function eliminarEstudiantesMenoresDe18EnBogota(): number {
    const estudiantesIniciales = arregloEstudiante.length;

    arregloEstudiante = arregloEstudiante.filter(estudiante => 
        !(estudiante.edad && estudiante.edad < 18 && estudiante.address?.some(dir => dir.ciudad?.toLowerCase() === "bogota"))
    );

    return estudiantesIniciales - arregloEstudiante.length; 
}

const cantidadEliminados = eliminarEstudiantesMenoresDe18EnBogota();
console.log(`${cantidadEliminados} estudiante(s) eliminado(s).`);
console.log("Lista final de estudiantes:", arregloEstudiante);
arregloEstudiante.forEach((elemento) => { 
    if (typeof elemento === "object" && elemento !== null && 'nombre' in elemento && 'apellido' in elemento) {
        mostrarEstuidante(elemento);
    }
});
