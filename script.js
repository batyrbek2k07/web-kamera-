// let animal = {
//     name: "Baatyrbek",
//     age: 10,
//     childs: ["child 1", "child 2"]
//    };
    
//    let cat = clone(animal);
//    cat.name = "Batyrbek";
//    cat.age = 5;
//    cat.childs.push("child 3");
    
//    console.log(cat.name, cat.age); // cat 5
//    console.log(cat.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
//    console.log(animal.name, animal.age); // cat 5
//    console.log(animal.childs); // [ 'child 1', 'child 2', 'child 3' ]
    
//    function clone(obj) {
//     return obj;
//    }


// if ("function" !== typeof Array.prototype.reduceRight) {
//   Array.prototype.reduceRight = function (callback /*, initialValue*/) {
//     "use strict";
//     if (null === this || "undefined" === typeof this) {
//       throw new TypeError("Array.prototype.reduce called on null or undefined");
//     }
//     if ("function" !== typeof callback) {
//       throw new TypeError(callback + " is not a function");
//     }
//     var t = Object(this),
//       len = t.length >>> 0,
//       k = len - 1,
//       value;
//     if (arguments.length >= 2) {
//       value = arguments[1];
//     } else {
//       while (k >= 0 && !k in t) {
//         k--;
//       }
//       if (k < 0) {
//         throw new TypeError("Reduce of empty array with no initial value");
//       }
//       value = t[k--];
//     }
//     for (; k >= 0; k--) {
//       if (k in t) {
//         value = callback(value, t[k], k, t);
//       }
//     }
//     return value;
//   };
// }





// 1. Вам дана переменная a. Если переменная a равна 10, то выведите 'Верно',
// иначе выведите 'Неверно'.


// let a = 10;
// if (a === 10) {
//   console.log('true');
// } else {
//   console.log('fals');
// }


// 3. Вам дана переменная a=-2. Составьте условие, по которому в
// консоль будет выводиться 'positive' - если число больше 0,
// 'равно' если число равно 0, "negative" если число меньше 0.
// let a = -2;
// if (a > 0) {
//   console.log('positive');
// } else if (a === 0) {
//   console.log('ten');
// } else {
//   console.log('negative');
// }




// 4. Вам дана переменная number=45. Составьте условие,
// по которому будет выводиться в консоль "Четное число", "Нечетное число".
     
// let number = 45;
// if (number % 2 === 0) {
//   console.log('tak');
// } else {
//   console.log('tak emec');
// }


// 5. Вам даны две переменные a=10, b=2. Составьте условие,
// по которому, остаток деления a на b, будет выводиться консоль
// "Четное число", "Нечетное число".

// let a = 10;
// let b = 2;
// if (a % b === 0) {
//   console.log('tak ');
// } else {
//   console.log('tak emec');
// }


// 6. Вам дана переменная s. Составьте условие, по которому в
// консоль будет выводится тип этой переменной - "boolean", "number", "string".

// let s = 'Привет';
// if (typeof s === 'boolean') {
//   console.log('boolean');
// } else if (typeof s === 'number') {
//   console.log('number');
// } else if (typeof s === 'string') {
//   console.log('string');
// }
   

// 7. Вам дана переменная а. Если переменная a больше
// одного и меньше 9-ти, то выведите 'Верно', иначе выведите 'Неверно'.

// let a = 5;
// if (a > 1 && a < 9) {
//   console.log('true');
// } else {
//   console.log('fals');
// }


// 10. Вам даны переменные a , b. Если переменная a больше
// 4-х и меньше 10-ти, или переменная b больше или равна
// 7-ми и меньше 17-ти, то выведите 'Верно', в противном случае выведите 'Неверно'.


// let a = 8;
// let b = 12;
// if ((a > 4 && a < 10) || (b >= 7 && b < 17)) {
//   console.log('true');
// } else {
//   console.log('fals');
// }


function change_source(stream, name, region, camera_id) {
    var player = videojs('camera-video');
    var new_source = {src: stream, type: "application/x-mpegURL"};
    player.src(new_source);
    document.getElementById("name").innerHTML = name;
    document.getElementById("region").innerHTML = region;
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://online.kt.kg/get_weather_by_region/" + region, false);
    xhr.onload = function () {
        if (xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("temperature").innerHTML = Math.round(data.weather.temperature).toString() + " °C";
            document.getElementById("wn").src = data.weather.icon;
            if (camera_id != document.getElementById("current-camera").innerHTML) {
                document.getElementById(camera_id).style.background = "#282828";
                document.getElementById(document.getElementById("current-camera").innerHTML).style.background = "#1d1d1d";
                document.getElementById("current-camera").innerHTML = camera_id;
            }
        }
    };
    xhr.send(null);
}
function startWorker(file) {
    showAd();
    w = new Worker("/static/javascript/worker.js");
    w.onmessage = function(event) {
        console.log(event);
        var data = event.data.weather[document.getElementById("region").innerHTML];
        document.getElementById("temperature").innerHTML = Math.round(data.temperature).toString() + " °C";
        document.getElementById("wn").src = data.icon;
        document.getElementById("total-visits").innerHTML = event.data.visits["total-visits"];
        document.getElementById("daily-visits").innerHTML = event.data.visits["daily-visits"];
    };
}

// function closeAd() {
//     document.getElementById("ad").style.display = 'none';
// }

// function openAd() {
//     document.getElementById("ad").style.display = 'flex';
// }

// function showAd() {
//     setTimeout(openAd, 5000);
// }

// function task(str, num) {
//     if (num > 5) {
//         return str.toUpperCase() + "" + str.slice(0, 1);
//     }
//     return "kichine";
// }
// console.log(task("Sam Harris"), "S.H");
// console.log(task("Patrick Feenan"), "P.F");
// console.log(task("Evan Cole"), "E.C");
