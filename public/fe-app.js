var type = document.getElementsByName('mathType');

$(document).ready(function(){

//resets form
  $('#reset').click(function(){
    $('.add').prop('checked', true);
    $('.subtract').prop('checked', false);
    $('.multiply').prop('checked', false);
    $('.divide').prop('checked', false);
    $('#sign').empty();
    $('#outputDiv').empty();
    $('#x').val('');
    $('#y').val('');
  });
  //adds + symbol and returns type selected
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
//simulates button click on load to append + symbol
$('#add').click();
//adds - symbol and returns type selected 
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
//adds X symbol and returns type selected
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
//adds / symbol and returns type selected
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
//checks for empty boxes and, if none, submits entries
 $('#sendInfo').click(function(){
   if($('#x').val()==='' || $('#y').val() ===''){
     $('#outputDiv').append('Please enter values');
   }else{
      serverOps();
    }
});


});
//appends ajax response to DOM
var formatResponse = function( response )
{
  console.log( 'in processResponse: ' + response );

  var newParagraph = document.createElement('p');

  newParagraph.textContent = response;

  document.getElementById('outputDiv').innerHTML='';

  document.getElementById('outputDiv').appendChild( newParagraph );
};

// assembles object and sends ajax call to server
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
