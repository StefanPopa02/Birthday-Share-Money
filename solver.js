const cadouri = {
    tort: 135,
    ceas: 240,
    casti: 90,
    tricou: 105
};

const persoane = [{
        nume: "Stefan",
        suma: 240
    },
    {
        nume: "Nicoleta",
        suma: 105
    },
    {
        nume: "Eusebiu",
        suma: 90
    },
    {
        nume: "Diana",
        suma: 50
    },
    {
        nume: "Magda",
        suma: 85
    },
    {
        nume: "Raluca",
        suma: 0
    },
    {
        nume: "Anca",
        suma: 0
    },
    {
        nume: "Carla",
        suma: 0
    }
];

let pretCadouri = 0;
for(const key in cadouri){
    pretCadouri += cadouri[key]; 
}

let nrPersoane = persoane.length;
let pretPersoana = Math.ceil(pretCadouri / nrPersoane);

let persoaneCarePrimesc = [];
let persoaneCareDau = [];
persoane.forEach(persoana => {
    persoana.suma -= pretPersoana;
    if(persoana.suma < 0){
        persoaneCareDau.push(persoana);
    }else if(persoana.suma > 0){
        persoaneCarePrimesc.push(persoana);
    }
});

persoaneCareDau.sort((persA, persB) => persA.suma - persB.suma);
persoaneCarePrimesc.sort((persA, persB) => persB.suma - persA.suma);
console.log("dau: ", persoaneCareDau);
console.log("primesc: ", persoaneCarePrimesc);

for(const idxPersoanaCarePrimeste in persoaneCarePrimesc){
    for(const idxPersoanaCareDa in persoaneCareDau){
        let primitor = persoaneCarePrimesc[idxPersoanaCarePrimeste];
        let datator = persoaneCareDau[idxPersoanaCareDa];
        if(primitor.suma === 0 || datator.suma === 0){
            continue;
        }
        if(primitor.suma + datator.suma < 0){
            console.log(`${datator.nume} ii da ${Math.abs(primitor.suma)} LEI lui ${primitor.nume} `);
            datator.suma += primitor.suma;
            primitor.suma = 0;
        }else{
            primitor.suma += datator.suma;
            console.log(`${datator.nume} ii da ${Math.abs(datator.suma)} LEI lui ${primitor.nume} `);
            datator.suma = 0;
        }
    }
}

// console.log("PERSOANE CARE DAU", persoaneCareDau);
// console.log("PERSOANE CARE PRIMESC", persoaneCarePrimesc);