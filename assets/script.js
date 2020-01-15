var passGen = document.querySelector("#passGen");
var copyClip = document.querySelector("#copyClip");
var passPrint = document.querySelector("#passPrint")
var numChar = [0, 1, 3, 4, 5, 6, 7, 8, 9];
var specialChar = ['#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>',
    '?', '@'];
var ranPassword = [];




for (let i = 0; i < 10; i++) {
    var ranNum = numChar[Math.floor(Math.random() * numChar.length)];
}
for (let i = 0; i < 10; i++) {
    var ranChar = specialChar[Math.floor(Math.random() * specialChar.length)];
}

var mixedArr = ranNum + ranChar;


function copyToClip() {

    var copyText = document.getElementById("passPrint");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");


}


passGen.addEventListener("click", (function () {
    ranPassword.push(mixedArr);

    passPrint.textContent = ranPassword;

}));

copyClip.addEventListener("click", function () {
    copyToClip();
})