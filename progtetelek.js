const calc= require("./module.js");

//1,első feladat
  /*      egyszerű és összeetett adattípusok.
        egyszerű pl, string , number , boolean
        összetett pl objektumok, tömbök*/
//2 második feladat
       /* const: nem változhat az értéke , amikor definiáljuk és  értéket adunk neki az marad onnantól kezdve
        const nevem="MÁRTON";
        let: az értéke tetszőlegesen változtatható
        let valtozo=6;*/
//3 harmadik feladat
       /* érték szerint mikor az épp aktuális értékét adjuk átt valaminak
        referencia szerint mikor hivatkozunk valaminek az értéke ,az tetszőleges helyen lehet
        pl let tömb=[1,2,3];
        let tomb2=tomb;
        for (let i =0;i<20;i++){
        console.log(i);
        }*/
//4 negyedik feladat
containsElement=(szamokatTaroloTomb,szam)=>{
        if(szamokatTaroloTomb.includes(szam)===true)
        {return true ;}
        else {return false;}
//persze ezt egy for ciklusos bejárással is meglehet for(let i=0;i<szamokatTaroloTomb.length;i++
//if(szamokatTaroloTomb[i] === szam ) return true; else return false;
};

//5 ötödik feladat
        maxAge= (objectTomb)=> {
        let max = objectTomb[0];
for (let i=1;i<objectTomb.length;i++){
        if(objectTomb[i].age > max.age){
        max =objectTomb[i];
        }
}
return max.name;
};

//6 hatodik
//metszet tétele: ami mindkettőben benne van, két ciklus segitségével bejárjuk a két tömböt és ha egyezés van azt egy harmadik/segéd tömbben tároljuk majd visszaadjuk
        metszet=(tomb1,tomb2)=>{
        let tomb3;
        let k=0;
        for(let i=0;i<tomb1.length;
                for(let j=0;j<tomb2.length;j++){
        if (tomb1[i]===tomb2[j];
        {tomb3[k]=tomb[i];}     }
return tomb3;
};

//7hetedik feladat

console.log(calc.sum(5,6));

//8 nyolcadik feladat
