
var passGen = document.querySelector("#passGen");
var copyClip = document.querySelector("#copyClip");
var passPrint = document.querySelector("#passPrint");
var lowercaseChar = document.querySelector("#lowercase");
var uppercaseChar = document.querySelector("#uppercase");
var specialChar = document.querySelector("#special");
var numericChar = document.querySelector("#numeric");



function validateLower() {
    if (document.getElementById('lowercase').checked) {

    } else {

    }

}

function validateUpper() {
    if (document.getElementById('uppercase').checked) {

    } else {

    }

}
function validateSpecial() {
    if (document.getElementById('special').checked) {

    } else {

    }

}

function validateNumeric() {
    if (document.getElementById('numeric').checked) {

    } else {

    }

}



function copyToClip() {

    var copyText = document.getElementById("passPrint");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");


}
function checkIfSelection() {
    if (uppercaseChar.checked !== true && lowercaseChar.checked !== true && numericChar.checked !== true && specialChar.checked !== true) {
        alert("Dont be lazy, choose at least one")
    }
}

passGen.addEventListener("click", function () {
    checkIfSelection();
    upperCase();
    lowerCase();
    numericCase();
    specialCase();
    numericSpecial();
    numericLower();
    numericUpper();
    upperLower();
    upperSpecial();
    lowerSpecial();
    allSelected();
    lowerUpperSpecial();
    lowerUpperNumeric();
    lowerSpecialNumeric();
    upperSpecialNumeric();

});

function allSelected() {
    if (lowercaseChar.checked && uppercaseChar.checked && numericChar.checked && specialChar.checked) {
        passPrint.textContent = generateRandomPasswordAllSelected(90);
    }
}
function lowerCase() {
    if (lowercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordLower(80);
    }
}
function upperCase() {
    if (uppercaseChar.checked) {
        passPrint.textContent = generateRandomPassword(30);

    }
}


function numericCase() {
    if (numericChar.checked) {
        passPrint.textContent = generateRandomPasswordNumeric(19);

    }
}
function specialCase() {
    if (specialChar.checked) {
        passPrint.textContent = generateRandomPasswordSpecial(93);

    }
}
function numericSpecial() {
    if (numericChar.checked && specialChar.checked) {
        passPrint.textContent = generateRandomPasswordNumericSpecial(39);

    }
}

function numericLower() {
    if (numericChar.checked && lowercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordNumericLower(120);

    }
}

function numericUpper() {
    if (numericChar.checked && uppercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordNumericUpper(55);

    }
}

function upperLower() {
    if (lowercaseChar.checked && uppercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordUpperLower(82);

    }
}

function upperSpecial() {
    if (specialChar.checked && uppercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordUpperSpecial(30);

    }
}
function lowerSpecial() {
    if (lowercaseChar.checked && specialChar.checked) {
        passPrint.textContent = generateRandomPasswordLowerSpecial(100)
    }
}

function lowerUpperSpecial() {
    if (lowercaseChar.checked && specialChar.checked && uppercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordLowerUpperSpecial(8)
    }
}

function lowerUpperNumeric() {
    if (lowercaseChar.checked && numericChar.checked && uppercaseChar.checked) {
        passPrint.textContent = generateRandomPasswordLowerUpperNumeric(30)
    }
}

function lowerSpecialNumeric() {
    if (lowercaseChar.checked && numericChar.checked && specialChar.checked) {
        passPrint.textContent = generateRandomPasswordLowerSpecialNumeric(100)
    }
}

function upperSpecialNumeric() {
    if (uppercaseChar.checked && numericChar.checked && specialChar.checked) {
        passPrint.textContent = generateRandomPasswordUpperSpecialNumeric(93)
    }
}



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





function generateRandomPassword(passwordLength) {
    var finalPass = "";
    var allPossibleUpperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < passwordLength; i++) {
        finalPass += allPossibleUpperCaseChars.charAt(Math.floor(Math.random() * allPossibleUpperCaseChars.length));

    }

    return finalPass;

}

function generateRandomPasswordLower(passwordLength) {
    var lowerPass = "";
    var allPossibleLowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < passwordLength; i++) {
        lowerPass += allPossibleLowerCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerCaseChars.length));

    }

    return lowerPass;

}

function generateRandomPasswordSpecial(passwordLength) {
    var specialPass = "";
    var allPossibleSpecialCaseChars = "#$%&(),*+-/:;<=>";

    for (var i = 0; i < passwordLength; i++) {
        specialPass += allPossibleSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleSpecialCaseChars.length));

    }

    return specialPass;

}

function generateRandomPasswordNumeric(passwordLength) {
    var numericPass = "";
    var allPossibleNumericCaseChars = "0123456789";

    for (var i = 0; i < passwordLength; i++) {
        numericPass += allPossibleNumericCaseChars.charAt(Math.floor(Math.random() * allPossibleNumericCaseChars.length));

    }

    return numericPass;

}

