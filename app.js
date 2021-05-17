const tareasCompleto = require('./tareas');
const process = require('process');
const { filtrarTareas } = require('./tareas');


const interaccion = process.argv[2]


switch (interaccion) {
    case 'listar':
    tareasCompleto.listarTareas()
        break;
        case undefined :
            console.log('No se que queres hacer flaco xD');
break;
        case 'agregar' :
            let titulo = process.argv[3]
            if (!titulo){
            console.log("Poneme una tarea")
            break;}
            let estado = process.argv[4]
            tareasCompleto.agregarTarea(titulo,estado)
            break;

            case "deshacer" :
                tareasCompleto.deshacerTarea()
                console.log('Tarea eliminada');
                break;
                case "filtrar" :
                    tareasCompleto.filtrarTareas(process.argv[3])
                    break;
        

    default: 
    console.log('Autodestruccion en 3,2,1...');
        break;
}

