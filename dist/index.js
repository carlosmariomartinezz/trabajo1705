"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstudiante_1 = __importDefault(require("./mostrarEstudiante"));
// Definición de estudiantes
const e1 = {
    nombre: "carlos",
    apellido: "martinez",
    edad: 56,
    address: [
        { street: "siempre", numero: 34, ciudad: "bogota" },
        { street: "xdxdx", numero: 23, ciudad: "medellin" }
    ]
};
const e2 = {
    nombre: "juan",
    apellido: "lopez",
    edad: 17,
    address: [
        { street: "xdxdxdx", numero: 56, ciudad: "cordoba" },
        { street: "ffffff", numero: 67, ciudad: "cordoba" }
    ]
};
const e3 = {
    nombre: "luis",
    apellido: "martinez",
    edad: 16,
    address: [
        { street: "fffffffff", numero: 98, ciudad: "bogota" }
    ]
};
const e4 = {
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
let arregloEstudiante = [];
// Método para agregar un estudiante
const addEstudiante = (e) => {
    arregloEstudiante.push(e);
};
// Agregar estudiantes al arreglo
addEstudiante(e1);
addEstudiante(e2);
addEstudiante(e3);
addEstudiante(e4);
// Función para filtrar estudiantes por ciudad
function filtrarEstudiantesPorCiudad(ciudad) {
    return arregloEstudiante.filter(estudiante => { var _a; return (_a = estudiante.address) === null || _a === void 0 ? void 0 : _a.some(dir => { var _a; return ((_a = dir.ciudad) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === ciudad.toLowerCase(); }); });
}
// Ejemplo de uso de la función de filtrado
const estudiantesFiltrados = filtrarEstudiantesPorCiudad("bogota");
console.log("Estudiantes filtrados en Bogotá:", estudiantesFiltrados);
// Método para borrar un estudiante por nombre y apellido
function eliminarEstudiante(nombre, apellido) {
    const initialLength = arregloEstudiante.length;
    arregloEstudiante = arregloEstudiante.filter(estudiante => estudiante.nombre.toLowerCase() !== nombre.toLowerCase() ||
        estudiante.apellido.toLowerCase() !== apellido.toLowerCase());
    return arregloEstudiante.length < initialLength; // Retorna true si se eliminó un estudiante
}
const fueEliminado = eliminarEstudiante("luis", "martinez");
console.log(fueEliminado ? "Estudiante eliminado." : "Estudiante no encontrado.");
console.log("Lista de estudiantes después de la eliminación:", arregloEstudiante);
function eliminarEstudiantesMenoresDe18EnBogota() {
    const estudiantesIniciales = arregloEstudiante.length;
    arregloEstudiante = arregloEstudiante.filter(estudiante => { var _a; return !(estudiante.edad && estudiante.edad < 18 && ((_a = estudiante.address) === null || _a === void 0 ? void 0 : _a.some(dir => { var _a; return ((_a = dir.ciudad) === null || _a === void 0 ? void 0 : _a.toLowerCase()) === "bogota"; }))); });
    return estudiantesIniciales - arregloEstudiante.length;
}
const cantidadEliminados = eliminarEstudiantesMenoresDe18EnBogota();
console.log(`${cantidadEliminados} estudiante(s) eliminado(s).`);
console.log("Lista final de estudiantes:", arregloEstudiante);
arregloEstudiante.forEach((elemento) => {
    if (typeof elemento === "object" && elemento !== null && 'nombre' in elemento && 'apellido' in elemento) {
        (0, mostrarEstudiante_1.default)(elemento);
    }
});
