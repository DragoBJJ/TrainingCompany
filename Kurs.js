class Kurs {
  constructor(nazwaKursu, trener, termin, miasto) {
    this.nazwaKursu = nazwaKursu;
    this.trener = trener;
    this.termin = termin;
    this.miasto = miasto;
    this.uczestnicy = [];
  }
  dodajUczestnika(imie, nazwisko, email, telefon) {
    const nowyUczestnik = new Person(imie, nazwisko, email, telefon);
    this.uczestnicy.push(nowyUczestnik);
  }

  wyświetlUczestników() {
    if (!this.uczestnicy.length) {
      alert(`Brak uczestników na kursie`);
      return;
    }
    console.log("Wszyscy uczestnicy: ");
    for (let uczestnik of this.uczestnicy) {
      console.log(`Imię: ${uczestnik.imie}
        Nazwisko: ${uczestnik.nazwisko}
        Email: ${uczestnik.email}
        Telefon: ${uczestnik.telefon}`);
    }
  }
  usuńUczestnika(nazwisko) {
    for (let index in this.uczestnicy) {
      if (this.uczestnicy[index].nazwisko === nazwisko) {
        this.uczestnicy.splice(index, 1);
        alert("Uczestnik został usunięty");
        break;
      } else {
        alert("Nie ma takiego uczestnika na tym kursie");
        break;
      }
    }
  }
  zmodyfikujUczestnika(
    nazwisko,
    noweImię = 0,
    noweNazwisko = 0,
    NowyEmail = 0,
    NowyTelefon = 0
  ) {
    for (let uczestnik of this.uczestnicy) {
      if (uczestnik.nazwisko === nazwisko) {
        if (noweImię !== 0) uczestnik.imie = noweImię;
        if (noweNazwisko !== 0) uczestnik.nazwisko = noweNazwisko;
        if (NowyEmail !== 0) uczestnik.email = NowyEmail;
        if (NowyTelefon !== 0) uczestnik.telefon = NowyTelefon;
      }
    }
  }
}
