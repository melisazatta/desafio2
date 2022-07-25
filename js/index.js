
let alumno
let nota

let alumnos = [{alumno: "Ana García", nota: 6},];

//Función para ingresar notas de alumnos y almacenarlas en un array
function datos(){
 //Muestra las opciones mediante alert   
    alert("1-Ingrese nombre y apellido de alumno.\n 2-Ingrese nota.\n 3-Ingrese stop para finalizar.")

    while (alumno !== "stop" && nota !== "stop") {

//Pide al usuario que ingrese nombre y apellido del alumno
    alumno = prompt("Ingrese nombre y apellido de alumno:");

 //Pide al usuario que ingrese la nota del alumno   
    nota = parseFloat(prompt("Ingrese nota:"))
    if (isNaN(nota)) {
        alert("Debe ingresar números");
//Si el usuario no ingresa un número se muestra un alert y a continuación, si se confundió, le da la opción de ingresar la nota o finalizar con "stop"
        nota = parseFloat(prompt("Ingrese nota o stop para salir:"))}

    else if (alumno !== "stop" && nota !== "stop") {
    alumnos.push({alumno, nota});
    } //Guarda la información en un array
}
//Muestra los datos guardados en el array.
console.log(alumnos);
}
datos()