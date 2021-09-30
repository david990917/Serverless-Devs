import {setConfig,getConfig,handlerProfileFile,ProfileParams } from '../../src/utils/handler-set-config'

describe('module handler-set-config', () => {

  it('test setConfig', () => {
        const key="";
        const value="";
        const v = setConfig(key,value);
        expect(v).toBeUndefined();
    });

    it('test getConfig', () => {
        const key="";
        const v = getConfig(key);
        expect(v).toEqual("");
    });
    
    it('test handlerProfileFile', () => {
        const params:ProfileParams= {
            data:'string',
            configKey:'string',
            read:true,
            filePath:'string'
          };
          const v=handlerProfileFile(params);
          interface Profile {
            [key: string]: any;
          }
          const profile: Profile = {};
        expect(v).toEqual(profile);
    });

  
  
});