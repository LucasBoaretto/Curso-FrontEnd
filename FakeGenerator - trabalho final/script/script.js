function clickMenu() {
    if (menu.style.display == 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}


function toggleCase() {
    var txt = document.getElementById('inhome').value;
    var mostrar = document.getElementById('txt2');

    var resultado = '';
    for (var i = 0; i < txt.length; i++) {
        var letra = txt[i];
        if (letra === letra.toUpperCase()) {
            resultado += letra.toLowerCase();
        } else {
            resultado += letra.toUpperCase();
        }
    }

    mostrar.value = resultado;
}

function contador() {
    var conteudo = document.getElementById('inhome');
    var total = conteudo.value.length;
    var contador = document.getElementById('cont');
    contador.textContent = total;
}

function upperCase(){
    var txt = document.getElementById('inhome').value;
    var mostrar = document.getElementById('txt2');
    var resultado = '';
    
    for(var i = 0; i < txt.length; i++){
        var letra = txt[i];
        resultado += letra.toUpperCase();
    }

    mostrar.value = resultado;
}

function lowerCase(){
    var txt = document.getElementById('inhome').value;
    var mostrar = document.getElementById('txt2');
    var resultado = '';
    
    for(var i = 0; i < txt.length; i++){
        var letra = txt[i];
        resultado += letra.toLowerCase();
    }

    mostrar.value = resultado;
}

function reset(){
    var texto = document.getElementById('txt2');
    texto.value = '';
}

