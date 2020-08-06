if (true) {
  console.log("igaz");
}

if (false) {
  console.log("hamis");
}

const a = 5;
const b = 5;
const c = 0;
const d = 3;
if (a == b && c == 0) {
  console.log("egyenloek");
} else {
  console.log("ez a felteltel nem teljesul");
}

let szamocska = 10;
let szamoca;
if (szamocska == a) {
  szamocska = "Piros";
  console.log("szamocska az a-val:" + a);
} else if (szamocska == b) {
  console.log("szamocska az b-vel:" + b);
} else if (szamocska == c) {
  console.log("szamocska az c-vel:" + c);
} else if (szamocska == d) {
  console.log("szamocska az d-vel:" + d);
} else {
  console.log("szamocska az egyikkel se egyenlo:" + szamocska);
}

{
  console.log("en vgayok a kodblock");
}

szamocska = 5;
const betucske = "a-betu";
if (szamocska == a) {
  if (betucske == "a-betu") {
    console.log("en vagyok a betucske: " + betucske);
  }
}

if (betucske == "a-betu" && szamocska == 5) {
  console.log("igy is en vagyok a betucske: " + betucske);
}
