// Tworzymy funkcje z parametrem który będzie przyjmować id naszego aktualnego bloku cytatu np osoba1 
function zmianacytatu(parametr){
    var cytat1 = document.getElementById('osoba1'); // Pobieramy do zmiennej cytat1 element o id osoba1
    var cytat2 = document.getElementById('osoba2');
    var cytat3 = document.getElementById('osoba3');
    // tworzymy instrukcję warunkową "if" ("jeśli parametr jest równy osoba1")
    if (parametr === 'osoba1'){
        cytat1.style.display = 'none'; // zmieniamy atrybut display obiektu cytat1 na none aby go schować 
        cytat2.style.display = 'block'; // zmieniamy atrybut display obiektu cytat2 na block aby go wyświetlić 
    } else if(parametr === 'osoba2'){
        cytat2.style.display = 'none'; // chowamy
        cytat3.style.display = 'block'; // wyświetlamy
    } else if(parametr === 'osoba3'){
        cytat3.style.display = 'none'; // chowamy
        cytat1.style.display = 'block'; // wyświetlamy 
    }
}
/*
Tutaj mamy bardzo ważną i przydatną funkcję na egzaminach addEventListener()
pozwala nam dodać nasłuchiwanie wydarzeń np. kliknięć w wybrany blok itd.
*/

// Wyciągamy z dokumentu element o id osoba1 i dodajemy nasłuchiwanie (kliknięć) na element osoba1 oraz co sie ma zdarzyć gdy użytkownik kliknie w ten element  
document.getElementById('osoba1').addEventListener('click', function(){ //(funkcja anonimowa zwierająca naszą funkcję z podmianą cytatów)
    zmianacytatu('osoba1'); // funkcja('parametr');
});
document.getElementById('osoba2').addEventListener('click', function(){
    zmianacytatu('osoba2'); // funkcja('parametr');
});
document.getElementById('osoba3').addEventListener('click', function(){
    zmianacytatu('osoba3'); // funkcja('parametr');
});