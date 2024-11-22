import CardGame from "../CardGame"
import "./style.css"

function CardFrontBack() {

  window.cardFrontBack = {};
  window.cardFrontBack.handleClick = (event) => {
      const $origin = event.target;
      const $CardFrontBack = $origin.closest('.card_front_back');

      console.log($origin);
      console.log($CardFrontBack);

      $CardFrontBack.classList.toggle('-active')
    }

    return /* html */`
      <article class="card_front_back" onClick="cardFrontBack.handleClick(event)">
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javascript", "Logo do JavaScript")}
        </div>
      </article>
    `
}

export default CardFrontBack