import CardGame from "../CardGame"

function CardFrontBack() {
    return /* html */`
      <article class="card_front_back">
        ${CardGame()}
        ${CardGame("javascript", "Logo do JavaScript")}
      </article>
    `
}

export default CardFrontBack