let fs = require ('fs')
let tareas = require ('./data/tareas.json')
let guardarJson = (dato) => fs.writeFileSync('./data/tareas.json',JSON.stringify(dato,null,4),'utf-8')

/* console.log (tareas) */

module.exports = {
    listar : tareas,
listarFor : () => {
    for (let i = 0; i < tareas.length; i++) {
        console.log(`${i+1} - ${tareas[i].titulo} - ${tareas[i].estado}`); 
    }
    
}, 
listarForEach: function () {
    tareas.forEach((tarea,i) => {
        console.log (`${i+1} - ${tarea.titulo} - ${tarea.estado}`)
    });

},
crear: (titulo,precio,plazoExtra,cantidadCuotas) => {
    precio = +precio
    cantidadCuotas = +cantidadCuotas
    let tarea = {
        titulo,
        estado: "pendiente",
        precio,
        plazoExtra,
        cantidadCuotas,
    
    }
    tareas.push(tarea)
    guardarJson(tareas)
    return tarea
},
filtrarPorEstado: (estado) =>{
let tareasFiltradas = tareas.filter ((tarea) => tarea.estado === estado)
   
tareas.forEach((tarea,i) => {
    return console.log (`${i+1} - ${tarea.titulo} - ${tarea.estado}`)
});
}
}