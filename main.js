var questions=[{
	'question':'Which of the following is the smallest country in the world?',
	'option1':'Monaco',
	'option2':'Marshall',
	'option3':'Vatican City',
	'option4':'San Marino',
	'answer':'3'
},{
	'question':'Which is the hottest continent on Earth?',
	'option1':'Africa',
	'option2':'Asia',
	'option3':'North America',
	'option4':'Australia',
	'answer':'1'
},{
	'question':'Portugal has its capital in which city?',
	'option1':'Porto',
	'option2':'Lisbon',
	'option3':'Lagos',
	'option4':'Braga',
	'answer':'2'
},{
	'question':'How many countries still use the shilling as currency?',
	'option1':'Four',
	'option2':'Five',
	'option3':'Six',
	'option4':'Three',
	'answer':'1'
},{
	'question':'The vaccine by Edward Jenner was guarded against which disease?',
	'option1':'SmallPox',
	'option2':'Chickenpox',
	'option3':'Polio',
	'option4':'Spanish Flu',
	'answer':'1'
},{
	'question':'What name did Romans call Scotland?',
	'option1':'Macedonia',
	'option2':'Caledonia',
	'option3':'Old City',
	'option4':'Old Rome',
	'answer':'2'
},{

	'question':'Which isnt a color in the Olympic logo?',
	'option1':'Blue',
	'option2':'Yellow',
	'option3':'Green',
	'option4':'White',
	'answer':'4'
},{
	'question':'Who painted the Mona Lisa?',
	'option1':'Leonardo DiCaprio',
	'option2':'Leonardo da Vinci',
	'option3':'Pablo Picasso',
	'option4':'Raphael',
	'answer':'2'
},{
	'question':'What is a baby rabbit called?',
	'option1':'Cub',
	'option2':'Buck',
	'option3':'Kit',
	'option4':'Doe',
	'answer':'3'
},{
	'question':'Which is considered the biggest animal?',
	'option1':'African Elephant',
	'option2':'Colossall Squid',
	'option3':'Blue Whale',
	'option4':'Girrafe',
	'answer':'3'
}
];


var currentQuestion=0; //contains the index of cuurent quiz
var score=0;
let totalQuestions= questions.length;

const container= document.getElementById('quizContainer');
const questionElement=document.getElementById('question');
const opt1=document.getElementById('opt1');
const opt2=document.getElementById('opt2');
const opt3=document.getElementById('opt3');
const opt4=document.getElementById('opt4');
const nextButton=document.getElementById('nextQuestion');
const resultContainer=document.getElementById('result');

function generateQuestion(questionIndex){
	var q=questions[questionIndex];
	questionElement.textContent =(questionIndex + 1) +'. '+ q.question;
	opt1.textContent =q.option1;
	opt2.textContent =q.option2;
	opt3.textContent =q.option3;
	opt4.textContent =q.option4; 
};

function loadNextQuestion(){
	let selectedOption= document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Please select an answer!');
		return;
	}
	let answer= selectedOption.value;
	if(questions[currentQuestion].answer==answer){
		score +=10
	}
	selectedOption.checked =false;
	currentQuestion++;
	if(currentQuestion == totalQuestions- 1){
		nextButton.textContent='Done'
	}
	if(currentQuestion==totalQuestions){
		container.style.display='none';
		resultContainer.style.display='';
		resultContainer.textContent='Your score: '+score;
		return;
	}
	generateQuestion(currentQuestion);
}

generateQuestion(currentQuestion);

