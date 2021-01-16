
$(document).ready(function() {
    var showDate = moment().format("dddd, MMMM Do YYYY, h:mm a");
    var currentHour=moment().hour()-10;
    var totalHour = 18;
    $("#currentDay").text(showDate);

    for (let index = 8; index < totalHour; index++) {
        var indexHour = index;
        var hourBlock = "#"+indexHour+" .taskEntry";
        if (currentHour > indexHour){
            $(hourBlock).addClass("past");
            // console.log(indexHour +"index Hour");
            // console.log(hour + "hour")
        }
        else if (currentHour == indexHour){
            $(hourBlock).addClass("present");
        }
        else{
            $(hourBlock).addClass("future");
        }
    };
    
    function pushToStorage() {
        
        var selectedRow = $(this).parent().parent().attr("id");
        var rowId = "#"+selectedRow+ " .taskEntry";
        var workingSelector = $(rowId).children();
        var inputText = $(rowId).children().val();
        // console.log(inputText);
        localStorage.setItem(rowId , JSON.stringify(inputText));
        var fromLocalStorage = localStorage.getItem(rowId);
        console.log(fromLocalStorage);
        $(workingSelector).text(fromLocalStorage);
        // var localStorageReturn = localStorage.getItem(rowId);
        // $(workingSelector).HTML(localStorageReturn);
        // console.log(localStorageReturn);
        // console.log(workingSelector);
    };

    
    
    
    $(document).on("click",".save", pushToStorage)
    $(".clear").on("click",function(){
        localStorage.clear();
        location.reload();
    })
    

});

