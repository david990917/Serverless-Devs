import { createUniversalCommand,getCommandDetail,getParsedTemplateObj,getCustomerCommandInfo,createCustomerCommand,registerCommandChecker,registerExecCommand,registerCustomerCommand,registerUniversalCommand,registerVerbose,recordCommandHistory } from '../../src/utils/command-util'

describe('module command-utils', () => {

  it('test createUniversalCommand', () => {
    const command="s init";
    const v = createUniversalCommand(command);
    expect(v).toBeTruthy();
  });

  it('test getCommandDetail', () => {
    const name="name";
    const provider="provider";
    const version="version";
    const v = getCommandDetail(name,provider,version);
    expect(v).toBeTruthy();
  });
  
  it('test getParsedTemplateObj', () => {
    const parsedTemplateObj="";
    const v = getParsedTemplateObj(parsedTemplateObj);
    expect(v).toBeTruthy();
  });

  it('test getCustomerCommandInfo', () => {
    const parsedTemplateObj="";
    const v = getCustomerCommandInfo(parsedTemplateObj);
    expect(v).toBeTruthy();
  });

  it('test createCustomerCommand', () => {
    const templateFile="";
    const v = createCustomerCommand(templateFile);
    expect(v).toBeTruthy();
  });



  it('test registerCommandChecker', () => {
    const program="";
    const v = registerCommandChecker(program);
    expect(v).toBeUndefined();
  });

  it('test registerExecCommand', () => {
    const system_command="";
    const templateFile="";
    const v = registerExecCommand(system_command,templateFile);
    expect(v).toBeTruthy();
  });
  it('test registerCustomerCommand', () => {
    const system_command="";
    const templateFile="";
    const v = registerCustomerCommand(system_command,templateFile);
    expect(v).toBeTruthy();
  });
  it('test registerUniversalCommand', () => {
    const system_command="";
    const templateFile="";
    const v = registerUniversalCommand(system_command,templateFile);
    expect(v).toBeTruthy();
  });
  it('test registerVerbose', () => {
    const program="";
    const v = registerVerbose(program);
    expect(v).toBeUndefined();
  });
  it('test recordCommandHistory', () => {
    const tmp=["a","b"];
    const v = recordCommandHistory(tmp);
    expect(v).toBeUndefined();
  });
});