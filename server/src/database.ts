//  D1 aqui vamos a colocar la conexion 

//D2 importando el modulo mysql
import mysql from 'promise-mysql';


//D3 de este modulo quiero traerme la manera de poder conectarme 
//para ello mysql.createPool que es otra manera de conexion es bastante 
//ideal cuando estamos en produccion...para iniciar tenemos que pasar los 
//parametros para eso vamos a crear otro archivo dentro de src llamado keys.ts E1

//D4 
import keys from './keys';

//D5 empezar a ejecutar el modulo a la conexion de base de datos
//lo guardaresmo en una constante pool
const pool=mysql.createPool(keys.database);
//
pool.getConnection()
    .then(connection => {
        pool.releaseConnection(connection);
        console.log('DB is connected');
    })

//D6exportando la conexion y podemos utilizarla en donde queramos
//en nuestro caso en la carpeta routes por ejemplo en idexRoutes yo estoy definiendo
//la ruta dentro del mismo archivo es mejor tenerla aparte para tener mas orden
//para ello dentro de src creamos una carpeta llamada controllers dentro de eso indexControllers.ts 
//y invControllers.ts que seran para exportar F1

export default pool;   



