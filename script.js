// Fonction de navigation
function goTo(page) {
  window.location.href = page;
}

// Récupération des conteneurs
const container = document.getElementById("continents-container");
const europeContainer = document.getElementById("europe-countries-container");

// Génération des continents et de leurs pays
continentsData.forEach(continent => {
  // Création du conteneur du continent
  if (container) {
    const continentDiv = document.createElement("div");
    continentDiv.classList.add("continent");

    const title = document.createElement("h2");
    title.textContent = `${continent.icon} ${continent.name}`;
    continentDiv.appendChild(title);

    const box = document.createElement("div");
    box.classList.add("box");

    const ul = document.createElement("ul");
    continent.countries.forEach(country => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = country.link;
      a.textContent = country.name;
      li.appendChild(a);
      ul.appendChild(li);

      // Si Europe, ajoute aussi dans la section mini-hero
      if (continent.name === "Europe" && europeContainer) {
        const div = document.createElement("div");
        div.classList.add("country-box");
        div.textContent = country.name;

        div.addEventListener("click", () => {
          alert(`Vous avez sélectionné : ${country.name}`);
        });

        europeContainer.appendChild(div);
      }
    });

    box.appendChild(ul);
    continentDiv.appendChild(box);
    container.appendChild(continentDiv);
  }
});
