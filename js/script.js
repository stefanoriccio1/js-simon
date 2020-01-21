var listaNumeriRandom = []

for (var i = 0; i < 5; i++) {
  listaNumeriRandom.push(generator(1, 100));
}
alert (listaNumeriRandom);
// funzioni
function generator (min, max){
  min = Math.ceil(min);
  max = Math.floor (max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
