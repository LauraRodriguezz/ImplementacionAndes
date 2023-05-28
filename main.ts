import { Director } from "./director.js";
import { Series } from "./series.js";
import { Categorias } from "./categorias.js";
import { Persona } from "./persona.js";
import { Actor } from "./actor.js";


const serie1 = new Series ("Merlina", "Foto", [],[],[],[],[])
const serie2 = new Series ("Merlina1", "Foto20", [],[],[],[],[])
const serie3 = new Series ("Merlina2", "Foto200", [],[],[],[],[])

// Crear una instancia de la clase Series
const serie = new Series("", "", [],[],[],[],[]);

// Llamar al método agregarSerie en la instancia de la clase Series
serie.agregarSerie(serie1);
serie.agregarSerie(serie2);
serie.agregarSerie(serie3);
serie.listarSeries()

serie.detalleSerie('Merlina')


serie.crearNuevaSerie("Papitas", "Imagen de la nueva serie",[], [], [],[]);


const categoria1 = new Categorias("Comedia");
const categoria2 = new Categorias("Drama");
const categoria3 = new Categorias("Terror");
const categoria4 = new Categorias("Romance");
const categoria5 = new Categorias("Thiller");

serie1.agregarCategoria(categoria1);
serie1.agregarCategoria(categoria2);
serie2.agregarCategoria(categoria3);
serie1.agregarCategoria(categoria4);
serie3.agregarCategoria(categoria5);
serie.detalleSerie('Merlina')
serie.listarCategorias()

const director1 = new Director("director1","Pepo","FotitoPepo","Director numero 1",serie1)
const actor1 = new Actor("Protagonista","Jonny Depp", "FotitoJD","Protagonistaaaa",serie1)
const persona = new Persona("","","",serie1 ,[])
persona.agregarPersona(director1)
persona.agregarPersona(actor1)

director1.mostrarDetalle()
actor1.mostrarDetalle()

serie1.agregarDirector(director1);
serie1.agregarActor(actor1);

serie.detalleSerie('Merlina')

serie1.listarDirectores()
serie1.listarActores()












