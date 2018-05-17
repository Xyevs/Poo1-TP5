var mille = 1000;
var heureMinute = 60;
var dixMinute = 10;
var zero = 0;

window.onload = function () {
    createItems();
    compteReboure();
}

function createItems() {
    for (var i = zero; i < NB_ITEM; i++) {
        tabObject[i] = new Items(PARENT_DIR, DATA_NAMES[i], DATA_PRICES[i], IMG_DIR + DATA_imgSrc[i], i);
        tabBoxFrame[i] = new BoxFrame(PARENT_DIR, DATA_NAMES[i], DATA_PRICES[i], IMG_DIR + DATA_imgSrc[i], i);
    }
}

function btnPay() {
    alert("Merci d'avoir de me rendre riche!!!");
    location.reload();
}

function compteReboure() {
    var time = heureMinute * dixMinute;

    var runner = setInterval(function () {
        time = time - 1;
        var compteReboure = document.getElementById("compteRebour");
        var minutes = parseInt(time / heureMinute);
        var seconds = time - (minutes * heureMinute);

        if (minutes < dixMinute) {
            minutes = +"0" + "" + minutes;
        }

        if (seconds < dixMinute) {
            seconds = +"0" + "" + seconds;
        }

        compteReboure.innerHTML = minutes + ":" + seconds;

        if (minutes <= zero && seconds <= zero) {
            clearInterval(runner);
            alert("Temps écoulé. Il faut recommancer ses achats!");
            location.reload();
        }

    }, mille);
}
