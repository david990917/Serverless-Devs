import { Parse } from '../../src/specification/parse'

describe("module parse", () => {
    it("Verify Class Parse Initialization", () => {
        const path = "/Users/serverless";
        const result = new Parse(path);
        expect(result).toEqual(
            { "dependenciesMap": {}, "globalJsonKeyMap": {}, "globalKeyArr": [], "magicVariablesArray": [], "parsedObj": {}, "path": "/Users/serverless" }
        )
    });

    it("getOriginalParsedObj",()=>{
        const path = "/Users/serverless";
        const p=new Parse(path);
        const result=p.getOriginalParsedObj()
        expect(result).toBeTruthy()
    });


    it("generateMagicVariables",()=>{
        const path = "/Users/serverless";
        const p=new Parse(path);

        const value="value1"
        const result=p.generateMagicVariables(value)
        expect(result).toBeTruthy()
        expect(result).toEqual([])
    });

    it("isProjectProperties 1",()=>{
        const path = "/Users/serverless";
        const p=new Parse(path);

        const topKey="value1";
        const parentKey="Properties";
        const result=p.isProjectProperties(topKey,parentKey)
        expect(result).toBeFalsy()
    });

    it("isProjectProperties 2",()=>{
        const path = "/Users/serverless";
        const p=new Parse(path);

        const topKey="value1";
        const parentKey="not Properties";
        const result=p.isProjectProperties(topKey,parentKey)
        expect(result).toBeFalsy()
    });

    it("replaceVariable",()=>{
        const path = "/Users/serverless";
        const p=new Parse(path);
        
        const variable=["variable1","variable2"];
        const result=p.replaceVariable(variable)
        expect(result).toEqual(["variable1", "variable2"])
    });
    
});