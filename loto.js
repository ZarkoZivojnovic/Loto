var lotoIzvlacenje = {
    nizBrojeva: [],
    redniBroj: 1,
    doKogBroja: 0,
    kolikoBrojeva: 0,
    menjanje: 0,


    odloziSledeceIzvlacenje: function () {
        this.izbaciJedanBroj();
    },

    loto: function (kolikoBrojeva, doKogBroja) {
        this.kolikoBrojeva=kolikoBrojeva;
        this.doKogBroja=doKogBroja;
        for (this.redniBroj = 0; this.redniBroj < this.kolikoBrojeva; this.redniBroj++) {
            setTimeout(this.odloziSledeceIzvlacenje.bind(this), 3000 * this.redniBroj);
        }
    },

    pokreniMenjanje: function () {
        var lotoBrojevi = Math.ceil(Math.random() * (this.doKogBroja - 1)) + 1;
        document.getElementById("izvlacenje").innerHTML = '<div id="ispis"><span>' + lotoBrojevi + '</span></div>';
        while (this.nizBrojeva.includes(lotoBrojevi)    ) {
            lotoBrojevi = Math.ceil(Math.random() * (this.doKogBroja - 1)) + 1;
        }
        this.nizBrojeva[this.redniBroj] = lotoBrojevi;
    },

    prikaziIzvuceniBroj : function () {
        clearInterval(this.menjanje);
        document.getElementById("sviBrojevi").innerHTML += "Broj: <span>" + this.nizBrojeva[this.redniBroj] + "</span><br>";
    },

    izbaciJedanBroj: function () {
        this.menjanje = setInterval(this.pokreniMenjanje.bind(this), 100);
        setTimeout(this.prikaziIzvuceniBroj.bind(this), 1500);
    }
};

lotoIzvlacenje.loto(6,36);