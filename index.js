document.addEventListener("DOMContentLoaded", () => {


  const questionContainer = document.getElementById('question-container')
  const answerChoicesBox = document.getElementById('answer-choices-container')

  //used for buttonId
  let buttonCounter = 0

  let playerScore = 0

  let livesCounter = 2

  // grabs random # between 0 and length of the questions array
  let randomEl = Math.floor(Math.random() * questions.length)

  //invokes initial loadQuestion function
let progressiveArray = questions

  loadQuestion()

  function newQuestion(){
    let newRandomEl = Math.floor(Math.random() * questions.length)
  }



  function loadQuestion() {
    questionContainer.innerHTML = " "
    answerChoicesBox.innerHTML = " "
    // create a p tag and set its innerHTML to be a random question from the questions array
    let pTag = document.createElement('p')
    pTag.style = "color:#feda4a"
    pTag.innerHTML = questions[randomEl].question

    // appending the p tag whose value is now the random question to the question container div
    questionContainer.append(pTag)

    //makes multiple buttons for this questions options
    loadAnswers(randomEl)
  }


  // grabs all of the answer options for each random question from the array
  function loadAnswers(randomEl) {
    let answerChoices = Object.values(questions[randomEl].options)
    // console.log(answerChoices);
    // iterating over the array of answer choices and for each answer the callback function will add behavior to each element
    answerChoices.forEach( answer => displayAnswers(answer) )

  }

  // this function will add behavior to each element in the answers array
  function displayAnswers(answer) {
    // creating a button tag for each element
    const answerButton = document.createElement('button')



    // setting the innerHTML of each button to be the "answer" that is passed in to the function
    answerButton.id = ++buttonCounter
    answerButton.dataset.actionButton = "answer-choice"


    answerButton.innerHTML = `${answer}`
    // console.log(answerButton);
    // appending each answer button, whose innerHTML is each answer from the array, to the answer choices container
    answerChoicesBox.append(answerButton)
    // not sure how this works, but it adds br tags after each button element
    answerChoicesBox.innerHTML += `<br><br>`
  }

answerChoicesBox.addEventListener('click', event => {
  const questionCorrectAnswer = questions[randomEl].correctAnswer
  console.log("correct answer is", questionCorrectAnswer)
  // this is the id for each answer button
  const answerButtonId = event.target.id
  // this is the value of button id switched to a string of option answer letter
  const transferredValue = switchValue(answerButtonId)


  if (event.target.dataset.actionButton === "answer-choice") {
    if (transferredValue === questionCorrectAnswer) {
      // console.log("this is correct", switchValue(answerButtonId));
      playerScore += 10

      // console.log(playerScore);
      event.target.style = "background-color: #4CAF50;"
    } else if (transferredValue !== questionCorrectAnswer){
    // console.log("wrong answer");
    livesCounter--
    // console.log(livesCounter);
    event.target.style = "background-color: #f44336;"
    }
    if (livesCounter > 0) {
      setTimeout(loadQuestion, 1977)
    }
  }

 // else {
 //
 //  }

})

  function switchValue(val) {
    if (val === "1"){
      let newVal = "a"
      return newVal
    }
    else if (val === "2"){
      let newVal = "b"
      return newVal
    }
    else if (val === "3"){
      let newVal = "c"
      return newVal
    }
  }



})
