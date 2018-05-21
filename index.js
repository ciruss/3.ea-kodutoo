window.onload = () => {

  let setTimer = document.getElementById('setTimer'),
      timeLeft = document.getElementById('timeLeft')

  const pageOpacity = (opacity) => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          {code: `document.body.style.opacity = "${opacity}"`})
    })
  }

  const timer = () => { 
    let timerLength = document.getElementById('timerLength').value + '000',
        timeSet = timerLength
    
    const timeRemaining = setInterval(() => {
      timerLength -= 1000
      let minutes = Math.floor((timerLength % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timerLength % (1000 * 60)) / (1000)) 
      
      timeLeft.innerHTML = 
        `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

      if(timerLength <= (timeSet - (timeSet / 4))) {
        pageOpacity(0.75)
      } if(timerLength <= (timeSet / 2)) {
        pageOpacity(0.5)
      } if(timerLength <= 0 + (timeSet / 4)) {
        pageOpacity(0.25)
      } if(timerLength <= 0) {
        clearInterval(timeRemaining)
        pageOpacity(0)
      }
      
    }, 1000)
  }
  setTimer.addEventListener("click", timer)  
}