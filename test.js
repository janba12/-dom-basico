// // const nombre = 'Jansel';
// // const apellido = 'Barrios';
// // const platziNick = 'janb';
// // const edad = 28;
// // const correo = 'janselbarrios12@gmail.com';
// // const mayoriaEdad = true;
// // const dineroAhorrado = 20;
// // const deudas = 23;

// // const dineroReal = dineroAhorrado - deudas;
// // console.log( nombre + ' ' + apellido);
// // console.log('El dinero real que tengo es ' + dineroReal );


// // const name = "Juan David";
// // const lastname = "Castro Gallego";
// // const completeName = name + lastname;
// // const nickname = "juandc";

// // console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
// // function nombreCompleto(name,lastname) {
// //     return name + ' ' + lastname;
// // }
// // function presentation(name, lastname, nickname) {
// // const nombresote = nombreCompleto(name, lastname);
// // return  console.log(`Hola mi nombre es ${nombresote}, pero prefieros que me digas ${nickname}`);
// // }

// // const tipoDeSuscripcion = "free";

// // // switch (tipoDeSuscripcion) {
// // //     case "Free":
// // //         console.log("Solo puedes tomar los cursos gratis");
// // //         break;
// // //     case "Basic":
// // //         console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
// // //         break;
// // //     case "Expert":
// // //         console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
// // //         break;
// // //     case "ExpertPlus":
// // //         console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
// // //         break;
// // // }



// // let i = 0;

// // while (i !=5) {
// //     let pregunta = prompt('Cuantos anios tienes?');
// //     i = pregunta;
// // }

// const elementos = ['Cerveza', 'Sangria','Ron','Vodka','Cacique'];

// function elementosPrint(elementos) {
//     console.log(elementos[0]);
    
// }   
// function elementosUnoporUno(elementos) {
//     for ( const element of elementos) {
//         console.log(element);
//     }
    
// }   
// function elementosPorLinea(elementos) {
//     for (let i = 0; i < elementos.length; i++) {
//             console.log(elementos[i])
        
//     }
// }

// const usuario1 = {
//     nombre: 'Jansel',
//     Apellido: 'Barrios',
//     Edad: 28,
//     Peso: 68,
//     altura: 163,
// }

// function imprimirElementosObjetos(usuario1) {
//     const elementosObj = Object.values(usuario1);
//     for (let i = 0; i < elementosObj.length; i++) {
//         console.log(elementosObj[i]);
//     }
    
// }

// //variables


// const tiposDeSubscripciones = {
//     free: "Solo puedes tomar los cursos gratis",
//     basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
//     Expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
//     ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
// };
// const subscripcion = 'ExpertPlus';

// function conseguirTipoDeSubscripcion(subscripcion) {
//     if(tiposDeSubscripciones[subscripcion]){
//         console.log(tiposDeSubscripciones[subscripcion]);
//     }else{
//         console.warn('No existe ninguna subscripcion con ese nombre');
//     }
// };

// function createImg(p) {
// // //     // const img = document.createElement('img');
//     p.innerHTML = '<img src= "/javascript/platzi.jpg">';  
// }

// console.log({
//     h1,p,pid
// })


// h1.innerHTML = 'H1 mejorado y mas vergatario ';
let productos  = ['ventana','bombillo','lampara'];


const h1 = document.querySelector('h1');
const prespuesta = document.querySelector('#respuesta');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const boton = document.querySelector('#calcular');
const form = document.querySelector('form1');

function strgToNum(i) {
    const numFinal = parseInt(i);
}

function btnOnClick(){
    const num1 = parseInt(input1.value);
    const num2 = parseInt(input2.value);
    const valueFinal = num1 + num2;
    prespuesta.innerHTML =  'Resultado: ' + valueFinal;
    console.log(input1.value + input2.value)
}

function productAdd() {
    
}
boton.addEventListener('click', btnOnClick);

function addProduct(){
    const productAdded = input1.value;
    productos.push(productAdded);
}