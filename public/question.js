const questions = [
    {
         question: "What is the purpose of a firewall in cybersecurity?",
         difficulty: "medium",
        answers: [
            { text: "To physically protect computer hardware", correct: false },
            { text: "To prevent unauthorized access and attacks", correct: true },
            { text: "To block advertisements on websites", correct: false },
            { text: "To enhance internet speed", correct: false },
        ]
    },
    {
        question: "Which of the following is the most secure password?",
        difficulty: "easy",
        answers: [
            { text: "password123", correct: false },
            { text: "MyDog'sName", correct: false },
            { text: "Qwertyuiop", correct: false },
            { text: "$tronGPa55!", correct: true },
        ]
    },
    {
        question: "What is phishing?",
        difficulty: "easy",
        answers: [
            { text: "A type of online game", correct: false },
            { text: "A technique used by hackers to send malicious emails", correct: true },
            { text: "A social media platform", correct: false },
            { text: "A form of virtual reality", correct: false },
        ]
    },
    {
        question: "What is malware?",
        difficulty: "easy",
        answers: [
            { text: "A type of computer hardware", correct: false },
            { text: "Software used for managing emails", correct: false },
            { text: "Malicious software designed to harm or exploit computers", correct: true },
            { text: "A secure internet connection protocol", correct: false },
        ]
    },
    {
        question: "Which of the following is a common example of a social engineering attack?",
        difficulty: "easy",
        answers: [
            { text: "Installing antivirus software", correct: false },
            { text: "Setting up a secure Wi-Fi network", correct: false },
            { text: "Sending phishing emails", correct: true },
            { text: "Updating software regularly", correct: false },
        ]
    },
    {
        question: "What is two-factor authentication (2FA)?",
        difficulty: "medium",
        answers: [
            { text: "A type of online game genre", correct: false },
            { text: "A method to secure a Wi-Fi network around two points", correct: false },
            { text: "A technique used in encryption requiring two keys", correct: false },
            { text: "A security measure that requires two forms of verification to access an account", correct: true },
        ]
    },
    {
        question: "What is the purpose of a VPN (Virtual Private Network)?",
        difficulty: "medium",
        answers: [
            { text: "To securely connect to the internet and protect data", correct: true },
            { text: "To make phone calls over the internet", correct: false },
            { text: "To boost internet speed", correct: false },
            { text: "To improve Wi-Fi signal strength", correct: false },
        ]
    },
    {
        question: "What is a 'zero-day exploit' in cybersecurity?",
        difficulty: "hard",
        answers: [
            { text: "A type of software vulnerability", correct: false },
            { text: "An attack that occurs at midnight", correct: false },
            { text: "A vulnerability that is known and patched immediately", correct: false },
            { text: "An attack that targets previously unknown vulnerabilities", correct: true },
        ]
    },
    {
        question: "What is the purpose of a 'sandbox' in cybersecurity?",
        difficulty: "hard",
        answers: [
            { text: "To create secure backups of data", correct: false },
            { text: "To test potentially harmful software in an isolated environment", correct: true },
            { text: "To store confidential files on a remote server", correct: false },
            { text: "To block access to malicious websites", correct: false },
        ]
    },
    {
        question: "Which of the following is a common method of social engineering?",
        difficulty: "medium",
        answers: [
            { text: "Phishing", correct: true },
            { text: "Encryption", correct: false },
            { text: "Firewall configuration", correct: false },
            { text: "Antivirus scanning", correct: false },
        ]
    },
    {
        question: "What is a 'brute-force attack'?",
        difficulty: "hard",
        answers: [
            { text: "An attack that targets a specific individual", correct: false },
            { text: "A type of malware that spreads rapidly", correct: false },
            { text: "A method of trying all possible combinations to guess a password", correct: true },
            { text: "A form of physical attack on computer hardware", correct: false },
        ]
    },
    {
        question: "What is 'ransomware'?",
        difficulty: "easy",
        answers: [
            { text: "A type of firewall", correct: false },
            { text: "A security software", correct: false },
            { text: "Malware that encrypts files and demands payment for decryption", correct: true },
            { text: "A method to secure Wi-Fi networks", correct: false },
        ]
    },
    {
        question: "What is the main purpose of a 'penetration test'?",
        difficulty: "medium",
        answers: [
            { text: "To test the speed of an internet connection", correct: false },
            { text: "To identify vulnerabilities in a system's security", correct: true },
            { text: "To enhance the appearance of a website", correct: false },
            { text: "To increase the processing power of a computer", correct: false },
        ]
    },
    {
        question: "What does 'DNS' stand for in networking and cybersecurity?",
        difficulty: "hard",
        answers: [
            { text: "Data Network System", correct: false },
            { text: "Domain Name System", correct: true },
            { text: "Digital Network Security", correct: false },
            { text: "Dynamic Network Services", correct: false },
        ]
    },
    {
        question: "What is the difference between a 'virus' and a 'worm' in cybersecurity?",
        difficulty: "hard",
        answers: [
            { text: "A virus infects files, while a worm spreads independently", correct: true },
            { text: "A virus spreads through email, while a worm spreads through physical contact", correct: false },
            { text: "A virus encrypts files, while a worm locks users out of their accounts", correct: false },
            { text: "A virus attacks computer hardware, while a worm attacks software", correct: false },
        ]
    },
	
	    {
        question: "What is 'pharming'?",
        difficulty: "medium",
        answers: [
            { text: "A type of fishing technique", correct: false },
            { text: "An attack on a web server", correct: false },
            { text: "A method to create fake websites", correct: false },
            { text: "Redirecting users to malicious websites by altering DNS settings", correct: true },
        ]
    },
    {
        question: "What is 'social engineering'?",
        difficulty: "easy",
        answers: [
            { text: "A method to create secure passwords", correct: false },
            { text: "A technique used to secure wireless networks", correct: false },
            { text: "Manipulating individuals to reveal confidential information or perform actions", correct: true },
            { text: "A strategy to improve computer processing speed", correct: false },
        ]
    },
    {
        question: "What is a 'man-in-the-middle' attack?",
        difficulty: "medium",
        answers: [
            { text: "A physical attack on network cables", correct: false },
            { text: "An attack that targets individuals on social media", correct: false },
            { text: "An attack where an unauthorized party intercepts communication between two parties", correct: true },
            { text: "An attack on computer hardware", correct: false },
        ]
    },
    {
        question: "What does 'SQL injection' refer to?",
        difficulty: "hard",
        answers: [
            { text: "Injecting code into a computer game", correct: false },
            { text: "A technique used to inject malicious code into a website's database", correct: true },
            { text: "A method of increasing internet speed", correct: false },
            { text: "Injecting code into a smartphone's operating system", correct: false },
        ]
    },
    {
        question: "What is the purpose of a 'honeypot' in cybersecurity?",
        difficulty: "medium",
        answers: [
            { text: "To catch malicious hackers and report them to authorities", correct: true },
            { text: "To store sensitive data securely", correct: false },
            { text: "To boost Wi-Fi signal strength", correct: false },
            { text: "To block access to malicious websites", correct: false },
        ]
    },
    {
        question: "What does 'BYOD' stand for in the context of cybersecurity?",
        difficulty: "easy",
        answers: [
            { text: "Bring Your Own Device", correct: true },
            { text: "Build Your Own Database", correct: false },
            { text: "Backup Your Online Data", correct: false },
            { text: "Block Your Online Dangers", correct: false },
        ]
    },
    {
        question: "What is 'steganography'?",
        difficulty: "hard",
        answers: [
            { text: "A type of computer virus", correct: false },
            { text: "A method of hiding information within another type of file", correct: true },
            { text: "A technique used to encrypt communication", correct: false },
            { text: "A tool for securely storing passwords", correct: false },
        ]
    },
    {
        question: "What does 'Eavesdropping' refer to in cybersecurity?",
        difficulty: "medium",
        answers: [
            { text: "Monitoring and intercepting private communication", correct: true },
            { text: "Blocking access to websites", correct: false },
            { text: "Hiding sensitive data in encrypted files", correct: false },
            { text: "Scanning for vulnerabilities in computer networks", correct: false },
        ]
    },
    {
        question: "What is a 'side-channel attack'?",
        difficulty: "hard",
        answers: [
            { text: "Attacking a computer's side panel to gain access", correct: false },
            { text: "Exploiting vulnerabilities in a computer's hardware", correct: false },
            { text: "Using alternative communication channels to hack into a system", correct: true },
            { text: "Gaining unauthorized access through a backdoor", correct: false },
        ]
    },
    {
        question: "What is the primary goal of 'ransomware' attacks?",
        difficulty: "medium",
        answers: [
            { text: "To steal personal information", correct: false },
            { text: "To gain unauthorized access to a network", correct: false },
            { text: "To encrypt files and demand a ransom for their release", correct: true },
            { text: "To delete files from a computer", correct: false },
        ]
    },
    {
        question: "How does two-factor authentication enhance online security?",
        difficulty: "medium",
        answers: [
            { text: "It encrypts all online communications", correct: false },
            { text: "It requires users to share personal information with the website", correct: false },
            { text: "It allows the user to access their accounts more easily", correct: false },
            { text: "It adds an extra layer of verification beyond just a password", correct: true },
        ]
    },
    {
        question: "In what way can public Wi-Fi networks pose a risk to personal information?",
        difficulty: "medium",
        answers: [
            { text: "They are often slow and unreliable", correct: false },
            { text: "They can compromise the security of shared data", correct: true },
            { text: "They provide encryption for data transmission", correct: false },
            { text: "They make your device run slower", correct: false },
        ]
    },
    {
        question: "Why is password hygiene important in the online space?",
        difficulty: "medium",
        answers: [
            { text: "It prevents unauthorized physical access", correct: false },
            { text: "It ensures you remember all your passwords", correct: false },
            { text: "It strengthens online safety and security", correct: true },
            { text: "It speeds up internet connection", correct: false },
        ]
    },
    {
        question: "What is the purpose of regularly changing passwords and using diverse measures?",
        difficulty: "medium",
        answers: [
            { text: "To make your accounts look more secure", correct: false },
            { text: "To make it harder for potential attackers to access your information", correct: true },
            { text: "To improve internet speed", correct: false },
            { text: "To prevent websites from tracking your activities", correct: false },
        ]
    },
    {
	        question: "Why is using a password manager recommended?",
            difficulty: "medium",
        answers: [
            { text: "To avoid using any passwords at all", correct: false },
            { text: "To easily remember all passwords", correct: false },
            { text: "To generate complex passwords without remembering them", correct: true },
            { text: "To speed up the login process", correct: false },
        ]
    },
    {
        question: "What is the suggested frequency for updating or changing passwords?",
        difficulty: "medium",
        answers: [
            { text: "Once every year", correct: false },
            { text: "Once every three months", correct: true },
            { text: "Whenever you feel like it", correct: false },
            { text: "Only when you suspect a breach", correct: false },
        ]
    },
    {
        question: "What is a useful method to manage and generate complex passwords easily?",
        difficulty: "medium",
        answers: [
            { text: "Using random words and phrases", correct: false },
            { text: "Only using numbers and special characters", correct: false },
            { text: "Using a password manager", correct: true },
            { text: "Asking friends for suggestions", correct: false },
        ]
    },
    {
        question: "What is ESET known for in the cybersecurity industry?",
        difficulty: "medium",
        answers: [
            { text: "Providing free Wi-Fi", correct: false },
            { text: "Offering physical security devices", correct: false },
            { text: "Offering robust cybersecurity solutions", correct: true },
            { text: "Developing social media platforms", correct: false },
        ]
    },
    {
        question: "How can ESET products benefit end-users?",
        difficulty: "medium",
        answers: [
            { text: "By offering entertainment services", correct: false },
            { text: "By providing hardware solutions", correct: false },
            { text: "By improving Wi-Fi speed", correct: false },
            { text: "By protecting them from online threats", correct: true },
        ]
    },
    {
        question: "What is the primary goal of using ESET's Smart Security Premium?",
        difficulty: "medium",
        answers: [
            { text: "To make your computer run faster", correct: false },
            { text: "To offer free trials of software", correct: false },
            { text: "To provide entertainment content", correct: false },
            { text: "To protect your digital identity and secure your devices", correct: true },
        ]
    },
    {
        question: "How does ESET protect users from phishing attempts?",
        difficulty: "medium",
        answers: [
            { text: "By sending spam emails to attackers", correct: false },
            { text: "By detecting and blocking malicious websites", correct: true },
            { text: "By sharing personal information with websites", correct: false },
            { text: "By offering free software downloads", correct: false },
        ]
    },
    {
        question: "Why is keeping software up to date important for cybersecurity?",
        difficulty: "medium",
        answers: [
            { text: "It makes your computer slower", correct: false },
            { text: "It's a legal requirement", correct: false },
            { text: "It provides access to more entertaining content", correct: false },
            { text: "It ensures the latest security patches are applied", correct: true },
        ]
    },
    {
        question: "In what way can ESET contribute to protecting your digital identity?",
        difficulty: "medium",
        answers: [
            { text: "By publicly sharing your personal information", correct: false },
            { text: "By recommending weak passwords", correct: false },
            { text: "By protecting against malware only", correct: false },
            { text: "By safeguarding your online accounts and sensitive information", correct: true },
        ]
    },
];

