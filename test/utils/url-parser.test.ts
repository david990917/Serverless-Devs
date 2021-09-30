import { parse,getProjectNameFromUrl,isUrlFormat,extractTemplateInfo } from '../../src/utils/url-parser'
import URL from 'url';

describe('module url-parser', () => {
    it('test parse', () => {
        
        expect(2).toBeTruthy();
  });

  it('test parse', () => {
        const url="";
        const v = parse(url);
        expect(v).toBeTruthy();
  });

  it('test getProjectNameFromUrl', () => {
    const url="";
    const v = getProjectNameFromUrl(url);
    expect(v).toBeTruthy();
    });

    it('test isUrlFormat', () => {
        const url="";
        const v = isUrlFormat(url);
        expect(v).toBeTruthy();
    });

});