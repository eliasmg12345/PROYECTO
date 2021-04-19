"use strict";
//16A LO QUE HIZE ES COPIAR TODO DE INDEXROUTES PORQUE ES MUY PARECIDO
//HACIENDO ALGUNAS MODIFICACIONES 
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//11A definiendo un enrutador
//importando desde express el modulo Router
const express_1 = require("express");
//H1 importando
const invController_1 = __importDefault(require("../controllers/invController"));
//12A 
class InvRoutes {
    constructor() {
        //creando e incializando al mismo tiempo
        this.router = express_1.Router();
        //utilizando el enrutador de abajo
        this.config(); //al utilizar lo que hace es que al enrutador lo agrega la nueva ruta
    }
    //13A creando el metodo config que no me va delovner nada
    //lo que hace es utilizar la propiedad router y partir
    //de esa propiedad yo definir mi ruta incial de mi app
    //que hace? voy a decir que atraves de esa ruta incial voy a tomar 
    //el request y response y voy a devolver un mensaje HELLOW
    config() {
        //H2 desde invConroller vamos a imprtar el metodo index 
        //...volvemos a insController.ts I1
        this.router.get('/', invController_1.default.index);
    }
}
//14A instanciando la calse y volviendola una constate indexRoutes
const invRoutes = new InvRoutes();
exports.default = invRoutes.router;
