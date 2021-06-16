document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.querySelector("#search")
  const searchButton = document.querySelector("#Pokemon-form > input[type=submit]:nth-child(2)")

  searchButton.addEventListener("click", (event) => {
    event.preventDefault()
    const searchPokemon = searchBox.value
    const pokemonList = document.querySelector("#pokemon-list")
    fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
      .then(resp => resp.json())
      .then(data => {
        const newPokemonList = document.createElement("li")
        newPokemonList.classList.add("centered")
        newPokemonList.innerHTML = data.name
        const newPokemonImg = document.createElement("img")
        newPokemonImg.src = data.sprites.front_default
        newPokemonList.append(newPokemonImg)
        pokemonList.append(newPokemonList)
        // add the event listener here
        // add the fetch after the EL
        // need pokemon name, need elemend id
        newPokemonImg.addEventListener("click", (event) => {
          event.preventDefault()
          const pokemonAbilities = document.querySelector("#ability-list")
          fetch(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`)
            .then(resp => resp.json())
            .then(data => {
              data.abilities.forEach(ability => {
                const newPokemonAbilities = document.createElement("li")
                newPokemonAbilities.innerHTML = ability.ability.name
                pokemonAbilities.append(newPokemonAbilities)
              })
            })
        })
      })
  })
})
