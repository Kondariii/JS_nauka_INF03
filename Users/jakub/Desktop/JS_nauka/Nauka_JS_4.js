/* 
Pętle - to sposób w jaki możemy wykonywać dowolną ilość razy pewien kod, dopóki warunek będzie spełniony
Pętle pozwalają nam iterować. Iterator to pewnego rodzaju licznik obiegu naszej pętli
najczęściej iteratory określa sie zmienną "i"
PS. przypominam że aby szybko skomentować albo odkomentować to zaznacz i ctrl+/
i niektóre pętle korzystają z zmiennych z innych części kodu jeśli coś nie działa to poszukaj zmiennych potrzebnych w zakomentowanych wcześniej kawałkach kodu
*/

// przykład użycia pętli while()
var a = 1;
while(a <= 5){
    console.log("To twoja "+a+" iteracja");
    a++;
}


// funkcja prompt() pozwala nam pobrąć dane od użytkownika w formie Pop-up
// var haslo = prompt("Podaj hasło: (hasło to 'haslo'): ");
// while(haslo != "haslo"){
//     alert("Błędne hasło");
//     haslo = prompt("Podaj hasło: ");
// }
// alert("Podałeś prawidłowe hasło");



// przykład pętli do while()
// var zmienna = prompt("Ile razy ma powtóżyć się pętla 'do_while': ");
// var powtorzenia = 1;
// do{
//     console.log("Witaj po raz: " + powtorzenia);
//     powtorzenia++
// }while(powtorzenia <= zmienna);


// przykłąd pętli for()
// var i;
// for(i = 1; i <= 5; i++){
//     console.log("iteracja: "+i)
// }


// iteracje po tablicy przy użyciu pętli for
// var tab = ["jeden", "dwa", "trzy", "cztery"];
// for(var b = 0; b < tab.length; b++){
//     console.log(tab[b]);
// }


// wykorzystanie "in" 
// for(var c in tab){
//     console.log(tab[c]);
// }



/*
Break - przerywa całkowicie działanie pętli 
Continue - przerywa obecną iterację, obieg pętli
*/

// wykorzystanie continue
// var parzysta = "";
// for(var d = 1; d <= 20; d++){
//     if(d % 2 === 0)
//     {
//         parzysta += d + " ";
//     }
//     else
//     {
//         continue;
//     }
// }
// console.log(parzysta);


// wykorzystanie break
// var koszyk = ["jajka", "mleko", "płatki", "piwko"];
// for(var e in koszyk)
// {
// if(koszyk[e] != "płatki"){
//     console.log(koszyk[e]);
// }else{
//     break;
// }
// }