var type = document.getElementsByName('mathType');

$(document).ready(function(){
  $('input:radio:first').click();
  $('#reset').click(function(){
    $('.add').prop('checked', false);
    $('.subtract').prop('checked', false);
    $('.multiply').prop('checked', false);
    $('.divide').prop('checked', false);
    $('#sign').empty();
    $('#outputDiv').empty();
    $('#x').val('');
    $('#y').val('');
  });
  $('#add').click(function(){
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
$('#add').click();
$('#subtract').click(function(){
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
$('#multiply').click(function(){
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
  $('#divide').click(function(){
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
 var emptyCheck = function(){
 if ($('#x').val() || $('#y').val() === '') {
   var newParagraph = document.createElement('p');

   newParagraph.textContent = 'Please enter values';

   document.getElementById('outputDiv').innerHTML='';

   document.getElementById('outputDiv').appendChild( newParagraph );

 }
 };
$('#sendInfo').click(function(){
  serverOps();
  emptyCheck();
});


});
var formatResponse = function( response )
{
  console.log( 'in processResponse: ' + response );

  var newParagraph = document.createElement('p');

  newParagraph.textContent = response;

  document.getElementById('outputDiv').innerHTML='';

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
