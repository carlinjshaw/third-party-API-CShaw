// var myDataHour = $("#9amtext").attr("id");
// console.log(myDataHour)

//date for the header
var myCurrentDay = moment().format("MMM Do H:m")    
console.log(myCurrentDay)     
var dateText = document.getElementById('currentDay')       
dateText.textContent = myCurrentDay

var saved9amtext = localStorage.getItem("9amtext") 
var saved10amtext = localStorage.getItem("10amtext") 
var saved11amtext = localStorage.getItem("11amtext") 
var saved12pmtext = localStorage.getItem("12pmtext") 
var saved1pmtext = localStorage.getItem("1pmtext") 
var saved2pmtext = localStorage.getItem("2pmtext") 
var saved3pmtext = localStorage.getItem("3pmtext") 
var saved4pmtext = localStorage.getItem("4pmtext") 
var saved5pmtext = localStorage.getItem("5pmtext") 


            // setter
            $("#9amtext").val(saved9amtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
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


            $("#11amtext").val(saved11amtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
            var elevenAmBlock = $("#11amtext") 

            if (currentTime > 11){
                elevenAmBlock.addClass("past")
            }
            else if (currentTime < 11){
                elevenAmBlock.addClass("future")
            }
            else if (currentTime === 11){
                elevenAmBlock.addClass("present")
            }

            $("#11ambutton").on("click", function() {
            // getter
            var my11amText = $("#11amtext").val()
            console.log(my11amText)
            localStorage.setItem("11amtext", my11amText)
            })


$("#12pmtext").val(saved12pmtext)
//logic for background colors
var currentTime = parseInt(moment().format("H"))
var twelvePmBlock = $("#12pmtext") 

if (currentTime > 12){
    twelvePmBlock.addClass("past")
}
else if (currentTime < 12){
    twelvePmBlock.addClass("future")
}
else if (currentTime === 12){
    twelvePmBlock.addClass("present")
}

$("#12pmbutton").on("click", function() {
// getter
var my12pmText = $("#12pmtext").val()
console.log(my12pmText)
localStorage.setItem("12pmtext", my12pmText)
})



            $("#1pmtext").val(saved1pmtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
            var onePmBlock = $("#1pmtext") 

            if (currentTime > 13){
                onePmBlock.addClass("past")
            }
            else if (currentTime < 13){
                onePmBlock.addClass("future")
            }
            else if (currentTime === 13){
                onePmBlock.addClass("present")
            }

            $("#1pmbutton").on("click", function() {
            // getter
            var my1pmText = $("#1pmtext").val()
            console.log(my1pmText)
            localStorage.setItem("1pmtext", my1pmText)
            })


$("#2pmtext").val(saved2pmtext)
//logic for background colors
var currentTime = parseInt(moment().format("H"))
var twoPmBlock = $("#2pmtext") 

if (currentTime > 14){
    twoPmBlock.addClass("past")
}
else if (currentTime < 14){
    twoPmBlock.addClass("future")
}
else if (currentTime === 14){
    twoPmBlock.addClass("present")
}

$("#2pmbutton").on("click", function() {
// getter
var my2pmText = $("#2pmtext").val()
console.log(my2pmText)
localStorage.setItem("2pmtext", my2pmText)
})


            $("#3pmtext").val(saved3pmtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
            var threePmBlock = $("#3pmtext") 

            if (currentTime > 15){
                threePmBlock.addClass("past")
            }
            else if (currentTime < 15){
                threePmBlock.addClass("future")
            }
            else if (currentTime === 15){
                threePmBlock.addClass("present")
            }

            $("#3pmbutton").on("click", function() {
            // getter
            var my3pmText = $("#3pmtext").val()
            console.log(my3pmText)
            localStorage.setItem("3pmtext", my3pmText)
            })

$("#4pmtext").val(saved4pmtext)
//logic for background colors
var currentTime = parseInt(moment().format("H"))
var fourPmBlock = $("#4pmtext") 

if (currentTime > 16){
    fourPmBlock.addClass("past")
}
else if (currentTime < 16){
    fourPmBlock.addClass("future")
}
else if (currentTime === 16){
    fourPmBlock.addClass("present")
}

$("#4pmbutton").on("click", function() {
// getter
var my4pmText = $("#4pmtext").val()
console.log(my4pmText)
localStorage.setItem("4pmtext", my4pmText)
})

            $("#5pmtext").val(saved5pmtext)
            //logic for background colors
            var currentTime = parseInt(moment().format("H"))
            var fivePmBlock = $("#5pmtext") 

            if (currentTime > 17){
                fivePmBlock.addClass("past")
            }
            else if (currentTime < 17){
                fivePmBlock.addClass("future")
            }
            else if (currentTime === 17){
                fivePmBlock.addClass("present")
            }

            $("#5pmbutton").on("click", function() {
            // getter
            var my5pmText = $("#5pmtext").val()
            console.log(my5pmText)
            localStorage.setItem("5pmtext", my5pmText)
            })