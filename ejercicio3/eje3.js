const palabrasArequipa = ["Flores", "chicha", "choclo", "cuy", "papa", "aji", "quinua", "cafe", "pisco", "queso", "mamani"];
let palabraElegida = "";
let letrasAdivinadas = [];
let errores = 0;
const errorMax = 6;

// Creacion del DOM
const contenedor = document.createElement("div");

const titulo = document.createElement("h2");
titulo.innerText = "Ahorcado Arequipa";

const canvas = document.createElement("canvas");
canvas.width = 300;
canvas.height = 300;
const ctx = canvas.getContext("2d");

const infoPalabra = document.createElement("div");
infoPalabra.className = "palabra";

const estadoJuego = document.createElement("p");
estadoJuego.innerText = `Errores: 0/${errorMax}`;

const teclado = document.createElement("div");
teclado.className = "teclado";

const btnIniciar = document.createElement("button");
btnIniciar.innerText = "Iniciar juego";

contenedor.appendChild(titulo);
contenedor.appendChild(canvas);
contenedor.appendChild(infoPalabra);
contenedor.appendChild(estadoJuego);
contenedor.appendChild(teclado);
contenedor.appendChild(btnIniciar);
document.body.appendChild(contenedor); 

// ganaste o perdiste
function condicionGanadora() {
    let mostrarText = "";
    let victoria = true;
    

    for (let letra of palabraElegida) {

        if (letrasAdivinadas.includes(letra.toLowerCase())) {
            mostrarText += letra + " ";
        } else {
            mostrarText += "_ ";
            victoria = false;
        }
    }


    infoPalabra.innerText = mostrarText;


    if (victoria) {
        estadoJuego.innerText = "Ganaste " + palabraElegida;
        estadoJuego.style.color = "green";
        bloquearTeclado();
    }
}

// desactivar el teclado
function bloquearTeclado() {
    let botones = teclado.querySelectorAll("button");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}

// Revisa si la letra presionada es correcta o no
function probarLetra(letra, boton) {
    boton.disabled = true; 
    letrasAdivinadas.push(letra.toLowerCase()); 

    
    if (!palabraElegida.toLowerCase().includes(letra.toLowerCase())) {
        errores++;
        estadoJuego.innerText = `Errores: ${errores}/${errorMax}`;
        dibujarAhorcado(errores); 

        
        if (errores >= errorMax) {
            estadoJuego.innerText = "Perdiste. La palabra era: " + palabraElegida;
            estadoJuego.style.color = "red";
            bloquearTeclado();
        }
    }
    
    
    condicionGanadora();
}


function generarTeclado() {
    teclado.innerHTML = ""; 
    const alfabeto = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    
    
    for (let i = 0; i < alfabeto.length; i++) {
        let botonLetra = document.createElement("button");
        botonLetra.innerText = alfabeto[i];
        
  
        botonLetra.onclick = function() {
            probarLetra(alfabeto[i], botonLetra);
        };
        
        teclado.appendChild(botonLetra);
    }
}


function dibujarAhorcado(paso) {
    ctx.lineWidth = 3;
    ctx.beginPath();

    if (paso === 1) {
        
        ctx.moveTo(50, 280); ctx.lineTo(150, 280); 
        ctx.moveTo(100, 280); ctx.lineTo(100, 20); 
        ctx.moveTo(100, 20); ctx.lineTo(200, 20);  
        ctx.moveTo(200, 20); ctx.lineTo(200, 50);  
    } else if (paso === 2) {
        
        ctx.arc(200, 80, 30, 0, Math.PI * 2);
    } else if (paso === 3) {
        
        ctx.moveTo(200, 110); ctx.lineTo(200, 190);
    } else if (paso === 4) {
        
        ctx.moveTo(200, 130); ctx.lineTo(160, 170);
    } else if (paso === 5) {
       
        ctx.moveTo(200, 130); ctx.lineTo(240, 170);
    } else if (paso === 6) {
        ctx.moveTo(200, 190); ctx.lineTo(160, 250); 
        ctx.moveTo(200, 190); ctx.lineTo(240, 250); 
    }
    
    ctx.stroke(); 
}

// Da inicio al juego
function iniciarJuego() {
    palabraElegida = palabrasArequipa[Math.floor(Math.random() * palabrasArequipa.length)];
    letrasAdivinadas = [];
    errores = 0;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    estadoJuego.innerText = `Errores: ${errores}/${errorMax}`;
    estadoJuego.style.color = "black";
    
    condicionGanadora();
    generarTeclado();
}

btnIniciar.onclick = iniciarJuego;

iniciarJuego();