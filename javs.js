// function XoY(boton){
//     document.getElementById(boton).innerHTML= 'X'
// }

let turno =0;
let fichas = ["O","X"];
let puestas = 0; // para saber cuando se marcaron las 9 posiciones
let partidaAcabada = false; 
let contador1 = 0;
let jugador = document.getElementById('jugador1');
let contador2 = 0;
let maquina = document.getElementById('maquina');
let contador3 = 0;
let empate = document.getElementById('empate');
let textoVictoria = document.getElementById('textoVictoria');

let botones1 = Array.from(document.getElementsByClassName('BotonesJuego'));
let botones2 = Array.from(document.getElementsByClassName('BotonesJuego'));


let botones = Array.from(document.getElementsByClassName('BotonesJuego'));

let fila1 = [botones1[0], botones1[1], botones1[2]];
let fila2 = [botones1[3], botones1[4], botones1[5]];
let fila3 = [botones1[6], botones1[7], botones1[8]];
let fila4 = [botones1[0], botones1[3], botones1[6]];
let fila5 = [botones1[1], botones1[4], botones1[7]];
let fila6 = [botones1[2], botones1[5], botones1[8]];
let fila7 = [botones1[0], botones1[4], botones1[8]];
let fila8 = [botones1[6], botones1[4], botones1[2]];

botones.forEach (x => x.addEventListener("click", ponerFicha));

function ponerFicha (event){
    if (partidaAcabada) {
        return; // Evitar que se siga jugando si la partida ha terminado
    }
    let botonPulsado = event.target;
    
    if (botonPulsado.innerHTML !== "") {
        return; // Evitar que se sobrescriba una ficha existente
    }

    botonPulsado.disabled = true;
    botonPulsado.style.backgroundColor = 'Red';
    botonPulsado.innerHTML = "X";

    turno++;
    puestas++;

    

    hasGanado (botones[0], botones[1], botones[2]);
    hasGanado (botones[3], botones[4], botones[5]);
    hasGanado (botones[6], botones[7], botones[8]); 
    hasGanado (botones[0], botones[3], botones[6]);
    hasGanado (botones[1], botones[4], botones[7]);
    hasGanado (botones[2], botones[5], botones[8]);
    hasGanado (botones[0], botones[4], botones[8]);
    hasGanado (botones[6], botones[4], botones[2]);
    hanEmpatado();
    
    
    turno1PC(botones1);
    if (partidaAcabada === true) {
        // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
        return;
}
    

    if(verificarFilas(fila1) == false){
        if(verificarFilas(fila2) == false){
            if(verificarFilas(fila3) == false){
                if(verificarFilas(fila4) == false){
                    if(verificarFilas(fila5) == false){
                        if(verificarFilas(fila6) == false){
                            if(verificarFilas(fila7) == false){
                                if(verificarFilas(fila8) == false){
                                    
                                
                                    if(turnosPC(fila1) == false){
                                        if(turnosPC(fila2) == false){
                                            if(turnosPC(fila3) == false){
                                                if(turnosPC(fila4) == false){
                                                    if(turnosPC(fila5) == false){
                                                        if(turnosPC(fila6) == false){
                                                            if(turnosPC(fila7) == false){
                                                                (turnosPC(fila8) == false)
                                                                }
                                                                if (partidaAcabada === true) {
                                                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                                                    return;
                                                                }
                                             
                                 } 
                                }
        }
   }
}
}
}
}
        }}}}}}}


        function turno1PC(arrayDeBotones) {
            if (turno === 1 && !partidaAcabada) {
                for (let i = 0; i < arrayDeBotones.length; i++) {
                    if (arrayDeBotones[4].innerHTML === "") {
                        arrayDeBotones[4].innerHTML = "O";
                        arrayDeBotones[4].syle.backgroundColor = 'Grey';
                    } else {
                        for (let j = 0; j < arrayDeBotones.length; j++) {
                            if (arrayDeBotones[j].innerHTML === "X") {
                                arrayDeBotones[i].innerHTML = "O";
                                arrayDeBotones[i].backgroundColor = 'Grey';
                                return;
                            }
                        }
                    }
                }
            }
        }
    
        

 function tercerCirculo(arrayFila){
    if (turno >= 3){
        let contador2 = 0;
        let espacioVacio2 = -1;
        for (let x = 0; x < arrayFila.length; x++){
            if (arrayFila[x].innerHTML === "O"){
                contador2++;
            } 
                else if ((arrayFila[x].innerHTML === "")){ 
                    espacioVacio2 = x
                }
                } if (contador2 === 2 && espacioVacio2>= 0)
                {
                arrayFila[espacioVacio2].innerHTML = "O"
                return true;
            }
    }
    return false;
 }


 function turnosPC(arrayFila){
    if (turno >= 2) {
        let contador1 = 0;
        let espacioVacio1 = -1;
        for (let u = 0; u < arrayFila.length; u++){
            if (arrayFila[u].innerHTML === "O"){
                contador1++;
            } else if ((arrayFila[u].innerHTML === "")){
                espacioVacio1 = u;
            }
        } if (contador1 >= 1 && espacioVacio1 >= 0){
            arrayFila[espacioVacio1].innerHTML = "O";
            return true;
        } 
    } 
    return false;
 }


 function verificarFilas(arrayFila){
    if (turno >= 2) {
     let contador = 0;
     let espacioVacio = -1;
     
     for (let e = 0; e < arrayFila.length; e++){
         if (arrayFila[e].innerHTML === "X"){
             contador++;
                        } else if (tercerCirculo(fila1)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                } 
                                partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila2)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila3)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila4)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila5)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila6)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila7)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            });
                        } else if (tercerCirculo(fila8)){
                            contador2 = contador2+1;
                            maquina.innerHTML = contador2;
                            botones.forEach(boton => {
                                if (boton.innerHTML === "") {
                                    boton.disabled = true;
                                }partidaAcabada = true;
                                if (partidaAcabada === true) {
                                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                                    return;
                            }
                                return;
                            }); return;
                        }

         else if ((arrayFila[e].innerHTML === "")){
                 espacioVacio = e;
             } 
             if (partidaAcabada === true) {
                 // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                 return;
         }
        }
        if (contador === 2 && espacioVacio >=0){
                 arrayFila[espacioVacio].innerHTML = "O"
                 arrayFila[espacioVacio].syle.backgroundColor = 'Grey';
                 arrayFila[espacioVacio].disabled = true;
                 partidaAcabada = true;
                 botones.disabled = true;
                 if (partidaAcabada === true) {
                    // Aquí puedes mostrar un mensaje o realizar otras acciones cuando la partida ha terminado
                    return;
                }
                 return true;
         } 
         
        }
     return false;
 }

