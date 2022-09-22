var log = document.querySelector("#divLog");
// var logH = log.innerHTML;

document.writeln(new Date().toTimeString())

const logH = (s) => { log.innerHTML += s; }

logH(`<hr><h3>LocalStorage</h3>`);

var keyLS = "keyLS"
var keyLSVal = `keyLS-in-valuesi ${new Date().toTimeString()}`;

localStorage.setItem(keyLS, keyLSVal); // keyLS değişkeninin içeriğini localStorage'e YAZ
logH(`<br>LS'ye Kaydedildi`);

var keyLSReaded = localStorage.getItem(keyLS); // key değişkeninin içeriğini localStorage'den al
logH(`<br>LS'den OKUNAN : [ ${keyLSReaded} ]`);

// localStorage.removeItem( keyLS ); // key değişkeninin içeriğini localStorage'den SİL
// logH(`<br>LS'den Silindi`);

if (sessionStorage) {

    logH(`<hr><h3>sessionStorage</h3>`);
    
    var keySS = "keySS"
    var keySSVal = `keySS-in-valuesi ${new Date().toTimeString()}`;

    sessionStorage.setItem(keySS, keySSVal); // keySS değişkeninin içeriğini sessionStorage'e YAZ
    logH(`<br>SS'ye Kaydedildi`);

    var keySSReaded = sessionStorage.getItem(keySS); // key değişkeninin içeriğini sessionStorage'den al
    logH(`<br>SS'den OKUNAN : [ ${keySSReaded} ]`);

    // sessionStorage.removeItem( keySS ); // key değişkeninin içeriğini sessionStorage'den SİL
    // logH(`<br>SS'den Silindi`);

}
