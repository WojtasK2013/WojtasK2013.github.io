// Licznik kliknięć i zmiana koloru tła
var licznik = 0;
var przycisk = document.getElementById('przycisk');
var wyswietlLicznik = document.getElementById('licznik');

// Kolory do zmiany tła (możesz dodać swoje w hex, np. #ff6b6b)
var kolory = ['#f8fafc', '#fef3c7', '#d1fae5', '#e0e7ff', '#fce7f3'];

przycisk.addEventListener('click', function () {
  licznik = licznik + 1;
  wyswietlLicznik.textContent = licznik;

  // Co kliknięcie – nowy kolor tła (cyklicznie)
  var indeks = (licznik - 1) % kolory.length;
  document.body.style.backgroundColor = kolory[indeks];
});
