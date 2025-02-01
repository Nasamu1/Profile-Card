// script.js
function updateUTCTime() {
    const now = new Date();
    const utcTime = now.toUTCString();
    document.getElementById('currentTime').textContent = utcTime; 
  }

  setInterval(updateUTCTime, 1000);
  
  
  updateUTCTime();