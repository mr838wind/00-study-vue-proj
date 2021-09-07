import { sum } from './math'

describe(' test math.js', () => {
    it('10 + 20 = 30', () => {
        const result = sum(10, 20);
        expect(result).toBe(30);
    });
});
