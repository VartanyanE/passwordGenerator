var passGen = document.querySelector("#passGen");
var copyClip = document.querySelector("#copyClip");
var passPrint = document.querySelector("#passPrint");
var numChar = [0, 1, 3, 4, 5, 6, 7, 8, 9];
var specialCharecter = ['#', '$', '%', '&', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>',
    '?', '@'];
// var toLowerCase = ranPassword.toLowerCase();
// var toUpperCase = ranPassword.toUpperCase();
var ranPassword = [];
var lowercaseChar = document.querySelector("#lowercase");
var uppercaseChar = document.querySelector("#uppercase");
var specialChar = document.querySelector("#special");
var numericChar = document.querySelector("#numeric");



for (let i = 0; i < 10; i++) {
    var ranNum = numChar[Math.floor(Math.random() * numChar.length)];
}
for (let i = 0; i < 10; i++) {
    var ranChar = specialCharecter[Math.floor(Math.random() * specialCharecter.length)];
}

function mixedArr() {
    var randomArr = ranNum + ranChar;
    ranPassword.push(randomArr);
    passPrint.textContent = ranPassword;

}
function validateLower() {
    if (document.getElementById('lowercase').checked) {
        console.log("checked");
    } else {
        console.log("unchecked")
    }

}

function validateUpper() {
    if (document.getElementById('uppercase').checked) {
        console.log("checked");
    } else {
        console.log("unchecked")
    }

}
function validateSpecial() {
    if (document.getElementById('special').checked) {
        console.log("checked");
    } else {
        console.log("unchecked")
    }

}

function validateNumeric() {
    if (document.getElementById('numeric').checked) {
        console.log("checked");
    } else {
        console.log("unchecked")
    }

}



function copyToClip() {

    var copyText = document.getElementById("passPrint");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");


}


passGen.addEventListener("click", function () {
    mixedArr();
});

copyClip.addEventListener("click", function () {
    copyToClip();
});

lowercaseChar.addEventListener("click", function () {
    validateLower();
});

uppercaseChar.addEventListener("click", function () {
    validateUpper();
});

specialChar.addEventListener("click", function () {
    validateSpecial();
});

numericChar.addEventListener("click", function () {
    validateNumeric();
});