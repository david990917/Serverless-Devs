/** @format */

import path from 'path';
import _ from 'lodash';
import { spawn, spawnSync } from 'child_process';
import * as inquirer from 'inquirer';
import { loadApplication } from '@serverless-devs/core';
import colors from 'chalk';
import { logger, configSet, common } from '../utils';
import { DEFAULT_REGIRSTRY } from '../constants/static-variable';
import {
  APPLICATION_TEMPLATE,
  PROJECT_NAME_INPUT,
  ALIBABA_APPLICATION_TEMPLATE,
  TENCENT_APPLICATION_TEMPLATE,
  AWS_APPLICATION_TEMPLATE,
} from './init-config';
import size from 'window-size';
const dkInit = require('@serverless-devs/dk-init');

inquirer.registerPrompt('autocomplete', require('inquirer-autocomplete-prompt'));
const { replaceTemplate } = common;

export class InitManager {
  protected promps: any = {};
  constructor() {}

  async assemblySpecialApp(appName, { projectName, appPath }) {
    if (appName === 'start-component' || appName === 'devsapp/start-component') {
      const packageJsonPath = path.join(appPath, 'package.json');
      const publishYamlPath = path.join(appPath, 'publish.yaml');
      replaceTemplate([packageJsonPath, publishYamlPath], { projectName });
    }
  }
  async executeInit(name: string, dir?: string, downloadurl?: boolean) {
    const projectName = dir || (await inquirer.prompt(PROJECT_NAME_INPUT)).projectName || './';
    const registry = downloadurl ? downloadurl : configSet.getConfig('registry') || DEFAULT_REGIRSTRY;
    let appPath = await loadApplication({ registry, target: './', source: name, name: projectName });

    if (appPath) {
      spawnSync(`node ${dkInit}`, {
        cwd: appPath,
        shell: true,
        stdio: 'inherit',
      });
      await this.assemblySpecialApp(name, { projectName, appPath }); // Set some app template content
      // postInit
      try {
        if (process.env[`${appPath}-post-init`]) {
          const tempObj = JSON.parse(process.env[`${appPath}-post-init`]);
          const baseChildComponent = await require(path.join(tempObj['tempPath'], 'hook'));
          await baseChildComponent.postInit(tempObj);
        }
      } catch (e) {}
      logger.success('\n🏄‍ Thanks for using Serverless-Devs');
      console.log(`👉 You could [cd ${appPath}] and enjoy your serverless journey!`);
      console.log(`🧭 If you need help for this example, you can use [s -h] after you enter folder.`);
      console.log('💞 Document ❤ Star：' + colors.cyan('https://github.com/Serverless-Devs/Serverless-Devs' + '\n'));
    }
  }
  async gitCloneProject(name: string, dir?: string) {
    return new Promise(resolve => {
      const gitCmd = spawn('git', ['clone', name], {
        shell: true,
        cwd: dir ? dir : './',
        stdio: ['ignore', 'inherit', 'inherit'],
      });
      gitCmd.on('close', code => {
        resolve({ code });
      });
    });
  }

  async init(name: string, dir?: string) {
    console.log('\n🚀 Serverless Awesome: https://github.com/Serverless-Devs/package-awesome\n');
    if (!name) {
      let tempHeight;
      try {
        tempHeight = size.height - 1;
      } catch (e) {
        tempHeight = 20;
      }
      process.env['serverless_devs_temp_height'] = tempHeight < 15 ? '0' : '1';
      APPLICATION_TEMPLATE[0].pageSize = tempHeight;
      let answers: any = await inquirer.prompt(APPLICATION_TEMPLATE);
      let answerValue = answers['template'];
      if (answerValue === 'alibaba') {
        process.env['serverless_devs_temp_height'] = tempHeight < 34 ? '0' : '1';
        ALIBABA_APPLICATION_TEMPLATE[0].pageSize = tempHeight;
        const answersTemp = await inquirer.prompt(ALIBABA_APPLICATION_TEMPLATE);
        answerValue = answersTemp['template'];
      } else if (answerValue === 'aws') {
        AWS_APPLICATION_TEMPLATE[0].pageSize = tempHeight;
        const answersTemp = await inquirer.prompt(AWS_APPLICATION_TEMPLATE);
        answerValue = answersTemp['template'];
      } else if (answerValue === 'tencent') {
        TENCENT_APPLICATION_TEMPLATE[0].pageSize = tempHeight;
        const answersTemp = await inquirer.prompt(TENCENT_APPLICATION_TEMPLATE);
        answerValue = answersTemp['template'];
      }
      console.log(`\n😋 Create application command: [s init ${answerValue}]\n`);
      await this.executeInit(answerValue, dir);
    } else if (name.lastIndexOf('.git') !== -1) {
      await this.gitCloneProject(name, dir);
    } else {
      await this.executeInit(name, dir);
    }
  }
}
