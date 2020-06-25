//Planner timing_________

var getTime = moment();
var currentHour = getTime.hour();
console.log(currentHour);
//Function for setting date and time
function update(){
    //Date and time
    $("#currentDay").text(moment().format('LLLL'));
}

//Timer for running the date and time function every 60 seconds to update
$(document).ready(function(){
    update();
    check();
    setInterval(update, 6000)
});

var getTime = moment();
var currentHour = getTime.hour();

function check(){
    $("textarea").each(function()   {
        var name = parseInt($(this).attr("name"));
    if(name == currentHour){
        $(this).addClass("current");
        console.log(name);
    } else if(name < currentHour){
        $(this).addClass("past");
    } else if (name > currentHour){
        $(this).removeClass("past","current");
    }
    })};

//Planner timing^^^^^^^^^

//Saving Notes___________

