var type = document.getElementsByName('mathType');


$(document).ready(function(){
  $('#reset').click(function(){
    ('.add').empty();
    ('.subtract').empty();
    ('.multiply').empty();
    ('.divide').empty();
    ('#sign').empty();
    ('#x').empty();
    ('#y').empty();
  });
  $('.add').click(function(){
    $('#sign').empty();
    $('#sign').append('+');
    for (var i = 0; i < type.length; i++) {
      if(type[i].checked === true){
        selectedType = type[i].value;
        console.log(selectedType);
        return selectedType;
      }


    }
  });
$('.subtract').click(function(){
  $('#sign').empty();
  $('#sign').append('-');
  for (var i = 0; i < type.length; i++) {
    if(type[i].checked === true){
      selectedType = type[i].value;
      console.log(selectedType);
      return selectedType;
    }
  }
});
$('.multiply').click(function(){
  $('#sign').empty();
  $('#sign').append('X');
  for (var i = 0; i < type.length; i++) {
    if(type[i].checked === true){
      selectedType = type[i].value;
      console.log(selectedType);
      return selectedType;
    }
  }
});
  $('.divide').click(function(){
    $('#sign').empty();
    $('#sign').append('/');
    for (var i = 0; i < type.length; i++) {
      if(type[i].checked === true){
        selectedType = type[i].value;
        console.log(selectedType);
        return selectedType;

      }
    }
 });
$('#sendInfo').click(function(){
  serverOps();
});


});
var formatResponse = function( response )
{
  console.log( 'in processResponse: ' + response );
  // new p tag
  var newParagraph = document.createElement('p');
  // with out output data
  newParagraph.textContent = response;
  // empty our output div
  document.getElementById('outputDiv').innerHTML='';
  // append newParagraph to output
  document.getElementById('outputDiv').appendChild( newParagraph );
};

function serverOps(){
var x = $('#x').val();
var y = $('#y').val();
var type = selectedType;
var mathObject = {"x": x, "y":y, "type": selectedType};
console.log(mathObject);

    $.ajax({
        type: "POST",
        data: mathObject,
        url: "/doMathModule",
        success: function(data){
            console.log('this works');
          formatResponse(data);
        }
    });
}
