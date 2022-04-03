const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            let nombre = data.name;
            let tipo = data.types[0].type.name;
            let stats = data.stats;
            let moves = data.moves;
            pokeImage(pokeImg);
            pokeNombre(nombre);
            pokeTipo(tipo);
            pokeStats(stats);
            pokeMoves(moves);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeNombre = (texto) => {
    document.getElementById("nombre").textContent = "Nombre: " + texto;
}

const pokeTipo = (texto) => {
    document.getElementById("tipo").textContent = "Tipo: " + texto;
}

const pokeStats = (stats) => {
    const texto = document.getElementById("stats").innerHTML = "Stats: <br />";
    stats.forEach(element => {
        document.getElementById("stats").innerHTML += "<br />"+ element.stat.name + ": " + element.base_stat;
    });
}

const pokeMoves = (moves) => {
    const texto = document.getElementById("moves").innerHTML = "Moves: <br />";
    moves.forEach(element => {
        document.getElementById("moves").innerHTML += "<br />"+ element.move.name;
    });
}
