// Tworzymy funkcje z parametrem do zmiany zakładek 
function aktywujZakladke(zakladkaId) {
    document.getElementById('main1').style.display = 'none'; // Ustawiamy wszystkie zakładki na display = none aby wszystkie były nie widoczne 
    document.getElementById('main2').style.display = 'none';
    document.getElementById('main3').style.display = 'none';

    document.getElementById(zakladkaId).style.display = 'block'; // I tutaj ustawiamy aby zakładka o parametrze zakladkaId była widoczna
}
// tworzymy funkcje do przycisków aby wywoływały funkcje aktywujzakladke(parametr) gdzie parametr to będzie np main1 w funkcji klient()
function klient() {
    aktywujZakladke('main1'); // wywołanie funkcji aktywuj zakladke z parametrem main1
}

function adres() {
    aktywujZakladke('main2');
}

function kontakt() {
    aktywujZakladke('main3');
}

let postepWartosc = 4; // tworzymy zmienną przedstawiającą nasz postęp nasz postęp (dałem 4 ponieważ w css mamy już ustawioną szerokość bloku na 4%)
// tworzymy funkcję aktualizującą postęp naszej zmiennej postepWartosc
function aktualizujPostep() {
    if (postepWartosc < 100) { // jeśli postepWartosc jest mniejsze od 100 dodaj 12 do aktualnej wartości
        postepWartosc += 12;
        if (postepWartosc > 100) { // jeśli postepWartosc ma wyjść ponad 100 (%) to ustawiamy 100 aby mu to uniemożliwić
            postepWartosc = 100;
        }
        // tutaj querySelectorem wyciągamy selektor div który jest dzieckiem klasy postep czyli <div class="postep">tego diva szukamy -><div></div><- </div>
        document.querySelector('#postep > div').style.width = postepWartosc + '%'; // zmieniamy jego atrybut width na naszą zmienną postepWartosc + '%' aby była to wartość procentowa 
    }
}
// Wyciągamy wszystkie selektory z naszego indexu np. input[type="text"] i potem kożystamy z pętli forEach aby przeinterować przez każdy input (funkcja z parametrem input)
document.querySelectorAll('input[type="text"], input[type="date"], input[type="number"], input[type="tel"]').forEach(function (input) {
    input.addEventListener('blur', aktualizujPostep); // do obiektu input (parametr) dodajemy nasłuchiwanie wydarzeń "blur" czyli jak np. wyjdziemy z bloku input (focus to jak wejdziemy) a potem wykonujemy funkcje aktualizujPostep
});

// tworzymy funkcje zatwierdz() którą potem wywołamy po wciśnięciu przycisku zatwierdz
function zatwierdz() {
    let imie = document.getElementById('imie').value; // wyciągamy sobie z dokumentu atrybut value i przypisujemy go do zmiennych (tak w praktyce value to to co wpiszemy w inputa)
    let nazwisko = document.getElementById('nazwisko').value;
    let data = document.getElementById('data').value;
    let ulica = document.getElementById('ulica').value;
    let numer = document.getElementById('numer').value;
    let miasto = document.getElementById('miasto').value;
    let tel = document.getElementById('tel').value;
    let rodo = document.getElementById('rodo').checked ? 'On' : 'Of'; // przyjmujemy do zmiennej atrybut checked i jeśli jest zaznaczone to zapisze sie 'On' jeśli nie to zapisze się 'Of' 
    console.log(imie + ", " + nazwisko + ", " + data + ", " + ulica + ", " + numer + ", " + miasto + ", " + tel + ", " + rodo); // wypisujemy w konsoli wszystkie zmienne odzielone przecinkiem
}