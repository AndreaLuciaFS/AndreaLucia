var dogEl = document.getElementById("perro");
  
  var startTime = new Date().getTime();
  var walkTheDog = function() {
      var currTime = new Date().getTime();
      var secondsElapsed = ((currTime - startTime)/1000);
      
    var newRight = (50 + ((currTime - startTime)/1000)*30);
    dogEl.style.right = newRight + "px";
    window.requestAnimationFrame(walkTheDog)
  };
  
  
  walkTheDog();
