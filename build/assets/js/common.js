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
            ans.innerHTML ="Ваш ИМТ составляет " + output + ". У вас выраженный дефицит массы, нужно набирать!";
        } else if (output > 16) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас недостаточная масса тела, стоит поднабрать.";
        } else if (output > 18.7) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас отличный вес!";
        } else if (output > 25) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас есть немного избыточного веса.";
        } else if (output > 30) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас первая степень ожирения. Нужно что-то предпринять.";
        } else if (output > 35) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас вторая степень ожирения. Нужно срочно что-то предпринять!";
        } else if (output > 40) {
            ans.innerHTML ="Ваш ИМТ составляет " + output;
            ans.innerHTML ="У вас третья степень ожирения. Пожалуйста, обратитесь к доктору!";
        } else {
            ans.innerHTML = "У вас отрицательная масса тела, обратитесь к физикам! Вы новое научное открытие!";
        }
  });
}();

