const cardArray = [
    {
        name: "shield",
        img: 'images/pixelShield.jpg',
    },
    {
        name: "sword",
        img: 'images/pixelSword.jpg',
    },
    {
        name: "slimeBlue",
        img: 'images/pixelSlimeBlue.jpg',
    },
    {
        name: "slimeGreen",
        img: 'images/pixelSlimeGreen.jpg',
    },
    {
        name: "slimeRed",
        img: 'images/pixelSlimeRed.jpg',
    },
    {
        name: "slimeYellow",
        img: 'images/pixelSlimeYellow.jpg',
    },
    {
        name: "shield",
        img: 'images/pixelShield.jpg',
    },
    {
        name: "sword",
        img: 'images/pixelSword.jpg',
    },
    {
        name: "slimeBlue",
        img: 'images/pixelSlimeBlue.jpg',
    },
    {
        name: "slimeGreen",
        img: 'images/pixelSlimeGreen.jpg',
    },
    {
        name: "slimeRed",
        img: 'images/pixelSlimeRed.jpg',
    },
    {
        name: "slimeYellow",
        img: 'images/pixelSlimeYellow.jpg',
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector("#grid")
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenId = []
const cardWon = []

function createBoard(){
    for( let i=0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'images/backOfCardCrown.jpg')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}


function checkMatch(){
    const card = document.querySelectorAll('img')
    const optionOneId = cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    console.log(card)
    console.log("check for a match")
    if(optionOneId == optionTwoId){
        card[optionOneId].setAttribute('src', 'images/backOfCardCrown.jpg')
        card[optionTwoId].setAttribute('src', 'images/backOfCardCrown.jpg')
        alert("YOU HAVE CLICKED THE SAME IMAGE!")
    }
    if(cardChosen[0] == cardChosen[1]){
        alert("YOUR HAVE A MATCH")
        card[optionOneId].setAttribute('src', 'images/whiteBackground.jpg')
        card[optionTwoId].setAttribute('src', 'images/whiteBackground.jpg')
        card[optionOneId].removeEventListener('click', flipCard)
        card[optionTwoId].removeEventListener('click', flipCard)
        cardWon.push(cardChosen)
    } else {
        card[optionOneId].setAttribute('src', 'images/backOfCardCrown.jpg')
        card[optionTwoId].setAttribute('src', 'images/backOfCardCrown.jpg')
        alert('SORRY TRY AGAIN')
    }
    resultDisplay.textContent = cardWon.length 
    cardChosen = []
    cardChosenId = []
    
    if(cardWon.length === cardArray.length/2){
        resultDisplay.textContent = "Congratulations you found them all!"
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}

createBoard()
