//LEGMAGASABB DAIK

const osztaly = [
  {
    nev: "petike",
    magassag: 170,
  },
  {
    nev: "gaborka",
    magassag: 160,
  },
  {
    nev: "tibike",
    magassag: 181,
  },
];

//legmagassabb diak sorszama
let legmagasabb = 0;

for (let i = 1; i < 3; i++) {
  const diak = osztaly[i];
  if (osztaly[legmagasabb].magassag < diak.magassag) {
    legmagasabb = i;
  }
}

console.log(
  "Az osztaly legnagyobb diakja:" + osztaly[legmagasabb].nev + " aki " + osztaly[legmagasabb].magassag + " cm magas"
);

//legalacsonyabb diak sorszama
let legalacsonyabb = 0;

for (let i = 1; i < 3; i++) {
  const diak = osztaly[i];
  if (osztaly[legalacsonyabb].magassag > diak.magassag) {
    legalacsonyabb = i;
  }
}

console.log(
  "Az osztaly legalacsonyabb diakja:" +
    osztaly[legmagasabb].nev +
    " aki " +
    osztaly[legalacsonyabb].magassag +
    " cm magas"
);
