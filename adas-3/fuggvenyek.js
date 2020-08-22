let a = 5;
let b = 3;

console.log(a + b);

const c = 7;
const d = 8;

console.log(c + d);

function osszeadas() {
  const eredmeny = a + b;
  console.log("Eredmeny=" + eredmeny);
}

osszeadas();

a = 7;
b = 24;
osszeadas();

function osszeadas2(szam1, szam2) {
  const eredmeny = szam1 + szam2;
  console.log("Eredmeny=" + eredmeny);
}
/* ez csak erosen tipusos nyelveknel mukodik
function osszeadas2(szam1,szam2,szoveg){
  const eredmeny = szam1+szam2;
  console.log("Eredmeny=" + eredmeny);
}

osszeadas2(10,"cica");*/

//VISSZATERESI ERTEK

function szorzas(a, b) {
  const eredmeny = a * b;

  return eredmeny;
}

const ertek = szorzas(5, 10);

console.log(ertek);
console.log(szorzas(3, 6));
