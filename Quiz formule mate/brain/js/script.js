var usernameForm = document.getElementById('username');
var uname = document.getElementById('uname');
var login = false; 
var theForm = document.getElementById('theForm');
var theQuiz = document.getElementById('theQuiz');
var pass = document.getElementById('pass');
var submitBtn = document.getElementById('submit');
var err = document.getElementById('err');
var errH = document.getElementById('errH');
var i;



function chkUser() {
	var tempName = localStorage.getItem('name'); 
	if (tempName == null || tempName == '' || tempName == 'undefined') {
		usernameForm.style.display = 'block'; 
		document.getElementById('logoutBtn').style.display = 'none';
	} else {
		var tempCa = localStorage.getItem('ca');
		var tempPer = localStorage.getItem('percentage');
		if (
			(tempPer == null || tempPer == '' || tempPer == 'undefined') &&
			(tempCa == null || tempCa == '' || tempCa == 'undefined')
		) {
			theForm.style.display = 'block';
			errH.innerHTML = tempName + ', Introdu din nou codul';
			document.getElementById('logoutBtn').style.display = 'block';
		} else {
			document.getElementById('theResult').style.display = 'block';
			showResult(tempPer, tempCa);
		}
	}
}


function askPass() {
	if (uname.value == '' || uname.value == null || uname.value == 'undefined') {
		uname.value = 'Ion';
		localStorage.setItem('name', uname.value); 
		tempName = localStorage.getItem('name');
	} else {
		localStorage.setItem('name', uname.value);
		tempName = localStorage.getItem('name'); 
	}
	usernameForm.style.display = 'none';
	theForm.style.display = 'block';
	errH.innerHTML = tempName + ' introdu codul';
}


function typing() {
	if (pass.value != '') {
		submitBtn.removeAttribute('disabled');
		document.getElementsByClassName('finger-print')[0].style.opacity = '1';
	} else {
		submitBtn.setAttribute('disabled', 'disabled');
		document.getElementsByClassName('finger-print')[0].style.opacity = '.6';
	}
}

function chkPass(btn) {
	if (pass.value == 'derivate') {
		pass.setAttribute('disabled', 'disabled'); 
		submitBtn.setAttribute('disabled', 'disabled');

		submitBtn.innerHTML =
			'<i class="material-icons loading" style="font-size: 1.8em;">cached</i>';

		login = true; 

		setTimeout(function() {
			

			document.getElementsByClassName('finger-print')[0].style.display = 'none'; 
			document.getElementsByClassName('success')[0].style.display = 'block'; 
			document.getElementsByClassName('success')[0].style.opacity = '1';

			document.getElementsByClassName('passBox')[0].style.display = 'none'; 

			errH.innerHTML = 'Bingo!'; 

			err.innerHTML = 'Codul a fost corect'; 
			err.style.color = '#28a745';

			btn.innerHTML = 'Incepe chestionarul'; 
			btn.removeAttribute('disabled'); 

			btn.classList.add('btn-success'); 
			btn.setAttribute('onclick', 'startQuiz();'); 
		}, 2000);
	} else if (pass.value == '') {

		document.getElementsByClassName('finger-print')[0].style.display = 'none';
		document.getElementsByClassName('warning')[0].style.display = 'block';
		document.getElementsByClassName('warning')[0].style.opacity = '1';

		errH.innerHTML = 'Eroare!';

		document.getElementsByClassName('passBox')[0].style.display = 'none';

		err.style.color = '#dc3545';
		err.innerHTML = "Nu poti intra fara cod!";

		btn.innerHTML = 'Reincearca';
		btn.removeAttribute('disabled');

		btn.classList.add('btn-danger');
		btn.setAttribute('onclick', 'window.location.reload()');
	} else {
		pass.setAttribute('disabled', 'disabled');
		btn.setAttribute('disabled', 'disabled');

		btn.innerHTML =
			'<i class="material-icons loading" style="font-size: 1.8em;">cached</i>';

		setTimeout(function() {
			document.getElementsByClassName('finger-print')[0].style.display = 'none';
			document.getElementsByClassName('warning')[0].style.display = 'block';
			document.getElementsByClassName('warning')[0].style.opacity = '1';

			document.getElementsByClassName('passBox')[0].style.display = 'none';

			errH.innerHTML = 'Eroare!';

			err.style.color = '#dc3545';
			err.innerHTML = 'Codul nu a fost corect!';

			btn.innerHTML = 'Reincearca';
			btn.removeAttribute('disabled');

			btn.classList.add('btn-danger');
			btn.setAttribute('onclick', 'window.location.reload();');

			pass.removeAttribute('disabled');
			btn.removeAttribute('disabled');

			errH.classList.add('shake');
			err.classList.add('shake');
		}, 2000);
	}
}

function resetErr() {

	pass.style.borderColor = '#007bff';
	pass.value = '';
	err.innerHTML = '';

	err.classList.remove('shake');
	pass.classList.remove('shake');

	document.getElementsByClassName('warning')[0].style.display = 'none';
	document.getElementsByClassName('finger-print')[0].style.display = 'block';
	document.getElementsByClassName('finger-print')[0].style.opacity = '.6';

	submitBtn.innerHTML = 'Introdu codul';
	submitBtn.classList.remove('btn-danger');
	submitBtn.classList.add('btn-primary');
}

function startQuiz() {
	theForm.style.display = 'none'; 
	theQuiz.style.display = 'block';
	randomQ(); 
}

