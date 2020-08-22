let osszeg = 0;

function szamolgat() {
  console.log(osszeg);
  osszeg++;
  if (osszeg < 100) {
    szamolgat();
  }
}

//szamolgat();

//visszateresi ertek

//faktorialis pl. 10! = 10 * 9 *8 *7 * 6 * 5 * 4 *3 * 2 *1

function faktorialis(a) {
  console.log("A=" + a);
  let eredemeny = 1;
  if (a > 0) {
    eredemeny = a * faktorialis(a - 1);
    console.log("eredmeny:" + eredemeny);
  }
  return eredemeny;
}
// 4! = 4*3*2*1
console.log(faktorialis(4));

/*
faktorialis(4)
faktorialis(3)
faktorialis(2)
faktorialis(1)
faktorialis(0) -> visszateres 1-l faktorial(1)-be

visszateres 1*1 a faktorialis(2)
visszateres 1*1*2 a faktorialis (3)
visszateres 1*1*2*3 a faktorialis(4)
visszateres 1*1*2*3*4 a console.log-ba es kiirjuk
*/

/*

fokonyvar
  1
  2
    a
    b
      cica.js
      kutya.js
    c
  3
    fuggveny.js
    d
      valtozok.js
  4
*/

const fokonyvtar = {
  nev: "fokonyvtar",
  tartalom: [
    {
      nev: 1,
      tartalom: [],
    },
    {
      nev: 2,
      tartalom: [
        {
          nev: "a",
          tartalom: [],
        },
        {
          nev: "b",
          tartalom: ["cica", "kutya"],
        },
        {
          nev: "c",
          tartalom: [],
        },
      ],
    },
    {
      nev: 3,
      tartalom: [
        "fuggveny",
        {
          nev: "d",
          tartalom: ["valtozok"],
        },
      ],
    },
  ],
};

console.log(fokonyvtar);

function keres(konyvtar) {
  for (let i = 0; i < konyvtar.tartalom.length; i++) {
    const elem = konyvtar.tartalom[i];
    if (typeof elem === "object") {
      keres(elem);
    } else {
      console.log(elem);
    }
  }
}

keres(fokonyvtar);
