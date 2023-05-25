"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actor = void 0;
const persona_js_1 = require("./persona.js");
class Actor extends persona_js_1.Persona {
    constructor(cargo, nombre, foto, descripcion, serie) {
        super(nombre, foto, descripcion, serie);
        this.cargo = cargo;
    }
}
exports.Actor = Actor;
