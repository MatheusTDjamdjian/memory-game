import './style.css'

function CardGame (icon = "cara-feliz", alt = "Cara Feliz") {
    return /* html */`
    <article class="card_game">
      <img src="./src/img/${icon}.png" alt="${alt}">
    </article>
    `
}

export default CardGame;