var Kalkulator = {
    liczby: [],
    cyfry: "",
    wynik: "",

    event: function() {
      document.querySelector(".cofniecie").addEventListener("click", this.cofnij.bind(this));
      document.querySelector(".skasowanie").addEventListener("click", this.skasuj.bind(this));
      document.querySelector(".procent").addEventListener("click", this.procent.bind(this));
      document.querySelector(".dzielenie").addEventListener("click", function() { Kalkulator.dzialanie("dzielenie"); });
      document.querySelector(".mnozenie").addEventListener("click", function() { Kalkulator.dzialanie("mnozenie"); });
      document.querySelector(".odejmowanie").addEventListener("click", function() { Kalkulator.dzialanie("odejmowanie"); });
      document.querySelector(".dodawanie").addEventListener("click", function() { Kalkulator.dzialanie("dodawanie"); });
      document.querySelector(".przecinek").addEventListener("click", this.pobierz.bind(this));
      document.querySelector(".rownosc").addEventListener("click", function() { Kalkulator.dzialanie("podsumowanie"); });
      for (var i=0; i<=9; i++){
        document.querySelectorAll(".cyfra")[i].addEventListener("click", this.pobierz.bind(this));
      }
    },

    pobierz: function(e) {
      var val = e.target.value;
      if (this.liczby.length === 0 && this.cyfry.length === 0 ) this.skasuj();
      this.cyfry += val;
      this.wypisz(val);
    },

    zapisz: function(c) {
      this.liczby.push(parseFloat(c));
      this.cyfry = "";
    },

    dzialanie: function(e) {
      var cyfry = this.cyfry;
      if (cyfry !== "") {
        this.zapisz(cyfry);
      }

      if (this.liczby.length !== 0) {
        var znak = "";
        var liczby = this.liczby;
        var wynik = this.wynik;
        var dlugoscTab = liczby.length;
        var ostLiczba = liczby[dlugoscTab-1];

        switch (e) {
            case "dodawanie": znak = "+"; break;
            case "odejmowanie": znak = "-"; break;
            case "mnozenie": znak = "*"; break;
            case "dzielenie": znak = "/"; break;
            case "podsumowanie": znak = "="; break;
            default: alert("Wystąpił błąd");
        }

        (znak == "=") ? wynik += ostLiczba :
          (dlugoscTab > 1) ? wynik += ostLiczba + znak : wynik = liczby[0] + znak;

        this.wynik = wynik;
        (znak == "=") ? this.podsumuj() : this.wypisz(znak);
      }
    },

    procent: function() {
      var cyfry = this.cyfry;
      if (cyfry !== "") {
        this.zapisz(cyfry);
        this.wynik = this.liczby[0]/100;
        this.podsumuj();
      }
    },

    podsumuj: function() {
      var wynik = this.wynik;
      var wyn = eval(wynik);
      this.skasuj();
      this.liczby.push(wyn);
      this.wypisz("=" + wyn);
    },

    cofnij: function() {
      var cyfry = this.cyfry;
      var output = document.querySelector(".wynik");
      output.value = output.value.substring(0, output.value.length-1);
      cyfry = cyfry.substring(0, cyfry.length-1);
      this.cyfry = cyfry;
    },

    skasuj: function() {
      var liczby = this.liczby;
      liczby.splice(0, liczby.length);
      this.cyfry = "";
      document.querySelector(".wynik").value = "";
    },

    wypisz: function(output) {
      var val = document.querySelector(".wynik");
      if (val.value.substring(0,1) === "=") {
        val.value = "";
        this.liczby = [];
      }
      val.value += output;
    }

};

  Kalkulator.event();
