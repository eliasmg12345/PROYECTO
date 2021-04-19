"use strict";
//F1 vamos a importar primero expresss
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
//F2 crearemos una clase 
class IndexController {
    //F3 definiendo el metodo que vamos a cortar y pegar aqui del indexRoutes ('',(req)...)
    //y ponerle un nombre llamado index y modificando.. arriba en import vamos a definir los req y res 
    //aremos lo mismo con el  de invRoutes en H1
    index(req, res) {
        res.json({ text: 'API IS /api/inves' });
    }
}
//F4 vamos a dejar instanciado la clase y para exportar  
exports.indexController = new IndexController();
//F5 vamos a copiar todo para el invControllers 
//luego vamos utilizarlos nos vamos a indexRoutes.ts G1
