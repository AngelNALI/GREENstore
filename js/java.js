document.addEventListener("DOMContentLoaded", function () {

  const plants = [
    {
      name: "Magnolia",
      desc: "Magnolia grandiflora\nColor: Blanco crema\nFlor refinada que aporta frescura y armonía",
      price: "$450 MXN",
      image: "images/magnolia.jpeg"
    },
    {
      name: "Orquídea",
      desc: "Orchidaceae\nColor: Blanco crema\nPlanta exótica y duradera para interiores modernos.",
      price: "$380 MXN",
      image: "images/orquideas.jpg"
    },
    {
      name: "Peonía",
      desc: "Paeonia\nColor: Rosa intenso\nFlor elegante y aromática, perfecta para decoración sofisticada.",
      price: "$420 MXN",
      image: "images/peonia.jpg"
    },
    {
      name: "Ranúnculo",
      desc: "Ranunculus asiaticus\nColor: Rosa claro\nIdeal para espacios delicados y románticos",
      price: "$350 MXN",
      image: "images/Ranunculoo.jpg"
    }
  ];

  const container = document.getElementById("deslizador");
  let currentIndex = 0;
  let intervalo;

  plants.forEach(plant => {
    const card = document.createElement("div");
    card.classList.add("plant-card");

    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}"
           onerror="this.style.background='#e8f5e9'; this.style.height='180px'">
      <h3>${plant.name}</h3>
      <p>${plant.desc.replace(/\n/g, "<br>")}</p>
      <strong>${plant.price}</strong>
    `;

    container.appendChild(card);
  });

  const cards = document.querySelectorAll(".plant-card");

  function updateSlider() {
    cards.forEach(card => {
      card.classList.remove("card-left", "card-center", "card-right");
    });

    const left = (currentIndex - 1 + plants.length) % plants.length;
    const right = (currentIndex + 1) % plants.length;

    cards[left].classList.add("card-left");
    cards[currentIndex].classList.add("card-center");
    cards[right].classList.add("card-right");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % plants.length;
    updateSlider();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + plants.length) % plants.length;
    updateSlider();
  }


  function reiniciarIntervalo() {
    clearInterval(intervalo);
    intervalo = setInterval(nextSlide, 4000);
  }

  updateSlider();
  intervalo = setInterval(nextSlide, 4000);


  window.nextPlant = function () {
    nextSlide();
    reiniciarIntervalo();
  };


  window.prevPlant = function () {
    prevSlide();
    reiniciarIntervalo();
  };

  window.showDetails = function () {
    const nombre = plants[currentIndex].name;
    const precio = plants[currentIndex].price;
    alert(`🌸 ${nombre}\nPrecio: ${precio}\n\nPara más información contáctanos.`);
  };

  const btnCelular = document.getElementById("menu-celular");
  const menuDesplegable = document.getElementById("menu-desplegable");
  const enlacesMobile = document.querySelectorAll(".menu-desplegable a");

  btnCelular.addEventListener("click", () => {
    const abierto = menuDesplegable.classList.toggle("abierto");
    btnCelular.classList.toggle("abierto", abierto);
    btnCelular.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });
  enlacesMobile.forEach(enlace => {
    enlace.addEventListener("click", () => {
      menuDesplegable.classList.remove("abierto");
      btnCelular.classList.remove("abierto");
    });
  });
});
















