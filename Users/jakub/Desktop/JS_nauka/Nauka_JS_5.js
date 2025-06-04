/* 
Funkcje - fragment napisanego przez nas kodu, który może zostać wielokrotnie wywołany

Funkcje anonimowe 
*/

// jak stworzyć funkcje
function wiadomosc()
{
    console.log("wiadomość");
}

// wywoływanie funkcji
wiadomosc();

/* 
funkcje można wywołać na przykład atrybutem onclick w buttonie (patrz index.html)
*/

// do funkcji można przyjmować parametry które potem określamy przy wywołaniu (są tylko widoczne w tej funkcji nie kolidują z np. zmiennymi o tej samej nazwie)
function dodawanie(a, b)
{
    return a + b; // albo console.log(a + b) wtedy nie będziemy musieli pisać console.log przy wywołaniu funkcji
}

function dzielenie(a, b){
    if(b === 0)
    {
        console.log("nie można dzielić przez 0");
        return;
    }
    return a / b;
}


console.log(dodawanie(1, 1));
// dodawanie(2, 2); 

// wynik działania funkcji można przypisać do zmiennej
var suma = dodawanie(2, 2);
// console.log(suma);

var iloraz = dzielenie(10, 5);
// console.log(iloraz);


// przykład funkcji anonimowej
var przywitanie = function(osoba) {
    if(osoba === "szef")
    {
        return function(imie)
        {
            console.log("Witaj szefie: "+imie);
        }
    }
    else 
    {
        return function(imie)
        {
        console.log("Witaj: "+imie);    
        }
    }
}
var osoba = przywitanie("szef");
osoba("jakieś imie");


// funkcja aby sort() działało lepiej do liczb ponieważ porównuje tylko 1 cyfrę
var tablica = [-5, 10, 5, -20];

function porownanieliczb(a, b)
{
    return a - b;
}
console.log(tablica.sort(porownanieliczb));
