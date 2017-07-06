import { Music } from "./awesome-guitar-board";

let board = new Music.GuitarBoardController();

function ready(fn: () => void) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    board.initUI()
})
