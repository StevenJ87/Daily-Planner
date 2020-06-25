
//Function for setting date and time
function update(){
    //Date and time
    $("#currentDay").text(moment().format('LLLL'));
}

//Timer for running the date and time function every 60 seconds to update
$(document).ready(function(){
    update();
    setInterval(update, 6000)
});

if($(".col-sm-10").value == "8"){
$(".col-sm-10").addClass("current");
}