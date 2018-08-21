document.addEventListener("DOMContentLoaded", () => {
  const questionBox = document.getElementById('question-box')
  const optionBox = document.getElementById('option-box')
  const optionButton = document.createElement("button")


loadQuestion()
  function loadQuestion(){
    //grabs random number between 0 and length of the array
    const randomEl = Math.floor(Math.random() * questions.length)

    //sets innerHTML of questionBox div to display question
    questionBox.innerHTML = questions[randomEl].question

    //invokes load answer function
    loadAnswerOptions(randomEl)
  }

  //
  function loadAnswerOptions(randomEl) {
    const questionOptions = Object.values(questions[randomEl].options)
    optionBox.innerHTML = questionOptions.map( answer => createButton(answer))
  }

  function createButton(answer){
    // const optionButton = `<button type="button" name="button"> </button>`
    optionButton.innerHTML = "button"
    console.log(optionButton.type);
    // optionButton.name = `${answer}`
    optionButton.innerText = `${answer}`
    optionBox.appendChild(optionButton)
}



})
