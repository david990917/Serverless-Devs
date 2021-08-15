/** @format */

export class Analysis {
  protected componentOrderKeyMap: { [key: string]: any } = {}; /**定义了componentOrderKeyMap */
  constructor(protected readonly parsedObj: any, protected readonly dependenciesMap: any) {} /**实际上就是构造函数，需要参数 */
  
  private getComponentOrderKeyMap(projKeys: string[]) { /**定义函数 */
    projKeys.forEach((key: string) => {
      this.componentOrderKeyMap[key] = 1; /**给他们放入 componentOrderKeyMap 中，并且值设置为1 */
    });
  }

  private calculateOrderNumber(componentKeys: string[]) { /**同样定义了一个函数 */
    componentKeys.forEach((key: string) => {
      const dependenciesInstance = this.dependenciesMap[key]; // 读取 key 对应的 值
      Object.keys(dependenciesInstance).forEach(_key => { 
        if (this.componentOrderKeyMap[_key]) {
          this.componentOrderKeyMap[_key] += dependenciesInstance[_key];
        }
      });
    });
  }

  getProjectOrder() {
    const componentKeys = Object.keys(this.dependenciesMap).filter(key => key !== 'Global'); //筛选并从小到大排序, 生成索引
    this.getComponentOrderKeyMap(componentKeys); //生成 KeyMap
    this.calculateOrderNumber(componentKeys); // 计算 OrderNumber
    const projectArray = Object.keys(this.componentOrderKeyMap).map(key => {
      return { name: key, order: this.componentOrderKeyMap[key] };
    });
    return projectArray
      .sort((item1, item2) => {
        return item2.order - item1.order;
      })
      .map(item => item.name);
  }
}
