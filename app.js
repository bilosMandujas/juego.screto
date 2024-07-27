let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); 
    
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el numero ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p","el numero secreto es menor....Intenta de nuevo");

        }else{
            asignarTextoElemento("p","el numero secreto es mayor.....Intenta de nuevo")
        }
        intentos++;
        limpiarCaja();
    }

return;
    
}

function limpiarCaja(){
 document.querySelector("#valorUsuario").value = "";
  }

function generarNumeroSecreto(){
   let numeroGenerado = Math.floor(Math.random()*10)+1;

   console.log(listaNumeroSorteados);
   console.log(numeroGenerado);
    //si ya sorteamos todos los numeros
    if(listaNumeroSorteados.length == numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los numero posibles");
    }else{
        
   // si el numero generado esta incluido en la lista 
   if(listaNumeroSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
   }else{
    listaNumeroSorteados.push(numeroGenerado);
        return numeroGenerado;
         }
    }

}

function condicionesIniciales(){
    asignarTextoElemento("h1","juego del numero secreto");
    asignarTextoElemento("p",`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    // limpiar caja
        limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    // inicializar el numero intentos  
         condicionesIniciales();
    //desahabilitar el boton de nuevo juegos
      document.querySelector("#reiniciar").setAttribute("disabled","true");
  
}

condicionesIniciales();
