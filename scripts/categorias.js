export class Categorias {
    constructor(categoria) {
        this.categoria = categoria;
        this.categorias = [];
    }
    agregarCategoria(categoria) {
        this.categorias.push(this);
        console.log(`Se agregó la categoría ${this.categoria}`);
    }
    listarCategoria() {
        console.log("Listado de todas las categorias:");
        this.categorias.forEach((categoria) => {
            console.log("Categoria:", categoria.categoria);
        });
    }
}
