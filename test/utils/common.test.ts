import { checkAndReturnTemplateFile,checkTemplateFile,printn,getLang,replaceFun,getTemplatekey,replaceTemplate,mark,emoji} from '../../src/utils/common'

describe('module common', () => {

  it('test checkAndReturnTemplateFile', () => {
    const v = checkAndReturnTemplateFile();
    expect(v).toBeNull();
  });

  it('test checkTemplateFile', () => {
    const templateFile=""
    const v = checkTemplateFile(templateFile);
    expect(v).toBeNull();
  });
  
  it('test printn', () => {
    const n=1;
    const v = printn(n);
    expect(v).toBeTruthy();
  });

  it('test getLang', () => {
    const v = getLang();
    expect(v).toBeTruthy();
  });

  it('test replaceFun', () => {
    const str="";
    const obj="";
    const v = replaceFun(str,obj);
    expect(v).toEqual("");
  });



  it('test getTemplatekey', () => {
    const str="";
    const v = getTemplatekey(str);
    expect(v).toBeTruthy();
  });

  it('test replaceTemplate', () => {
    const files=["a","b"];
    const content={"1":"a"};
    const v = replaceTemplate(files,content);
    expect(v).toBeUndefined();
  });

  it('test mark', () => {
    const source="";
    const v = mark(source);
    expect(v).toEqual("");
  });

  it('test emoji', () => {
    const emojiStr="";
    const v = emoji(emojiStr);
    expect(v).toEqual("");
  });

  
  
});