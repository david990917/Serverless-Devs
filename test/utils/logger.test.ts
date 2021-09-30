import ServerlessDevsCliLogger from '../../src/utils/logger'

describe('module logger', () => {
    it('test logger', () => {
      const v = new ServerlessDevsCliLogger();
      expect(v).toBeTruthy();
    });

   
    it('test log',()=> {
        const m="";
        const v= ServerlessDevsCliLogger.log(m)
        expect(v).toBeUndefined();
    });

    it('test info',()=> {
        const m="";
        const v= ServerlessDevsCliLogger.info(m)
        expect(v).toBeUndefined();
        });

    it('test debug',()=> {
        const m="";
        const v= ServerlessDevsCliLogger.debug(m)
        expect(v).toBeUndefined();
        });

    it('test error',()=> {
        const m="";
        const v= ServerlessDevsCliLogger.error(m)
        expect(v).toBeUndefined();
        });

    it('test warning',()=> {
        const m="";
        const v= ServerlessDevsCliLogger.warning(m)
        expect(v).toBeUndefined();
        });

  });