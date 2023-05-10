let questions = [
{
    "question": "Was ist NICHT Narutos Spezialität?",
    "answer_1": "Rasengan",
    "answer_2": "Chidori",
    "answer_3": "Tausend Schattendoppelgänger",
    "answer_4": "Talk-no-Jutsu",
    "right_answer": 2,
},
{
    "question": "Wer ist der Nanadaime?",
    "answer_1": "Hasirama Senyu",
    "answer_2": "Naruto Uzumaki",
    "answer_3": "Tsunade",
    "answer_4": "Kakashi Hatake",
    "right_answer": 2,
},
{
    "question": "Wie alt war Itachi Uchiha, als er zum Anbu-Teamführer wurde?",
    "answer_1": "11",
    "answer_2": "15",
    "answer_3": "16",
    "answer_4": "13",
    "right_answer": 4,
},
{
    "question": "Wie heißt der Vater son Itachi Uchiha?",
    "answer_1": "Obito",
    "answer_2": "Madara",
    "answer_3": "Suigetsu",
    "answer_4": "Fugaku",
    "right_answer": 4,
},
{
    "question": "Was ist NICHT Sasukes Spezialität?",
    "answer_1": "Chidori",
    "answer_2": "Katon",
    "answer_3": "Raiton",
    "answer_4": "Kage-mane-no",
    "right_answer": 4,
},
{
    "question": "Welcher Hokage wird auch 'der gelbe Blitz' genannt?",
    "answer_1": "Minato",
    "answer_2": "Tobirama",
    "answer_3": "Sarutobi",
    "answer_4": "Hashirama",
    "right_answer": 1,
},
{
    "question": "Wie heißt der fünfte Kazekage?",
    "answer_1": "Temari",
    "answer_2": "Gaara",
    "answer_3": "Sakon",
    "answer_4": "Ishiraku",
    "right_answer": 2,
},
{
    "question": "Wer war der erste Chunin in Narutos Jahrgang?",
    "answer_1": "Neji",
    "answer_2": "Rock Lee",
    "answer_3": "Shikamaru",
    "answer_4": "Sasuke",
    "right_answer": 3,
},
{
    "question": "Wer sind die 3 legendären Sanin?",
    "answer_1": "Jiraya, Tsunade und Orochimaru",
    "answer_2": "Jiraya, Danzo und Ichiraku",
    "answer_3": "Sasuke, Naruto und Sakura",
    "answer_4": "Minato, Kakashi und Might Guy",
    "right_answer": 1,
},
{
    "question": "Wer erklärte den vierten Shinobi-Weltkrieg?",
    "answer_1": "Obito",
    "answer_2": "Kabuto",
    "answer_3": "Danzo",
    "answer_4": "Kimimaru",
    "right_answer": 1,
},
];

let currentQuestion = 0;

function init() {
    document.getElementById('allQuests').innerHTML = questions.length;
    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion];

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = '';
        document.getElementById('questionBody').style = 'display: none'

        document.getElementById('amount-of-questions').innerHTML = questions.length;
    } else {

        document.getElementById('question-number').innerHTML = currentQuestion + 1;
        document.getElementById('questionText').innerHTML = question["question"]
        document.getElementById('answer_1').innerHTML = question["answer_1"]
        document.getElementById('answer_2').innerHTML = question["answer_2"]
        document.getElementById('answer_3').innerHTML = question["answer_3"]
        document.getElementById('answer_4').innerHTML = question["answer_4"]
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        console.log('Richtige Antwort!')
        document.getElementById(selection).parentNode.classList.add('bg-success')
    } else {
        console.log('Falsche Antwort')
        document.getElementById(selection).parentNode.classList.add('bg-danger')
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success')
    };
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestion ++; // erhöhungvon 0 auf 1.
    document.getElementById('next-button').disabled = true;
    resetAnswerButtons();
    showQuestion();
}

function resetAnswerButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');

    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');

    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');

    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}