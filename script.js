const message = `I know na hindi mo kayang lagpasan mga message ko sayo, so here's my gift to you baby.\nI want you to always remember that you are truly loved. not just in words, but in actions, in presence, and in every little way i can show you.\n\nI will be here with you through every season of your life, whether it’s bright days full of laughter or quiet nights when things feel heavy.\n\nI’ll keep supporting you no matter what you face,\n\nAnyway, I hope you're doing okay. i care about you a lot so stay safe everyday mylove.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
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
