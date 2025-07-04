// Creación de arreglos: Lista de especialistas disponibles
let especialistas = [
  { nombre: "Sofía Ramírez", rol: "Estratega" },
  { nombre: "Diego Vargas", rol: "Redactor" },
  { nombre: "Clara Morales", rol: "Diseñadora Gráfica" }
]


// TODO 1: Usar push para añadir un nuevo especialista al final del arreglo
// Añade un especialista con nombre "Lucía Fernández" y rol "Analista de Datos"
// Imprime el arreglo actualizado
// TODO: Escribe tu código aquí
especialistas.push({ nombre: "Lucía Fernández", rol: "Analista de Datos"})
console.log("Especialistas actualizados:", especialistas)


// TODO 2: Usar pop para eliminar el último especialista y almacenarlo en una variable
// Imprime el especialista eliminado y el arreglo actualizado
// TODO: Escribe tu código aquí
let ultimoEspecialista=especialistas.pop()
console.log("Especialista eliminado con pop:",ultimoEspecialista)
console.log("Especialistas actualizados:", especialistas)


// TODO 3: Usar unshift para añadir un especialista al inicio del arreglo
// Añade un especialista con nombre "Mateo González" y rol "Community Manager"
// Imprime el arreglo actualizado
// TODO: Escribe tu código aquí
especialistas.unshift({ nombre: "Mateo González", rol: "Community Manager" })
console.log("Especialistas actualizados:", especialistas)


// TODO 4: Usar shift para eliminar el primer especialista y almacenarlo en una variable
// Imprime el especialista eliminado y el arreglo actualizado
// TODO: Escribe tu código aquí
let primerEspecialista=especialistas.shift()
console.log("Especialista eliminado con shift:",primerEspecialista)


// TODO 5: Usar slice para extraer una sublista con los primeros dos especialistas
// Almacena la sublista en una variable e imprímela
// TODO: Escribe tu código aquí
let especialistasDosLista = especialistas.slice(0, 2)
console.log("Especialistas extraídos con slice:")
especialistasDosLista.forEach((especialista) => 
console.log(`${especialista.nombre}`)
)


// Arreglo multidimensional: Estructura de campañas con especialistas asignados
let campanas = [
  [
    { nombre: "Sofía Ramírez", rol: "Estratega" },
    { nombre: "Diego Vargas", rol: "Redactor" }
  ],
  [
    { nombre: "Clara Morales", rol: "Diseñadora Gráfica" },
    { nombre: "Lucía Fernández", rol: "Analista de Datos" }
  ]
]


// TODO 6: Usar forEach para iterar sobre las campañas y mostrar un reporte
// Para cada campaña, imprime su número (por ejemplo, "Campaña 1") y la lista de especialistas con su rol
// Ejemplo de salida:
// Campaña 1:
// - Sofía Ramírez (Estratega)
// - Diego Vargas (Redactor)
// TODO: Escribe tu código aquí
campanas.forEach((campana, index) => {
    console.log(`Campaña ${index + 1}:`)
    campana.forEach((especialista) => {
        console.log(`- ${especialista.nombre} (${especialista.rol})`)
    })
})


// TODO 7: Usar un bucle for...of para contar el total de especialistas por campaña
// Imprime el número de especialistas en cada campaña
// Ejemplo de salida:
// Campaña 1 tiene 2 especialistas
// Campaña 2 tiene 2 especialistas
// TODO: Escribe tu código aquí
let contador = 1
for (let campana of campanas) {
  console.log(`Campaña ${contador} tiene ${campana.length} especialistas`)
  contador++
}


// TODO 8: Usar map para crear un nuevo arreglo con los nombres de los especialistas en mayúsculas
// Mantén el rol sin cambios y almacena el resultado en una variable
// Imprime el nuevo arreglo
// TODO: Escribe tu código aquí
let especialistasMayusculas = campanas.map(campana => 
  campana.map(especialista => ({
    nombre: especialista.nombre.toUpperCase(),
    rol: especialista.rol
  }))
)
console.log("Especialistas con nombres en mayúsculas:", especialistasMayusculas)


// TODO 9: Crear una función que genere un reporte completo de las campañas
// La función debe usar un bucle for clásico para iterar sobre las campañas
// Para cada campaña, imprime su número, el total de especialistas y la lista de nombres con sus roles
// Ejemplo de salida:
// Reporte Completo:
// Campaña 1 (2 especialistas):
//   1. Sofía Ramírez - Estratega
//   2. Diego Vargas - Redactor
// TODO: Escribe tu código aquí
generarReporteCompleto(campanas)
function generarReporteCompleto(campanas) {
  console.log("Reporte Completo:")
  for (let i = 0; i < campanas.length; i++) {
    console.log(`Campaña ${i + 1} (${campanas[i].length} especialistas):`)
    for (let j = 0; j < campanas[i].length; j++) {
      let especialista = campanas[i][j]
      console.log(`  ${j + 1}. ${especialista.nombre} - ${especialista.rol}`)
    }
  }
}
generarReporteCompleto(campanas)