const characterBar = document.getElementById('character-bar') //for character-bar div 
//variables for elements within detailed-info div
const name = document.getElementById('name')
const image = document.getElementById('image')
const voteCount = document.getElementById('vote-count')

//form 
const votesForm = document.getElementById('votes-form')
votesForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let currentVotes = voteCount.innerText
    voteCount.innerText = parseInt(currentVotes) + parseInt(votesForm.votes.value)
})

//button
const resetBtn = document.getElementById('reset-btn')
resetBtn.addEventListener('click', () => {
    voteCount.innerText = 0
})

//get request 
const request = async () => {
    let req = await fetch("http://localhost:3000/characters")
    let res = await req.json()
    res.forEach((character, i) => {
        const span = document.createElement('span')
        span.innerText = character.name
        characterBar.append(span)
        span.addEventListener('click', () => {
            name.innerText = character.name
            image.src = character.image
            voteCount.innerText = character.votes
        })
    })
}

request()

