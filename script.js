document.addEventListener("DOMContentLoaded", () => {
  
  // --- 1. KUSTOMIZIRANI BRUTALISTIČKI KURSOR ---
  // Stvaramo div za miš koji prati kretanje i povećava se na interaktivnim elementima
  const cursor = document.createElement("div");
  cursor.classList.add("brutal-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.clientX} પ્રસ`; // mala CSS korekcija
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  // Povećaj kursor kad pređeš mišem preko linkova, gumba ili kartica
  const interactiveElements = document.querySelectorAll("a, button, .brutal-card");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("cursor-hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("cursor-hover"));
  });


  // --- 2. GLITCH EFEKT NA GLAVNOM NASLOVU ---
  const headerTitle = document.querySelector(".brutal-header h1");
  if (headerTitle) {
    const originalText = headerTitle.innerText;
    const glitchChars = "!<>-_\\/[]{}—=+*^?#________ESOLANG";

    setInterval(() => {
      // Nasumično aktiviraj glitch svakih nekoliko sekundi
      if (Math.random() > 0.7) {
        let glitchedText = originalText.split("").map((char, index) => {
          if (Math.random() < 0.2 && char !== " ") {
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          }
          return char;
        }).join("");

        headerTitle.innerText = glitchedText;

        // Vrati originalni tekst nakon 150 milisekundi
        setTimeout(() => {
          headerTitle.innerText = originalText;
        }, 150);
      }
    }, 2000);
  }


  

});




function prikaziDetalje(jezik) {
    // Sakrij sve druge otvorene detalje (opcionalno, ako želiš da samo jedan bude otvoren)
    document.getElementById('detalji-intercal').style.display = 'none';
    document.getElementById('detalji-brainfuck').style.display = 'none';

    // Pronađi i prikaži željeni element
    const kutija = document.getElementById('detalji-' + jezik);
    if (kutija) {
        kutija.style.display = 'block';
        kutija.scrollIntoView({ behavior: 'smooth' });
    }
}

function zatvoriDetalje(jezik) {
    const kutija = document.getElementById('detalji-' + jezik);
    if (kutija) {
        kutija.style.display = 'none';
    }
}

function prikaziDetalje(jezik) {
    // Sakrij sve redom
    document.getElementById('detalji-intercal').style.display = 'none';
    document.getElementById('detalji-brainfuck').style.display = 'none';
    document.getElementById('detalji-befunge').style.display = 'none';
    document.getElementById('detalji-piet').style.display = 'none';
    document.getElementById('detalji-whitespace').style.display = 'none';
    document.getElementById('detalji-chef').style.display = 'none';

    // Prikaži traženi
    const kutija = document.getElementById('detalji-' + jezik);
    if (kutija) {
        kutija.style.display = 'block';
        kutija.scrollIntoView({ behavior: 'smooth' });
    }
}

function zatvoriDetalje(jezik) {
    const kutija = document.getElementById('detalji-' + jezik);
    if (kutija) {
        kutija.style.display = 'none';
    }
}

document.getElementById('detalji-malbolge').style.display = 'none';