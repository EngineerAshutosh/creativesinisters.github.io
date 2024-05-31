let currentInd = 0;
const itemsToShow = 4;

function showSlides(index) {
    const slides = document.querySelectorAll('.product-item');
    if (index >= slides.length) currentInd = 0;
    if (index < 0) currentIndex = slides.length - itemsToShow;
    
    slides.forEach((slide, i) => {
        slide.style.display = (i >= currentInd && i < currentInd + itemsToShow) ? "block" : "none";
    });
    
    // Disable buttons at the edges
    document.getElementById('prevBtn').disabled = currentInd === 0;
    document.getElementById('nextBtn').disabled = currentInd + itemsToShow >= slides.length;
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentInd += itemsToShow;
    showSlides(currentInd);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentInd -= itemsToShow;
    showSlides(currentInd);
});

// Initialize the slideshow
showSlides(currentInd);





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
    // document.body.style.backgroundColor = selection.color;
    document.getElementById("wrap").style.backgroundColor = selection.color;
}

// Call Sort Function On Click
sortButton.addEventListener("click", function() {
    sortHouse();
    sortButton.remove();
});
