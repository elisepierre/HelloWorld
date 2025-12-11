// ==============================
// FONCTION DE NAVIGATION
// ==============================
function goTo(page) {
  window.location.href = page;
}

// ==============================
// GENERATION DES CONTINENTS (mini-liste)
// ==============================
const continentsContainer = document.getElementById("continents-container");

if (continentsContainer && continentsData) {
  continentsData.forEach(continent => {
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
    });

    box.appendChild(ul);
    continentDiv.appendChild(box);
    continentsContainer.appendChild(continentDiv);
  });
}

// ==============================
// GENERATION DES PAYS PAR CONTINENT (grandes cartes)
// ==============================
// Fonction générique
function generateCountryBoxes(continentName, containerId) {
  const container = document.getElementById(containerId);
  if (!container || !continentsData) return;

  const continent = continentsData.find(c => c.name === continentName);
  if (!continent) return;

  continent.countries.forEach(country => {
    const div = document.createElement("div");
    div.classList.add("country-box");
    div.textContent = country.name;

    // clic sur un pays → navigation
    div.addEventListener("click", () => {
      goTo(country.link); // remplace alert par navigation
    });

    container.appendChild(div);
  });
}

// Appel pour tous les continents
generateCountryBoxes("Europe", "europe-countries-container");
generateCountryBoxes("Asie", "asia-countries-container");
generateCountryBoxes("Amérique", "america-countries-container");
generateCountryBoxes("Afrique", "africa-countries-container");

