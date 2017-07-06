define("src/awesome-guitar-board", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        document.onload = function (event) {
            initUI();
        };
    })();
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
    })(PitchType = exports.PitchType || (exports.PitchType = {}));
    exports.pitchCount = 12;
    exports.startPitchArray = [-1, PitchType.E,
        PitchType.B,
        PitchType.G,
        PitchType.D,
        PitchType.A,
        PitchType.E];
    var Guitar = (function () {
        function Guitar() {
        }
        Guitar.prototype.findFretByString = function (stringNumber) {
            var fretFinder = function (pitchType) {
                var fretRange = (new Array(23)).fill(0).map(function (v, i) {
                    return i;
                });
                return fretRange.filter(function (v, i) {
                    var startPitch = exports.startPitchArray[stringNumber];
                    if ((startPitch + i) % exports.pitchCount == pitchType)
                        return true;
                    else
                        return false;
                });
            };
            return fretFinder;
        };
        return Guitar;
    }());
    exports.Guitar = Guitar;
    function initUI() {
        var divForString1 = document.querySelector("#string1 > div.circles");
        var divForString2 = document.querySelector("#string2 > div.circles");
        var divForString3 = document.querySelector("#string3 > div.circles");
        var divForString4 = document.querySelector("#string4 > div.circles");
        var divForString5 = document.querySelector("#string5 > div.circles");
        var divForString6 = document.querySelector("#string6 > div.circles");
        for (var i = 0; i < exports.pitchCount; i++) {
            console.log("initialize " + i);
            divForString1.appendChild(createNoteBox(PitchType[(exports.startPitchArray[1] + i) % exports.pitchCount]));
            divForString2.appendChild(createNoteBox(PitchType[(exports.startPitchArray[2] + i) % exports.pitchCount]));
            divForString3.appendChild(createNoteBox(PitchType[(exports.startPitchArray[3] + i) % exports.pitchCount]));
            divForString4.appendChild(createNoteBox(PitchType[(exports.startPitchArray[4] + i) % exports.pitchCount]));
            divForString5.appendChild(createNoteBox(PitchType[(exports.startPitchArray[5] + i) % exports.pitchCount]));
            divForString6.appendChild(createNoteBox(PitchType[(exports.startPitchArray[6] + i) % exports.pitchCount]));
        }
    }
    function createNoteBox(text) {
        var div = document.createElement("div");
        div.className = "note-box";
        var emptySpan = document.createElement("span");
        emptySpan.textContent = text;
        div.appendChild(emptySpan);
        return div;
    }
});
define("test/awesome-guitar-board.test", ["require", "exports", "src/awesome-guitar-board"], function (require, exports, awesome_guitar_board_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    describe('awesome-guitar-board', function () {
        it('should return frets mapping to every pitch in 1 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.C)).toEqual([8, 20]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.Db)).toEqual([9, 21]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.D)).toEqual([10, 22]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.Eb)).toEqual([11]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.E)).toEqual([0, 12]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.F)).toEqual([1, 13]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.Gb)).toEqual([2, 14]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.G)).toEqual([3, 15]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.Ab)).toEqual([4, 16]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.A)).toEqual([5, 17]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.Bb)).toEqual([6, 18]);
            expect(g.findFretByString(1)(awesome_guitar_board_1.PitchType.B)).toEqual([7, 19]);
        });
        it('should return frets mapping to every pitch in 2 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.G)).toEqual([8, 20]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.Ab)).toEqual([9, 21]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.A)).toEqual([10, 22]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.Bb)).toEqual([11]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.B)).toEqual([0, 12]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.C)).toEqual([1, 13]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.Db)).toEqual([2, 14]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.D)).toEqual([3, 15]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.Eb)).toEqual([4, 16]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.E)).toEqual([5, 17]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.F)).toEqual([6, 18]);
            expect(g.findFretByString(2)(awesome_guitar_board_1.PitchType.Gb)).toEqual([7, 19]);
        });
        it('should return frets mapping to every pitch in 3 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.Eb)).toEqual([8, 20]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.E)).toEqual([9, 21]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.F)).toEqual([10, 22]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.Gb)).toEqual([11]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.G)).toEqual([0, 12]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.Ab)).toEqual([1, 13]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.A)).toEqual([2, 14]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.Bb)).toEqual([3, 15]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.B)).toEqual([4, 16]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.C)).toEqual([5, 17]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.Db)).toEqual([6, 18]);
            expect(g.findFretByString(3)(awesome_guitar_board_1.PitchType.D)).toEqual([7, 19]);
        });
        it('should return frets mapping to every pitch in 4 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.Bb)).toEqual([8, 20]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.B)).toEqual([9, 21]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.C)).toEqual([10, 22]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.Db)).toEqual([11]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.D)).toEqual([0, 12]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.Eb)).toEqual([1, 13]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.E)).toEqual([2, 14]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.F)).toEqual([3, 15]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.Gb)).toEqual([4, 16]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.G)).toEqual([5, 17]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.Ab)).toEqual([6, 18]);
            expect(g.findFretByString(4)(awesome_guitar_board_1.PitchType.A)).toEqual([7, 19]);
        });
        it('should return frets mapping to every pitch in 5 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.F)).toEqual([8, 20]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.Gb)).toEqual([9, 21]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.G)).toEqual([10, 22]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.Ab)).toEqual([11]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.A)).toEqual([0, 12]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.Bb)).toEqual([1, 13]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.B)).toEqual([2, 14]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.C)).toEqual([3, 15]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.Db)).toEqual([4, 16]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.D)).toEqual([5, 17]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.Eb)).toEqual([6, 18]);
            expect(g.findFretByString(5)(awesome_guitar_board_1.PitchType.E)).toEqual([7, 19]);
        });
        it('should return frets mapping to every pitch in 6 string', function () {
            var g = new awesome_guitar_board_1.Guitar();
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.C)).toEqual([8, 20]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.Db)).toEqual([9, 21]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.D)).toEqual([10, 22]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.Eb)).toEqual([11]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.E)).toEqual([0, 12]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.F)).toEqual([1, 13]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.Gb)).toEqual([2, 14]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.G)).toEqual([3, 15]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.Ab)).toEqual([4, 16]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.A)).toEqual([5, 17]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.Bb)).toEqual([6, 18]);
            expect(g.findFretByString(6)(awesome_guitar_board_1.PitchType.B)).toEqual([7, 19]);
        });
    });
});
//# sourceMappingURL=main.js.map