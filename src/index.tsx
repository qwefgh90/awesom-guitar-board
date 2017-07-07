import { Music } from "./awesome-guitar-board";

declare global {
    interface Window {
        board: Music.GuitarBoardController;
    }
}

function ready(fn: () => void) {
    if (document.readyState != 'loading') {
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}

ready(function() {
    window.board = new Music.GuitarBoardController();
});
