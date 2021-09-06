


function checkButtons(){
  var checks = 0; 
  var choices = document.getElementsByTagName('input');
  for (i=0; i<choices.length; i++) {
    if (choices[i].checked) {
        checks++;
    }
  }


var answerbox = document.getElementById('answer');
if(checks <=3){
    answerbox.innerHTML = "Keep trying! You'll be able to finish it off by the end of the day"
    } else if( checks >3 &&  checks  <5){
        answerbox.innerHTML = "Yes! You did great! You've completed your daily quota, but can you finish all of it?"
     } else if(checks >=6){
    answerbox.innerHTML = "Great Job! You should be proud of yourself. You've finished everything on the list!"
    }
}




function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Keep trying! You'll be able to finish it off by the end of the day";
}