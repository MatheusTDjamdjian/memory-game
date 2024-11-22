import ArrowDown from "../../components/ArrowDown"
import PlayerName from "../../components/PlayerName"
import PlayerScore from "../../components/PlayerScore"
import VsPlayer from "../../components/VsPlayer"
import "./style.css"

function ScoreBoard() {
    return /* html */`
      <header class="score_board">
        ${ArrowDown()}
        ${PlayerName("Player1")}
        ${PlayerScore()}
        ${VsPlayer()}
        ${PlayerScore()}
        ${PlayerName("Player2 ")}
      </header>
    `;
}

export default ScoreBoard