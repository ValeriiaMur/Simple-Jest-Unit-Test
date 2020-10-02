const enhancer = require('./enhancer.js');
// test away!

describe("enhance module", () =>{
    it("repairs", () =>{
        const item = {
            name:"Test",
            durability:0,
            enhancement:0
        }

        const expectedOutput = {
            name:"Test",
            durability:100,
            enhancement:0
        }
        const actualOutput = enhancer.repair(item);
        expect(actualOutput).toStrictEqual(expectedOutput);

    });
    it("enhancement succeeds", () =>{
        const item = {
            name:"Test",
            durability:100,
            enhancement:20
        }

        const expectedOutput = {
            name:"Test",
            durability:100,
            enhancement:20
        }
        const actualOutput = enhancer.success(item);
        expect(actualOutput).toStrictEqual(expectedOutput);

    });
});
