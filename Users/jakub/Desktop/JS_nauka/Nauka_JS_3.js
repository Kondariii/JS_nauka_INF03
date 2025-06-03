/*
Array - Tablice 

Metody:
lenght - długość 
concat - łączenie tablic (warto wspomnieć że działa to tylko na okres działąnia funkcji np. console.log i po wykonaniu wraca do orginalnej wartośći)
join - łączenie elemennów tablicy w określony sposób (Nie wpływa na orginalną wartość tablicy)
pop - usuwa ostati element w tablicy (oraz jeśli użyjemy jej w np. console.log() to wyświetli sie tylko usuwana wartość z tablicy)
push - dodaje na sam koniec tablicy element oraz zwraca nową długość tablicy
shift - usuwa 1 element tablicy oraz zwraca wartość która zostanie usunięta
unshift - dodaje na index 0 element oraz zwraca nową długość tablicy
sort - sortuje elementy alfametycznie (ASC)
slice - pobieranie elementów z tablicy slice(index od którego ma zaczynać, index na którym ma kończyć)
splice - usuwa wybrane elementy (na stałe) z tablicy splice(index od którego ma zaczynać, index na którym ma kończyć) wyświetla też elementy które usuwa np. w console.log()
*/
// definicja zmiennej typu array
var tablica = ["wartość_1", "wartość_2", "wartość_3"];
//              index 0       index 1       index 2
console.log(tablica);


// wyświetlamy element tablicy o indexsie 0
console.log(tablica[0]);


// dodajemy do tabicy kolejną wartość pod następny index (w tym przypadku 3)
tablica[tablica.length] = "wartość_4";
console.log(tablica)
// aby dodać coś to tablicy można też skorzystać z:
tablica.push("wartość_5");
console.log(tablica);


// aby wyświetlić długość tablicy korzystamy z length
console.log(tablica.length);


// Aby połączyć 2 tablice korzystamy z funkcji concat()
var tab1 = ["value1_from_tab1", "value2_from_tab1", "value3_from_tab1"];
var tab2 = ["value1_from_tab2", "value2_from_tab2", "value3_from_tab2"];
console.log(tab1.concat(tab2));
// mimo połączenia 2 tablic wartości dalej pozostają te same w zmiennych (przeczytaj metody)
console.log(tab1);
// lecz jeśli chcemy na stałe połączyć 2 tablice można dać to do zmiennej
var polaczone_tablice = tab1.concat(tab2);
console.log(polaczone_tablice);


// Przykład użycia join
console.log(tab1.join(" - "));


// przykład użycia pop
console.log(tab1.pop());
// teraz po wyświetleniu zostaną nam 2 z orginalnych 3 wartości
console.log(tab1);
tab1.pop();
// teraz usuneliśmy już 2 wartości z orginalnych 3


// przykład użycia push
console.log(tab1.push("value"));
tab1.push("value2");
console.log(tab1);
// dodaliśmy 2 wartości dzięki czemu mamy 3 wartości 


// przykład użycia shift
tab1.shift();
console.log(tab1);


// przykład użycia unshift
console.log(tab1.unshift("wartość"));
console.log(tab1); 


// przykład użycia sort
var tab_num = [5, 1, 4, 7, 2, 3];
var tab_char = ["b", "c", "a"];
tab_num.sort();
tab_char.sort();
console.log(tab_num, tab_char);


// przykład użycia slice
console.log(tab_num.slice(0, 3));
console.log(tab_num);


// przykład użycia splice
console.log(tab_num.splice(0, 3));
console.log(tab_num);
