gsap.registerPlugin(ScrollTrigger);


var decrypted1 = document.getElementById("decoded1");
var encrypted1 = document.getElementById("encoded1");

function startdecrypt() {
    // Original text, split into an array and reversed (for faster pop())
    var originalText = decrypted1.textContent.split('').reverse();
    var decrypted1Text = "";
    var i = 0;

    decrypted1.textContent = "";

    var shuffleInterval = setInterval(function(){

      // Generate random strings. You can modify the generator function range
      // (Math.random()*(to-from+1)+from);
      var shuffledText = '';
      var j = originalText.length;
      while(j--) shuffledText += String.fromCharCode((Math.random()*94+33) | 0);
      // You can also use this generator to use only the remaining letters
      // while(j--) shuffledText += originalText[(Math.random()*j) | 0];

      // On every 10 cycles, remove a character from the original text to the decoded1 text
      if(i++ % 10 === 0) decrypted1Text += originalText.pop();

      // Display
      decrypted1.textContent = decrypted1Text;
      encrypted1.textContent = shuffledText;

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
  trigger: ".barra2",
  onEnter: startdecrypt,
  /*onLeave: encrypt,
  onEnterBack: startdecrypt,
  onLeaveBack: encrypt*/
});

function addAnimation(){
    var element = document.getElementById('barra2');
    element.classList.add("animacao");
}

function removeAnimation(){
    var element = document.getElementById('barra2');
    element.classList.remove("animacao");
}

ScrollTrigger.create({
  trigger: ".barra2 .primeira",
  onEnter: addAnimation,
  onLeave: removeAnimation,
  onEnterBack: addAnimation,
  onLeaveBack: removeAnimation
});