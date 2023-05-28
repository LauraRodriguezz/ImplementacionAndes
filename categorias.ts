import { Series } from "./series.js"
export class Categorias{
    categoria:string
    categorias : Categorias[]


    constructor(categoria:string){

        this.categoria = categoria
        this.categorias = [];
       
    }

    agregarCategoria(categoria:Categorias) {
        this.categorias.push(this);
        console.log(`Se agregó la categoría ${this.categoria}`);
      }

    listarCategoria(){

      console.log("Listado de todas las categorias:");
      this.categorias.forEach((categoria:Categorias) => {
      console.log("Categoria:", categoria.categoria);

    });
    }
}