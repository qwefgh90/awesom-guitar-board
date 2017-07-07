export namespace Music {
    export namespace Pitch {
        export enum PitchType {
            C = 0, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
        }
        export let pitchCount = 12;
        export let startPitchArray = [-1, PitchType.E
            , PitchType.B
            , PitchType.G
            , PitchType.D
            , PitchType.A
            , PitchType.E]

        export function getPitchByOffset(startPitch: Pitch.PitchType, offset: number): Pitch.PitchType {
            return (startPitch + offset) % pitchCount;
        }
    }

    export namespace Scale {
        export enum ScaleType {
            None = 0,
            MinorPentatonic,
            MajorPentatonic
        }
        export function getMinorScale(firstPitch: Pitch.PitchType): Array<Pitch.PitchType> {
            let degrees = [0, 3, 5, 7, 10];
            return getScale(firstPitch, degrees);
        }
        export function getMajorScale(firstPitch: Pitch.PitchType): Array<Pitch.PitchType> {
            let degrees = [0, 2, 4, 7, 9];
            return getScale(firstPitch, degrees);
        }
        function getScale(firstPitch: Pitch.PitchType, pitchPosition: Array<number>): Array<Pitch.PitchType> {
            return pitchPosition.map((position) =>
                (firstPitch + position) % Pitch.pitchCount);
        }
    }

    export namespace Guitar {
        export let fretCount = 23;
        export function findFretByString(stringNumber: number): (p: Pitch.PitchType) => Array<number> {
            let fretFinder = (pitchType: Pitch.PitchType): Array<number> => {
                //0~22 fret
                let fretRange = (new Array<number>(fretCount)).fill(0).map((v, i) => {
                    return i;
                });
                return fretRange.filter((v, i) => {
                    let startPitch = Pitch.startPitchArray[stringNumber];
                    if ((startPitch + i) % Pitch.pitchCount == pitchType)
                        return true;
                    else
                        return false;
                });
            };
            return fretFinder;
        }
    }

    export class GuitarBoardController {

        /*
          ○ | pitch | whitespace | etc
          pitch is one of Pitch.PitchType
        */
        private createNoteBox(text: string): Element {
            let div = document.createElement("div");
            div.className = "note-box";
            let emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        }

        private createPaddingBox(text: string): Element {
            let div = document.createElement("div");
            div.className = "spadding-box";
            let emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        }

        replaceText(stringNumber: number, fret: number, text: string): void {

        }

        private divForString1 = document.querySelector("#string1 > div.circles");
        private divForString2 = document.querySelector("#string2 > div.circles");
        private divForString3 = document.querySelector("#string3 > div.circles");
        private divForString4 = document.querySelector("#string4 > div.circles");
        private divForString5 = document.querySelector("#string5 > div.circles");
        private divForString6 = document.querySelector("#string6 > div.circles");
        private divBefore = document.querySelector("#before > div.circles");
        private divAfter = document.querySelector("#after > div.circles");

        constructor() {
            this.showEmpty();
            this.select();
        }

        public select() {
            let scaleString = parseInt((<HTMLInputElement>document.querySelector("form[name='scaleForm'] > input:checked")).value);
            let selectedDegree = parseInt((<HTMLInputElement>document.querySelector("form[name='degreeForm'] > input:checked")).value);
            if ((<Scale.ScaleType>scaleString) == Scale.ScaleType.MinorPentatonic) {
                this.showMinorScale(<Pitch.PitchType>selectedDegree);
            } else if ((<Scale.ScaleType>scaleString) == Scale.ScaleType.MajorPentatonic) {
                this.showMajorScale(<Pitch.PitchType>selectedDegree);
            } else {
                this.showAllPitches();
            }
        }

        public showEmpty() {
            this.initUI();
            this.showPitches([]);
        }

        public showAllPitches() {
            this.initUI();
            this.showPitches([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
        }

        public showMinorScale(firstDegree: Pitch.PitchType) {
            this.initUI();
            this.showPitches(Scale.getMinorScale(firstDegree));
            this.styleToPitches([firstDegree], "font-weight", "900");
        }

        public showMajorScale(firstDegree: Pitch.PitchType) {
            this.initUI();
            this.showPitches(Scale.getMajorScale(firstDegree));
            this.styleToPitches([firstDegree], "font-weight", "900");
        }

        public styleToPitches(pitches: Array<Pitch.PitchType>, key: string, value: string) {
            let allNoteSpan = document.querySelectorAll(".inner-box > div.circles > div > span");
            for (var i = 0; i < allNoteSpan.length; i++) {
                let found = pitches.find(value => {
                    if (allNoteSpan.item(i).textContent == Pitch.PitchType[value])
                        return true;
                    else
                        return false;
                }) != undefined;
                if (found)
                    (<HTMLElement>allNoteSpan.item(i)).style.setProperty(key, value);
            }
        }

        private clearUI() {
            let allNoteDiv = document.querySelectorAll(".inner-box > div.circles > div");
            for (var i = 0; i < allNoteDiv.length; i++) {
                allNoteDiv.item(i).remove();
            }
        }

        private initUI() {
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

            //highlight 3, 5, 7, 9, 12 frets
            let nodeListAfter = this.divAfter.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeListAfter.length; i++) {
                [3, 5, 7, 9, 12, 15, 17, 19].filter((value) => value == i + 1).forEach(() => {
                    nodeListAfter.item(i).textContent = "▴";
                })
            }

            //highlight 3, 5, 7, 9, 12 frets
            let nodeListBefore = this.divBefore.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeListBefore.length; i++) {
                [12].filter((value) => value == i + 1).forEach(() => {
                    nodeListBefore.item(i).textContent = "▾";
                })
            }
        }

        private showPitches(pitches: Array<number>): void {
            let allNoteSpan = document.querySelectorAll(".inner-box > div.circles > div > span");
            for (var i = 0; i < allNoteSpan.length; i++) {
                let found = pitches.find(value => {
                    if (((<any>Pitch.PitchType)[allNoteSpan.item(i).textContent]) == value) {
                        return true;
                    } else
                        return false;
                }) != undefined && (pitches.length != 0);
                if (!found) {
                    allNoteSpan.item(i).textContent = " ";
                }

            }
        }
    }
}
