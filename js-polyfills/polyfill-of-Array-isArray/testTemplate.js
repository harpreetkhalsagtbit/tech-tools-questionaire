/* eslint-disable @typescript-eslint/no-require-imports */

const executeAllTests = (userName, fn) => {
    describe("Array detection functions", () => {
        describe(`${userName} - customIsArray`, () => {
            it("Should return true for regular arrays", () => {
                expect(fn([])).toBe(true);
                expect(fn([1, 2, 3])).toBe(true);
                expect(fn(new Array())).toBe(true);
                expect(fn(new Array(5))).toBe(true);
            });

            it("Should return false for non-array values", () => {
                expect(fn(42)).toBe(false);
                expect(fn("hello")).toBe(false);
                expect(fn({})).toBe(false);
                expect(fn(() => { })).toBe(false);
                expect(fn(null)).toBe(false);
                expect(fn(undefined)).toBe(false);
                expect(fn(new Set([1, 2, 3]))).toBe(false);
                expect(fn([...new Set([1, 2, 3])])).toBe(true);
            });

            it("Should return false for array-like objects", () => {
                expect(fn({ length: 0 })).toBe(false);
                const arrLike = Object.create(Array.prototype);
                expect(fn(arrLike)).toBe(false);
            });

            it("Should return false for `arguments` object", () => {
                const newFn = function() {
                    return fn(arguments);
                }
                expect(fn(newFn)).toBe(false); // `arguments` is not an array
            });

            it("Should return true for arrays created with Object.create(Array.prototype)", () => {
                expect(fn(Array.prototype)).toBe(true);
            });

            it("Should return false for objects created with Object.create([])", () => {
                const fakeArray = Object.create([]);
                expect(fn(fakeArray)).toBe(false);
            });
        });
    });
}

/*
    console.log(getInternalTag([])); // "[object Array]"
    console.log(getInternalTag({})); // "[object Object]"
    console.log(getInternalTag(arguments)); // "[object Arguments]"
    console.log(getInternalTag(new Set())); // "[object Set]"
    console.log(getInternalTag(Object.create(Array.prototype))); // "[object Object]
 */

/**
    Why this works?

    JavaScript objects have an internal [[Class]] property.
    Object.prototype.toString.call(value) reads this property and returns a string representation.
    For arrays, it always returns "[object Array]", distinguishing them from array-like objects like arguments, which return "[object Arguments]".
*/

module.exports = {
    executeAllTests
}
