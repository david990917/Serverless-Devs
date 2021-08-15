import { Analysis } from '../../src/specification/analysis'


describe('module analysis', () => {
    it('test getProjectOrder methods', () => {
        const parsedObj="a";
        expect(parsedObj).toEqual("a")

        const dependenciesMap:string[]=["a","Global","b"];

        const analysis=new Analysis(parsedObj,dependenciesMap);
        expect(analysis).toBeTruthy()
        
        const result=analysis.getProjectOrder();
        expect(result).toBeTruthy()
        expect(result).toEqual(["0","1","2"])
    });

});