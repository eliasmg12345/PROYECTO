"use strict";
//F1 vamos a importar primero expresss
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//I1  vamos a traernos la base de datos 
const database_1 = __importDefault(require("../database"));
//F2 crearemos una clase 
class InvController {
    //F3 definiendo el metodo que vamos a cortar y pegar aqui del indexRoutes ('',(req)...)
    //y ponerle un nombre llamado index y modificando.. arriba en import vamos a definir los req y res 
    index(req, res) {
        //I2 DESDE AQUI AREMOS LAS CONSULTAS 
        database_1.default.query('DESCRIBE invens');
        res.json('INVESTIGACION');
    }
}
const invController = new InvController();
exports.default = invController;
