import { getSubcommand, getServiceConfig, getServiceConfigDetail, getServiceInputs,getServiceActions, getServiceList } from '../../src/specification/version'

describe('module version', () => {
    it("test getSubcommand method1", () => {
        const configData = {
            "edition": "0.1",
            "services": ["services1", "services2"]
        }

        const result = getSubcommand(configData);
        expect(result).toEqual(["0", "1"])
    });

    it("test getSubcommand method2", () => {
        const configData = {
            "edition": "0.0.1",
            "services": ["services1", "services2"]
        }

        const result = getSubcommand(configData);
        expect(result).toEqual(["edition", "services"])
    });

    it("test getServiceConfig method1", () => {
        const configData = {
            "edition": "0.1",
            "services": {
                "serviceName1": { service: "service1", provider: "provider1", access: "access1" },
                "serviceName2": { service: "service2", provider: "provider2", access: "access2" },
            },
        }
        const serviceName = "serviceName1"

        const result = getServiceConfig(configData, serviceName);
        expect(result).toEqual({
            "access": "access1",
            "provider": "provider1",
            "service": "service1"
        })
    });


    it("test getServiceConfig method2", () => {
        const configData = {
            "edition": "0.0.1",
            "services": ["services1", "services2"],
            "serviceName": "conf.serviceName"
        }
        const serviceName = "serviceName"

        const result = getServiceConfig(configData, serviceName);
        expect(result).toEqual(configData.serviceName)
    });

    it("test getServiceConfigDetail method", () => {
        const configData = {
            edition: "0.1",
            Component: "conf.Component",
            Provider: "conf.Provider",
            Access: "conf.Access",
            autoCredential: "conf.autoCredential"
        }
        const result = getServiceConfigDetail(configData);
        expect(result).toEqual({
            "name": "conf.Component",
            "provider": "conf.Provider",
            "access": "conf.Access",
            "autoCredential": "conf.autoCredential"
        })
    });

    it("test getServiceInputs method1", () => {
        const version = "0.0.1";

        const configData = {
            Properties: "conf.Properties",
            Params: "conf.Params",
            ProjectName: "conf.ProjectName",
            Component: "conf.Component",
            Provider: "conf.Provider",
            Access: "conf.Access",
            autoCredential: "conf.autoCredential"
        }

        const options = {
            credentials: "options.credentials",
            method: "options.method"
        };
        const result = getServiceInputs(configData, version, options);
        expect(result).toEqual({ 
            "Args": "conf.Params", 
            "Command": "options.method", 
            "Credentials": "options.credentials", 
            "Path": { "ConfigPath": "" }, 
            "Project": { "AccessAlias": "conf.Access", "Component": "conf.Component", "ProjectName": "conf.ProjectName", "Provider": "conf.Provider" }, 
            "Properties": "conf.Properties" 
        })
    });

    it("test getServiceInputs method2", () => {
        const version = "0.1";

        const configData = {
            Properties: "conf.Properties",
            Params: "conf.Params",
            ProjectName: "conf.ProjectName",
            Component: "conf.Component",
            Provider: "conf.Provider",
            Access: "conf.Access",
            autoCredential: "conf.autoCredential"
        }

        const options = {
            credentials: "options.credentials",
            method: "options.method"
        };
        const result = getServiceInputs(configData, version, options);
        expect(result).toEqual({
            "Args": "",
            "ArgsObj": [], 
            "Command": "options.method", 
            "Credentials": "options.credentials", 
            "Path": { "ConfigPath": "" }, 
            "Project": { "AccessAlias": "", "Component": undefined, "ProjectName": "conf.ProjectName", "Provider": undefined, "accessAlias": "", "component": undefined, "projectName": "conf.ProjectName", "provider": undefined }, 
            "Properties": undefined, 
            "appName": undefined, 
            "args": "", 
            "argsObj": [], 
            "command": "options.method", 
            "credentials": "options.credentials", 
            "path": { "configPath": "" }, 
            "project": { "access": "", "component": undefined, "projectName": "conf.ProjectName" }, 
            "props": undefined
        })
    });

    it("test getServiceInputs method1", () => {
        const version = "0.0.1";

        const configData = {
            method1:"conf.method1",
            method2:"conf.method2"
        }

        const options = "mothod1"
        const result = getServiceActions(configData, version, options);
        expect(result).toBeUndefined() // 这个确实有点迷惑
    });

    it("test getServiceInputs method2", () => {
        const version = "0.1";

        const configData = {
            method1:"conf.method1",
            method2:"conf.method2"
        }

        const options = "mothod1"
        const result = getServiceActions(configData, version, options);
        expect(result).toEqual([]) // 这个确实有点迷惑
    });

    it("test getServiceList methods1", () => {
        const configData = {
            "edition": "0.1",
            "services": ["services1", "services2"]
        }

        const result = getServiceList(configData);
        expect(result).toEqual(["services1", "services2"])
    });

    it("test getServiceList methods2", () => {
        const configData = {
            "edition": "0.0.1",
            "services": ["services1", "services2"]
        }

        const result = getServiceList(configData);
        expect(result).toEqual(configData)
    });
});