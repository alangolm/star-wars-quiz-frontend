document.addEventListener("DOMContentLoaded", () => {
  const questionContainer = document.getElementById('question-container')
  const answerChoicesBox = document.getElementById('answer-choices-container')
  const scoresUrl = 'http://localhost:3000/api/v1/scores'
  const playersUrl = 'http://localhost:3000/api/v1/players'
  const starWarsThemeSong = new sound("StarWarsSong.mp3")
  // starWarsThemeSong.play()
  const inputNameForm = document.getElementById('input-initials-form')
  const nameInputValue = document.getElementById('name-input-value')
  const homePage = document.getElementById('home-page')
  const scoreNav = document.getElementById('score-nav')
  const startOver = document.getElementById('start-over-button-container')
  const lifeOne = document.getElementById('xwing1')
  const lifeTwo = document.getElementById('xwing2')
  let lastPlayer
  // console.log(lastPlayer);
  let playerName
  //used for buttonId
  let buttonCounter = 0
  let playerScore = 0
  let livesCounter = 2
  let randomArr = randomizeArray(questions)


  inputNameForm.addEventListener('submit', event => {
    event.preventDefault()
    playerName = nameInputValue.value
    addPlayer()
    homePage.style.display = "none"
    // console.log(playerName);
    loadQuestion()
    lifeOne.style.display = "inline"
    lifeTwo.style.display = "inline"
  })

  function loadQuestion() {
    buttonCounter = 0
    //resets question container and answer choices to be blank at the start of each loadQuestion()
    questionContainer.innerHTML = " "
    answerChoicesBox.innerHTML = " "
    // create a p tag and set its innerHTML to be a random question from the questions array
    let pTag = document.createElement('p')
    pTag.style = "color:#feda4a"
    pTag.innerHTML = randomArr[0].question
    questionContainer.append(pTag)
    loadAnswers()
  }

  // grabs all of the answer options for each random question from the array
  function loadAnswers() {
    let answerChoices = Object.values(randomArr[0].options)
    // iterating over the array of answer choices and for each answer the callback function will add behavior to each element
    answerChoices.forEach( answer => displayAnswers(answer))
  }

  // this function will add behavior to each element in the answers array
  function displayAnswers(answer) {
    // creating a button tag for each element
    const answerButton = document.createElement('button')
    // setting the innerHTML of each button to be the "answer" that is passed in to the function
    answerButton.id = ++buttonCounter
    answerButton.className = "button"
    // answerButton.innerText.style = "color:#feda4a"
    answerButton.dataset.actionButton = "answer-choice"
    answerButton.innerHTML = `${answer}`
    // console.log(answerButton);
    // appending each answer button, whose innerHTML is each answer from the array, to the answer choices container
    answerChoicesBox.append(answerButton)
    // not sure how this works, but it adds br tags after each button element
    answerChoicesBox.innerHTML += `<br><br>`
  }

  answerChoicesBox.addEventListener('click', event => {
    const questionCorrectAnswer = randomArr[0].correctAnswer
    // this is the id for each answer button
    const answerButtonId = event.target.id
    // this is the value of button id switched to a string of option answer letter
    const transferredValue = switchValue(answerButtonId)
    if (event.target.dataset.actionButton === "answer-choice") {

      if (transferredValue === questionCorrectAnswer && livesCounter > 0 ) {

        // console.log("correct answer is", questionCorrectAnswer)
        // console.log("transferredValue: ", transferredValue)
        // console.log("event.target.id is: ", event.target.id)

        // console.log("this is correct", switchValue(answerButtonId));
        playerScore += 10
        // console.log("lives counter is: ", livesCounter)
        // console.log("player score is: ", playerScore);
        // console.log("questions length", randomArr.length);
        randomArr.shift()
        // console.log("new questions length", randomArr.length)
        setTimeout(loadQuestion, 1977)


        event.target.style = "background-color: #4CAF50;" //green

      } else if (transferredValue !== questionCorrectAnswer && livesCounter > 0){

          livesCounter--
          lifeTwo.style.display = "none"
          event.target.style = "background-color: #f44336;" //red
          randomArr.shift()
          setTimeout(loadQuestion, 1977)
        }
    }

    if (livesCounter === 0) {
      lifeOne.style.display = "none"
      gameOver()
      }

  function gameOver() {
    questionContainer.innerHTML = ''
    answerChoicesBox.innerHTML = ''
    let finalScore = document.createElement('p')
    finalScore.innerHTML = `Your Score: ${playerScore}`
    startOver.append(finalScore)
    addScore()
  }
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

  function sound(src) {
       this.sound = document.createElement("audio");
       this.sound.src = src;
       this.sound.setAttribute("preload", "auto");
       this.sound.setAttribute("controls", "none");
       this.sound.style.display = "none";
       document.body.appendChild(this.sound);
       this.play = function(){
           this.sound.play();
       }
       this.stop = function(){
           this.sound.pause();
     }
  }

  //randomizes array
  function randomizeArray(array) {
    var i = 0
      , j = 0
      , temp = null

    for (i = array.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
      return array
  }

  // function getPlayer() {
  //   fetch()
  // }

  function addPlayer() {
    const playerConfig = {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(
        { name: playerName }),
    }
    fetch(playersUrl, playerConfig)
      .then(res => res.json())
      .then(data => lastPlayer = data.id)
  }

  function getScores() {
    fetch(scoresUrl).then(res=>res.json()).then(data=>displayScores(data))
  }

  getScores()

  function displayScores(data) {
    scoreNav.innerHTML = data.map(score => {return `<table>
                                                      <tr>
                                                        <td>${score.player_id}</td>
                                                        <td>${score.points}</td>
                                                      </tr>
                                                    </table>`
    }).join('')
  }

  function addScore() {
    console.log("this is", lastPlayer);
    const postConfig = {
      method: 'POST',
      headers: {
        'Content-type':'application/json'
      },
      body: JSON.stringify(
        {points: playerScore,
        player_id: lastPlayer}),
    }
    fetch(scoresUrl, postConfig)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
    })
  }









})
