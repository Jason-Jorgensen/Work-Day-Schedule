
$(document).ready(function() {
    //Variables for showing the time and knowing what hour of the day it is
    var showDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    var currentHour=moment().hour();
    var totalHour = 18;
    //Pushes the curent date and time to the top of the HTML page
    $("#currentDay").text(showDate);
    //For Loop for determining which hour blocks to change the CSS styling. Grey for past, red for current and green for future.
    for (let index = 8; index < totalHour; index++) {
        var indexHour = index;
        var hourBlock = "#"+indexHour+" .taskEntry";
        if (currentHour > indexHour){
            $(hourBlock).addClass("past");

        }
        else if (currentHour == indexHour){
            $(hourBlock).addClass("present");
        }
        else{
            $(hourBlock).addClass("future");
        }
    };

    //Sends the row id and value of input to storage
    function pushToStorage() {
        var selectedRow = $(this).parent().parent().attr("id");
        var rowId = "#"+selectedRow+ " .taskEntry";
        var inputText = $(rowId).children().val();
        localStorage.setItem(rowId , inputText);
    };
    //Sets the input value to whatever is in storage.
    function renderFromStorage () {
        for (let i = 8; i < totalHour; i++) {
            var inputSelector = "#"+i+" .taskEntry";
            var getStorage = localStorage.getItem(inputSelector);
            $(inputSelector).children().val(getStorage);  
        }
    }
    //Function executed always.
    renderFromStorage();
    
    $(document).on("click",".save", pushToStorage);
    $(".clear").on("click",function(){
        localStorage.clear();
        location.reload();
    });
    

});

