var calcuation = function() {
    "use strict";
    var btn = document.getElementById("btn"),
    h = document.getElementById("height"),
    w = document.getElementById("weight"),
    ans = document.getElementById("calculation"),
    me = document.getElementById("me"),
    output = "";

    btn.addEventListener("click", function(e) {
        e.preventDefault();
        output = (Math.round(w.value) / ((Math.round(h.value) / 100) * (Math.round(h.value) / 100))).toFixed(2);
        if (output > 0) {
            if (output > 16) {
               if (output > 18.7) {
                  if (output > 25) {
                    if (output > 30) {
                        if (output > 35) {
                            if (output > 40) {
                                ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас третья степень ожирения. Пожалуйста, обратитесь к доктору!";
                            }   else {
                                ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас вторая степень ожирения. Нужно срочно что-то предпринять!";
                            }
                        }   else {
                            ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас первая степень ожирения. Нужно что-то предпринять.";
                        }
                    }    else {
                        ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас есть немного избыточного веса.";
                    }
                }   else {
                    ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас отличный вес!";
                } 
            } else {
                ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас недостаточная масса тела, стоит поднабрать.";
            } 
        } else {
            ans.innerHTML = "Индекс массы вашего тела составляет " + output + ". У вас выраженный дефицит массы, нужно набирать!";
        }
    }  else {
        ans.innerHTML = "У вас отрицательная масса тела, обратитесь к физикам! Вы новое научное открытие! <br/><br/>Ну или ничего не ввели :(";
    }    me.innerHTML = "Лайкни авку за старания ;)";
});
}();

