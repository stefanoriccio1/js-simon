var listaNumeriRandom = [];

for (var i = 0; i < 5; i++) {
  listaNumeriRandom.push(generatore(1, 100));
}
// alert (listaNumeriRandom);
//
// setTimeout(richiestaNumeri, 1000);
//
console.log(listaNumeriRandom);
// console.log(setTimeout(richiestaNumeri, 1000));

// crea lista risposte utente

console.log(setTimeout(richiestaNumeri, 1000));


// funzioni
function generatore (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

function richiestaNumeri() {
  var risposte =[];
  var i= 0;
  while (i < listaNumeriRandom.length) {
  risposte.push(parseInt(prompt('inserisci uno dei numeri visualizzati prima')));
  i++;
};
return risposte;
}
