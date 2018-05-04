var calcuation = function() {
    "use strict";
    var btn = document.getElementById("btn"),
        h = document.getElementById("height"),
        w = document.getElementById("weight"),
        ans = document.getElementById("calculation"),
        output = "";

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        output = ((Math.round(w.value) / ((Math.round(h.value) / 100) * (Math.round(h.value) / 100)))).toFixed(2);
        if (output > 0) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
        } else {
            ans.innerHTML = "Вы ввели что-то не то";
        }
    });
}();

