function goTo(page) {
  window.location.href = page;
}

// Récupération du conteneur
const container = document.getElementById("continents-container");

// Génération des blocs continents
continentsData.forEach(continent => {
  // Création de l'encadré
  const continentDiv = document.createElement("div");
  continentDiv.classList.add("continent");

  // Titre
  const title = document.createElement("h2");
  title.textContent = `${continent.icon} ${continent.name}`;
  continentDiv.appendChild(title);

  // Encadré (box)
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

