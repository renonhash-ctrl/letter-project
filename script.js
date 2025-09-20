const message = `I don’t even know if you’ll ever read this.\nBut if you do then hello my pretty baby, i hope this letter brings you well this kind of effort doesn't count this is so basic haha i love you.\n\nYou know baby that im scared to lose everything that excites me the most? my biggest fear is to be separated by you and i guess we'll never do that to each other cuz you already know i wanted “us.”\n\nI love you since i met you but i never got a courage to tell cuz i don't even know myself so i rather just be calm and wait for the right time to be with you\n\nAlways remember that im always here for you whenever you need me, i'll never gonna leave your side because my priority is you and nothing else..`;

function showLetter() {
  document.getElementById("intro text").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}

