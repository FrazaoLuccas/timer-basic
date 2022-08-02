function criaHoraDosSegundos (segundos){
    const data = new Date (segundos * 1000);
    return data.toLocaleTimeString('pt-br', {
        hour12:false,
        timeZone: 'UTC'
    }) 
}

// console.log(criaHoraDosSegundos(30));


const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.Pausar');
const zerar = document.querySelector('.Zerar');
let segundos = 0;
let timer;


function iniciarRelogio(){
      timer = setInterval(function (){
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
     }, 1000);
}


iniciar.addEventListener('click', function (e){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciarRelogio();

});

pausar.addEventListener('click', function (e){
    clearInterval(timer);
    relogio.classList.add('pausado');

});

zerar.addEventListener('click', function (e){
    clearInterval(timer);
    relogio.innerHTML = '00:00:00';
    segundos = 0;
});