$(document).ready(function() {
    console.log("client.js is ready.");

$('#submit').click(function(){
  console.log("inside submit");
        var toAdd = $('input[id=firstName]').val();
        $('.list').append("<div class='item'>" + toAdd + "</div>");
    });

});
