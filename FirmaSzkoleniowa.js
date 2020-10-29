class FirmaSzkoleniowa {
  constructor() {
    this.wszystkieKursy = [];
    this.menu();
  }
  utwórzKurs(nazwaKursu, trener, termin, miasto) {
    const newKurs = new Kurs(nazwaKursu, trener, termin, miasto);
    this.wszystkieKursy.push(newKurs);
  }
  menu() {
    while (true) {
      const menu = prompt(
        "DK-Dodaj Kurs, DU-Dodaj uczestnika do kursu,UU-Usuń uczestnika,UK-Usuń kurs,ZU-Zmodyfikuj uczestnika,ZK-Zmodyfikuj kurs,W-Wyświetl kursy wraz z uczestnikami"
      ).toUpperCase();

      if (menu === "DK") {
        const nazwaKursu = prompt("podaj nazwę kursu").toUpperCase();
        if (nazwaKursu === "") {
          console.log("Błędne dane");
          return;
        }
        const trener = prompt("podaj nazwę trenera");
        if (trener === "") {
          console.log("Błędne dane");
          return;
        }
        const termin = prompt("podaj termin kursu");
        if (termin === "") {
          console.log("Błędne dane");
          return;
        }
        const miasto = prompt("podaj nazwę miasta");
        if (miasto === "") {
          console.log("Błędne dane");
          return;
        }
        this.utwórzKurs(nazwaKursu, trener, termin, miasto);
      } else if (menu === "DU") {
        if (!this.wszystkieKursy.length) {
          alert("Nie ma żadnych kursów");
        } else {
          const nazwaKursu = prompt(
            "Do jakiego kursu chcesz dodać uczestnika ?"
          ).toUpperCase();
          if (nazwaKursu !== "") {
            for (let kurs of this.wszystkieKursy) {
              if (kurs.nazwaKursu === nazwaKursu) {
                if (kurs.uczestnicy.length >= 15) {
                  alert("Na kursie jest już maksymalna liczba uczestników");
                  break;
                }
                const imie = prompt("Podaj imię uczestnika");
                const nazwisko = prompt("Podaj nazwisko uczestnika");
                const telefon = prompt("Podaj telefon uczestnika");
                const email = prompt("Podaj email uczestnika");
                kurs.dodajUczestnika(imie, nazwisko, email, telefon);
              } else {
                alert("Nie ma takiego kursu!");
                break;
              }
            }
          }
        }
      } else if (menu === "UU") {
        if (!this.wszystkieKursy.length) {
          alert("Nie ma żadnych kursów");
        } else {
          const nazwaKursu = prompt(
            "podaj nazwę kursu z którego chcesz usunąć uczestnika"
          ).toUpperCase();
          if (nazwaKursu !== "") {
            for (let kurs of this.wszystkieKursy) {
              if (kurs.nazwaKursu === nazwaKursu) {
                const nazwisko = prompt(
                  "Podaj nazwisko uczestnika którego chcesz usunąć"
                );
                kurs.usuńUczestnika(nazwisko);
                break;
              } else {
                alert("Nie ma takiego Kursu");
                break;
              }
            }
          }
        }
      } else if (menu === "UK") {
        if (!this.wszystkieKursy.length) {
          alert("Nie ma żadnych kursów");
        } else {
          const nazwaKursu = prompt(
            "podaj nazwę kursu który chcesz usunać"
          ).toUpperCase();
          if (nazwaKursu !== "") {
            for (let index in this.wszystkieKursy) {
              if (this.wszystkieKursy[index].nazwaKursu === nazwaKursu) {
                if (this.wszystkieKursy[index].uczestnicy.length > 0) {
                  alert(
                    "Nie można usunąć tego kursu gdyż są zapisani na niego uczestnicy"
                  );
                  break;
                } else {
                  this.wszystkieKursy.splice(index, 1);
                }
              } else {
                alert("Nie ma takiego Kursu");
                break;
              }
            }
          }
        }
      } else if (menu === "ZU") {
        if (!this.wszystkieKursy.length) {
          alert("Nie ma żadnych kursów");
        } else {
          const nazwaKuru = prompt(
            "Podaj nazwę kursu w którym chcesz zmodyfikować uczestnika"
          ).toUpperCase();
          if (nazwaKuru !== "") {
            for (let kurs of this.wszystkieKursy) {
              if (kurs.nazwaKursu === nazwaKuru) {
                const nazwisko = prompt(
                  "Podaj nazwisko uczestnika którego chcesz zmodyfikować"
                );
                while (true) {
                  const wybór = prompt(
                    "Co chcesz zmodyfikować: I-Imię,N-Nazwisko,E-Email,T-Telefon, W-Wystarczy tej modyfikacji"
                  ).toUpperCase();

                  if (wybór === "I") {
                    const noweImię = prompt("Podaj nowe Imię");
                    if (noweImię !== "") {
                      kurs.zmodyfikujUczestnika(nazwisko, noweImię, 0, 0, 0);
                    }
                  }
                  if (wybór === "N") {
                    const noweNazwisko = prompt("Podaj nowe Nazwisko");
                    if (noweNazwisko !== "") {
                      kurs.zmodyfikujUczestnika(
                        nazwisko,
                        0,
                        noweNazwisko,
                        0,
                        0
                      );
                      break;
                    }
                  }
                  if (wybór === "E") {
                    const nowyEmail = prompt("Podaj nowy Email");
                    if (nowyEmail !== "") {
                      kurs.zmodyfikujUczestnika(nazwisko, 0, 0, nowyEmail, 0);
                    }
                  }
                  if (wybór === "T") {
                    const nowyTelefon = prompt("Podaj nowy Telefon");
                    if (nowyTelefon !== "") {
                      kurs.zmodyfikujUczestnika(nazwisko, 0, 0, 0, nowyTelefon);
                    }
                  }
                  if (wybór === "W") {
                    break;
                  }
                }
              } else {
                alert("Nie ma takiego Kursu");
                break;
              }
            }
          }
        }
      } else if (menu === "ZK") {
        if (!this.wszystkieKursy.length) {
          alert("Nie ma żadnych kursów");
        } else {
          const nazwaKursu = prompt(
            "Podaj nazwę kursu który chcesz zmodyfikować"
          );
          if (nazwaKursu !== "") {
            for (let kurs of this.wszystkieKursy) {
              if (kurs.nazwaKursu === nazwaKursu) {
                while (true) {
                  const wybór = prompt(
                    "Co chcesz zmodyfikować: N-NazwęKursu,T-Trenera,TE-Termin,M-Miasto, W-Wystarczy tej modyfikacji"
                  ).toUpperCase();

                  if (wybór === "N") {
                    const nowaNazwa = prompt("Podaj nową nazwę");
                    if (nowaNazwa !== "") {
                      kurs.nazwaKursu = nowaNazwa;
                      break;
                    }
                  }
                  if (wybór === "T") {
                    const nowyTrener = prompt("Podaj nowego trenera");
                    if (nowyTrener !== "") {
                      kurs.trener = nowyTrener;
                    }
                  }
                  if (wybór === "TE") {
                    const nowyTermin = prompt("Podaj nowy termin");
                    if (nowyTermin !== "") {
                      kurs.termin = nowyTermin;
                    }
                  }
                  if (wybór === "M") {
                    const noweMiasto = prompt("Podaj nowe miasto");
                    if (noweMiasto !== "") {
                      kurs.miasto = noweMiasto;
                    }
                  }
                  if (wybór === "W") {
                    break;
                  }
                }
              } else {
                alert("Nie ma takiego kursu");
              }
            }
          }
        }
      } else if (menu === "W") {
        if (this.wszystkieKursy.length === 0) {
          alert("Nie ma żadnych kursów");
        } else {
          for (let el of this.wszystkieKursy) {
            console.log(`Nazwa kursu: ${el.nazwaKursu}
                        Trener: ${el.trener}
                        Termin: ${el.termin}
                        Miasto: ${el.miasto}`);
            el.wyświetlUczestników();
          }
        }
      }
    }
  }
}
