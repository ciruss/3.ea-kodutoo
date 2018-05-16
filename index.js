window.onload = () => {

  let setTimer = document.getElementById('setTimer')
  
  let timer = () => { 
    let timerLength = document.getElementById('timerLength').value + '000'
    
    let timeRemaining = setInterval(() => {
      timerLength -= 1000
      let minutes = Math.floor((timerLength % (1000 * 60 * 60)) / (1000 * 60))
      let seconds = Math.floor((timerLength % (1000 * 60)) / (1000))

      document.getElementById('timeLeft').innerHTML = 
        `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

      if(timerLength <= 0) clearInterval(timeRemaining)
      
    }, 1000)
  }
  setTimer.addEventListener("click", timer)
}