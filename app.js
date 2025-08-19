// almacenar los nombres de los amigos
let amigos = [];

//funcion para agregar un amigo a la lista
function agregarAmigo() {
    let input = document.getElementById( "amigo");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("por favor, escribe un nombre valido.");
        return;

    }
    amigos.push(nombre);
    input.value = "";
    mostrarLista ();
}

//funcion para mostrar la lista en el HTML
function mostrarLista() {
    let lista = document.getElementById ("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(function (amigos){
        let li = document.createElement("li");
        li.textContent = amigos;
        lista.appendChild(li);
    });
}

// funcion para sortear un amigo al azar
function sortearAmigo (){
    if (amigos.length < 2){
        alert( " debes ingresar al menos 2 amigos para el sorteo.");
        return;
    }
    let indiceAleatorio = Math.floor (Math.random () * amigos.length);
    let amigoSorteado = amigos [indiceAleatorio];

    let resulado = document.getElementById ("resultado");
    resultado.innerHTML = "El amigo secreto es: " + amigoSorteado;
}