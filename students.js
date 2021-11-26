
const students = [
	{
		"name": "Adi Dzocaj",
		"image": "assets/images/students/adi-dzocaj.jpg",
	},
	{
		"name": "Alexander Bergquist",
		"image": "assets/images/students/alexander-bergquist.jpg",
	},
	{
		"name": "Alexander Kocman",
		"image": "assets/images/students/alexander-kocman.jpg",
	},
	{
		"name": "Benjamin Benson",
		"image": "assets/images/students/benjamin-benson.jpg",
	},
	 {
	 	"name": "Benjamin Tsubarah",
	 	"image": "assets/images/students/benjamin-tsubarah.jpg",
	 },
	 {
	 	"name": "Calle Nilsson",
	 	"image": "assets/images/students/calle-nilsson.jpg",
	 },
	 {
	 	"name": "Chikage Takahashi Molander",
	 	"image": "assets/images/students/chikage-takahashi-molander.jpg",
	 },
	 {
	 	"name": "Daniel Be",
	 	"image": "assets/images/students/daniel-be.jpg",
	 },
	 {
	 	"name": "Daniel Carlsson",
	 	"image": "assets/images/students/daniel-carlsson.jpg",
	 },
	 {
	 	"name": "Elin Ahlgren",
	 	"image": "assets/images/students/elin-ahlgren.jpg",
	 },
	 {
	 	"name": "Emma Käck",
	 	"image": "assets/images/students/emma-kack.jpg",
	 },
	 {
	 	"name": "Eric Ståhl",
	 	"image": "assets/images/students/eric-stahl.jpg",
	 },
	 {
	 	"name": "Frans Gustavson Påsse",
	 	"image": "assets/images/students/frans-gustavson-passe.jpg",
	 },
	 {
	 	"name": "Glafira Veretennikova",
	 	"image": "assets/images/students/glafira-veretennikova.jpg",
	 },
	 {
	 	"name": "Gustaf Grönlund",
	 	"image": "assets/images/students/gustaf-gronlund.jpg",
	 },
	 {
	 	"name": "Hanna Håkanson",
	 	"image": "assets/images/students/hanna-hakanson.jpg",
	 },
	 {
	 	"name": "Heidi Sjöberg",
	 	"image": "assets/images/students/heidi-sjoberg.jpg",
	 },
	 {
	 	"name": "Hugo Carzborn",
	 	"image": "assets/images/students/hugo-carzborn.jpg",
	 },
	 {
	 	"name": "Jesper Kling",
	 	"image": "assets/images/students/jesper-kling.jpg",
	 },
	 {
	 	"name": "Johan Ranestam",
	 	"image": "assets/images/students/johan-ranestam.jpg",
	 },
	 {
	 	"name": "Johanna Bäckström",
	 	"image": "assets/images/students/johanna-backstrom.jpg",
	 },
	 {
	 	"name": "Johanna Jönsson",
	 	"image": "assets/images/students/johanna-jonsson.jpg",
	 },
	 {
	 	"name": "Jona Torsson",
	 	"image": "assets/images/students/jona-torsson.jpg",
	 },
	 {
	 	"name": "Josefine Ahlstedt",
	 	"image": "assets/images/students/josefine-ahlstedt.jpg",
	 },
	 {
	 	"name": "Julia Jespersdotter Högman",
	 	"image": "assets/images/students/julia-jespersdotter-hogman.jpg",
	 },
	 {
	 	"name": "Julia Nemell",
	 	"image": "assets/images/students/julia-nemell.jpg",
	 },
	 {
	 	"name": "Linus Lindberg",
	 	"image": "assets/images/students/linus-lindberg.jpg",
	 },
	 {
	 	"name": "Malin Olsson",
	 	"image": "assets/images/students/malin-olsson.jpg",
	 },
	 {
	 	"name": "Maria Haara-Lundhammar",
	 	"image": "assets/images/students/maria-haara-lundhammar.jpg",
	 },
	 {
	 	"name": "Maria Lövgren",
	 	"image": "assets/images/students/maria-lovgren.jpg",
	 },
	 {
	 	"name": "Nikola Dimitrijoski",
	 	"image": "assets/images/students/nikola-dimitrijoski.jpg",
	 },
	 {
	 	"name": "Paulina Kiendys",
	 	"image": "assets/images/students/paulina-kiendys.jpg",
	 },
	 {
	 	"name": "Raymond Lam",
	 	"image": "assets/images/students/raymond-lam.jpg",
	 },
	 {
	 	"name": "Robin Karlsson",
	 	"image": "assets/images/students/robin-karlsson.jpg",
	 },
	 {
	 	"name": "Sara Almqvist",
	 	"image": "assets/images/students/sara-almqvist.jpg",
	 },
	 {
	 	"name": "Tim Nilsson",
	 	"image": "assets/images/students/tim-nilsson.jpg",
	 },
	 {
	 	"name": "Tirapat Sukjit",
	 	"image": "assets/images/students/tirapat-sukjit.jpg",
	 },
	 {
	 	"name": "Tobias Silfverberg",
	 	"image": "assets/images/students/tobias-silfverberg.jpg",
	 },
	 {
	 	"name": "Wiktoria Dobrzewinska",
	 	"image": "assets/images/students/wiktoria-dobrzewinska.jpg",
	 },
];

// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");


/*
 💥 detta är den nya questions, där vi anropar createQuestion för varje gång i arrayen där vi vill ha en question. Så totalt 3st
*/
let questions = createQuestions()

// create some variables
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 0;


// 💥 Denna funktionen loopar över alla students
// sen tar den varje student och skickar in den studenten som "correctAnswer"
// till vår createQuestion
// sen får vi tillbaka vår question och pushar in den i vår array
function createQuestions() {
	const questions = []
	for (student of students) {
		const q = createQuestion(student)
		questions.push(q)
	}
	return questions
}

// create question
function createQuestion(correctAnswer) {
	// 💥 Detta är den nya funktionen.
 /*
		Jag har tagit tillbaka renderQuestion-funktionen som den var tidigare.
		Jag har lagt över det i denna funktionen som heter createQuestion
		Denna skapar en question precis så den ser likadan ut som  din array "questions gör"
 */
	const randomNumber = () => {
		return Math.floor(Math.random() * students.length)
	}

	const questionName = "Guess the name?";
	const wrongAnswers = [] // ['heidi', 'dandan', 'max']
	// denna är ny, vi vill ha 4 olika alternativ som vi har i en array som heter abcd. på denna arrayen så gör vi en
	// sortering  (.sort) som i detta fallet gör att den blir helt slumpmässig så abcd blir -> badc typ
	const options = ['A', 'B', 'C', 'D'].sort((a, b) => 0.5 - Math.random())

	while (wrongAnswers.length < 3) {
		const randomStudent = students[randomNumber()]
		if (randomStudent !== correctAnswer) {
			//denna har jag ändrat så vi istället skickar in randomstudent.name istället för hele objektet på en randomstudent
			wrongAnswers.push(randomStudent.name)
		}
	}
	// Här bygger vi upp vår question så den ser likadan ut som din tidigare array Questions
	// correct (answer) options[0] blir första i arrayen(som är slumpmässig)
	// options[0] blir då correct answer så vi skriver ut det
	// sen skriver vi upp de andra options[1] etc. med våra 3 wrongAnswers
	// det går att loopa ut detta om du vill men detta är tillräckligt
	// när vi skriver:
	// {
	//  ['choice' + options[0]]
	// }
	// så sätter vi ett namn på propertyn på objektet som kommer heta "choice + något" som i detta fallet blir choiceA, choiceB etc
	const q = {
		question: questionName,
		imgSrc: correctAnswer.image,
		correct: options[0],
		['choice' + options[0]]: correctAnswer.name,
		['choice' + options[1]]: wrongAnswers[0],
		['choice' + options[2]]: wrongAnswers[1],
		['choice' + options[3]]: wrongAnswers[2]
	}

	return q
}

// render a question
function renderQuestion() {
	let q = questions[runningQuestion];

	question.innerHTML = "<p>" + q.question + "</p>";
	qImg.innerHTML = "<img src=" + q.imgSrc + ">";
	choiceA.innerHTML = q.choiceA;
	choiceB.innerHTML = q.choiceB;
	choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
	start.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
	renderProgress();

}

// render progress
function renderProgress() {
	for (let qIndex = 0;qIndex <= lastQuestion;qIndex++) {
		progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
	}
}


start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
	start.style.display = "none";
	renderQuestion();
	quiz.style.display = "block";
	renderProgress();

}

// render progress
function renderProgress() {
	for (let qIndex = 0;qIndex <= lastQuestion;qIndex++) {
		progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
	}
}
// checkAnwer

function checkAnswer(answer) {
	if (answer == questions[runningQuestion].correct) {
		// answer is correct
		score++;
		// change progress color to green
		answerIsCorrect();
	} else {
		// answer is wrong
		// change progress color to red
		answerIsWrong();
	}
	count = 0;
	if (runningQuestion < lastQuestion) {
		runningQuestion++;
		renderQuestion();
	} else {
		// end the quiz and show the score

		scoreRender();
	}
}

// answer is correct
function answerIsCorrect() {
	document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong() {
	document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender() {
	scoreDiv.style.display = "block";
	console.log(score)
	// calculate the amount of question percent answered by the user
	const scorePerCent = Math.round(100 * score / questions.length);
	const numberOfQuestions = questions.length

	// choose the image based on the scorePerCent
	let img;
	const gold = 'https://img.favpng.com/13/20/7/vector-graphics-clip-art-trophy-image-royalty-free-png-favpng-wh3LvJuUNgX2YtddMqjVr9sMu.jpg'
	const silver = ''
	const bronze = ''

	if (scorePerCent > 90) {
		img = gold
	} else if (scorePerCent > 50) {
		img = silver
	} else {
		img = bronze
	}

	const html = `
	<img src="${img}">
	Dina poäng är: ${score} av ${numberOfQuestions} (${scorePerCent}% rätt)
	`;

	scoreDiv.innerHTML = html;

}






