function calculateScore() {
  
  var score = 0; 
  
  var choices = document.getElementsByTagName('input');
  for (i=0; i<choices.length; i++) {
    if (choices[i].checked) {
      if (choices[i].value == 'a') {
        score += 3;
      }else if (choices[i].value == 'b') {
        score +=2; 
      }else if (choices[i].value == 'c') {
        score+=1; 
      }else{
        score+=0;
      }
    }
  }

var answerbox = document.getElementById('answer');
if(score>=16){
  answerbox.innerHTML = "You got a score of " + score + ". You are part of the Green Thumb Tier which means that you are a very mentally aware person. Keep up the good work!"
} else if(score<16 && score >=10){
      answerbox.innerHTML = "You got a score of " + score + ". You are part of the Yellow Thumb Tier which means that you are pretty mentally aware but there's room for improvement. Check out the Learn More page to see how you can become even more mentally stable and healthy!"
} else if(score<10){
  answerbox.innerHTML = "You got a score of " + score + ". You are part of the Red Thumb Tier. Uh oh! It looks like you need to be a little more conscious of your actions. Check out the Learn More page to see how you can be more mentally aware."
}
}

function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your results will show up here!";
}


