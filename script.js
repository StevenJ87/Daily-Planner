//Planner timing_________

var currentHour = moment().hour();

//Function for setting date and time
function update(){
    //Date and time
    $("#currentDay").text(moment().format('LLLL'));
    inputsRefresh();
}

//Timer for running the date,time and inputs refresh function every 60 seconds to update
$(document).ready(function(){
    update();
    check();
    setInterval(update, 6000)
});

function check(){
    $("textarea").each(function()   {
        var name = parseInt($(this).attr("name"));
    if(name == currentHour){
        $(this).addClass("current");
    } else if(name < currentHour){
        $(this).addClass("past");
    } else if (name > currentHour){
        $(this).removeClass("past","current");
    }
    })};

//Planner timing^^^^^^^^^


//Saving Notes___________

$(".input-group").click(function(){
    // Text area input
    var inputs = this.children[1].value

    // Making sure its just button that is clicked
    if((event.target).type === "button"){

        // Storing inputs in local storage
        localStorage.setItem("'"+this.id+"'", inputs);

    };
})
        // Pulling saved items in local storage and putting them on page
function inputsRefresh(){
        // Setting this function to apply to every textarea
    $(".input-group").each(function(){
        // Setting variable for items stored in local storage
       var inputs = localStorage.getItem("'"+this.id+"'");
       // setting the textarea values to the items in local storage
       $(this.children[1]).text(inputs);
    })
};

//Saving Notes^^^^^^^^^^^

