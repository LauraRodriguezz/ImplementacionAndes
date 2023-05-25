import { Persona } from "./persona.js";
import { Series } from "./series.js";

export class Director extends Persona {

    cargo:string

    constructor(cargo:string,nombre:string,foto:string, descripcion:string, serie:Series){
        super(nombre, foto, descripcion,serie)
        this.cargo = cargo
    }


}