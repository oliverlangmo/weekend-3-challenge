var firstNumberIn;
var secondNumberIn;
var type = document.getElementsByName('type');
var selectedType;


var getInput = function(){
  firstNumberIn = document.getElementById('x').value;
  secondNumberIn = document.getElementById('y').value;
  var mathProblem = {"x":x, "y":y, "selectedType": selectedType};

};
$(document).ready(function(){
  $('#add').click(function(){
    $('#sign').empty();
    $('#sign').append('+');
    for (var i = 0; i < type.length; i++) {
      if(type[i].checked === true){
        selectedType = type[i].value;
        return selectedType;
      }


    }
  });
$('#subtract').click(function(){
  $('#sign').empty();
  $('#sign').append('-');
  for (var i = 0; i < type.length; i++) {
    if(type[i].checked === true){
      selectedType = type[i].value;
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
        return selectedType;

      }
    }
 });


});
