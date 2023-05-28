import { Persona } from "./persona.js";
export class Series {
    constructor(nombre, imagen, directores, actores, episodio, categorias, serie) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.directores = directores;
        this.actores = actores;
        this.episodio = episodio;
        this.serie = serie;
        this.categorias = categorias;
        this.listaSeries = [];
        this.persona = new Persona("", "", "", this, []);
    }
    agregarSerie(serie) {
        this.serie.push(serie);
        console.log("Se agregó la serie " + serie.nombre);
    }
    listarSeries() {
        console.log("Listado de todas las series:");
        this.serie.forEach((serie) => {
            console.log(`Nombre: ${serie.nombre}`);
            console.log(`Imagen: ${serie.imagen}`);
            console.log("Directores:");
            serie.directores.forEach((director) => {
                console.log(`- ${director.nombre}`);
            });
            console.log("Actores:");
            serie.actores.forEach((actor) => {
                console.log(`- ${actor.nombre}`);
            });
            console.log("Episodios:");
            serie.episodio.forEach((episodio) => {
                console.log(`- ${episodio.nombre}`);
            });
            console.log("----------------------");
        });
    }
    detalleSerie(nombreSerie) {
        const serieEncontrada = this.serie.find((serie) => serie.nombre === nombreSerie);
        if (serieEncontrada) {
            let output = "";
            output += `Detalle de la serie ${nombreSerie}:\n`;
            output += `Nombre: ${serieEncontrada.nombre}\n`;
            output += `Imagen: ${serieEncontrada.imagen}\n`;
            output += "Directores:\n";
            serieEncontrada.directores.forEach((director) => {
                output += `- ${director.nombre}\n`;
            });
            output += "Actores:\n";
            serieEncontrada.actores.forEach((actor) => {
                output += `- ${actor.nombre}\n`;
            });
            output += "Episodios:\n";
            serieEncontrada.episodio.forEach((episodio) => {
                output += `- ${episodio.nombre}\n`;
            });
            output += "Categorías:\n";
            serieEncontrada.categorias.forEach((categoria) => {
                output += `- ${categoria.categoria}\n`;
            });
            console.log(output);
        }
        else {
            console.log("La serie no fue encontrada.");
        }
    }
    crearNuevaSerie(nombre, imagen, directores, actores, episodios, categoria) {
        const nuevaSerie = new Series(nombre, imagen, directores, actores, episodios, categoria, []);
        this.agregarSerie(nuevaSerie);
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
        console.log(`Se agregó la categoría "${categoria.categoria}" a la serie "${this.nombre}".`);
    }
    listarCategorias() {
        console.log("Listado de todas las categorias:");
        const categoriasListadas = this.categorias.map((categoria) => categoria.categoria);
        console.log("Categorias:", categoriasListadas);
    }
    agregarDirector(director) {
        this.persona.agregarPersona(director);
    }
    listarDirectores() {
        console.log("Listado de directores:");
        this.directores.forEach((director) => {
            console.log(`Nombre: ${director.nombre}`);
            console.log(`Foto: ${director.foto}`);
            console.log(`Descripción: ${director.descripcion}`);
            console.log("----------------------");
        });
    }
    agregarActor(actor) {
        this.persona.agregarPersona(actor);
    }
    listarActores() {
        console.log("Listado de actores:");
        this.actores.forEach((actor) => {
            console.log(`Nombre: ${actor.nombre}`);
            console.log(`Foto: ${actor.foto}`);
            console.log(`Descripción: ${actor.descripcion}`);
            console.log("----------------------");
        });
    }
}
