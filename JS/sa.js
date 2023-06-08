/*
 * Show Answer
 */

var body = $response.body;
var obj = JSON.parse(body);
var answer = obj.question.answer;

if (answer.indexOf("A") != -1) {
  obj.question.optionOne = "·" + obj.question.optionOne;
}

if (answer.indexOf("B") != -1) {
  obj.question.optionTwo = "·" + obj.question.optionTwo;
}

if (answer.indexOf("C") != -1) {
  obj.question.optionThree = "·" + obj.question.optionThree;
}

if (answer.indexOf("D") != -1) {
  obj.question.optionFour = "·" + obj.question.optionFour;
}

if (answer.indexOf("E") != -1) {
  obj.question.optionFive = "·" + obj.question.optionFive;
}

if (answer.indexOf("F") != -1) {
  obj.question.optionSix = "·" + obj.question.optionSix;
}

if (answer.indexOf("T") != -1) {
  obj.question.content = "·" + obj.question.content;
}

body = JSON.stringify(obj);

//console.log(body);

$done({body});
