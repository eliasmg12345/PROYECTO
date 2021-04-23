
//1A 
import express,{Application, urlencoded} from 'express';
//2A en la nueva terminal escribimos en cd server
// el ts npm i @types/express -D

//1B utilizando los modulos de morgan y demas  y configurandolo
import morgan from 'morgan';
import cors from 'cors';
//2B en una nuerva terminal npm i @types/morgan @types/cors -D



//10A importando luego en indexRoutes.ts 11A
import indexRoutes from './routes/indexRoutes';
import invRoutes from  './routes/invRoutes';


//3A para el servidos vamos a definir una clase
class Server{
    public app : Application; 

    constructor(){
        this.app=express();
        //instanciando los metodos de abajo 
        this.config();
        this.routes();
    }
    //4A encargado de configurar la app y lo que 
    //va a devolver es de tipo vacio 
    config():void{
        //4A1 voy a esablecer el puerto ..le dire el 3000 o si fuera
        //en la nube ponemos process.ev.PORT
        this.app.set('port',process.env.PORT||3000);

        //3B para utilizarlo con el argumento dev ...esto nos avisa en la terminal acerca
        //de los usuarios que hacen interacciones con detalles
        this.app.use(morgan('dev'));
        //4B con el morgan ... con esto angular ya va a poder pedir los datos a nuestro servidor
        //adicional a esto vamos utilizar dos configuraciones desde expresss
        this.app.use(cors());
        //5B estas configuraciones vienen desde express... desde express vamos a utilizar el 
        //metodo llamado json lo que hace es poder aceptar formatos json de app clientes
        //por ejemplo angular me mandara un formato json y yo voy a tomar y guardar ese json
        //luego voy a responder en mi servidor en formato json 
        this.app.use(express.json());
        //6B una configuracion mas que es urlencoded...este es en caso nosotros queremos enviar 
        //formulario en formato html.........AHORA NOS VAMOS A CREAR Y USAR 
        //BASEDATOS MYSQL C1 creando nueva carpeta database luego crear un archivo database.sql C1
        this.app.use(express.urlencoded({extended:false}));
    }
    //5A creo metodo routes que sera para definir de app
    //las rutas de mi servidor..tambien este metodo me devuelve NADA
    routes():void{
        //15A utilizando ese enrutador
        this.app.use('/',indexRoutes);
        //17A utilizando el enrutador para otra ubicacion
        this.app.use('/api/invens',invRoutes);
            
    }
    //6A agregando otro metodo start que sera para inicializar el 
    //servidor ...para ejecutar el app.listen para que el servidor empiece a escuchar
    start():void{
        //6A1 utilizando el puerto 
        //mostrando un mensaje que todo a iniciado  con un mensajito  
        this.app.listen(this.app.get('port'),()=>{
            console.log('Server on port: ',this.app.get('port'));
        })
    }
}
//7A guardando el objeto en un const server 
const server =new Server();
//8A luego de server quiero que ejecute con server.start()
server.start();
//9A ahora para deifinir las rutas 
//en la carpeta src creamos otra carpeta routes y dentro de esta dos ts 10A