var listaNumeriRandom = [];
var risposteUtente = richiestaNumeri;
var risultato;

for (var i = 0; i < 5; i++) {
  listaNumeriRandom.push(generatore(1, 100));
}
alert (listaNumeriRandom);

// crea lista risposte utente

setTimeout(risposteUtente, 3000);

if (risposteUtente == listaNumeriRandom){
  risultato = alert('complimenti! hai indovinato tutti i numeri');
}
else{
 risultato = alert ('mi dispiace, hai perso, ecco il tuo risultato:' + ' Numeri PC:' + listaNumeriRandom[i] + ' I tuoi Numeri:' + risposteUtente[i]);
}


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
  }
  alert(risposte);
}
