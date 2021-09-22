// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'Care este derivata lui x^n?',
	'n*(x^(n-3))',
	'-n*(x^n)',
	'n*(x^(n-1))',
	'n',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Care este derivata lui e^x?',
	'e^x',
	'-e^x',
	'0',
	'1',
	1,
	0
);

// Question 3
var q3 = new CQuiz(
	'Care este derivata lui tg x?',
	'ctg x',
	'1/((cos x)^2)',
	'sin x',
	'nu exista',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Care este derivata lui sin x?',
	'sin x',
	'-sin x',
	'cos x',
	'-cos x',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Care este derivata lui cos x?',
	'sin x',
	'-sin x',
	'cos x',
	'-cos x',
	2,
	0
);

// Question 6
var q6 = new CQuiz(
	'Care este derivata lui ctg x?',
	'ctg x',
	'1/((cos x)^2)',
	'-1/((sin x)^2)',
	'1/((sin x)^2)',
	3,
	0
);

// Question 7
var q7 = new CQuiz(
	'Care este derivata lui arcsin x?',
	'1/(sqrt(1-x^2))',
	'-1/(sqrt(1-x^2))',
	'-1/(1+x^2)',
	'1/(1+x^2)',
	1,
	0
);

// Question 8
var q8 = new CQuiz(
	'Care este derivata lui arccos x?',
	'-1/(sqrt(1-x^2))',
	'1/(sqrt(1-x^2))',
	'-1/(1+x^2)',
	'1/(1+x^2)',
	1,
	0
);

// Question 9
var q9 = new CQuiz(
	'Care este derivata lui arcctg x?',
	'1/(sqrt(1-x^2))',
	'-1/(sqrt(1-x^2))',
	'-1/(1+x^2)',
	'1/(1+x^2)',
	3,
	0
);

// Question 10
var q10 = new CQuiz(
	'Care este derivata lui arctg x?',
	'1/(sqrt(1-x^2))',
	'-1/(sqrt(1-x^2))',
	'-1/(1+x^2)',
	'1/(1+x^2)',
	4,
	0
);

// total question...
var totQ = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
