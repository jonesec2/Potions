// local storage for potion cards
var savedPotions = []
console.log(savedPotions)

$( document ).ready(function() {
    console.log( "ready!" );
});

$(document).ready(function () {
    savedPotions = JSON.parse(localStorage.getItem("potionCard"));
    console.log(savedPotions);
    var potionName = savedPotions[0];
    console.log(potionName);
    var potionDc = savedPotions[1];
    console.log(potionDc);

    var potionCard = /* html */ `
        <div class="potionCard border container">
                <div class="row">
                    <img class="img-fluid border picture float-left my-2 mx-4 col-6 mx-auto px-0"
                        src="https://via.placeholder.com/150" style="width: 150px; height: 150px;" alt="potion">
                    <div class="row col-12 col-md-6 mt-3 mb-2">
                        <h3 class="col-12 text-center mb-0">${potionName}
                            <hr id="titleHr">
                        </h3>
                        <h5 class="col-12">${potionDc}</h5>
                    </div>
                </div>
                <div class="row">
                    <p class="col-12 col-md-6 mx-auto darkText"> This is where you can see which potions are brewing.
                        And how much longer you have left</p>
                        <form class="col-12 col-md-6 mx-auto darkText row">
                        <div class="col-12 col-md-6">Day 1:</div>
                        <input class="col-12 col-md-6 form-control mr-sm-2" type="search" placeholder="Day 1 Roll Total"
                            aria-label="dice total">
                    </form>
                </div>
                <div class="row">
                    <div class="check col-12 col-md-6 mx-auto border"><button id="success" type="button"
                            class="btn btn-light">Success <i class="far fa-smile-beam"></i></button></div>
                    <div class="check col-12 col-md-6 mx-auto border"><button id="failure" type="button" 
                            class="btn btn-light">Failure <i class="far fa-sad-cry"></i></button>
                    </div>
                </div>
            </div>
            <br>
            `

    $('.cards').append(potionCard);

});
$( document ).ready(function() {
    $('#success').on('click', function () {
        $('.cards').empty();
        if(true) {
            alert("Success! Add this potion to your inventory");
        }
    });
    
    $('#failure').on('click', function () {
        $('.cards').empty();
        if(true) {
            alert("Failure... Try again");
        }
    
    });
});



JSON.parse(localStorage.getItem("potionCard"));


// local storage for each roll for each card

