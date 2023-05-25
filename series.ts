import { Actor } from "./actor.js"
import { Director } from "./director.js"
import { Episodio } from "./episodio.js"

export class Series{

    nombre:string
    imagen:string
    director: Director[]
    actor: Actor[]
    episodio : Episodio[]

    constructor(nombre:string,imagen:string,director:Director[],actor:Actor[], episodio:Episodio[]){
        this.nombre = nombre
        this.imagen = imagen
        this.director = director
        this.actor = actor
        this.episodio = episodio
    }


}