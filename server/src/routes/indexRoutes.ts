//11A definiendo un enrutador
//importando desde express el modulo Router
import {Router} from 'express';

//G1 antes de utilizar la calse voy a importar desde la carpeta controllers
import {indexController} from '../controllers/indexController';



//12A 
class IndexRoutes{   
    //creando e incializando al mismo tiempo
    public router:Router=Router();

    constructor(){
        //utilizando el enrutador de abajo
        this.config(); //al utilizar lo que hace es que al enrutador lo agrega la nueva ruta
         
    } 
    //13A creando el metodo config que no me va delovner nada
    //lo que hace es utilizar la propiedad router y partir
    //de esa propiedad yo definir mi ruta incial de mi app
    //que hace? voy a decir que atraves de esa ruta incial voy a tomar
    //el request y response y voy a devolver un mensaje HELLOW
    config():void{
        //G2 utilizando despues de la coma importaremos el index aremos lo mismo en  invRoutes H1
        this.router.get('/',indexController.index);  
    }
}
//14A instanciando la calse y volviendola una constate indexRoutes
const indexRoutes =new IndexRoutes();
export default indexRoutes.router;