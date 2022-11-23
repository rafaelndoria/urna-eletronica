const c = (e)=>document.querySelector(e); 

// variaveis de controle de interface
let seuVotoPara = c('.d-1-1 span');
let cargo = c('.d-1-2 span');
let descricao = c('.d-1-4');
let aviso = c('.d-2');
let lateral = c('.d-1-right');
let numeros = c('.d-1-3');

// variaveis de controle de ambiente
let etapaAtual = 0;
let numero = '';

function comecarEtapa() {
    let etapa = etapas[etapaAtual];

    let numeroHtml = '';

    for(let i = 0; i<etapa.numeros; i++) {
        if(i === 0) {
            numeroHtml += '<div class="numero pisca"></div>';
        } else {
            numeroHtml += '<div class="numero"></div>';
        }
    }

    cargo.innerHTML = etapa.titulo;
    seuVotoPara.style.display = 'none';
    descricao.innerHTML = '';
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
function atualizaInterface() {
    alert('voto verificado');
}


function clicou(n) {
    let elNumero = c('.numero.pisca');
    if(elNumero !== null) {
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;

        elNumero.classList.remove('pisca');
        if(elNumero.nextElementSibling !== null) {
            elNumero.nextElementSibling.classList.add('pisca');
        } else {
            atualizaInterface();
        }
    }
}
function branco() {
    alert('clicou no branco');
}
function corrige() {
    alert('clicou no corrige');
}
function confirma() {
    alert('clicou no confirma');
}

comecarEtapa();