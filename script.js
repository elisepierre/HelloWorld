// Fonction de navigation
function goTo(page) {
  window.location.href = page;
}

// ------------------------
// GENERATION DES CONTINENTS
// ------------------------
const container = document.getElementById("continents-container");

continentsData.forEach(continent => {
  // Création du conteneur du continent
  const continentDiv = document.createElement("div");
  continentDiv.classList.add("continent");

  // Titre du continent avec icône
  const title = document.createElement("h2");
  title.textContent = `${continent.icon} ${continent.name}`;
  continentDiv.appendChild(title);

  // Box pour les pays
  const box = document.createElement("div");
  box.classList.add("box");

  // Liste de pays
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
  container.appendChild(continentDiv);
});

// ------------------------
// GENERATION DES PAYS EUROPEENS
// ------------------------
const europeCountries = [
  "France", "Allemagne", "Italie", "Espagne", "Portugal",
  "Pays-Bas", "Belgique", "Suède", "Norvège", "Suisse"
];

const europeContainer = document.getElementById("europe-countries-container");

europeCountries.forEach(country => {
  const div = document.createElement("div");
  div.classList.add("country-box");
  div.textContent = country;

  // Optionnel : clic sur un pays
  div.addEventListener("click", () => {
    alert(`Vous avez sélectionné : ${country}`);
  });

  europeContainer.appendChild(div);
});
