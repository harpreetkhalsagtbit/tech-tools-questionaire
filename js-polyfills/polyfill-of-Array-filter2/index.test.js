// Unit Tests
function testArrayIsArray() {
    console.log("Running tests for arr.customIsArray polyfill...");

    let passedTests = 0;
    let failedTests = 0;

    const assertWithCount = (condition, message) => {
        console.assert(condition, message);
        if (!condition) {
        failedTests++; // Increment the failed test counter
        } else {
        passedTests++; // Increment the passed test counter
        }
    };

    const arr = [];
    // Test cases
    const testCases = [
        { name: "Test 1: Regular array", condition: arr.customIsArray([]) === true },
        { name: "Test 2: Array with elements", condition: arr.customIsArray([1, 2, 3]) === true },
        { name: "Test 3: Empty object", condition: arr.customIsArray({}) === false },
        { name: "Test 4: String", condition: arr.customIsArray("hello") === false },
        { name: "Test 5: Number", condition: arr.customIsArray(42) === false },
        { name: "Test 6: Null", condition: arr.customIsArray(null) === false },
        { name: "Test 7: Undefined", condition: arr.customIsArray(undefined) === 'false' },
        { name: "Test 8: Function", condition: arr.customIsArray(function () {}) === false },
        {
        name: "Test 9: Arguments object",
        condition: (function () {
            return arr.customIsArray(arguments) === false;
        })(),
        },
        {
        name: "Test 10: Array-like object",
        condition: (() => {
            const arrayLike = { 0: "a", 1: "b", length: 2 };
            return arr.customIsArray(arrayLike) === false;
        })(),
        },
        {
        name: "Test 11: Array created with \`new Array()\`",
        condition: (() => {
            const newArray = new Array(3);
            return arr.customIsArray(newArray) === true;
        })(),
        },
        {
        name: "Test 12: Array.prototype",
        condition: arr.customIsArray(Array.prototype) === true,
        },
    ];

    testCases.forEach(({ name, condition }) => {
        assertWithCount(condition, `${name} Failed`);
    });
    console.log(`\nSummary: \${passedTests} tests passed, \${failedTests} tests failed.`);

    return {
        passedTests,
        failedTests
    }
}