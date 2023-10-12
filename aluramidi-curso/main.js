
function tocaSom(idAudio) {

    document.querySelector(idAudio).play();
}

//Armazena todos elementos de classe "tecla" em listaDeTeclas
const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeTeclas.length) {

    //Representa a tecla atual
    const tecla = listaDeTeclas[contador];

    //O classList acessa todas as classes de um elemento.
    //Neste caso, pegamos a segunda classe de índice 1 que diz o nome
    //da tecla. 

    //ex: instrumento = tecla_pom
    const instrumento = tecla.classList[1];

    //Acessamos o id 
    //ex: idAudio = #som_ + tecla_pom
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    contador = contador + 1;
}




