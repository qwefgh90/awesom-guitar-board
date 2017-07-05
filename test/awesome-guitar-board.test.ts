import { Guitar, add } from "../src/awesome-guitar-board";
/*
* unit test for awesome-guitar.board.ts
*
*/
describe('awesome-guitar-board', function() {
    it('should return 3 for 1 + 2', function() {
        expect('3').toBe('3');
        expect(add(1, 2)).toBe(3);
        expect(add(1, 42)).toBe(43);
    });
});
