var listaNumeriRandom = []

for (var i = 0; i < 5; i++) {
  listaNumeriRandom.push(generatore(1, 100));
}
alert (listaNumeriRandom);

setTimeout(richiestaNumeri, 30000);


// funzioni
function generatore (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}

function richiestaNumeri() {
  for (var i = 0; i < listaNumeriRandom.length; i++) {
  parseInt(prompt('inserisci uno dei numeri visualizzati prima'));
  }
}
