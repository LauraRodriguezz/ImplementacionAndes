"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Director = void 0;
const persona_js_1 = require("./persona.js");
class Director extends persona_js_1.Persona {
    constructor(cargo, nombre, foto, descripcion, serie) {
        super(nombre, foto, descripcion, serie);
        this.cargo = cargo;
    }
}
exports.Director = Director;