function hasGanado (boton1,boton2,boton3){
    let primerPulsado = boton1.innerHTML;
    let segundoPulsado = boton2.innerHTML;
    let tercerPulsado = boton3.innerHTML;

    if (primerPulsado === "X" && segundoPulsado === "X" && tercerPulsado === "X") {
        botones.forEach(boton => {
            if (boton.innerHTML === "") {
                boton.disabled = true;
            }
        });
        contador1 = contador1 + 1;
        jugador.innerHTML = contador1;
        partidaAcabada = true;
        return;
    }
    return false;
}

function hanEmpatado() {
        if (puestas === 5 && !partidaAcabada) {
          // Aquí gestionas el empate
          contador3 = contador3 + 1;
          empate.innerHTML = contador3;
          partidaAcabada = true;
          botones.disabled = true;
        }
    }

// Agregar un evento de escucha al botón "Nuevo Juego"
const nuevoJuegoBoton = document.getElementById('nuevo');
nuevoJuegoBoton.addEventListener('click', nuevoJuego);

// Función para reiniciar el juego
function nuevoJuego() {
    // Reiniciar el estado del juego
    turno = 0;
    puestas = 0;
    partidaAcabada = false;

    botones.forEach(boton => {
    boton.innerHTML = "";
    boton.disabled = false;
    boton.style.backgroundColor = 'white'; // Reemplaza 'initial' con el color de fondo deseado
    });
}

const nuevoJuegoBoton2 = document.getElementById('reiniciar');
nuevoJuegoBoton2.addEventListener('click', nuevoJuegoF);

// Función para reiniciar el juego
function nuevoJuegoF() {
    // Reiniciar el estado del juego
    turno = 0;
    puestas = 0;
    partidaAcabada = false;
    contador1 =0;
    jugador.innerHTML = contador1;
    contador2=0;
    maquina.innerHTML = contador2;
    contador3=0;
    empate.innerHTML = contador3;

    botones.forEach(boton => {
    boton.innerHTML = "";
    boton.disabled = false;
    boton.style.backgroundColor = 'white'; // Reemplaza 'initial' con el color de fondo deseado
    });
}

      





    
