import { Series } from "./series.js"

export class Persona{

    nombre:string
    foto:string
    descripcion:string
    serie:Series

    constructor(nombre:string, foto:string,descripcion:string,serie:Series){

        this.nombre = nombre
        this.foto = foto
        this.descripcion = descripcion
        this.serie = serie
    }


}