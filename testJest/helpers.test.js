const helpers = require("./helpers");

describe('helpers=module', () =>{
    describe('sum function', ()=>{
        it("can add two numbers", () =>{
            const expectedOutput = 10;
            const actualOutput = helpers.sum(5, 5);
            expect(actualOutput).toBe(expectedOutput);
            // expect(actualOutput).not.toBe(3);
            // expect(actualOutput).toBeTruthy();
            // expect(actualOutput).toBeDefined();
            // expect(actualOutput).toBeGreaterThan(1);
        });
        it('it can add three numbers', () =>{
            const expectedOutput = 7;
            const actualOutput = helpers.sum(0, 5, 2);
            expect(actualOutput).toBe(expectedOutput);
        })
    })
})