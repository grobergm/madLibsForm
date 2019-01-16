$(document).ready(function(){
  $("#madForm").submit(function(event){
    var person1Input=  $("input#person1").val();
    $(".person1Class").text(person1Input);

    var person2Input= $("input#person2").val();
    $(".person2").text(person2Input);

    var placeInput= $("input#place").val();
    $(".place").text(placeInput);

    event.preventDefault();
  });
})
