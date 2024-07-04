// Menu Lateral
let menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu(){
    if(menu_visible == false){ // Si está oculto
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Ocultar menú cuando selecciono una opción
let links = document.querySelectorAll("nav a");
for(let x = 0; x < links.length; x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }   
}

// Barras de progreso
function crearBarra(id_barra){
    for(let i = 0; i < 20; i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Creación de barras
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let react = document.getElementById("react");
crearBarra(react);
let python = document.getElementById("python");
crearBarra(python);
let bootstrap = document.getElementById("bootstrap");
crearBarra(bootstrap);
let sql = document.getElementById("sql");
crearBarra(sql);
let git = document.getElementById("git");
crearBarra(git);
let node = document.getElementById("node");
crearBarra(node);

// Arreglo para guardar cantidad de barras de cada barra de progreso
let contadores = [-1, -1, -1, -1, -1, -1, -1, -1];
let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills >= 300 && !entro){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 18, 0, intervalHtml); // Asegúrate de pasar el índice correcto
        }, 100);
        const intervalJavaScript = setInterval(function(){
            pintarBarra(javascript, 16, 1, intervalJavaScript);
        }, 100);
        const intervalReact = setInterval(function(){
            pintarBarra(react, 15, 2, intervalReact);
        }, 100);
        const intervalPython = setInterval(function(){
            pintarBarra(python, 14, 3, intervalPython);
        }, 100);
        const intervalBootstrap = setInterval(function(){
            pintarBarra(bootstrap, 16, 4, intervalBootstrap);
        }, 100);
        const intervalSql = setInterval(function(){
            pintarBarra(sql, 16, 5, intervalSql);
        }, 100);
        const intervalGit = setInterval(function(){
            pintarBarra(git, 17, 6, intervalGit);
        }, 100);
        const intervalNode = setInterval(function(){
            pintarBarra(node, 15, 7, intervalNode);
        }, 100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    var x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        if (elementos[x]) {
            elementos[x].style.backgroundColor = "rgb(0, 255, 255)";
        }
    } else {
        clearInterval(interval);
    }
}

// Detección del scrolling del mouse para aplicar la animación de la barra
window.addEventListener('scroll', efectoHabilidades);
