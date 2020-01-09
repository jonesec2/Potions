var resource = [Number(2000)]
$('#resource').html("Available Resources: " + parseInt(resource) + " points")

$('#buyButton').on("click", function () {
    var amount = prompt("How much gold will you spend to add resources?")
    resource = Number(resource) + Number(amount)

    $('#resource').html("Available Resources: " + parseInt(resource) + " points")
})

//getting undefined
// try for each
$('.check').on("click", function() {
    var r = confirm("Are you sure?")
    if (r == true) {
        console.log("yes")
        var cost = $("#cost").attr("data-number")
        resource = Number(resource) - Number(cost)
        $('#resource').html("Available Resources: " + parseInt(resource) + " points")
    }
    else { console.log("canceled") }
})


// $('#cost').on("click", function() {
//     var cost = $("button").data("number")
//     console.log(cost)
//     confirm("Are you sure?")
//     if (true) {
//         var cost = $("button").data("number")
//         console.log(cost)
//     }
//     else { return }
// })


