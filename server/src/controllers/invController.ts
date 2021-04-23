//F1 vamos a importar primero expresss

import {Request,Response} from 'express';

//I1  vamos a traernos la base de datos 
import db from '../database';

 
//F2 crearemos una clase 
class InvController{
    //F3 definiendo  el metodo que vamos a cortar y pegar aqui del indexRoutes ('',(req)...)
    //y ponerle un nombre llamado index y modificando.. arriba en import vamos a definir los req y res 
    public index (req:Request,res:Response){
        //I2 DESDE AQUI AREMOS LAS CONSULTAS 
        db.query('DESCRIBE invens');
        res.json('INVESTIGACION');  
    }
 
}
const invController=new InvController();

export default invController;  