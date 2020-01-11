// creates empty array to be populated by user input
var resource = []

// checks for local resource storage
// if none exists display "buy message"
// if local exists display local
if (localStorage.getItem('resource') === null) {
    $('#resource').html("Available Resources: None! Buy Some")
} else {
    resource = localStorage.getItem('resource')
    $('#resource').html("Available Resources: " + parseInt(resource) + " points")
}



$('#buyButton').on("click", function () {
    var amount = prompt("How much gold will you spend to add resources?")
    resource = Number(resource) + Number(amount)
    $('#resource').html("Available Resources: " + parseInt(resource) + " points")
    localStorage.setItem('resource', resource)
})

$('.test').on('click', function () {
    let potionCard = []

    let potionName = $('.potionName').text()
    potionCard.push(potionName)
    let potionDC = $('.dc').text()
    potionCard.push(potionDC)

    console.log(potionCard)

})

//getting undefined
// try for each
$('.check').on("click", function () {
    var r = confirm("Are you sure?");
    if (r == true) {
        var cost = $("#cost").attr("data-number");
        resource = Number(resource) - Number(cost);
        $('#resource').html("Available Resources: " + parseInt(resource) + " points");
        localStorage.setItem('resource', resource);
    }
    else { console.log("canceled"); }

    let potionCard = []

    let potionName = $('.potionName').text();
    potionCard.push(potionName);
    let potionDC = $('.dc').text();
    potionCard.push(potionDC);

    console.log(potionCard)
    localStorage.setItem('potionCard', JSON.stringify(potionCard));

})


$('.checkTwo').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costTwo").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }

    let potionCard = []

    let potionName = $('.potionNameTwo').text()
    potionCard.push(potionName)
    let potionDC = $('.dcTwo').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardTwo', JSON.stringify(potionCard));

})

$('.checkThree').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costThree").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }

    let potionCard = []

    let potionName = $('.potionNameThree').text()
    potionCard.push(potionName)
    let potionDC = $('.dcThree').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardThree', JSON.stringify(potionCard));

})

$('.checkFour').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costFour").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }

    let potionCard = []

    let potionName = $('.potionNameFour').text()
    potionCard.push(potionName)
    let potionDC = $('.dcFour').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardFour', JSON.stringify(potionCard));

})

$('.checkFive').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costFive").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }

    let potionCard = []

    let potionName = $('.potionNameFive').text()
    potionCard.push(potionName)
    let potionDC = $('.dcFive').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardFive', JSON.stringify(potionCard));

})

$('.checkSix').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costSix").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }

    let potionCard = []

    let potionName = $('.potionNameSix').text()
    potionCard.push(potionName)
    let potionDC = $('.dcSix').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardSix', JSON.stringify(potionCard));
})

$('.checkSeven').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costSeven").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
    
    let potionCard = []

    let potionName = $('.potionNameSeven').text()
    potionCard.push(potionName)
    let potionDC = $('.dcSeven').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardSeven', JSON.stringify(potionCard));
})

$('.checkEight').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costEight").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
    
    let potionCard = []

    let potionName = $('.potionNameEight').text()
    potionCard.push(potionName)
    let potionDC = $('.dcEight').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardEight', JSON.stringify(potionCard));
});

$('.checkNine').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costNine").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
    
    let potionCard = []

    let potionName = $('.potionNameNine').text()
    potionCard.push(potionName)
    let potionDC = $('.dcNine').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardNine', JSON.stringify(potionCard));
});

$('.checkTen').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costTen").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
    
    let potionCard = []

    let potionName = $('.potionNameTen').text()
    potionCard.push(potionName)
    let potionDC = $('.dcTen').text()
    potionCard.push(potionDC)
    localStorage.setItem('potionCardTen', JSON.stringify(potionCard));
});




