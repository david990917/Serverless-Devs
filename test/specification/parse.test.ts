import { Parse } from '../../src/specification/parse'

describe("module parse", () => {
    it("Verify Class Parse Initialization", () => {
        const path = "/Users/starky";
        const result = new Parse(path);
        expect(result).toEqual(
            { "dependenciesMap": {}, "globalJsonKeyMap": {}, "globalKeyArr": [], "magicVariablesArray": [], "parsedObj": {}, "path": "/Users/starky" }
        )
    });
});