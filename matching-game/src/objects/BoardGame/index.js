import './style.css'
import CardFrontBack from '../../components/CardFrontBack'
import cards from "./data.js"

function BoardGame(amountCards) {
    const hideCards = ($cardsActive) => {
      $cardsActive.forEach((card) => card.classList.remove('-active'))
    }
    const changePlayer = () => {
      const $arrowDown = document.querySelector('.arrow_down')
      const currentPlayer = $arrowDown.getAttribute('data-currentplayer');

      $arrowDown.setAttribute('data-currentplayer', currentPlayer == 1 ? 2 : 1);
    }

    window.BoardGame = {};
    window.BoardGame.handleClick = () => {
      const $boardGame = document.querySelector('.board_game')
      const $cardsActive = $boardGame.querySelectorAll('.card_front_back.-active')

      if ($cardsActive.length === 2) {
        setTimeout(() => {
          hideCards($cardsActive)
          changePlayer()
        }, 1000);
      }
    }

    const $htmlCardsList = cards.map((card) => CardFrontBack(card.icon, card.altIcon));
    const $htmlCards = $htmlCardsList.join('');

    return /* html */`
    <section class="board_game" onClick="BoardGame.handleClick()">
      ${$htmlCards}
    </section>
    `;
}

export default BoardGame