import { Series } from "./series.js"

export class Persona{

    nombre:string
    foto:string
    descripcion:string
    serie:Series
    persona:Persona []

    constructor(nombre:string, foto:string,descripcion:string,serie:Series,persona:Persona []){

        this.nombre = nombre
        this.foto = foto
        this.descripcion = descripcion
        this.serie = serie
        this.persona = []
    }

    agregarPersona(persona: Persona) {
        this.persona.push(persona);
        console.log(`Se agregó la persona ${persona.nombre}`);
      }
      

}