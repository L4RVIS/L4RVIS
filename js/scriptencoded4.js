gsap.registerPlugin(ScrollTrigger);


var decrypted4 = document.getElementById("decoded4");
var encrypted4 = document.getElementById("encoded4");

function startdecrypt() {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = decrypted4.textContent.split('').reverse();
    var decrypted4Text = "";
    var i = 0;

    decrypted4.textContent = "";

    var shuffleInterval = setInterval(function(){

      // Generate random strings. You can modify the generator function range
      // (Math.random()*(to-from+1)+from);
      var shuffledText = '';
      var j = originalText.length;
      while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
      // You can also use this generator to use only the remaining letters
      // while(j--) shuffledText += originalText[(Math.random()*j) | 0];

      // On every 10 cycles, remove a character from the original text to the decoded4 text
      if(i++ % 10 === 0) decrypted4Text += originalText.pop();

      // Display
      decrypted4.textContent = decrypted4Text;
      encrypted4.textContent = shuffledText;

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
  trigger: ".barra5",
  onEnter: startdecrypt,
  /*onLeave: encrypt,
  onEnterBack: startdecrypt,
  onLeaveBack: encrypt*/
});

function addAnimation(){
    var element = document.getElementById('barra5');
    element.classList.add("animacao");
}

function removeAnimation(){
    var element = document.getElementById('barra5');
    element.classList.remove("animacao");
}

ScrollTrigger.create({
  trigger: ".barra5 .primeira",
  onEnter: addAnimation,
  onLeave: removeAnimation,
  onEnterBack: addAnimation,
  onLeaveBack: removeAnimation
});