var log = document.querySelector("#divLog");
// var logH = log.innerHTML;

document.writeln(new Date().toTimeString())

const logH = (s) => { log.innerHTML += s; }

logH(`<hr><h3>LocalStorage</h3>`);

var keyLS = "keyLS-in-valuesi";
localStorage.setItem(keyLS.toString(), keyLS); // keyLS değişkeninin içeriğini localStorage'e YAZ
logH(`<br>LS'ye Kaydedildi`);

var keyLSReaded = localStorage.getItem("keyLS"); // key değişkeninin içeriğini localStorage'den al
logH(`<br>LS'den OKUNAN : [ ${keyLS} ]`);
localStorage.removeItem("keyLS"); // key değişkeninin içeriğini localStorage'den al
logH(`<br>LS'den Silindi`);


if (sessionStorage) {
    logH(`<hr><h3>LocaSStorage</h3>`);

    var keySS = "keySS-in-valuesi";
    sessionStorage.setItem(keySS.toString(), keySS); // keySS değişkeninin içeriğini sessionStorage'e YAZ
    logH(`<br>SS'ye Kaydedildi`);

    var keySSReaded = sessionStorage.getItem("keySS"); // key değişkeninin içeriğini sessionStorage'den al
    logH(`<br>SS'den OKUNAN : [ ${keySS} ]`);
    sessionStorage.removeItem("keySS"); // key değişkeninin içeriğini sessionStorage'den al
    logH(`<br>SS'den Silindi`);
}
