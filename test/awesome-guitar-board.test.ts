import { Music } from "../src/awesome-guitar-board";
import PitchType = Music.Pitch.PitchType;
import Guitar = Music.Guitar;

/*
 * unit test for awesome-guitar.board.ts
 */
describe('awesome-guitar-board', function() {
    it('should return frets mapping to every pitch in 1 string', function() {
        let g = Guitar;
        expect(g.findFretByString(1)(PitchType.C)).toEqual([8, 20]);
        expect(g.findFretByString(1)(PitchType.Db)).toEqual([9, 21]);
        expect(g.findFretByString(1)(PitchType.D)).toEqual([10, 22]);
        expect(g.findFretByString(1)(PitchType.Eb)).toEqual([11]);
        expect(g.findFretByString(1)(PitchType.E)).toEqual([0, 12]);
        expect(g.findFretByString(1)(PitchType.F)).toEqual([1, 13]);
        expect(g.findFretByString(1)(PitchType.Gb)).toEqual([2, 14]);
        expect(g.findFretByString(1)(PitchType.G)).toEqual([3, 15]);
        expect(g.findFretByString(1)(PitchType.Ab)).toEqual([4, 16]);
        expect(g.findFretByString(1)(PitchType.A)).toEqual([5, 17]);
        expect(g.findFretByString(1)(PitchType.Bb)).toEqual([6, 18]);
        expect(g.findFretByString(1)(PitchType.B)).toEqual([7, 19]);
    });

    it('should return frets mapping to every pitch in 2 string', function() {
        let g = Guitar;
        expect(g.findFretByString(2)(PitchType.G)).toEqual([8, 20]);
        expect(g.findFretByString(2)(PitchType.Ab)).toEqual([9, 21]);
        expect(g.findFretByString(2)(PitchType.A)).toEqual([10, 22]);
        expect(g.findFretByString(2)(PitchType.Bb)).toEqual([11]);
        expect(g.findFretByString(2)(PitchType.B)).toEqual([0, 12]);
        expect(g.findFretByString(2)(PitchType.C)).toEqual([1, 13]);
        expect(g.findFretByString(2)(PitchType.Db)).toEqual([2, 14]);
        expect(g.findFretByString(2)(PitchType.D)).toEqual([3, 15]);
        expect(g.findFretByString(2)(PitchType.Eb)).toEqual([4, 16]);
        expect(g.findFretByString(2)(PitchType.E)).toEqual([5, 17]);
        expect(g.findFretByString(2)(PitchType.F)).toEqual([6, 18]);
        expect(g.findFretByString(2)(PitchType.Gb)).toEqual([7, 19]);
    });

    it('should return frets mapping to every pitch in 3 string', function() {
        let g = Guitar;
        expect(g.findFretByString(3)(PitchType.Eb)).toEqual([8, 20]);
        expect(g.findFretByString(3)(PitchType.E)).toEqual([9, 21]);
        expect(g.findFretByString(3)(PitchType.F)).toEqual([10, 22]);
        expect(g.findFretByString(3)(PitchType.Gb)).toEqual([11]);
        expect(g.findFretByString(3)(PitchType.G)).toEqual([0, 12]);
        expect(g.findFretByString(3)(PitchType.Ab)).toEqual([1, 13]);
        expect(g.findFretByString(3)(PitchType.A)).toEqual([2, 14]);
        expect(g.findFretByString(3)(PitchType.Bb)).toEqual([3, 15]);
        expect(g.findFretByString(3)(PitchType.B)).toEqual([4, 16]);
        expect(g.findFretByString(3)(PitchType.C)).toEqual([5, 17]);
        expect(g.findFretByString(3)(PitchType.Db)).toEqual([6, 18]);
        expect(g.findFretByString(3)(PitchType.D)).toEqual([7, 19]);
    });


    it('should return frets mapping to every pitch in 4 string', function() {
        let g = Guitar;
        expect(g.findFretByString(4)(PitchType.Bb)).toEqual([8, 20]);
        expect(g.findFretByString(4)(PitchType.B)).toEqual([9, 21]);
        expect(g.findFretByString(4)(PitchType.C)).toEqual([10, 22]);
        expect(g.findFretByString(4)(PitchType.Db)).toEqual([11]);
        expect(g.findFretByString(4)(PitchType.D)).toEqual([0, 12]);
        expect(g.findFretByString(4)(PitchType.Eb)).toEqual([1, 13]);
        expect(g.findFretByString(4)(PitchType.E)).toEqual([2, 14]);
        expect(g.findFretByString(4)(PitchType.F)).toEqual([3, 15]);
        expect(g.findFretByString(4)(PitchType.Gb)).toEqual([4, 16]);
        expect(g.findFretByString(4)(PitchType.G)).toEqual([5, 17]);
        expect(g.findFretByString(4)(PitchType.Ab)).toEqual([6, 18]);
        expect(g.findFretByString(4)(PitchType.A)).toEqual([7, 19]);
    });

    it('should return frets mapping to every pitch in 5 string', function() {
        let g = Guitar;
        expect(g.findFretByString(5)(PitchType.F)).toEqual([8, 20]);
        expect(g.findFretByString(5)(PitchType.Gb)).toEqual([9, 21]);
        expect(g.findFretByString(5)(PitchType.G)).toEqual([10, 22]);
        expect(g.findFretByString(5)(PitchType.Ab)).toEqual([11]);
        expect(g.findFretByString(5)(PitchType.A)).toEqual([0, 12]);
        expect(g.findFretByString(5)(PitchType.Bb)).toEqual([1, 13]);
        expect(g.findFretByString(5)(PitchType.B)).toEqual([2, 14]);
        expect(g.findFretByString(5)(PitchType.C)).toEqual([3, 15]);
        expect(g.findFretByString(5)(PitchType.Db)).toEqual([4, 16]);
        expect(g.findFretByString(5)(PitchType.D)).toEqual([5, 17]);
        expect(g.findFretByString(5)(PitchType.Eb)).toEqual([6, 18]);
        expect(g.findFretByString(5)(PitchType.E)).toEqual([7, 19]);
    });


    it('should return frets mapping to every pitch in 6 string', function() {
        let g = Guitar;
        expect(g.findFretByString(6)(PitchType.C)).toEqual([8, 20]);
        expect(g.findFretByString(6)(PitchType.Db)).toEqual([9, 21]);
        expect(g.findFretByString(6)(PitchType.D)).toEqual([10, 22]);
        expect(g.findFretByString(6)(PitchType.Eb)).toEqual([11]);
        expect(g.findFretByString(6)(PitchType.E)).toEqual([0, 12]);
        expect(g.findFretByString(6)(PitchType.F)).toEqual([1, 13]);
        expect(g.findFretByString(6)(PitchType.Gb)).toEqual([2, 14]);
        expect(g.findFretByString(6)(PitchType.G)).toEqual([3, 15]);
        expect(g.findFretByString(6)(PitchType.Ab)).toEqual([4, 16]);
        expect(g.findFretByString(6)(PitchType.A)).toEqual([5, 17]);
        expect(g.findFretByString(6)(PitchType.Bb)).toEqual([6, 18]);
        expect(g.findFretByString(6)(PitchType.B)).toEqual([7, 19]);
    });
});
