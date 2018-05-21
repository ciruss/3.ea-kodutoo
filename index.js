startTimer = function(){
  var pattern = /^(?:[1-9]\d*|\d)$/
   let setTimer = document.getElementById('setTimer')
  
  
     timer = () => {
        timerLength = document.getElementById('timerLength').value + '000';
        patterntest = (pattern.test(timerLength))
        if(patterntest === false){
          displayAlert()
        }
        else
        timerStart = timerLength
    
         let timeRemaining = setInterval(() => {
      timerLength -= 1000
           let minutes = Math.floor((timerLength % (1000 * 60 * 60)) / (1000 * 60))
           let seconds = Math.floor((timerLength % (1000 * 60)) / (1000))

      document.getElementById('timeLeft').innerHTML = 
        `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        calculateOpacity(timerLength)        
      if(timerLength <= 0){
      clearInterval(timeRemaining)
      mutePage()
    }
    }, 1000)
  }
  setTimer.addEventListener("click", timer)
}
var opacityVariable = 1;
//kalkuleerib lehe läbipaistvuse
calculateOpacity = function(){
  if(timerLength < 0 + parseInt((timerStart / 4))){
    opacityVariable = 0.25
    changeOpacity()
  }
  else if(timerLength < parseInt((timerStart / 2))){
    opacityVariable = 0.5
    changeOpacity()
  }
  else if(timerLength < (timerStart - parseInt((timerStart / 4)))){
    opacityVariable = 0.75
    changeOpacity()
  }
  else if(timerLength === 0){
    opacityVariable = 0
    changeOpacity()
  }
}
//vahetab lehe läbipaistvust
changeOpacity = function(){
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'document.body.style.opacity = "' + opacityVariable + '";'});
      })
  }
}
//Kui sisestad komaga arvu ss viskab alerdi
displayAlert = function(){
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {code: 'alert("Sisestage ainult täisarve")'});
      })
  }
}
//Vajab mingit timmimist
muteEverySound = function(){
{
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.executeScript(
            {file: 'background.js'});
      })
  }
}

document.addEventListener("DOMContentLoaded", function() {
    startTimer();})
