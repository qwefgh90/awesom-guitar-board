enum PitchType {
    C = 0, Db, D, Eb, E, F, Gb, G, Ab, A, Bb, B
}

export function add(a: number, b: number) {
    return a + b;
}

export class Guitar {
    private pitchCount = 12;
    private pitchForEachString = [-1, PitchType.E
        , PitchType.B
        , PitchType.G
        , PitchType.D
        , PitchType.A
        , PitchType.E]

    constructor() { }

    findFretByString(stringNumber: number): (p: PitchType) => Array<number> {
        let fretFinder = (pitchType: PitchType): Array<number> => {
            //0~22 fret
            let fretRange = new Array(23)
            return fretRange.filter((v, i) => {
                let startPitch = this.pitchForEachString[stringNumber];
                if (startPitch + i % this.pitchCount == pitchType)
                    return true;
                else
                    return false;
            });
        };
        return fretFinder;
    }
}
