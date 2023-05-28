export class Persona {
    constructor(nombre, foto, descripcion, serie, persona) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.serie = serie;
        this.persona = [];
    }
    agregarPersona(persona) {
        this.persona.push(persona);
        console.log(`Se agregó la persona ${persona.nombre}`);
    }
}
