//SEGED FUGGVENY
//0-n kozotti egesz szamot ad vissza
function veletlen(n) {
  return Math.floor(Math.random() * n);
}
//Vasarlo rendel: 1-n darab rendeles
//RENDELES FELDOLGOZASA
//1. megnezzuk a receptet
//2. megnezzuk van e az alapanyag a raktarba
//3a Ha van kivesszuk
//3b Ha nincs akkor kerjuk a vasarlot valasszon masikat.
//4. Megfozzuk a kavet. 10 +-2 energiat elhasznalunk az akkumlatorbol
//5. Szamlazunk kiszamlazzuk a kavet es beirjuk a konyvelesbe
//6. Ha elfogy az alapanyag, vagy vege a rendeleseknek bezarjuk a boltot es megnezzuk aszamlat

const raktar = { arabica: 15, robusta: 10, cukor: 13, tejszin: 7, tej: 9 };
let receptek = {
  melange: ["arabica", "cukor", "tejszin"],
  dupla: ["robusta", "arabica"],
  tejes: ["robusta", "tej", "cukor"],
  espresso: ["arabica", "cukor"],
};

const arak = { melange: 10, dupla: 7, tejes: 9, espresso: 5 };

let konyveles = [];
let akkumlator = 150;

function elkeszit(rendeles) {
  if (UresEAzItalLap()) {
    return false;
  }
  console.log("VASARLO: kerek szepen egy " + rendeles);
  while (!megfozheto(rendeles)) {
    console.log("BARITSA: Sajnos elfogyott ez a tipus, kerlek valassz masikat");
    rendeles = masikatValaszt();
    console.log("VASARLO: Akkor legyen egy" + rendeles);
  }

  kiveszRaktarbol(rendeles);

  if (megfoz()) {
    return true;
  } else {
    console.log("BARITSA: Bocsi be kell zarnunk lemerult az aksi.");
    return false;
  }
}

function megfozheto(rendeles) {
  const alapanyagok = receptek[rendeles];
  for (let i = 0; i < alapanyagok.length; i++) {
    let alapanyag = alapanyagok[i];
    if (raktar[alapanyag] === 0) {
      return false;
    }
  }
  return true;
}

function masikatValaszt(rendeles) {
  const valasztott = veletlenRendeles();
  if (valasztott === rendeles) {
    masikatValaszt(rendeles);
  }
  return valasztott;
}

function veletlenRendeles() {
  const veletlenSzam = veletlen(Object.keys(receptek).length);
  return Object.keys(receptek)[veletlenSzam];
}

function kiveszRaktarbol(rendeles) {
  const alapanyagok = receptek[rendeles];
  for (let i = 0; i < alapanyagok.length; i++) {
    let alapanyag = alapanyagok[i];
    //raktar[alapanyag] = raktar[alapanyag] - 1
    raktar[alapanyag]--;
  }
}

//8,9,10,11,12
//0,1, 2, 3, 4
//10 - 2 + veletlen(4)
function veletlenTartomany(n) {
  return veletlen(2 * n) - 2;
}
//-------(---|---)---
function megfoz() {
  const szuksegesEnergia = 10 + veletlenTartomany(2);
  if (szuksegesEnergia < akkumlator) {
    akkumlator = akkumlator - szuksegesEnergia;
    return true;
  } else {
    return false;
  }
}

function szamlaz(rendeles) {
  konyveles.push({ tetel: rendeles, ar: arak[rendeles] });
}

function konyvelesZarasa() {
  let vegosszeg = 0;
  for (let i = 0; i < konyveles.length; i++) {
    const elem = konyveles[i];
    vegosszeg += elem.ar;
    console.log(`${elem.tetel}     ${elem.ar}`);
  }

  console.log("===========================");
  console.log("Osszesen:" + vegosszeg);
}

function leveszAzItalLaprol(recept) {
  //ez javascript specifikus
  delete receptek[recept];
}

function UresEAzItalLap() {
  return Object.keys(receptek).length === 0;
}

function kavesKocsi(megrendelokszama) {
  for (let i = 0; i < megrendelokszama; i++) {
    const rendeles = veletlenRendeles();
    let sikeres = elkeszit(rendeles);
    if (sikeres) {
      szamlaz(rendeles);
    } else {
      break;
    }
  }
  konyvelesZarasa();
}

kavesKocsi(15);
