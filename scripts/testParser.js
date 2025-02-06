/* eslint-disable @typescript-eslint/no-require-imports */

const executeAllTests = (userName, fn) => {
    // override describe
    const describe = (title, cb) => {
        const tests = [];
        const myIt = function (title, cb) {
            const expects = []
            const myExpect = function () {
                return {
                    toBe: (value) => {
                        expects.push({ args: listOfAllInputsOfTestFunction[expects.length].replace('fn(', '').replace(')', ''), value });
                    }
                }
            }

            const expectRegex = /expect\(((?:[^()]*|\((?:[^()]*|\([^()]*\))*\))*)\)/g;

            let match;
            let listOfAllInputsOfTestFunction = [];
            while ((match = expectRegex.exec(cb.toString())) !== null) {
                listOfAllInputsOfTestFunction.push(match[1])
            }
            cb(myExpect)
            tests.push({ title, expects });
        }
        cb(myIt);
        describe.nested.push({ title, tests })
    }
    describe.nested = [];

    // override fn to test
    fn = function (arguments) {
        return arguments
    }

    // manually add test code here
    // Add: it and expect to callback
    describe("Array detection functions", () => {
        describe(`${userName} - customIsArray`, (it) => {
            it("should return true for regular arrays", (expect) => {
                expect(fn([])).toBe(true);
                expect(fn([1, 2, 3])).toBe(true);
                expect(fn(new Array())).toBe(true);
            });

            it("should return false for non-array values", (expect) => {
                expect(fn(42)).toBe(false);
                expect(fn("hello")).toBe(false);
                expect(fn({})).toBe(false);
                expect(fn(() => { })).toBe(false);
                expect(fn(null)).toBe(false);
                expect(fn(undefined)).toBe(false);
            });

            it("should return false for array-like objects", (expect) => {
                expect(fn({ length: 0 })).toBe(false);
                // expect(fn(arguments)).toBe(false); // `arguments` is not an array
            });

            it("should return true for arrays created with Object.create(Array.prototype)", (expect) => {
                const arrLike = Object.create(Array.prototype);
                expect(fn(arrLike)).toBe(true);
            });

            it("should return false for objects created with Object.create([])", (expect) => {
                const fakeArray = Object.create([]);
                expect(fn(fakeArray)).toBe(false);
            });
        });
        describe(`${userName} - customIsArray1`, (it) => {
            it("should return true for regular arrays2", (expect) => {
                expect(fn([])).toBe(true);
                expect(fn([1, 2, 3])).toBe(true);
                expect(fn(new Array())).toBe(true);
            });

            it("should return false for non-array values", (expect) => {
                expect(fn(42)).toBe(false);
                expect(fn("hello")).toBe(false);
                expect(fn({})).toBe(false);
                expect(fn(() => { })).toBe(false);
                expect(fn(null)).toBe(false);
                expect(fn(undefined)).toBe(false);
            });

            it("should return false for array-like objects", (expect) => {
                expect(fn({ length: 0 })).toBe(false);
                // expect(fn(arguments)).toBe(false); // `arguments` is not an array
            });

            it("should return true for arrays created with Object.create(Array.prototype)", (expect) => {
                const arrLike = Object.create(Array.prototype);
                expect(fn(arrLike)).toBe(true);
            });

            it("should return false for objects created with Object.create([])", (expect) => {
                const fakeArray = Object.create([]);
                expect(fn(fakeArray)).toBe(false);
            });
        });
    });

    console.log(describe.nested)
}


executeAllTests('harpreet', () => { console.log('hey') })
