import { Series } from "./series.js"

export class Episodio{

    nombre:string
    resumen:string
    duracion:number
    serie:Series[]

    constructor(nombre:string, resumen:string, duracion:number,serie:Series[]){
        this.nombre = nombre
        this.resumen = resumen
        this.duracion = duracion
        this.serie = serie
    }
}