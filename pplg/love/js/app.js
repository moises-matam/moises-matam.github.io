const content = document.getElementById("terminal-content");
const textLines = [
    "Cargando entorno romántico...",
    "Inicializando protocolos del corazón...",
    "Estableciendo conexión segura en el puerto de los recuerdos...",
    "Autenticando sentimientos... ✔️",
    "Compilando emociones... ✔️",
    "Sincronizando latidos... 🫀",
    "",
    "Hola, ingeniera del código y de mi caos emocional.",
    "Aquí estoy otra vez...",
    "No con flores, ni cartas físicas, sino con un sitio tejido en bits y pulsos digitales.",
    "",
    "Cada línea de este código guarda un suspiro, una memoria, un 'te extraño' que nunca dejó de correr en segundo plano.",
    "",
    "Porque aunque intenté hacer 'debug' a lo que sentía por ti...",
    "No encontré ningún error. Solo confirmaciones.",
    "",
    "Tu risa, tu forma de hablar de lo que amas, tu mente brillante...",
    "Todo eso me sigue escribiendo líneas en el alma que no puedo compilar con nadie más.",
    "",
    "¿Me dejas volver a ser parte de tu sistema?",
    "¿Reinstalamos lo que algún día fuimos, pero esta vez con actualizaciones, parches y más memoria emocional?",
    "",
    "Presiona [Y] para decir que sí, o [N] para cerrarme la sesión... aunque sabes que seguiré corriendo en segundo plano, por si algún día decides volver a conectarte."
];

let i = 0;

function typeLine() {
    if (i < textLines.length) {
        content.innerHTML += textLines[i] + "\n";
        // Scroll automático con comportamiento suave
        content.scrollTo({
            top: content.scrollHeight,
            behavior: 'smooth'
        });
        i++;
        setTimeout(typeLine, 1000);
    }
}

typeLine();

// Animación de corazones en clic (en toda la pantalla)
document.addEventListener("click", function(e) {
  createHeart(e.clientX, e.clientY);
});

function createHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = `${x - 5}px`;
  heart.style.top = `${y - 5}px`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
}

// Respuestas con WhatsApp y página final
document.addEventListener("keydown", function(e) {
  if (e.key.toLowerCase() === "y") {
    content.innerHTML = "\n\n<span class='glitch-text'>¡SÍ! 💖</span>\n\nIniciando protocolo de amor...\n\n";
    setTimeout(() => {
      window.location.href = "final.html"; // Página especial
    }, 3000);
    sendWhatsApp("¡He dicho, SÍ!"); // Envía WhatsApp
  } else if (e.key.toLowerCase() === "n") {
    content.innerHTML += "\nRespuesta registrada: NO. El sistema falló...\n";
    sendWhatsApp("Lo pensaré... 😢");
  }
});

function sendWhatsApp(message) {
  const phone = "8119912811"; // Reemplaza esto
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}