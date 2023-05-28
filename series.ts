import { Actor } from "./actor.js"
import { Director } from "./director.js"
import { Episodio } from "./episodio.js"
import { Categorias } from "./categorias.js"
import { Persona } from "./persona.js"


export class Series{

    serie: Series []
    nombre:string
    imagen:string
    directores: Persona[]
    actores: Persona []
    episodio : Episodio[]
    categorias : Categorias[]
    listaSeries: any
    persona: Persona

    constructor(nombre:string,imagen:string,directores:Persona [],actores:Persona[], episodio:Episodio[],categorias : Categorias[], serie: Series []){
        this.nombre = nombre
        this.imagen = imagen
        this.directores = directores
        this.actores = actores
        this.episodio = episodio
        this.serie = serie
        this.categorias = categorias
        this.listaSeries = [];
        this.persona = new Persona("", "", "", this, []);
    }

    agregarSerie(serie: Series) {
        this.serie.push(serie);
        console.log("Se agregó la serie " + serie.nombre);
      }

    listarSeries(){

        console.log("Listado de todas las series:");
    this.serie.forEach((serie :Series) => {
      console.log(`Nombre: ${serie.nombre}`);
      console.log(`Imagen: ${serie.imagen}`);
      console.log("Directores:");
      serie.directores.forEach((director: Persona) => {
        console.log(`- ${director.nombre}`);
      });
      console.log("Actores:");
      serie.actores.forEach((actor: Persona) => {
        console.log(`- ${actor.nombre}`);
      });
      console.log("Episodios:");
      serie.episodio.forEach((episodio: Episodio) => {
        console.log(`- ${episodio.nombre}`);
      });
      console.log("----------------------");
    });
    }


    detalleSerie(nombreSerie: string){
    const serieEncontrada = this.serie.find(
        (serie: Series) => serie.nombre === nombreSerie
      );
      if (serieEncontrada) {
        let output = "";
        output += `Detalle de la serie ${nombreSerie}:\n`;
        output += `Nombre: ${serieEncontrada.nombre}\n`;
        output += `Imagen: ${serieEncontrada.imagen}\n`;
        output += "Directores:\n";
        serieEncontrada.directores.forEach((director: Persona) => {
          output += `- ${director.nombre}\n`;
        });
        output += "Actores:\n";
        serieEncontrada.actores.forEach((actor:Persona) => {
          output += `- ${actor.nombre}\n`;
        });
        output += "Episodios:\n";
        serieEncontrada.episodio.forEach((episodio: Episodio) => {
          output += `- ${episodio.nombre}\n`;
        });
        output += "Categorías:\n";
        serieEncontrada.categorias.forEach((categoria: Categorias) => {
        output += `- ${categoria.categoria}\n`;
        });
        console.log(output);
      } else {
        console.log("La serie no fue encontrada.");
      }
    }


    crearNuevaSerie(nombre: string, imagen: string, directores: Director[], actores: Actor[], episodios: Episodio[], categoria : Categorias[]) {
      const nuevaSerie = new Series(nombre, imagen, directores, actores,episodios,categoria,[]);
      this.agregarSerie(nuevaSerie);
    }

    agregarCategoria(categoria: Categorias) {
      this.categorias.push(categoria);
      console.log(`Se agregó la categoría "${categoria.categoria}" a la serie "${this.nombre}".`);
    }

    listarCategorias() {
      console.log("Listado de todas las categorias:");
      const categoriasListadas = this.categorias.map((categoria: Categorias) => categoria.categoria);
      console.log("Categorias:", categoriasListadas);
    }

    agregarDirector(director: Director) {
      this.persona.agregarPersona(director);
    }
    
    listarDirectores() {
      console.log("Listado de directores:");
      this.directores.forEach((director: Persona) => {
        console.log(`Nombre: ${director.nombre}`);
        console.log(`Foto: ${director.foto}`);
        console.log(`Descripción: ${director.descripcion}`);
        console.log("----------------------");
      });
    }

    agregarActor(actor: Actor) {
      this.persona.agregarPersona(actor);
    }

    listarActores() {
      console.log("Listado de actores:");
      this.actores.forEach((actor: Persona) => {
        console.log(`Nombre: ${actor.nombre}`);
        console.log(`Foto: ${actor.foto}`);
        console.log(`Descripción: ${actor.descripcion}`);
        console.log("----------------------");
      });
    }
    
    
 
    
}



