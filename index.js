document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById('question-container')
  const answerChoicesBox = document.getElementById('answer-choices-container')

  function loadQuestion() {
    // grabs random # between 0 and length of the questions array
    let randomEl = Math.floor(Math.random() * questions.length)
    // console.log(randomQuestion);
    let pTag = document.createElement('p')
    pTag.style = "color:#feda4a"
    // create a p tag and set its innerHTML to be a random question from the questions array
    pTag.innerHTML = questions[randomEl].question
    // appending the p tag whose value is now the random question to the question container div
    questionContainer.append(pTag)
    loadAnswers(randomEl)
  }

  loadQuestion()

  function loadAnswers(randomEl) {
    // grabs all of the answer options for each random question from the array
    let answerChoices = Object.values(questions[randomEl].options)
    // console.log(answerChoices);
    // iterating over the array of answer choices and for each answer the callback function will add behavior to each element
    answerChoices.forEach(answer => displayAnswers(answer))
  }

  // this function will add behavior to each element in the answers array
  function displayAnswers(answer) {
    // creating a button tag for each element
    const answerButton = document.createElement('button')
    // setting the innerHTML of each button to be the "answer" that is passed in to the function
    answerButton.innerHTML = `${answer}`
    // console.log(answerButton);
    // appending each answer button, whose innerHTML is each answer from the array, to the answer choices container
    answerChoicesBox.append(answerButton)
    // not sure how this works, but it adds br tags after each button element
    answerChoicesBox.innerHTML += `<br><br>`
  }

})
