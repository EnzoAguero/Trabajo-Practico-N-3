const fs = require('fs');
const tareas = JSON.parse(fs.readFileSync('./db/tareas.json','utf-8'));
//let guardarJSON = fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')


module.exports = {    
agregarTarea : function(titulo, estado = 'pendiente'){                     //parametros que van a ser ingresados
    let nuevaTarea = { 
         titulo,
         estado
    }                  
     tareas.push(nuevaTarea);                                            //pusheo la nueva tarea 
    this.guardarJSON();                                                //PONER PARENTESIS SIEMPRE.
    console.log("Tarea agregada");                                                  //y me lo guarda en el json
     
     },

listarTareas : function(){
        for (let i = 0; i < tareas.length; i++) {      //me recorre el array 
            console.log(tareas[i]);                     //y aca me devuelve todo lo que contenga
            
        }
        /* tareas.forEach(tarea => {                    // practica de foreach
            console.log(tarea) */
       
    
    },
    deshacerTarea : function(){
        tareas.pop();                                 //me saca el ultimo elemento
        this.guardarJSON();                            //lo guarda //IMPORTANTE 2 PONER PARENTESIS
        //tareas.listarTareas()                           //y muestra la lista denuevo
    },
   guardarJSON : function(){
    fs.writeFileSync('./db/tareas.json',JSON.stringify(tareas),'utf-8')

   },
   filtrarTareas : function(filtro){
   let filtradas = tareas.filter(tarea => tarea.estado === filtro || tarea.titulo.includes(filtro))
   return console.log(filtradas);
   }
    }
    

