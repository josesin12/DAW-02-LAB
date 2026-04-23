const br = document.createElement("br");
const div1 = document.createElement("div");
const p_div1 = document.createElement("p");

p_div1.textContent = "Ingrese las operaciones";
div1.append(p_div1);
div1.style.backgroundColor = "blue";
div1.style.color = "white";
div1.style.padding = "5px";
div1.style.marginBottom = "10px";
div1.style.maxWidth = "500px";
div1.style.borderRadius = "5px";
div1.style.fontFamily = "Arial, sans-serif";
div1.style.fontWeight = "bold";
document.body.append(div1);

let botones = [];
let teclas = ["AC","C","<","/","(",")","x","y",7,8,9,"*",4,5,6,"-",1,2,3,"+",0,".","=","Evaluar"];
const colores = {
    operador: "#2196F3",
    especial: "#FF5722",
    limpiar: "#F44336",
    numero: "#E0E0E0",
    funciones: "#9C27B0",
    evaluar: "#00C853"
};
for (let i = 0; i < 24; i++){
    const boton = document.createElement("button");
    const texto = teclas[i];
    boton.textContent = texto;
    boton.style.padding = "15px";
    boton.style.fontSize = "16px";
    boton.style.fontWeight = "bold";
    boton.style.borderRadius = "4px";
    boton.style.fontFamily = "Arial, sans-serif";

    if (!isNaN(texto) || texto === ".") {
        boton.style.backgroundColor = colores.numero;
        boton.style.color = "black";
    } else if (texto === "AC") {
        boton.style.backgroundColor = colores.limpiar;
        boton.style.color = "white";
    } else if (texto === "C" || texto === "<") {
        boton.style.backgroundColor = colores.especial;
        boton.style.color = "white";
    } else if (texto === "(" || texto === ")" || texto === "x" || texto === "y") {
        boton.style.backgroundColor = colores.funciones;
        boton.style.color = "white";
    } else if (texto === "Evaluar") {
        boton.style.backgroundColor = colores.evaluar;
        boton.style.color = "white";
    } else {
        boton.style.backgroundColor = colores.operador;
        boton.style.color = "white";
    }

    boton.addEventListener("click", capturarDatos);
    botones.push(boton);
}

let i = 0;
while (i < botones.length) {
    const fila = document.createElement("div");
    fila.style.display = "flex";
    fila.style.margin = "10px";
    fila.style.maxWidth = "500px";
    for (let j = 0; j < 4; j++) {
        if (botones[i]) {
            botones[i].style.marginRight = "8px"; 
            botones[i].style.flex = "1";
            fila.append(botones[i]);
            i++;
        }
    }
    document.body.appendChild(fila);
}

document.body.append(br);

const tabla = document.createElement("table");
tabla.style.border = "2px solid black";
document.body.append(tabla);

let acumulado = "";
let contenido = "";

function capturarDatos(event){
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    contenido = event.target.textContent;
    if (contenido === "Evaluar"){
        let resultado = eval(acumulado);
        p_div1.textContent = resultado;
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.textContent = acumulado + " = " + resultado;
        tr.append(td);
        tabla.append(tr);
        acumulado = resultado.toString();
    }
    else if (contenido === "AC"){
        ac();
    }
    else if (contenido === "C"){
        p_div1.textContent = "";
        acumulado = "";
    }
    else if (contenido === "<"){
        acumulado = acumulado.slice(0, -1);
        p_div1.textContent = acumulado;
    }
    else{
        acumulado += contenido;
        p_div1.textContent = acumulado;
    }
}

function ac(){
    acumulado = "";
    p_div1.textContent = "";
    tabla.innerHTML = "";
}