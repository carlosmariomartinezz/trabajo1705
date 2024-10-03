"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mostrarEstuidante = (estudiante) => {
    var _a;
    console.log(`nombre:${estudiante.nombre}`);
    console.log(`apellido:${estudiante.apellido}`);
    console.log(`edad:${estudiante.edad}`);
    console.log(`edad:${estudiante.edad}`);
    console.log("direccion");
    (_a = estudiante.address) === null || _a === void 0 ? void 0 : _a.forEach(function (direccion) {
        console.log(`calle:${direccion.street}`);
        console.log(`numero:${direccion.numero}`);
        console.log(`ciudad:${direccion.ciudad}`);
        console.log("--------direccion-------");
    });
};
exports.default = mostrarEstuidante;
