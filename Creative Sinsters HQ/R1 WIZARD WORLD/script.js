let votes = [0, 0, 0, 0];
let totalVotes = 0;

function vote(option) {
    votes[option]++;
    totalVotes++;
    updatePoll();
}

function updatePoll() {
    votes.forEach((voteCount, index) => {
        const percentage = ((voteCount / totalVotes) * 100).toFixed(1);
        document.getElementById(`option${index}`).style.width = `${percentage}%`;
        document.getElementById(`percentage${index}`).innerText = `${percentage}%`;
    });
}

document.addEventListener("DOMContentLoaded", updatePoll);


let currentIndex = 0;

function moveCarousel(direction) {
    const track = document.querySelector('.carousel-track');
    const slides = document.querySelectorAll('.carousel-slide');
    const slideWidth = slides[0].offsetWidth + 10; // Including padding and margin
    const maxIndex = slides.length - 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Variables 
var houses = [{
        id: "gryffindor",
        color: "#740001",
        message: "Congrats, you're in Gryffindor!"
    },
    {
        id: "hufflepuff",
        color: "#ecb939",
        message: "Congrats, you're in Hufflepuff!"
    },
    {
        id: "ravenclaw",
        color: "#0e1a40",
        message: "Congrats, you're in Ravenclaw!"
    },
    {
        id: "slytherin",
        color: "#1a472a",
        message: "Congrats, you're in Slytherin!"
    },
];
var sortButton = document.getElementById("sortButton");

// Creates a Sort Function 
function sortHouse() {
    var selection = houses[Math.floor(Math.random() * houses.length)];
    document.getElementById("message").innerHTML = selection.message;
    document.body.style.backgroundColor = selection.color;
}

// Call Sort Function On Click
sortButton.addEventListener("click", function() {
    sortHouse();
    sortButton.remove();
});