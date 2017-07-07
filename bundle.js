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
function ready(fn) {
    if (document.readyState != 'loading') {
        fn();
    }
    else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
ready(function () {
    window.board = new awesome_guitar_board_1.Music.GuitarBoardController();
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Music;
(function (Music) {
    var Pitch;
    (function (Pitch) {
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
        })(PitchType = Pitch.PitchType || (Pitch.PitchType = {}));
        Pitch.pitchCount = 12;
        Pitch.startPitchArray = [-1, PitchType.E,
            PitchType.B,
            PitchType.G,
            PitchType.D,
            PitchType.A,
            PitchType.E];
        function getPitchByOffset(startPitch, offset) {
            return (startPitch + offset) % Pitch.pitchCount;
        }
        Pitch.getPitchByOffset = getPitchByOffset;
    })(Pitch = Music.Pitch || (Music.Pitch = {}));
    var Scale;
    (function (Scale) {
        var ScaleType;
        (function (ScaleType) {
            ScaleType[ScaleType["None"] = 0] = "None";
            ScaleType[ScaleType["MinorPentatonic"] = 1] = "MinorPentatonic";
            ScaleType[ScaleType["MajorPentatonic"] = 2] = "MajorPentatonic";
        })(ScaleType = Scale.ScaleType || (Scale.ScaleType = {}));
        function getMinorScale(firstPitch) {
            var degrees = [0, 3, 5, 7, 10];
            return getScale(firstPitch, degrees);
        }
        Scale.getMinorScale = getMinorScale;
        function getMajorScale(firstPitch) {
            var degrees = [0, 2, 4, 7, 9];
            return getScale(firstPitch, degrees);
        }
        Scale.getMajorScale = getMajorScale;
        function getScale(firstPitch, pitchPosition) {
            return pitchPosition.map(function (position) {
                return (firstPitch + position) % Pitch.pitchCount;
            });
        }
    })(Scale = Music.Scale || (Music.Scale = {}));
    var Guitar;
    (function (Guitar) {
        Guitar.fretCount = 23;
        function findFretByString(stringNumber) {
            var fretFinder = function (pitchType) {
                var fretRange = (new Array(Guitar.fretCount)).fill(0).map(function (v, i) {
                    return i;
                });
                return fretRange.filter(function (v, i) {
                    var startPitch = Pitch.startPitchArray[stringNumber];
                    if ((startPitch + i) % Pitch.pitchCount == pitchType)
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
            this.divForString1 = document.querySelector("#string1 > div.circles");
            this.divForString2 = document.querySelector("#string2 > div.circles");
            this.divForString3 = document.querySelector("#string3 > div.circles");
            this.divForString4 = document.querySelector("#string4 > div.circles");
            this.divForString5 = document.querySelector("#string5 > div.circles");
            this.divForString6 = document.querySelector("#string6 > div.circles");
            this.divBefore = document.querySelector("#before > div.circles");
            this.divAfter = document.querySelector("#after > div.circles");
            this.showEmpty();
            this.select();
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
        GuitarBoardController.prototype.select = function () {
            var scaleString = parseInt(document.querySelector("form[name='scaleForm'] > input:checked").value);
            var selectedDegree = parseInt(document.querySelector("form[name='degreeForm'] > input:checked").value);
            if (scaleString == Scale.ScaleType.MinorPentatonic) {
                this.showMinorScale(selectedDegree);
            }
            else if (scaleString == Scale.ScaleType.MajorPentatonic) {
                this.showMajorScale(selectedDegree);
            }
            else {
                this.showAllPitches();
            }
        };
        GuitarBoardController.prototype.showEmpty = function () {
            this.initUI();
            this.showPitches([]);
        };
        GuitarBoardController.prototype.showAllPitches = function () {
            this.initUI();
            this.showPitches([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        };
        GuitarBoardController.prototype.showMinorScale = function (firstDegree) {
            this.initUI();
            this.showPitches(Scale.getMinorScale(firstDegree));
            this.styleToPitches([firstDegree], "font-weight", "900");
        };
        GuitarBoardController.prototype.showMajorScale = function (firstDegree) {
            this.initUI();
            this.showPitches(Scale.getMajorScale(firstDegree));
            this.styleToPitches([firstDegree], "font-weight", "900");
        };
        GuitarBoardController.prototype.styleToPitches = function (pitches, key, value) {
            var allNoteSpan = document.querySelectorAll(".inner-box > div.circles > div > span");
            for (var i = 0; i < allNoteSpan.length; i++) {
                var found = pitches.find(function (value) {
                    if (allNoteSpan.item(i).textContent == Pitch.PitchType[value])
                        return true;
                    else
                        return false;
                }) != undefined;
                if (found)
                    allNoteSpan.item(i).style.setProperty(key, value);
            }
        };
        GuitarBoardController.prototype.clearUI = function () {
            var allNoteDiv = document.querySelectorAll(".inner-box > div.circles > div");
            for (var i = 0; i < allNoteDiv.length; i++) {
                allNoteDiv.item(i).remove();
            }
        };
        GuitarBoardController.prototype.initUI = function () {
            this.clearUI();
            for (var i = 0; i < Guitar.fretCount; i++) {
                this.divBefore.appendChild(this.createPaddingBox(" "));
                this.divAfter.appendChild(this.createPaddingBox(" "));
                this.divForString1.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[1], i + 1)]));
                this.divForString2.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[2], i + 1)]));
                this.divForString3.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[3], i + 1)]));
                this.divForString4.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[4], i + 1)]));
                this.divForString5.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[5], i + 1)]));
                this.divForString6.appendChild(this.createNoteBox(Pitch.PitchType[Pitch.getPitchByOffset(Pitch.startPitchArray[6], i + 1)]));
            }
            var nodeListAfter = this.divAfter.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeListAfter.length; i++) {
                [3, 5, 7, 9, 12, 15, 17, 19].filter(function (value) { return value == i + 1; }).forEach(function () {
                    nodeListAfter.item(i).textContent = "▴";
                });
            }
            var nodeListBefore = this.divBefore.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeListBefore.length; i++) {
                [12].filter(function (value) { return value == i + 1; }).forEach(function () {
                    nodeListBefore.item(i).textContent = "▾";
                });
            }
        };
        GuitarBoardController.prototype.showPitches = function (pitches) {
            var allNoteSpan = document.querySelectorAll(".inner-box > div.circles > div > span");
            for (var i = 0; i < allNoteSpan.length; i++) {
                var found = pitches.find(function (value) {
                    if ((Pitch.PitchType[allNoteSpan.item(i).textContent]) == value) {
                        return true;
                    }
                    else
                        return false;
                }) != undefined && (pitches.length != 0);
                if (!found) {
                    allNoteSpan.item(i).textContent = " ";
                }
            }
        };
        return GuitarBoardController;
    }());
    Music.GuitarBoardController = GuitarBoardController;
})(Music = exports.Music || (exports.Music = {}));


/***/ })
/******/ ]);