const crear = t => document.createElement(t);

document.body.style.fontFamily = "Arial";
document.body.style.background = "#f5f5f5";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.paddingTop = "30px";

const caja = crear("div");
caja.style.width = "420px";
caja.style.background = "#fff";
caja.style.padding = "15px 20px";
caja.style.border = "1px solid #ccc";
caja.style.borderRadius = "6px";

const fila = () => {
    let d = crear("div");
    d.style.display = "flex";
    d.style.alignItems = "center";
    d.style.marginBottom = "10px";
    return d;
};

const texto = (t) => {
    let d = crear("div");
    d.textContent = t;
    d.style.width = "160px";
    d.style.fontSize = "13px";
    d.style.color = "#555";
    return d;
};

const estilo = (i) => {
    i.style.flex = "1";
    i.style.padding = "6px";
    i.style.border = "1px solid #ccc";
    i.style.borderRadius = "6px";
    i.style.fontSize = "13px";
};

let f1 = fila();
let sel = crear("select");
estilo(sel);

sel.style.appearance = "none";
sel.style.background = "url('data:image/svg+xml;utf8,<svg fill=\"red\" height=\"20\" viewBox=\"0 0 24 24\" width=\"20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7 10l5 5 5-5z\"/></svg>') no-repeat right 8px center";

sel.style.backgroundColor = "#fff";

let ops = ["Multired Global Débito","Multired Local Débito","Débito Canjeado"];
ops.forEach(x=>{
    let o = crear("option");
    o.textContent = x;
    sel.appendChild(o);
});

f1.append(texto("Seleccione:"), sel);

let f2 = fila();
let tar = crear("input");
tar.type = "text";
estilo(tar);
f2.append(texto("Número de tarjeta:"), tar);

let f3 = fila();
let tipo = crear("select");
estilo(tipo);

["Seleccione...","DNI","Pasaporte"].forEach(x=>{
    let o = crear("option");
    o.textContent = x;
    tipo.appendChild(o);
});

let doc = crear("input");
doc.type = "text";
estilo(doc);

f3.append(texto("Tipo y N° Documento:"), tipo, doc);

let zona = crear("div");
zona.style.display = "flex";
zona.style.gap = "20px";
zona.style.margin = "15px 0";

let grid = crear("div");
grid.style.display = "grid";
grid.style.gridTemplateColumns = "repeat(3, 45px)";
grid.style.gap = "8px";

let der = crear("div");

let t1 = crear("div");
let txt1 = "Ingresa tu Clave de Internet (06 dígitos)";
t1.textContent = txt1;
t1.style.fontSize = "12px";
t1.style.color = "#555";

let pass = crear("input");
pass.type = "password";
estilo(pass);
pass.style.width = "140px";
pass.style.marginTop = "5px";
pass.addEventListener("paste", e => e.preventDefault());

let l1 = crear("div");
let txt2 = "🟠 Genera tu Clave de Internet";
l1.innerHTML = txt2;
l1.style.fontSize = "12px";
l1.style.color = "red";

let l2 = crear("div");
let txt3 = "❗ Olvidé mi clave";
l2.innerHTML = txt3;
l2.style.fontSize = "12px";
l2.style.color = "red";

const mezclar = a => {
    for(let i=a.length-1;i>0;i--){
        let j = Math.floor(Math.random()*(i+1));
        [a[i],a[j]]=[a[j],a[i]];
    }
};

const pintar = () => {
    grid.innerHTML="";
    let nums=["1","2","3","4","5","6","7","8","9","0"];
    mezclar(nums);

    nums.forEach(n=>{
        let b = crear("button");
        b.textContent = n;
        b.style.background="#e6e6e6";
        b.style.border="1px solid #aaa";
        b.style.borderRadius="6px";
        b.style.height="40px";

        b.onclick=()=>{
            if(pass.value.length<6){
                pass.value+=n;
            }
            pintar();
        };

        grid.appendChild(b);
    });

    let clean = crear("button");
    clean.textContent="LIMPIAR";
    clean.style.gridColumn="span 2";
    clean.style.background="#777171";
    clean.style.color="white";
    clean.style.border="1px solid #aaa";
    clean.style.borderRadius="6px";
    clean.style.height="40px";

    clean.onclick=()=>pass.value="";
    grid.appendChild(clean);

    let v = crear("div");
    grid.appendChild(v);
};

let can = crear("canvas");
can.width = 120;
can.height = 40;

let ctx = can.getContext("2d");
let cod = "";

const gen = ()=>{
    let c="ABCDEFGHJKLMNP23456789";
    cod="";
    for(let i=0;i<5;i++){
        cod+=c[Math.floor(Math.random()*c.length)];
    }

    ctx.clearRect(0,0,120,40);
    ctx.font="bold 20px Arial";
    ctx.fillText(cod,10,25);

    for(let i=0;i<20;i++){
        ctx.fillRect(Math.random()*120, Math.random()*40, 2, 2);
    }
};

let cap = crear("input");
cap.type = "text";
estilo(cap);
cap.style.width = "100px";

let ref = crear("div");
ref.innerHTML="🔄 Cambiar texto";
ref.style.color="red";
ref.onclick=gen;

let fcap = fila();

let tcap = texto("Ingresa el texto de la imagen:");
tcap.style.width = "180px";

let box = crear("div");
box.style.display = "flex";
box.style.gap = "10px";
box.append(can, cap);

let cont = crear("div");
cont.append(box, ref);

fcap.append(tcap, cont);

let btn = crear("button");
btn.textContent="INGRESAR";
btn.style.background="#c40000";
btn.style.color="white";
btn.style.border="none";
btn.style.padding="10px";
btn.style.borderRadius="20px";
btn.style.width="140px";
btn.style.margin="20px auto 0";
btn.style.display="block";

btn.onclick=()=>{
    if(pass.value.length!==6) return alert("Clave inválida");
    if(cap.value!==cod){
        alert("Captcha incorrecto");
        gen();
        return;
    }
    alert("OK");
};

der.append(l1, t1, pass, l2);
zona.append(grid, der);

caja.append(f1, f2, f3, zona, fcap, btn);
document.body.appendChild(caja);

pintar();
gen();