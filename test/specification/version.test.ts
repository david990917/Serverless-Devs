import { getSubcommand, getServiceConfig, getServiceConfigDetail,getServiceList } from '../../src/specification/version'

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
            Component:"conf.Component",
            Provider:"conf.Provider",
            Access:"conf.Access",
            autoCredential:"conf.autoCredential"            
        }
        const result = getServiceConfigDetail(configData);
        expect(result).toEqual({
            "name":"conf.Component",
            "provider":"conf.Provider",
            "access":"conf.Access",
            "autoCredential":"conf.autoCredential"  
        })
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