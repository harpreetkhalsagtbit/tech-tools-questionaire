/* eslint-disable @typescript-eslint/no-require-imports */
const modules = require("./solutions");

const { executeAllTests } = require("./testTemplate");

const modulesArr = Object.entries(modules);

modulesArr.forEach((moduleDetails) => {
    const [userName, userModule] = moduleDetails
    // const [functionName] = Object.keys(userModule)
    const fn = userModule.customIsArray;
    executeAllTests(userName, fn)
});


module.exports = {
    executeAllTests
}
