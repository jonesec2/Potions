var resource = []


$('#buyMore').on("click", function() {
    var amount = prompt("How much gold will you spend to add resources?")
    console.log(amount)
})



$('#resource').html("Available Resources: " + resource)
