const container = document.querySelector("#container");
const imageLink = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";


for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement("div");
    pokemon.classList.add("pokemon");
    const label = document.createElement("span");
    label.innerText = `#${i}`;
    const images = document.createElement("img");
    images.src = `${imageLink}${i}.png`;

    pokemon.appendChild(images);
    pokemon.appendChild(label);
    container.appendChild(pokemon);
}

