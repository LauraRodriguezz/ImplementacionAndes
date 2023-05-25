import { Persona } from "./persona.js";
export class Actor extends Persona {
    constructor(cargo, nombre, foto, descripcion, serie) {
        super(nombre, foto, descripcion, serie);
        this.cargo = cargo;
    }
}
