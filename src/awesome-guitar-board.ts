export namespace Music {
    export enum PitchType {
        C = 0, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
    }
    export let pitchCount = 12;
    export let fretCount = 23;
    export let startPitchArray = [-1, PitchType.E
        , PitchType.B
        , PitchType.G
        , PitchType.D
        , PitchType.A
        , PitchType.E]

    export namespace Scale {
        export function getMinorScale(firstPitch: PitchType): Array<PitchType> {
            let degrees = [0, 3, 5, 7, 10];
            return getScale(firstPitch, degrees);
        }
        function getScale(firstPitch: PitchType, pitchPosition: Array<number>): Array<PitchType> {
            return pitchPosition.map((position) =>
                (firstPitch + position) % pitchCount);
        }
        export function getMajorScale(firstPitch: PitchType): Array<PitchType> {
            let degrees = [0, 2, 4, 7, 9];
            return getScale(firstPitch, degrees);
        }
    }

    export namespace Guitar {
        export function findFretByString(stringNumber: number): (p: PitchType) => Array<number> {
            let fretFinder = (pitchType: PitchType): Array<number> => {
                //0~22 fret
                let fretRange = (new Array<number>(fretCount)).fill(0).map((v, i) => {
                    return i;
                });
                return fretRange.filter((v, i) => {
                    let startPitch = startPitchArray[stringNumber];
                    if ((startPitch + i) % pitchCount == pitchType)
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
          pitch is one of PitchType
        */
        createNoteBox(text: string): Element {
            let div = document.createElement("div");
            div.className = "note-box";
            let emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        }

        createPaddingBox(text: string): Element {
            let div = document.createElement("div");
            div.className = "spadding-box";
            let emptySpan = document.createElement("span");
            emptySpan.textContent = text;
            div.appendChild(emptySpan);
            return div;
        }

        replaceText(stringNumber: number, fret: number, text: string): void {

        }

        initUI() {
            let divForString1 = document.querySelector("#string1 > div.circles");
            let divForString2 = document.querySelector("#string2 > div.circles");
            let divForString3 = document.querySelector("#string3 > div.circles");
            let divForString4 = document.querySelector("#string4 > div.circles");
            let divForString5 = document.querySelector("#string5 > div.circles");
            let divForString6 = document.querySelector("#string6 > div.circles");
            let divBefore = document.querySelector("#before > div.circles");
            let divAfter = document.querySelector("#after > div.circles");
            for (var i = 0; i < fretCount; i++) {
                divBefore.appendChild(this.createPaddingBox(" "));
                divAfter.appendChild(this.createPaddingBox(" "));
                divForString1.appendChild(this.createNoteBox(PitchType[(startPitchArray[1] + i + 1) % pitchCount]));
                divForString2.appendChild(this.createNoteBox(PitchType[(startPitchArray[2] + i + 1) % pitchCount]));
                divForString3.appendChild(this.createNoteBox(PitchType[(startPitchArray[3] + i + 1) % pitchCount]));
                divForString4.appendChild(this.createNoteBox(PitchType[(startPitchArray[4] + i + 1) % pitchCount]));
                divForString5.appendChild(this.createNoteBox(PitchType[(startPitchArray[5] + i + 1) % pitchCount]));
                divForString6.appendChild(this.createNoteBox(PitchType[(startPitchArray[6] + i + 1) % pitchCount]));
            }

            //highlight 3, 5, 7, 9, 12 frets
            let nodeList = divAfter.querySelectorAll('div.circles > div > span');
            for (var i = 0; i < nodeList.length; i++) {
                [3, 5, 7, 9, 12, 15].filter((value) => value == i + 1).forEach(() => {
                    nodeList.item(i).textContent = "▴";
                })
            }
        }

    }
}
