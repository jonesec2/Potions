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



//getting undefined
// try for each
$('.check').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#cost").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { return; console.log("canceled")  }
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
})

$('.checkNine').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costNine").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
})

$('.checkTen').on("click", function () {
    var r = confirm("Are you sure?")
    if (r == true) {
        var cost = $("#costTen").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
        localStorage.setItem('resource', resource)
    }
    else { console.log("canceled") }
})




