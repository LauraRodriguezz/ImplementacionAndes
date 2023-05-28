import { Persona } from "./persona.js";
import { Series } from "./series.js";
export class Actor extends Persona {

    cargo:string

    constructor(cargo:string,nombre:string,foto:string, descripcion:string, serie:Series){
        super(nombre, foto, descripcion,serie,[])
        this.cargo = cargo
    }

    mostrarDetalle(){
        console.log("Detalle del actor:")
        console.log("Cargo: ", this.cargo)
        console.log("Nombre: ", this.nombre)
        console.log("Foto: ", this.foto)
        console.log("Descripcion: ", this.descripcion)
        
    }

}