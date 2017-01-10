// Dave Durkee
// 11.20.2016


$(document).ready(function(){
  // javascript, jQuery
  var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=dc6zaTOxFJmzC&limit=5");
  xhr.done(function(data) { console.log("success got data", data); });

    $("#button_begin").click(function(){
        //do this
        var test = "testing";
        console.log("Am i working: ", test);
    });


}); // end (document).ready(function()



//<!-- ---------------------------------- Event LOOPs begin --------------------------------------- -->
	document.onkeyup = function(event) {
    //

  } // end of document.onkeyup

//<!-- ---------------------------------- Event LOOPs end --------------------------------------- -->

