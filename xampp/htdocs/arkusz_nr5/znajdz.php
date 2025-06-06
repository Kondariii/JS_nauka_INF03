<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kwiaty</title>
    <link rel="stylesheet" href="styl3.css">
</head>
<body>
    <header>
        <h1>Grupa Polskich Kwiaciarni</h1>
    </header>
    <section id="lewy">
        <h2>Menu</h2>
        <ol>
            <li><a href="index.html">Strona główna</a></li>
	        <li><a href="https://www.kwiaty.pl/" target="_blank">Rozpoznaj kwiaty</a></li>
            <li><a href="znajdz.php">Znajdź kwiaciarnię</a></li>
               <ul>
                    <li>w Warszawie</li>
                    <li>w Malborku</li>
                    <li>w Poznaniu</li>
               </ul>
	    </ol>
    </section>
    <section id="prawy">
        <h2>Znajdź kwiaciarnię</h2>
        <form action="znajdz.php" method="POST">
            <label>Podaj nazwę miasta:     
                <input type="text" name="inp">
            </label> 
            <input type="submit" value="SPRAWDŹ" name="btn">
        </form>
        <?php 
        $poloczenie = mysqli_connect('localhost', 'root', '', 'kwiaciarnia');
        if(isset($_POST['btn'])){
        $miasto = $_POST['inp'];
        $zapytanie = "SELECT nazwa, ulica from kwiaciarnie WHERE miasto = '$miasto';";
        $wynik = mysqli_query($poloczenie, $zapytanie);
        while($cos = mysqli_fetch_assoc($wynik)){
        $nazwa = $cos['nazwa'];
        $ulica = $cos['ulica'];
        print "<h3>";
        print $nazwa.",".$ulica;
        print "</h3>";
        }
        }
        mysqli_close($poloczenie);
        ?>
    </section>
    <footer>
        <p>Stronę opracował: MEEE</p>
    </footer>
</body>
</html>