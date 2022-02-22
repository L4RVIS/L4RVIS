gsap.registerPlugin(ScrollTrigger);


var decrypted2 = document.getElementById("decoded2");
var encrypted2 = document.getElementById("encoded2");

function startdecrypt() {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = decrypted2.textContent.split('').reverse();
    var decrypted2Text = "";
    var i = 0;

    decrypted2.textContent = "";

    var shuffleInterval = setInterval(function(){

      // Generate random strings. You can modify the generator function range
      // (Math.random()*(to-from+1)+from);
      var shuffledText = '';
      var j = originalText.length;
      while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
      // You can also use this generator to use only the remaining letters
      // while(j--) shuffledText += originalText[(Math.random()*j) | 0];

      // On every 10 cycles, remove a character from the original text to the decoded2 text
      if(i++ % 10 === 0) decrypted2Text += originalText.pop();

      // Display
      decrypted2.textContent = decrypted2Text;
      encrypted2.textContent = shuffledText;

      // Stop when done
      if(!shuffledText.length) clearInterval(shuffleInterval);

    // 50ms looks more dramatic
    },15);
}

    /*if (window.addEventListener) {
        window.addEventListener('load', startdecrypt, false); //W3C
    } else {
        window.attachEvent('onload', startdecrypt); //IE
    }*/
ScrollTrigger.create({
  trigger: ".barra3",
  onEnter: startdecrypt,
  /*onLeave: encrypt,
  onEnterBack: startdecrypt,
  onLeaveBack: encrypt*/
});

function addAnimation(){
    var element = document.getElementById('barra3');
    element.classList.add("animacao");
}

function removeAnimation(){
    var element = document.getElementById('barra3');
    element.classList.remove("animacao");
}

ScrollTrigger.create({
  trigger: ".barra3 .primeira",
  onEnter: addAnimation,
  onLeave: removeAnimation,
  onEnterBack: addAnimation,
  onLeaveBack: removeAnimation
});