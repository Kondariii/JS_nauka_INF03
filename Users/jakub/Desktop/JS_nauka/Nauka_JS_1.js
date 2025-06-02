/*
Podłączenie JS do html:
Sposób 1(w pliku html):
    <script>
    Skrypt JS 
    </script>

Sposób 2(osobny plik na JS):
    <script src="nazwa_pliku.js"></script>
*/


// definicja zmiennych
var zmienna_typu_char = "essa 1 2 3 ezz";                   
var zmienna_typu_float = 1.23;
var zmienna_typu_int = 123;
var zmienna_typu_bool = true; //albo false 
const tablica = ['to', 'jest', 'tablica'];

// deklaracja zmiennych 
var zmienna2;

// wyświetlanie w konsoli
console.log(zmienna_typu_char);  
console.log(zmienna_typu_float+" cos");

// wyświetlanie alertów typu Pop-up 
alert(zmienna_typu_char);

// operatory arytmetyczne
/*
+ - dodawanie
- - odejmowanie
* - mnożenie
/ - dzielenie
% - modulo (reszta z dzielenia)

++ inkrementacja (zwiększenie o 1)
-- dekrementacja (zmniejszenie o 1)
zmienna++ - post inkrementacja
zmienna-- - post dekrementacja
++zmienna - pre inkrementacja
--zmienna - pre dekrementacja 
    przykład:
var cos = 1;
alert(cos++)
    Pojawi nam sie komunikat "1" ponieważ najpierw wyświetlamy a dopiero potem dodajemy 
    jeśli zrobimy ++cos to najpierw dodamy potem wyświetlimy dlatego pojawi sie komunikat o treści "2"


    inny sposób korzystania z operatorów arytmetycznych
+=
-=
*=
/=
%=
    jak to działa:
zmienna += 1;
    inny zapis tego samego
zmienna = zmienna + 1 
    wszystkie operatory arytmetyczne działają na tej samej zasadzie 
*/







/*
Operatory relacyjne - operatory porównania

= - Przypisanie wartości np a = 5
== - Porównanie 2 wartości (BARDZO WAŻNE == sprawdza tylko wartość typ danych już nie) np. (a = 5) (b = "5") a == b TRUE 
=== - Porównanie 2 wartości wraz z typem danych np. (a = 5) (b = "5") a === b FALSE albo (a = 10) (b = 10) a === b TRUE 
!= - Czy 2 wartości są różne od siebie np (a = 1) (b = 2) a != b TRUE 
!== - Czy 2 wartości są różne od siebie wraz z typem danych (identyczne) np. (a = 1) (b = "1") a !== b true 
> - większe od
< - mniejsze od
>= - większe bądź równe
<= - mniejsze bądź równe
*/
