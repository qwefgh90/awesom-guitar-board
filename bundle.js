/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var awesome_guitar_board_1 = __webpack_require__(1);
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


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Music;
(function (Music) {
    var PitchType;
    (function (PitchType) {
        PitchType[PitchType["C"] = 0] = "C";
        PitchType[PitchType["Db"] = 1] = "Db";
        PitchType[PitchType["D"] = 2] = "D";
        PitchType[PitchType["Eb"] = 3] = "Eb";
        PitchType[PitchType["E"] = 4] = "E";
        PitchType[PitchType["F"] = 5] = "F";
        PitchType[PitchType["Gb"] = 6] = "Gb";
        PitchType[PitchType["G"] = 7] = "G";
        PitchType[PitchType["Ab"] = 8] = "Ab";
        PitchType[PitchType["A"] = 9] = "A";
        PitchType[PitchType["Bb"] = 10] = "Bb";
        PitchType[PitchType["B"] = 11] = "B";
    })(PitchType = Music.PitchType || (Music.PitchType = {}));
    Music.pitchCount = 12;
    Music.fretCount = 23;
    Music.startPitchArray = [-1, PitchType.E,
        PitchType.B,
        PitchType.G,
        PitchType.D,
        PitchType.A,
        PitchType.E];
    var Scale;
    (function (Scale) {
        function getMinorScale(firstPitch) {
            var degrees = [0, 3, 5, 7, 10];
            return getScale(firstPitch, degrees);
        }
        Scale.getMinorScale = getMinorScale;
        function getScale(firstPitch, pitchPosition) {
            return pitchPosition.map(function (position) {
                return (firstPitch + position) % Music.pitchCount;
            });
        }
        function getMajorScale(firstPitch) {
            var degrees = [0, 2, 4, 7, 9];
            return getScale(firstPitch, degrees);
        }
        Scale.getMajorScale = getMajorScale;
    })(Scale = Music.Scale || (Music.Scale = {}));
    var Guitar;
    (function (Guitar) {
        function findFretByString(stringNumber) {
            var fretFinder = function (pitchType) {
                var fretRange = (new Array(Music.fretCount)).fill(0).map(function (v, i) {
                    return i;
                });
                return fretRange.filter(function (v, i) {
                    var startPitch = Music.startPitchArray[stringNumber];
                    if ((startPitch + i) % Music.pitchCount == pitchType)
                        return true;
                    else
                        return false;
                });
            };
            return fretFinder;
        }
        Guitar.findFretByString = findFretByString;
    })(Guitar = Music.Guitar || (Music.Guitar = {}));
    var GuitarBoardController = (function () {
        function GuitarBoardController() {
        }
        GuitarBoardController.prototype.createNoteBox = function (text) {
            var div = document.createElement("div");
            div.className = "note-box";
            var emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        };
        GuitarBoardController.prototype.createPaddingBox = function (text) {
            var div = document.createElement("div");
            div.className = "spadding-box";
            var emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        };
        GuitarBoardController.prototype.replaceText = function (stringNumber, fret, text) {
        };
        GuitarBoardController.prototype.initUI = function () {
            var divForString1 = document.querySelector("#string1 > div.circles");
            var divForString2 = document.querySelector("#string2 > div.circles");
            var divForString3 = document.querySelector("#string3 > div.circles");
            var divForString4 = document.querySelector("#string4 > div.circles");
            var divForString5 = document.querySelector("#string5 > div.circles");
            var divForString6 = document.querySelector("#string6 > div.circles");
            var divBefore = document.querySelector("#before > div.circles");
            var divAfter = document.querySelector("#after > div.circles");
            for (var i = 0; i < Music.fretCount; i++) {
                divBefore.appendChild(this.createPaddingBox(" "));
                divAfter.appendChild(this.createPaddingBox(" "));
                divForString1.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[1] + i + 1) % Music.pitchCount]));
                divForString2.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[2] + i + 1) % Music.pitchCount]));
                divForString3.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[3] + i + 1) % Music.pitchCount]));
                divForString4.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[4] + i + 1) % Music.pitchCount]));
                divForString5.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[5] + i + 1) % Music.pitchCount]));
                divForString6.appendChild(this.createNoteBox(PitchType[(Music.startPitchArray[6] + i + 1) % Music.pitchCount]));
            }
            var nodeList = divAfter.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeList.length; i++) {
                [3, 5, 7, 9, 12, 15].filter(function (value) { return value == i + 1; }).forEach(function () {
                    nodeList.item(i).textContent = "▴";
                });
            }
        };
        return GuitarBoardController;
    }());
    Music.GuitarBoardController = GuitarBoardController;
})(Music = exports.Music || (exports.Music = {}));


/***/ })
/******/ ]);