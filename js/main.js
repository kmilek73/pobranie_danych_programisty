$(document).ready(function () {
    //pobieramy nasz data (przycisk) i tworzymy funkcję obsługującą kliknięcie
    $('#get-data').click(function () {
        //metoda get - pobiera dane w JSON i innych
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
            .done(function (data) {


                $("body").append('<div id="dane-programisty">');
                let pImie = data.imie;
                $('div').append(" Imię : ", pImie).append("<br>");
                let pNazwisko = data.nazwisko;
                $('div').append(" Nazwisko : ", pNazwisko).append("<br>");
                let pZawod = data.zawod;
                $('div').append(" Zawód : ", pZawod).append("<br>");
                let pFirma = data.firma;
                $('div').append(" Firma : ", pFirma).append("<br>");


            }
            )


    })

})