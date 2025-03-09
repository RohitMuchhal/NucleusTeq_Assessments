let currentQuestionIndex = 0;
let score = 0;
let questions = [];
let timerId;

function decodeHtml(html) 
{
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
}

function intructionCall()
{
    showScreen('intructionScreen');
}

function exitQuiz()
{
    showScreen('startScreen');
}

async function startQuiz() 
{
    const category = document.getElementById('category').value;
    const difficulty = document.getElementById('difficulty').value;
    let amount=0;
    if(difficulty=='easy')
    {
        amount=10;
    }
    else if(difficulty=='medium')
    {
        amount=15;
    }
    else
    {
        amount=20;
    }
    
    try {
        const response = await fetch(
            `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
        );
        const data = await response.json();
        
        if (data.response_code === 0) {
            questions = data.results;
            showScreen('quizScreen');
            currentQuestionIndex = 0;
            score = 0;
            updateScoreDisplay();
            showQuestion();
        } else {
            alert('Failed to load questions. Please try again.');
        }
    } catch (error) {
        alert('Error fetching questions. Please check your internet connection.');
    }
}

function showQuestion() 
{
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = decodeHtml(question.question);

    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('totalQuestions').textContent = questions.length;

    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort(() => Math.random() - 0.5);

    const optionsContainer = document.getElementById('options');
    optionsContainer.innerHTML = '';

    answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = decodeHtml(answer);
        button.onclick = () => checkAnswer(button,answer === question.correct_answer,question.correct_answer);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() 
{
    const question = questions[currentQuestionIndex];
    let timeLeft = 15;
    document.getElementById('timer').textContent = timeLeft;
    
    timerId = setInterval(() => {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timerId);
            handleTimeout();
        }
    }, 1000);
}

function handleTimeout() 
{
    const correctAnswer = questions[currentQuestionIndex].correct_answer;
    highlightCorrectAnswer(correctAnswer); 
    setTimeout(() => {
        nextQuestion(); 
    }, 1450); 
}

function highlightCorrectAnswer(correctAnswer) 
{
    const optionsContainer = document.getElementById('options');
    const buttons = optionsContainer.querySelectorAll('button');

    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === decodeHtml(correctAnswer)) {
            button.classList.add('correct');
        }
    });
}

function checkAnswer(selectedButton, isCorrect, correctAnswer) 
{
    clearInterval(timerId); 

    const optionsContainer = document.getElementById('options');
    const buttons = optionsContainer.querySelectorAll('button');

    buttons.forEach(button => {
        button.disabled = true;

        if (button.textContent === decodeHtml(correctAnswer)) 
        {
            button.classList.add('correct');
        }

        if (button === selectedButton && !isCorrect) 
        {
            button.classList.add('incorrect');
        }
    });

    if (isCorrect) 
    {
        score++;
        updateScoreDisplay();
    }

    setTimeout(() => {
        nextQuestion();
    }, 1450); 
}


function nextQuestion() 
{
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) 
    {
        showQuestion();
    } 
    else 
    {
        endQuiz();
    }
}

function updateScoreDisplay() 
{
    document.getElementById('scoreValue').textContent = score;
}

function endQuiz() 
{
    showScreen('endScreen');
    document.getElementById('finalScore').textContent = score;
    document.getElementById('totalQues').textContent=questions.length;
}

function resetQuiz() 
{
    showScreen('startScreen');
}

function showScreen(screenId) 
{
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}