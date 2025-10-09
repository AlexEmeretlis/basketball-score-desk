let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let count = 0
let countGuest = 0

function add1Point() {
    count += 1 
    homeScore.textContent = count
}

function add2Point() {
    count += 2
    homeScore.textContent = count
}

function add3Point() {
    count += 3 
    homeScore.textContent = count
}

function add1Pointguest() {
    countGuest += 1 
    guestScore.textContent = countGuest
}

function add2Pointguest() {
    countGuest += 2
    guestScore.textContent = countGuest
}

function add3Pointguest() {
    countGuest += 3 
    guestScore.textContent = countGuest
}