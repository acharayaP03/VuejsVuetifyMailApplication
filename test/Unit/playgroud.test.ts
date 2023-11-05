import { describe, it, expect } from "vitest";
import { evenOrOdd } from '../../src/composables/playground';

describe('Basic Math', () => {

    describe('even or odd', () => {
        it('checks if a number is even', () => {
            expect(evenOrOdd(2)).toBe('even');
        });

        it('checks if a number is odd', () => {
            expect(evenOrOdd(1)).toBe('odd');
        });
    });
});