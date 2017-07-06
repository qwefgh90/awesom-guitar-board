"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var awesome_guitar_board_1 = require("./awesome-guitar-board");
var board = new awesome_guitar_board_1.Music.GuitarBoardController();
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    board.initUI();
});
//# sourceMappingURL=index.js.map