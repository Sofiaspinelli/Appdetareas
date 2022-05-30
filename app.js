let {argv} = require('process')
let {listar,listarFor,listarForEach, crear, filtrarPorEstado} = require('./funcionesDeTareas')

/* console.log(argv); */
let accion = argv [2]
let accion2 = argv[3]
let accion3 = argv[4]
let precio = argv[5]
let plazoExtra = argv[6]
let cantidadCuotas = argv[7]

switch (accion) {
    case 'listar':
        console.log ("Listado de tareas")
        console.log ("-----------------")
        console.log(listar);
        break;
    case 'superlistar':
        console.log ("\nListado de tareas")
        console.log ("-----------------")
        listarFor();
        break;
    case 'crear':
        console.log ("\nTu tarea fue creada con exito")
        console.log ("-------------------------------")
        console.log(crear(accion2,accion3,precio,plazoExtra,cantidadCuotas));
        break;    
    case 'filtrar': 
        console.log (`\nLas tareas con ${accion3} son`)
        console.log ('---------------------------')
        console.log (filtrarPorEstado(accion3))
        
    case undefined:
        console.log("Atencion!! - Tienes que pasar una accion. Por favor intentente con las siguientes operaciones:\n-listar\n-superlistar\n-agregar\n-filtrar\n-------------");
        break;
    default:
        console.log("No se encuentra la operacion solicitada");
        break;
}

console.log (argv)