var queDone = 0; 
var userAns = [];
var queDoneArr = [];


steps(totQ.length);
function steps(quizLength) {
	var mainStepDiv = document.getElementById('steps');
	for (var i = 0; i < quizLength; i++) {
		var span = document.createElement('span');
		span.className = 'step';
		mainStepDiv.appendChild(span);
	}
}

var p = document.getElementById('que');
var O1 = document.getElementById('opt1'); 
var O2 = document.getElementById('opt2'); 
var O3 = document.getElementById('opt3'); 
var O4 = document.getElementById('opt4'); 


function randomQ() {
	var thisAsked = false;
	var x = Math.floor(Math.random() * totQ.length); 
	while ((totQ[x].asked === 0) == true) {
		
		thisAsked = true; 
		totQ[x].asked = 1; 
		queDoneArr.unshift(x); 
		queDone = ++queDone; 
		p.innerHTML = totQ[x].question; 
		O1.nextElementSibling.innerHTML = totQ[x].opt1;
		O2.nextElementSibling.innerHTML = totQ[x].opt2;
		O3.nextElementSibling.innerHTML = totQ[x].opt3;
		O4.nextElementSibling.innerHTML = totQ[x].opt4;
	}
	if (!thisAsked) {
		if (queDone != totQ.length)
			randomQ(); 
	}
}

function next() {
	if (!validateForm()) return false; 
	topping(queDone); 
	if (queDone == totQ.length) {
		theQuiz.style.display = 'none';
		document.getElementById('theResult').style.display = 'block';
		calcResult(); 
		return false;
	}
	randomQ(); 
}

var chkBox = document.getElementsByClassName('custom-control-input');

function validateForm() {
	var valid = false;
	for (var i = 0; i < chkBox.length; i++) {
		if (chkBox[i].checked) {
			valid = true;
			userAns.unshift(chkBox[i].value); 
			chkBox[i].checked = false;
			nextBtn.setAttribute('disabled', 'disabled'); 
			break;
		}
	}
	if (!valid) {
		alert('Please Select Any Option...');
		nextBtn.setAttribute('disabled', 'disabled');
	}
	if (valid)
		document.getElementsByClassName('step')[queDone - 1].className += ' finish';
	return valid; 
}

var nextBtn = document.getElementById('next-button');
function enableBtn(i) {
	if (i.checked) nextBtn.removeAttribute('disabled');
	else nextBtn.setAttribute('disabled', 'disabled');
}

function topping(n) {
	if (n == totQ.length - 1)
		document.getElementById('next-button').innerHTML = 'Submit';
	else if (n == totQ.length) {
		document.getElementById('next-button').innerHTML = 'No Questions';
		nextBtn.setAttribute('disabled', 'disabled');
	} else document.getElementById('next-button').innerHTML = 'Next';
	fixStepIndicator(n); 
}

function fixStepIndicator(n) {
	var i,
		x = document.getElementsByClassName('step');
	for (i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(' active', '');
	}
	x[n - 1].className += ' active'; 
}

function calcResult() {
	var ca = 0;
	for (var i = 0; i < totQ.length; i++) {
		var a = queDoneArr[i];
		if (userAns[i] == totQ[a].answer) {
			ca = ca + 1; 
		}
	}
	var percentage = (ca / totQ.length) * 100;
	showResult(percentage, ca);
}

var resultCircle = document.getElementById('resultCircle');
var resultFb = document.getElementById('resultFb');
var correctAns = document.getElementById('correctAns');
var quizCompleted = false;
var RColor;
function showResult(percentage, ca) {
	if (percentage == 100) {
		RColor = 'teal';
		resultFb.innerHTML = 'Bravooo, esti un expert!';
		correctAns.innerHTML = 'Raspunsuri corecte: ' + ca;
	} else if (percentage >= 80) {
		RColor = 'green';
		resultFb.innerHTML = 'Bravo, ai trecut!';
		correctAns.innerHTML = 'Raspunsuri corecte: ' + ca;
	} else if (percentage >= 65) {
		RColor = 'blue';
		resultFb.innerHTML = 'Ai trecut cu brio!.';
		correctAns.innerHTML = 'Raspunsuri corecte: ' + ca;
	} else if (percentage >= 50) {
		RColor = 'orange';
		resultFb.innerHTML = 'Ai trecut';
		correctAns.innerHTML = 'Raspunsuri corecte: ' + ca;
	} else {
		RColor = 'red';
		resultFb.innerHTML = 'Nu ai trecut:( Mult noroc data viitoare';
		correctAns.innerHTML = 'Raspunsuri corecte: ' + ca;
	}

	localStorage.setItem('percentage', percentage);
	localStorage.setItem('ca', ca);
	quizCompleted = true;

	var path =
		'<svg viewbox="0 0 36 36" class="circular-chart ' +
		RColor +
		'"> \
    <path class="circle-bg" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <path class="circle" \
    stroke-dasharray="' +
		percentage +
		', 100" \
    d="M18 2.0845 \
    a 15.9155 15.9155 0 0 1 0 31.831 \
    a 15.9155 15.9155 0 0 1 0 -31.831" \
    /> \
    <text x="19" y="21" id="percentage">' +
		percentage +
		'%</text> \
    </svg>';
	resultCircle.innerHTML = path;
}

function logout() {
	
	localStorage.clear(); 
	location.reload(true); 
}

function retakeQuiz() {
	localStorage.removeItem('percentage');
	localStorage.removeItem('ca');
	location.reload(true); 
}
