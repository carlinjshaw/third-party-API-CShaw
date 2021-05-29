// var myDataHour = $("#9amtext").attr("id");
// console.log(myDataHour)

//date for the header
var myCurrentDay = moment().format("MMM Do H:m")    
console.log(myCurrentDay)     
var dateText = document.getElementById('currentDay')       
dateText.textContent = myCurrentDay

var saved9amtext = localStorage.getItem("9amtext") 
var saved10amtext = localStorage.getItem("10amtext") 

            // setter
            $("#9amtext").val(saved9amtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
            console.log(currentTime)


            var nineAmBlock = $("#9amtext") 
            if (currentTime > 9){
            nineAmBlock.addClass("past")
            }
            else if (currentTime < 9){
                nineAmBlock.addClass("future")
            }
            else if (currentTime === 9){
                nineAmBlock.addClass("present")
            }

            $("#9ambutton").on("click", function() {
            // getter
            var my9amText = $("#9amtext").val()
            console.log(my9amText)
            localStorage.setItem("9amtext", my9amText)
            })

// for (let index = 0; index < array.length; index++) {
//   $("#"+index+"ambutton").on("click", function() {
//   // getter
//   var my9amText = $("#9amtext").val()
//   console.log(my9amText)

//   localStorage.setItem("9amtext", my9amText)
// })



// setter
$("#10amtext").val(saved10amtext)
//logic for background colors
var currentTime = parseInt(moment().format("H"))
console.log(currentTime)


var tenAmBlock = $("#10amtext") 
if (currentTime > 10){
    tenAmBlock.addClass("past")
}
else if (currentTime < 10){
    tenAmBlock.addClass("future")
}
else if (currentTime === 10){
    tenAmBlock.addClass("present")
}

$("#10ambutton").on("click", function() {
// getter
var my10amText = $("#10amtext").val()
console.log(my10amText)
localStorage.setItem("10amtext", my10amText)
})