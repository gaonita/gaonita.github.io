var passwordInput = document.getElementById('password');

var lengthText = document.getElementById('length-text');
var caseText = document.getElementById('case-text');
var digitText = document.getElementById('digit-text');
var specialText = document.getElementById('special-text');
var level = document.getElementById("level");


passwordInput.addEventListener('input', function() {
    validate(passwordInput.value);
});


function singleValidation(element, isValid) {
    var score = 0;
    if(isValid) {
        element.classList.remove("error");
        score ++;
    } else {
        element.classList.add("error");
    }
    if (score >= 4){
		level.className = "far fa-grin-hearts";
	}
	else if(score >= 3){
		level.className = "far fa-smile";
	}
	else if(score >=1){
		level.className = "far fa-frown";
	}
	else if(score = 0){
		level.className = "far fa-ban";
	}
}

function validate(password) {
    if (password === "") {
        disable();
    } else {
        reset();
    }

singleValidation(lengthText, hasValidLength(password));
singleValidation(caseText, hasMixedCase(password));
singleValidation(digitText, hasDigit(password));
singleValidation(specialText, hasSpecial(password));
}

function hasValidLength(password) {
    if (password.length < 6) {
        return false;
    } else {
        return true;
    }
}

function hasMixedCase(password) {
    var i;
    for (i = 0; i < password.length; i++){
        if(password[i] < 'a') { 
            return true;
        }
    }
}

function hasDigit(password) {
    var i;
    for (i = 0; i < password.length; i++){
        if(password[i] >= '0' & password[i] <= '9') { 
            return true;
        }
    }
}

function hasSpecial(password) {
    var i;
    for (i = 0; i < password.length; i++){
        if(password[i] >= '!' & password[i] <= '/') { 
            return true;
        }
    }
}

const reset = function() {
    lengthText.classList.remove("disabled");
    caseText.classList.remove("disabled");
    digitText.classList.remove("disabled");
    specialText.classList.remove("disabled");
}

const disable = function() {
    lengthText.classList.add("disabled");
    caseText.classList.add("disabled");
    digitText.classList.add("disabled");
    specialText.classList.add("disabled");
}