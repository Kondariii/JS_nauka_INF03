// Instrukcje warunkowe - Jeśli jakiś warunek sie spełni to wykonujemy jakiś kawałek kodu 
var cena = 11;
if(cena == 10){
    alert("Cena to 10zł");
}else if(cena >= 10){
    alert("Cena to "+cena+"zł");
}

// warunek (wartość logiczna) pod postacią zmiennej 
var zmienna_warunek1 = (cena == 10);
var zmienna_warunek2 = (cena >= 10);
/*
if(zmienna_warunek){
    alert("Cena to 10zł");
}else if(zmienna_warunek2){
    alert("Cena to "+cena+"zł");
}
Ten kod zadziała dokładnie tak samo jak wcześniej przedstawiona instrukcja warunkowa

*/


/* 
    Operatory logiczne
&& - oraz/and (2 warunki muszą być spełnione)
|| - albo/or (1 warunek musi być spełniony)
*/

// przykład wykorzystania && (and)
var cena_produktu = 100;
if(cena_produktu >= 50 && cena_produktu <= 150){
    console.log("cena mieści sie w zakresie od 50 do 150");
}else{
    console.log("cena nie mieści sie w zakresie od 50 do 150");
}

// przykład wykorzystania || (or)
var towar = 3;
if(towar === 1 || towar === 2){
    console.log("towar kosztuje 10zł");
}else if(towar === 3 || towar === 4){
    console.log("towar kosztuje 20zł")
}



/*
    Switch-case czyli podobna funkcja warunkowa do if tylko o innej konstrukcji

    Switch(zmienna){ 
    case (wartość zmiennej np. 1 albo wtorek):
        (co ma sie stać jeśli case jest spełniony);
        break; (aby przerwać całego switch w przypadku gdy warunek zostanie spełniony)
    deafult:
        (co ma sie stać jeśli żaden case nie zostanie spełniony);
    }
*/
var dzien_tygodnia = 1; 

switch(dzien_tygodnia){
    case 1:
        console.log("dziś jest poniedziałek");
        break;
    case 2:
        console.log("dziś jest wtorek");
        break;
    case 3:
        console.log("dziś jest środa");
        break;
    case 4:
        console.log("dziś jest czwartek");
        break;
    case 5:
        console.log("dziś jest piątek");
        break;
    default:
        console.log("MAMY WEEEEKEND");
}

var dzien_tygodnia_v2 = 9;
switch(dzien_tygodnia_v2){
    case 1:
        console.log("znowu ten obsrany poniedziałek");
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("jest dzień roboczy");
        break;
    case 6:
        console.log("PORA NA BALETY MAMY SOBOTE");
        break;
    case 7:
        console.log("No i jutro znowu poniedziałek");
        break;
    default:
        console.log("nieźle naćpany jesteś ziomuś jak ty masz "+dzien_tygodnia_v2+" dni w tygodniu");
}