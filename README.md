# Strona Wojtka – szablon na GitHub Pages

Prosty szablon strony, którą możesz edytować lokalnie i publikować jednym poleceniem `git push`. Po ok. 30 sekundach strona pojawia się w internecie.

---

## 1. Jak zmienić tekst strony

1. Otwórz plik **`index.html`** w edytorze (np. Cursor, Notepad++, VS Code).
2. Znajdź sekcję **Nagłówek**: zmień `Strona Wojtka` na swój tytuł.
3. Znajdź sekcję **O mnie**: zmień paragraf z opisem na swój tekst.
4. Zapisz plik.

---

## 2. Jak dodać obrazek

1. Wklej swoje zdjęcie lub grafikę do folderu **`img/`**.
2. Nazwij plik np. **`logo.png`** (albo `zdjecie.jpg` – wtedy musisz zmienić ścieżkę w HTML).
3. W pliku **`index.html`** znajdź linię:
   ```html
   <img src="img/logo.png" alt="Moje zdjęcie lub logo">
   ```
   Jeśli plik ma inną nazwę, zmień `logo.png` na tę nazwę (np. `zdjecie.jpg`).
4. Zapisz plik.

---

## 3. Jak zmienić kolor strony

1. Otwórz plik **`style.css`**.
2. Na górze pliku są **zmienne** w bloku `:root`:
   - **`--kolor-glowny`** – kolor tytułu i nagłówków (np. `#2563eb` to niebieski).
   - **`--kolor-tlo`** – kolor tła strony (np. `#f8fafc` to jasnoszary).
   - **`--kolor-tekst`** – kolor tekstu.
   - **`--kolor-przycisk`** – kolor przycisku.

   Możesz wpisać dowolny kolor w formacie **hex**, np.:
   - `#ff6b6b` – czerwony
   - `#51cf66` – zielony
   - `#339af0` – niebieski
   - `#cc5de8` – fioletowy

3. Zapisz plik.

Kolory przycisku „Kliknij mnie!” (które pojawiają się po kliknięciu) możesz zmienić w pliku **`script.js`** – w tablicy `kolory` wpisz swoje hex-y, np. `'#ff6b6b'`.

---

## 4. Jak opublikować stronę

Strona musi być w repozytorium na GitHubie. Repozytorium powinno nazywać się:

```
USERNAME.github.io
```

(np. jeśli Twój login to `wojtek`, to `wojtek.github.io`). Wtedy strona będzie pod adresem:

```
https://USERNAME.github.io
```

### Konfiguracja GitHub Pages (jednorazowo)

1. Wejdź na GitHub w swoje repozytorium.
2. **Settings** → **Pages** (w menu po lewej).
3. **Source** → **Deploy from a branch**.
4. **Branch** → `main`, **Folder** → `/ (root)`.
5. Zapisz (**Save**).

### Publikacja zmian

Za każdym razem, gdy coś zmienisz i chcesz to wrzucić do internetu:

```bash
git add .
git commit -m "zmiana"
git push
```

Po około 30 sekundach Twoja strona zaktualizuje się pod adresem `https://USERNAME.github.io`.

---

## Struktura projektu

```
repo/
  index.html    – treść strony (nagłówek, o mnie, obrazek, przycisk, licznik)
  style.css     – wygląd (kolory, czcionki, układ)
  script.js     – działanie przycisku (licznik i zmiana koloru tła)
  img/          – folder na zdjęcia i grafiki (np. logo.png)
  README.md     – ta instrukcja
```

---

## Czego się tu nauczysz

- **HTML** – budowa strony (nagłówki, paragrafy, obrazek, przycisk).
- **CSS** – kolory, czcionki, zmienne, prosty układ.
- **JavaScript** – reakcja na kliknięcie, licznik, zmiana koloru.
- **Git** – `add`, `commit`, `push`.
- **Publikacja** – jak strona trafia do internetu przez GitHub Pages.
