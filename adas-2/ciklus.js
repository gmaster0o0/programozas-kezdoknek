const zoknisfiok = new Array(3, 5, 8, 10);
console.log("Zoknis fiok 1. eleme:" + zoknisfiok[0]);
console.log("Zoknis fiok 2. eleme:" + zoknisfiok[1]);
console.log("Zoknis fiok 3. eleme:" + zoknisfiok[2]);
console.log("Zoknis fiok 4. eleme:" + zoknisfiok[3]);

let hanyadik = 0;
while (hanyadik < 4) {
  console.log("Zoknis fiok " + hanyadik + " eleme: " + zoknisfiok[hanyadik]);
  //hanyadik = hanyadik + 1;
  //hanyadik += 1;
  hanyadik++;
}

let cica = 0;
let eredmeny = 0;
do {
  eredmeny += 3;
  cica++;
} while (false);

console.log(eredmeny);

//while(true){
//  console.log('vegtelen');
//}

//console.log('vegevan');

for (let i = 0; i < 100; i += 10) {
  //ez itt a ciklus mag
  console.log(i);
}

for (let i = 100; i > 0; i -= 10) {
  //ez itt a ciklus mag
  console.log(i);
}
