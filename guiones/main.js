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


var button = document.getElementById("button");
     
  var onButtonClick = function() {
    var name = document.getElementById("name").value;
    var lang = document.getElementById("personalidad").value;
    var raza;
    if (lang === "tra") {
        raza = name + ", nosotros creemos que te vendría bien un Shar Pei, debido a su carácter tranquilo y sencillo";
    } else if (lang === "hi") {
        raza = name + ", nosotros creemos que te vendría bien un Labrador, por su carácter juguetón";
    } else {
        raza = name + ", nosotros creemos que te vendría bien un Bichón maltés, un Carlino o un Beagel, por ser los más cariñosos";
    }
    document.getElementById("message").textContent += raza;  
  };
  // Step 3: Attach event listener to element
  button.addEventListener("click", onButtonClick);

function cambiarImagenJS(){
  document.getElementById("img1").src="imágenes/perro feliz adopción.jpg";
}
 
