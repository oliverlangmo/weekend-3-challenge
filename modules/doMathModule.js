var mathProblem = function(x, y, mathOp){
  if (mathOp == '+'){
    var numSum = x + y;
    return numSum;
}else if (mathOp == '-'){
    var numDiff = x - y;
    return numDiff;
} else if (mathOp == '*'){
    var numProd = x * y;
    return numProd;
}else if (mathOp == '/') {
    var numQuo = x / y;
    return numQuo;
}

};
mathProblem();
module.exports = mathProblem;