let startTime;
let timerInterval;
const timerElement = document.getElementById("timer");

function startTimer() {
    startTime = new Date().getTime();
    timerInterval = setInterval(() => {
        const elapsedSeconds = Math.floor(getTimeElapsed());
        timerElement.innerText = formatTime(elapsedSeconds);
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function getTimeElapsed() {
    const endTime = new Date().getTime();
    return (endTime - startTime) / 1000; // returns time in seconds
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return String(minutes).padStart(2, '0') + ":" + String(remainingSeconds).padStart(2, '0');
}

// Shuffle function to randomize the order of questions
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array; // Add this line to return the shuffled array
}

// Shuffle the questions array
shuffle(questions);

const NUM_OF_QUESTIONS = 10;

const selectedQuestions = questions.slice(0, NUM_OF_QUESTIONS); // Select the first 10 questions

const questionElement = document.getElementById("question");
const questionNumElement = document.getElementById("questionNum");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const quitButton = document.getElementById("quit-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("leaderboard").style.display = "none"; // Hide the leaderboard
    nextButton.innerHTML = "<span>Continue</span>"; // Reset the text of the nextButton
    showQuestion(); // Call showQuestion() to display the first question
    nextButton.style.display = "none"; // Hide the "Next" button initially
    quitButton.style.display = "block"; // Show the "Quit" button
}

function showQuestion(){
    startTimer(); // Start the timer when a question is displayed
    timerElement.innerText = "00:00"; // Reset the timer display
    resetState();
    let currentQuestion = selectedQuestions[currentQuestionIndex]; // Use selectedQuestions array
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = currentQuestion.question +"<br><br>";
    questionNumElement.innerHTML = "Question " + questionNo+" of "+NUM_OF_QUESTIONS;

    // Shuffle the answers for the current question
    let shuffledAnswers = shuffle([...currentQuestion.answers]);

    shuffledAnswers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("questionBtn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    quitButton.style.display = "block"; // Show the "Quit" button
}


function resetState(){
    nextButton.style.display = "none";
    quitButton.style.display = "none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
    
    const leaderboard = document.querySelector(".leaderboard");
    if (leaderboard) {
        leaderboard.remove();
    }
}

function calculateScore(difficulty, timeTaken) {
    let baseScore = 10;
    let deduction;

    switch(difficulty) {
        case "easy":
            deduction = 1 * timeTaken; // Deduct 1 point per second
            break;
        case "medium":
            deduction = 0.7 * timeTaken; // Deduct 0.7 points per second
            break;
        case "hard":
            deduction = 0.5 * timeTaken; // Deduct 0.5 points per second
            break;
        default:
            deduction = 1 * timeTaken; // Default deduction
    }

    return Math.max(baseScore - deduction, 0); // Ensure score doesn't go negative
}

function selectAnswer(e){
    stopTimer(); // Stop the timer when an answer is selected
    const timeTaken = getTimeElapsed(); // Get the time taken to answer
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score += calculateScore(currentQuestion.difficulty, timeTaken);
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

async function showScore() {
    resetState();
    questionNumElement.innerHTML = "Finished";
    questionElement.innerHTML = "You scored " + Math.round(score) + " out of 100";

    // Fetch the user's previous best score
    const previousBestScore = await getUserScore(firebase.auth().currentUser.uid);

    // Create the leaderboard
    const leaderboard = document.createElement("div");
    leaderboard.classList.add("leaderboard");
    leaderboard.innerHTML = "<h3>Leaderboard</h3>";

    const loadingIndicator = document.createElement("div");
    loadingIndicator.classList.add("loading-indicator");
    loadingIndicator.innerHTML = "Loading leaderboard...";
    leaderboard.appendChild(loadingIndicator);

    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    quitButton.style.display = "block";

    const childQuestionDiv = document.querySelector(".childQuestionDiv");
    childQuestionDiv.appendChild(leaderboard);

    await saveUserScore(Math.round(score));

    // Fetch top 5 scores
    let topScores = await getTopScores(5);

    // Check if user's current score is in the top 5
    let isInTop5 = topScores.some(entry => entry.userId === firebase.auth().currentUser.uid && entry.score === Math.round(score));

    // If user's current score is not in the top 5, add it to the list
    if (!isInTop5) {
        topScores.push({
            userId: firebase.auth().currentUser.uid,
            username: firebase.auth().currentUser.displayName,
            score: Math.round(score)
        });
    }

    // Sort the scores
    topScores.sort((a, b) => b.score - a.score);

    // Remove the loading indicator
    loadingIndicator.remove();

    // Display the scores on the leaderboard
    topScores.forEach(entry => {
        const scoreElement = document.createElement("div");
        scoreElement.classList.add("score-entry");
        scoreElement.innerHTML = `${entry.username}: ${entry.score}`;
        if (entry.userId === firebase.auth().currentUser.uid && entry.score === Math.round(score)) {
            scoreElement.classList.add("current-player");
        }
        leaderboard.appendChild(scoreElement);
    });

    // Display a congratulations message if the user scores a personal best
    if (!previousBestScore || score > previousBestScore.score) {
        const personalBestMessage = document.createElement("div");
        personalBestMessage.classList.add("personal-best-message");
        personalBestMessage.innerHTML = "Congratulations! You've achieved a new personal best!";
        questionElement.appendChild(personalBestMessage);
    }
}





// Fetches the top N scores
function getTopScores(limit) {
    const db = firebase.firestore();
    return db.collection('Scores')
        .orderBy('score', 'desc')
        .limit(limit)
        .get()
        .then(snapshot => {
            return snapshot.docs.map(doc => doc.data());
        });
}

// Fetches the score of a specific user
function getUserScore(userId) {
    const db = firebase.firestore();
    return db.collection('Scores').doc(userId)
        .get()
        .then(doc => {
            if (doc.exists) {
                return doc.data();
            } else {
                return null;
            }
        });
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < NUM_OF_QUESTIONS){
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < NUM_OF_QUESTIONS){
        handleNextButton();
    } else {
        startQuiz();
    }
});

quitButton.addEventListener("click",quitQuiz);

function quitQuiz() {
    window.location.href = "index.html"
}

startQuiz();

async function saveUserScore(newScore) {
    const userId = firebase.auth().currentUser.uid;
    const db = firebase.firestore();
    const userRef = db.collection('Scores').doc(userId);

    // Fetch the current score from Firestore
    const doc = await userRef.get();

    // If the user doesn't have a score yet or the new score is greater than the current score, update it
    if (!doc.exists || newScore > doc.data().score) {
        return userRef.set({
            userId: userId,
            username: firebase.auth().currentUser.displayName,
            score: newScore
        }, { merge: true });
    }
}

firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log("User is logged in:", user);
    } else {
        console.log("No user is logged in.");
    }
});
