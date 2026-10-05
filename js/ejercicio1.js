function crearElemento(tag, texto) {

    let nodo = document.createElement(tag, texto);
    return nodo;




}

function crearNodoConTexto(tag, texto) {

    nodo = crearElemento(tag);
    nodo.textContent = texto;
    return nodo;
}

function adicionalElemntoABody(elemento) {
    document.body.appendChild(elemento);
}

function adicionalElementoAContenedor(elemento, contenedor) {
    contenedor.appendChild(elemento);
}