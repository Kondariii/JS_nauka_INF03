/*
Podstawowa manipulacja DOM 
*/

// tworzymy funkcje którą później wywołamy w atrybucie onclick="" przycisku (patrz manipulacja_DOM_index.html)
function oblicz() {
// w taki sposób ściągamy element z dokumentu podpisując je pod zmienne
    var ch1 = document.getElementById('ch1');
    var ch2 = document.getElementById('ch2');
    var ch3 = document.getElementById('ch3');
    var box = document.getElementById('box');
    var wynik = 0;
// dodajemy sobie instrucje warunkowe do naszych checkboxów 
    if(ch1.checked){ // obiekt.atrybut_html albo podobiekt albo style itd. 
        wynik += 5; // jeśli ch1 (checkbox 1) jest zaznaczony (atrybut checked) dodajemy 5 
    }
    if(ch2.checked){
        wynik += 10;
    }
    if(ch3.checked){
        wynik -= 20;
    }
    // W taki sposób tworzymy "element"(selektor) np h1 itd.
    var selektor = document.createElement('h1');
    // dodajemy do obiektu "selektor" atrybut innerHTML z wartością "wynik"
    selektor.innerHTML = wynik;
    // box to jest div w naszym pliku manipulacja_DOM_index.html i w tym divie dodajemy dziecko (czyli ten selektor który stworzyliśmy patrz na linijkę 24 i 26)
    box.appendChild(selektor);
}