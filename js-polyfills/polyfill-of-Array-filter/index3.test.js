/* eslint-disable @typescript-eslint/no-require-imports */
const modules = require("./solutions");

const modulesArr = Object.entries(modules);

describe("Array detection functions", () => {
    modulesArr.forEach((moduleDetails) => {
        const [userName, userModule] = moduleDetails
        const [functionName] = Object.keys(userModule)
        const fn = userModule.customIsArray;
        // console.log(String(name), name.description)
      describe(`${userName} - ${functionName}`, () => {
        it("should return true for regular arrays", () => {
            expect(fn([])).toBe(true);
            expect(fn([1, 2, 3])).toBe(true);
            expect(fn(new Array())).toBe(true);
        });
    
        it("should return false for non-array values", () => {
            expect(fn(42)).toBe(false);
            expect(fn("hello")).toBe(false);
            expect(fn({})).toBe(false);
            expect(fn(() => { })).toBe(false);
            expect(fn(null)).toBe(false);
            expect(fn(undefined)).toBe(false);
        });
    
        it("should return false for array-like objects", () => {
            expect(fn({ length: 0 })).toBe(false);
            expect(fn(arguments)).toBe(false); // `arguments` is not an array
        });
    
        it("should return true for arrays created with Object.create(Array.prototype)", () => {
            const arrLike = Object.create(Array.prototype);
            expect(fn(arrLike)).toBe(true);
        });
    
        it("should return false for objects created with Object.create([])", () => {
            const fakeArray = Object.create([]);
            expect(fn(fakeArray)).toBe(false);
        });
      });
    });
});
