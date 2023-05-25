export class Plataforma{
    nombre:string
    sitioweb:string
    planes:string
    precio:number

    constructor(nombre:string,sitioweb:string,planes:string,precio:number){
        this.nombre = nombre
        this.sitioweb = sitioweb
        this.planes = planes
        this.precio = precio
    }
}