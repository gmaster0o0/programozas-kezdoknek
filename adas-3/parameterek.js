console.log("------------------PELDA1--------------------");
const kiskosar = "alma";
const nagykosar = {
  gyumolcs: "malna",
  felvagott: "parizer",
};

function bolt(kosar) {
  console.log(kosar);
}

bolt(kiskosar);
bolt(nagykosar);
console.log(kiskosar);
console.log(nagykosar);
console.log("------------------PELDA2--------------------");
function nagyvarazsbolt(kosar) {
  kosar.felvagott = "teliszalamira";
  console.log(kosar);
}
function kisvarazsbolt(kosar) {
  kosar = "korte";
  console.log(kosar);
}

kisvarazsbolt(kiskosar);
nagyvarazsbolt(nagykosar);
console.log(kiskosar);
console.log(nagykosar);