function generateRandomPasswordNumericSpecial(passwordLength) {
    var numericSpecialPass = "";
    var allPossibleNumericSpecialCaseChars = "0123456789#$%&(),*+-/:;<=>";

    for (var i = 0; i < passwordLength; i++) {
        numericSpecialPass += allPossibleNumericSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleNumericSpecialCaseChars.length));

    }

    return numericSpecialPass;

}

function generateRandomPasswordNumericLower(passwordLength) {
    var numericLowerPass = "";
    var allPossibleNumericLowerCaseChars = "0123456789abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < passwordLength; i++) {
        numericLowerPass += allPossibleNumericLowerCaseChars.charAt(Math.floor(Math.random() * allPossibleNumericLowerCaseChars.length));

    }

    return numericLowerPass;

}

function generateRandomPasswordNumericUpper(passwordLength) {
    var numericUpperPass = "";
    var allPossibleNumericUpperCaseChars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        numericUpperPass += allPossibleNumericUpperCaseChars.charAt(Math.floor(Math.random() * allPossibleNumericUpperCaseChars.length));

    }

    return numericUpperPass;

}

function generateRandomPasswordLowerSpecial(passwordLength) {
    var lowerSpecialPass = "";
    var allPossibleLowerSpecialCaseChars = "#$%&(),*+-/:;<=>abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < passwordLength; i++) {
        lowerSpecialPass += allPossibleLowerSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerSpecialCaseChars.length));

    }

    return lowerSpecialPass;

}

function generateRandomPasswordUpperLower(passwordLength) {
    var upperLowerPass = "";
    var allPossibleUpperLowerCaseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        upperLowerPass += allPossibleUpperLowerCaseChars.charAt(Math.floor(Math.random() * allPossibleUpperLowerCaseChars.length));

    }

    return upperLowerPass;

}

function generateRandomPasswordUpperSpecial(passwordLength) {
    var upperSpecialPass = "";
    var allPossibleUpperSpecialCaseChars = "#$%&(),*+-/:;<=>ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        upperSpecialPass += allPossibleUpperSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleUpperSpecialCaseChars.length));

    }

    return upperSpecialPass;

}

function generateRandomPasswordLowerSpecial(passwordLength) {
    var lowerSpecialPass = "";
    var allPossibleLowerSpecialCaseChars = "#$%&(),*+-/:;<=>abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < passwordLength; i++) {
        lowerSpecialPass += allPossibleLowerSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerSpecialCaseChars.length));

    }

    return lowerSpecialPass;

}

function generateRandomPasswordAllSelected(passwordLength) {
    var allSelectedPass = "";
    var allPossibleAllSelectedCaseChars = "#$%&(),*+-/:;<=>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < passwordLength; i++) {
        allSelectedPass += allPossibleAllSelectedCaseChars.charAt(Math.floor(Math.random() * allPossibleAllSelectedCaseChars.length));

    }

    return allSelectedPass;

}

function generateRandomPasswordLowerUpperSpecial(passwordLength) {
    var lowerUpperSpecialPass = "";
    var allPossibleLowerUpperSpecialCaseChars = "#$%&(),*+-/:;<=>abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        lowerUpperSpecialPass += allPossibleLowerUpperSpecialCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerUpperSpecialCaseChars.length));

    }

    return lowerUpperSpecialPass;

}

function generateRandomPasswordLowerUpperNumeric(passwordLength) {
    var lowerUpperNumericPass = "";
    var allPossibleLowerUpperNumericCaseChars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        lowerUpperNumericPass += allPossibleLowerUpperNumericCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerUpperNumericCaseChars.length));

    }

    return lowerUpperNumericPass;

}

function generateRandomPasswordLowerSpecialNumeric(passwordLength) {
    var lowerSpecialNumericPass = "";
    var allPossibleLowerSpecialNumericCaseChars = "0123456789abcdefghijklmnopqrstuvwxyz#$%&(),*+-/:;<=>";

    for (var i = 0; i < passwordLength; i++) {
        lowerSpecialNumericPass += allPossibleLowerSpecialNumericCaseChars.charAt(Math.floor(Math.random() * allPossibleLowerSpecialNumericCaseChars.length));

    }

    return lowerSpecialNumericPass;

}

function generateRandomPasswordUpperSpecialNumeric(passwordLength) {
    var upperSpecialNumericPass = "";
    var allPossibleUpperSpecialNumericCaseChars = "0123456789#$%&(),*+-/:;<=>ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < passwordLength; i++) {
        upperSpecialNumericPass += allPossibleUpperSpecialNumericCaseChars.charAt(Math.floor(Math.random() * allPossibleUpperSpecialNumericCaseChars.length));

    }

    return upperSpecialNumericPass;

}




