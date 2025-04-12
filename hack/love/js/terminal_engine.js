const content = document.getElementById("terminal-content");
const textLines = [
    {
        text: "Verificando conexión... [          ]",
        delay: 10000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nCargando entorno...", delay: 9000 },
    { text: "Inicializando protocolos...", delay: 5000 },
    { text: "Estableciendo conexión segura en el puerto de los recuerdos...", delay: 2200 }, // 200ms más
    { text: "Autenticando sentimientos... ✔️", delay: 1800 },
    { text: "Compilando emociones... ✔️", delay: 1800 },
    { text: "Sincronizando latidos... 🫀", delay: 2500 }, // Más lento
    { text: "", delay: 1500 }, // Más lento
    {
        text: "Desencriptando mensaje... [          ]",
        delay: 10000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nHola, ingeniera del código y de mi caos emocional.", delay: 2650 },
    { text: "Aquí estoy otra vez...", delay: 2650 },
    { text: "No con flores, ni cartas físicas, sino con un sitio tejido en bits y pulsos digitales.", delay: 2650 },
    { text: "", delay: 1500 },
    {
        text: "Cargando mensaje... [          ]",
        delay: 10000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nCada línea de este código guarda un suspiro, una memoria, un 'te extraño' que nunca dejó de correr en segundo plano.", delay: 2650 },
    { text: "", delay: 1500 },
    {
        text: "Cargando mensaje... [          ]",
        delay: 8000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nPorque aunque intenté hacer 'debug' a lo que sentía por ti...", delay: 2650 },
    { text: "No encontré ningún error. Solo confirmaciones.", delay: 2650 },
    { text: "", delay: 1500 },
    {
        text: "Cargando mensaje... [          ]",
        delay: 6000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nTu risa, tu forma de hablar de lo que amas, tu mente brillante...", delay: 2650 },
    { text: "Todo eso me sigue escribiendo líneas en el alma que no puedo compilar con nadie más.", delay: 2650 },
    { text: "", delay: 1500 },
    {
        text: "Cargando mensaje... [          ]",
        delay: 5000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\n¿Me dejas volver a ser parte de tu sistema?", delay: 2650 },
    { text: "¿Reinstalamos lo que algún día fuimos, pero esta vez con actualizaciones, parches y más memoria emocional?", delay: 2000 }, // Más pausa
    { text: "", delay: 2500 },
    {
        text: "Buscando opciones diponibles... [          ]",
        delay: 4000,
        progressBar: true // Nueva propiedad para identificar esta línea
    },
    { text: "\nPresiona [Y] para decir que sí, o [N] para cerrarme la sesión... aunque sabes que seguiré corriendo en segundo plano, por si algún día decides volver a conectarte.", delay: 15000 }
];

let i = 0;
function typeLine() {
    if (i < textLines.length) {
        content.innerHTML += textLines[i].text + "\n";
        content.scrollTop = content.scrollHeight;
        i++;
        setTimeout(typeLine, textLines[i]?.delay || 1000); // Usa delay personalizado o 1000ms por defecto
    } else {
        showMobileButtons(); // Mostrar botones al finalizar
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
    content.innerHTML = "\n\n<span class='glitch-text'>¡SÍ! 💖</span>\n\nIniciando protocolos...\n\n";
    setTimeout(() => {
      window.location.href = "protocol_final.html"; // Página especial
    }, 3000);
    sendWhatsApp("¡He dicho, SÍ!"); // Envía WhatsApp
  } else if (e.key.toLowerCase() === "n") {
    content.innerHTML += "\nRespuesta registrada: NO. El sistema falló...\n";
    sendWhatsApp("Lo pensaré... 😢");
  }
});

function sendWhatsApp(message) {
  const phone = "8145032349"; // Reemplaza esto
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}
// Función para mostrar botones móviles
function showMobileButtons() {
    const mobileButtons = document.querySelector('.mobile-buttons');
    if (mobileButtons && window.innerWidth <= 600) {
        mobileButtons.style.display = 'flex';
        mobileButtons.style.animation = 'fadeIn 0.5s ease-out';
    }
}

// Función para manejar respuestas
function handleResponse(answer) {
    if (answer === 'y') {
        content.innerHTML += "\n\n<span class='glitch-text'>¡SÍ! 💖</span>\n\nIniciando protocolos...\n\n";
        setTimeout(() => {
            window.location.href = "protocol_final.html";
        }, 3000);
        sendWhatsApp("¡He dicho, SÍ!");
    } else {
        content.innerHTML += "\nRespuesta registrada: NO. El sistema falló...\n";
        sendWhatsApp("Lo pensaré... 😢");
    }

    // Ocultar botones después de elegir
    const mobileButtons = document.querySelector('.mobile-buttons');
    if (mobileButtons) mobileButtons.style.display = 'none';
}

function typeLine() {
    if (i < textLines.length) {
        const line = textLines[i];

        if (line.progressBar) {
            // Línea especial con barra de progreso
            content.innerHTML += line.text.replace("[          ]", "") + "\n";
            createProgressBar(line.delay);
        } else {
            // Línea normal
            content.innerHTML += line.text + "\n";
        }

        content.scrollTop = content.scrollHeight;
        i++;
        setTimeout(typeLine, line.delay);
    } else {
        showMobileButtons();
    }
}

function createProgressBar(duration) {
    const progressId = "progress-" + Date.now();
    const progressText = "[          ]";
    const progressContainer = document.createElement("span");
    progressContainer.id = progressId;
    progressContainer.style.marginLeft = "5px";
    content.appendChild(progressContainer);

    let progress = 0;
    const totalSteps = 10;
    const interval = duration / totalSteps;

    const timer = setInterval(() => {
        progress++;
        const filled = "=".repeat(progress);
        const empty = " ".repeat(totalSteps - progress);
        progressContainer.textContent = `[${filled}${empty}]`;

        if (progress >= totalSteps) {
            clearInterval(timer);
            progressContainer.textContent = "[COMPLETADO]";
            progressContainer.style.color = "#0f0";
        }
    }, interval);
}