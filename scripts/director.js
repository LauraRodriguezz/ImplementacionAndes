import { Persona } from "./persona.js";
export class Director extends Persona {
    constructor(cargo, nombre, foto, descripcion, serie) {
        super(nombre, foto, descripcion, serie, []);
        this.cargo = cargo;
    }
    mostrarDetalle() {
        console.log("Detalle del director:");
        console.log("Cargo: ", this.cargo);
        console.log("Nombre: ", this.nombre);
        console.log("Foto: ", this.foto);
        console.log("Descripcion: ", this.descripcion);
    }
}
