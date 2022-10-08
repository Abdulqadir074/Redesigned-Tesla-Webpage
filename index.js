var header = document.getElementById("header");
        var ms = document.getElementById("models");
        var m3 = document.getElementById("model3");
        var mx = document.getElementById("modelx");
        var my = document.getElementById("modely");
        var model = document.getElementById("model");
        var time = document.getElementById("time");
        var speed = document.getElementById("speed");
        var range = document.getElementById("range");

        ms.onclick = function () {
            header.style.backgroundImage = "url(images/image-1.png)";
            model.innerHTML = "Model S";
            time.innerHTML = "1.9 s";
            speed.innerHTML = "200 mph";
            range.innerHTML = "396 mi";
        }
        m3.onclick = function () {
            header.style.backgroundImage = "url(images/image-2.png)";
            model.innerHTML = "Model 3";
            time.innerHTML = "2.2 s";
            speed.innerHTML = "220 mph";
            range.innerHTML = "387 mi";
        }
        mx.onclick = function () {
            header.style.backgroundImage = "url(images/image-3.png)";
            model.innerHTML = "Model X";
            time.innerHTML = "1.6 s";
            speed.innerHTML = "250 mph";
            range.innerHTML = "405 mi";
        }
        my.onclick = function () {
            header.style.backgroundImage = "url(images/image-4.png)";
            model.innerHTML = "Model Y";
            time.innerHTML = "1.7 s";
            speed.innerHTML = "280 mph";
            range.innerHTML = "460 mi";
        }