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
})(PitchType || (PitchType = {}));
var Guitar = (function () {
    function Guitar() {
        this.pitchCount = 12;
        this.pitchForEachString = [-1, PitchType.E,
            PitchType.B,
            PitchType.G,
            PitchType.D,
            PitchType.A,
            PitchType.E];
    }
    Guitar.prototype.findFretByString = function (stringNumber) {
        var _this = this;
        var fretFinder = function (pitchType) {
            var fretRange = new Array(23);
            return fretRange.filter(function (v, i) {
                var startPitch = _this.pitchForEachString[stringNumber];
                if (startPitch + i % _this.pitchCount == pitchType)
                    return true;
                else
                    return false;
            });
        };
        return fretFinder;
    };
    return Guitar;
})();
//# sourceMappingURL=awesome-guitar-board.js.map