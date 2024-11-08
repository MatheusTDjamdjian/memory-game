import './src/styles/generic/reset.css'

import BoardGame from './src/objects/BoardGame';

import './src/styles/settings/colors.css';
import './src/styles/elements/base.css'

const $root = document.querySelector("#root");
const $htmlBoardGame = BoardGame(6);

$root.insertAdjacentHTML("beforeend", $htmlBoardGame);