document.addEventListener("DOMContentLoaded", function () { });


// Cambio de idioma
const dropdownItems = document.querySelectorAll('.dropdown-item'); 
let currentLang = "es"; 


dropdownItems.forEach(item => {
  item.addEventListener("click", (e) => {
    currentLang = e.target.getAttribute('data-lang'); 

    
    document.querySelectorAll("[data-es]").forEach(element => {
      const text = element.getAttribute(`data-${currentLang}`);
      if (text) {
        if (element.tagName === 'LABEL') {
          element.firstChild.textContent = text;
        } else {
          element.textContent = text;
        }
      }
    });

        document.querySelectorAll("img[data-es]").forEach(image => {
      const imgSrc = image.getAttribute(`data-${currentLang}`);
      if (imgSrc) image.src = imgSrc; 
    });

    document.getElementById("dropdownMenuButton").textContent = currentLang === "es" ? "Español" : "English";
  });
});


const icons = [
  "bxl-html5",
  "bxl-css3",
  "bxl-javascript",
  "bxl-typescript",
  "bxl-git",
  "bxl-unity"

];

const tittle = [
  "HTML 5",
  "CSS 3",
  "Javascript",
  "Typescript",
  "Git",
  "Unity"
];

let currentIndex = 0;
const sliderIcon = document.getElementById('slider-icon');
const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');
const titlelabel = document.getElementById('title')

function showIcon(index) {
  const iconClass = icons[index];
  const titleClass = tittle[index];
  sliderIcon.className = `bx ${iconClass}`;
  titlelabel.textContent = titleClass;
}



prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + icons.length) % icons.length;
  showIcon(currentIndex);
});


function avanzarImg() {
  setInterval(() => {
    prevButton.click();
  }, 1500);
}

avanzarImg()

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % icons.length;
  showIcon(currentIndex);
});


////////////////////////////////////

function enviarFormulario() {
  var formulario = document.getElementById("contacts");
  var formData = new FormData(formulario);

  fetch("https://formspree.io/f/xayrnwno", {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      console.log("Respuesta del servidor:", response);
      alert("¡Formulario enviado con éxito!");
    })
    .catch((error) => {
      // Manejar errores aquí
      console.error("Error al enviar el formulario:", error);
      alert("¡Formulario enviado con éxito!");
    });
}
////////////////////////////////////

btnOpen.onclick = function () {
  const navMenu = document.getElementById('navMenu');
  if (navMenu.classList.contains('show-menu')) {
    navMenu.classList.remove("show-menu");
  } else {
    navMenu.classList.add("show-menu");
  }
};

////////////////////////////////////

var menuItems = document.querySelectorAll(".menu__link");

menuItems.forEach(item => {
  item.addEventListener('click', function () {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('show-menu');
  });
});