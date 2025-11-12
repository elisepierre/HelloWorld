// ==============================
// FONCTION DE NAVIGATION
// ==============================
function goTo(page) {
  window.location.href = page;
}

// ==============================
// GENERATION DES CONTINENTS
// ==============================
const continentsContainer = document.getElementById("continents-container");

if (continentsContainer && continentsData) {
  continentsData.forEach(continent => {
    // Conteneur du continent
    const continentDiv = document.createElement("div");
    continentDiv.classList.add("continent");

    // Titre du continent avec icône
    const title = document.createElement("h2");
    title.textContent = `${continent.icon} ${continent.name}`;
    continentDiv.appendChild(title);

    // Box pour les pays
    const box = document.createElement("div");
    box.classList.add("box");

    // Liste des pays
    const ul = document.createElement("ul");
    continent.countries.forEach(country => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = country.link;
      a.textContent = country.name;
      li.appendChild(a);
      ul.appendChild(li);
    });

    box.appendChild(ul);
    continentDiv.appendChild(box);
    continentsContainer.appendChild(continentDiv);
  });
}

// ==============================
// GENERATION DES PAYS EUROPEENS
// ==============================
const europeContainer = document.getElementById("europe-countries-container");

// Vérifier que la section existe et que data.js est chargé
if (europeContainer && continentsData) {
  // Trouver l'Europe dans data.js
  const europe = continentsData.find(continent => continent.name === "Europe");

  if (europe) {
    europe.countries.forEach(country => {
      const div = document.createElement("div");
      div.classList.add("country-box");
      div.textContent = country.name;

      // Clic sur un pays (optionnel)
      div.addEventListener("click", () => {
        alert(`Vous avez sélectionné : ${country.name}`);
      });

      europeContainer.appendChild(div);
    });
  }
}
