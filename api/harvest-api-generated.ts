/* tslint:disable */
/* eslint-disable */
/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { GroupCode } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * HarvestApi - axios parameter creator
 * @export
 */
export const HarvestApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {GroupCode} group 
         * @param {'CSW'} [service] 
         * @param {'GetRecords' | 'GetRecordById' | 'GetCapabilities'} [request] 
         * @param {string} [version] 
         * @param {number} [startPosition] 
         * @param {number} [maxRecords] 
         * @param {Array<string>} [id] 
         * @param {'http://www.isotc211.org/2005/gmd'} [outputSchema] 
         * @param {'full' | 'brief' | 'summary'} [elementsetname] 
         * @param {'application/xml'} [outputFormat] 
         * @param {'gmd:MD_Metadata' | 'csw:Record'} [typeNames] 
         * @param {string} [resultType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        xmlDataOnGroup: async (group: GroupCode, service?: 'CSW', request?: 'GetRecords' | 'GetRecordById' | 'GetCapabilities', version?: string, startPosition?: number, maxRecords?: number, id?: Array<string>, outputSchema?: 'http://www.isotc211.org/2005/gmd', elementsetname?: 'full' | 'brief' | 'summary', outputFormat?: 'application/xml', typeNames?: 'gmd:MD_Metadata' | 'csw:Record', resultType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            assertParamExists('xmlDataOnGroup', 'group', group)
            const localVarPath = `/harvest/{group}/csw`
                .replace(`{${"group"}}`, encodeURIComponent(String(group !== undefined ? group : `-group-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (service !== undefined) {
                localVarQueryParameter['service'] = service;
            }

            if (request !== undefined) {
                localVarQueryParameter['request'] = request;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (startPosition !== undefined) {
                localVarQueryParameter['startPosition'] = startPosition;
            }

            if (maxRecords !== undefined) {
                localVarQueryParameter['maxRecords'] = maxRecords;
            }

            if (id) {
                localVarQueryParameter['id'] = id;
            }

            if (outputSchema !== undefined) {
                localVarQueryParameter['outputSchema'] = outputSchema;
            }

            if (elementsetname !== undefined) {
                localVarQueryParameter['elementsetname'] = elementsetname;
            }

            if (outputFormat !== undefined) {
                localVarQueryParameter['outputFormat'] = outputFormat;
            }

            if (typeNames !== undefined) {
                localVarQueryParameter['typeNames'] = typeNames;
            }

            if (resultType !== undefined) {
                localVarQueryParameter['resultType'] = resultType;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/harvest/{group}/csw',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {GroupCode} group 
         * @param {'CSW'} [service] 
         * @param {'GetRecords' | 'GetRecordById' | 'GetCapabilities'} [request] 
         * @param {string} [version] 
         * @param {number} [startPosition] 
         * @param {number} [maxRecords] 
         * @param {Array<string>} [id] 
         * @param {'http://www.isotc211.org/2005/gmd'} [outputSchema] 
         * @param {'full' | 'brief' | 'summary'} [elementsetname] 
         * @param {'application/xml'} [outputFormat] 
         * @param {'gmd:MD_Metadata' | 'csw:Record'} [typeNames] 
         * @param {string} [resultType] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        xmlDataOnGroupPost: async (group: GroupCode, service?: 'CSW', request?: 'GetRecords' | 'GetRecordById' | 'GetCapabilities', version?: string, startPosition?: number, maxRecords?: number, id?: Array<string>, outputSchema?: 'http://www.isotc211.org/2005/gmd', elementsetname?: 'full' | 'brief' | 'summary', outputFormat?: 'application/xml', typeNames?: 'gmd:MD_Metadata' | 'csw:Record', resultType?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'group' is not null or undefined
            assertParamExists('xmlDataOnGroupPost', 'group', group)
            const localVarPath = `/harvest/{group}/csw`
                .replace(`{${"group"}}`, encodeURIComponent(String(group !== undefined ? group : `-group-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            if (service !== undefined) {
                localVarQueryParameter['service'] = service;
            }

            if (request !== undefined) {
                localVarQueryParameter['request'] = request;
            }

            if (version !== undefined) {
                localVarQueryParameter['version'] = version;
            }

            if (startPosition !== undefined) {
                localVarQueryParameter['startPosition'] = startPosition;
            }

            if (maxRecords !== undefined) {
                localVarQueryParameter['maxRecords'] = maxRecords;
            }

            if (id) {
                localVarQueryParameter['id'] = id;
            }

            if (outputSchema !== undefined) {
                localVarQueryParameter['outputSchema'] = outputSchema;
            }

            if (elementsetname !== undefined) {
                localVarQueryParameter['elementsetname'] = elementsetname;
            }

            if (outputFormat !== undefined) {
                localVarQueryParameter['outputFormat'] = outputFormat;
            }

            if (typeNames !== undefined) {
                localVarQueryParameter['typeNames'] = typeNames;
            }

            if (resultType !== undefined) {
                localVarQueryParameter['resultType'] = resultType;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/harvest/{group}/csw',
                httpMethod: 'POST'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * HarvestApi - functional programming interface
 * @export
 */
export const HarvestApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = HarvestApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {HarvestApiXmlDataOnGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async xmlDataOnGroup(requestParameters: HarvestApiXmlDataOnGroupRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.xmlDataOnGroup(requestParameters.group, requestParameters.service, requestParameters.request, requestParameters.version, requestParameters.startPosition, requestParameters.maxRecords, requestParameters.id, requestParameters.outputSchema, requestParameters.elementsetname, requestParameters.outputFormat, requestParameters.typeNames, requestParameters.resultType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {HarvestApiXmlDataOnGroupPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async xmlDataOnGroupPost(requestParameters: HarvestApiXmlDataOnGroupPostRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.xmlDataOnGroupPost(requestParameters.group, requestParameters.service, requestParameters.request, requestParameters.version, requestParameters.startPosition, requestParameters.maxRecords, requestParameters.id, requestParameters.outputSchema, requestParameters.elementsetname, requestParameters.outputFormat, requestParameters.typeNames, requestParameters.resultType, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * HarvestApi - factory interface
 * @export
 */
export const HarvestApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = HarvestApiFp(configuration)
    return {
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {HarvestApiXmlDataOnGroupRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        xmlDataOnGroup(requestParameters: HarvestApiXmlDataOnGroupRequest, options?: AxiosRequestConfig): AxiosPromise<object> {
            return localVarFp.xmlDataOnGroup(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Harvest xml data on the given group
         * @param {HarvestApiXmlDataOnGroupPostRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        xmlDataOnGroupPost(requestParameters: HarvestApiXmlDataOnGroupPostRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.xmlDataOnGroupPost(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for xmlDataOnGroup operation in HarvestApi.
 * @export
 * @interface HarvestApiXmlDataOnGroupRequest
 */
export type HarvestApiXmlDataOnGroupRequest = {
    
    /**
    * 
    * @type {GroupCode}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly group: GroupCode
    
    /**
    * 
    * @type {'CSW'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly service?: 'CSW'
    
    /**
    * 
    * @type {'GetRecords' | 'GetRecordById' | 'GetCapabilities'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly request?: 'GetRecords' | 'GetRecordById' | 'GetCapabilities'
    
    /**
    * 
    * @type {string}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly version?: string
    
    /**
    * 
    * @type {number}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly startPosition?: number
    
    /**
    * 
    * @type {number}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly maxRecords?: number
    
    /**
    * 
    * @type {Array<string>}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly id?: Array<string>
    
    /**
    * 
    * @type {'http://www.isotc211.org/2005/gmd'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly outputSchema?: 'http://www.isotc211.org/2005/gmd'
    
    /**
    * 
    * @type {'full' | 'brief' | 'summary'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly elementsetname?: 'full' | 'brief' | 'summary'
    
    /**
    * 
    * @type {'application/xml'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly outputFormat?: 'application/xml'
    
    /**
    * 
    * @type {'gmd:MD_Metadata' | 'csw:Record'}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly typeNames?: 'gmd:MD_Metadata' | 'csw:Record'
    
    /**
    * 
    * @type {string}
    * @memberof HarvestApiXmlDataOnGroup
    */
    readonly resultType?: string
    
}

/**
 * Request parameters for xmlDataOnGroupPost operation in HarvestApi.
 * @export
 * @interface HarvestApiXmlDataOnGroupPostRequest
 */
export type HarvestApiXmlDataOnGroupPostRequest = {
    
    /**
    * 
    * @type {GroupCode}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly group: GroupCode
    
    /**
    * 
    * @type {'CSW'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly service?: 'CSW'
    
    /**
    * 
    * @type {'GetRecords' | 'GetRecordById' | 'GetCapabilities'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly request?: 'GetRecords' | 'GetRecordById' | 'GetCapabilities'
    
    /**
    * 
    * @type {string}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly version?: string
    
    /**
    * 
    * @type {number}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly startPosition?: number
    
    /**
    * 
    * @type {number}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly maxRecords?: number
    
    /**
    * 
    * @type {Array<string>}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly id?: Array<string>
    
    /**
    * 
    * @type {'http://www.isotc211.org/2005/gmd'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly outputSchema?: 'http://www.isotc211.org/2005/gmd'
    
    /**
    * 
    * @type {'full' | 'brief' | 'summary'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly elementsetname?: 'full' | 'brief' | 'summary'
    
    /**
    * 
    * @type {'application/xml'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly outputFormat?: 'application/xml'
    
    /**
    * 
    * @type {'gmd:MD_Metadata' | 'csw:Record'}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly typeNames?: 'gmd:MD_Metadata' | 'csw:Record'
    
    /**
    * 
    * @type {string}
    * @memberof HarvestApiXmlDataOnGroupPost
    */
    readonly resultType?: string
    
}

/**
 * HarvestApiGenerated - object-oriented interface
 * @export
 * @class HarvestApiGenerated
 * @extends {BaseAPI}
 */
export class HarvestApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Harvest xml data on the given group
     * @param {HarvestApiXmlDataOnGroupRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HarvestApiGenerated
     */
    public xmlDataOnGroup(requestParameters: HarvestApiXmlDataOnGroupRequest, options?: AxiosRequestConfig) {
        return HarvestApiFp(this.configuration).xmlDataOnGroup(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Harvest xml data on the given group
     * @param {HarvestApiXmlDataOnGroupPostRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HarvestApiGenerated
     */
    public xmlDataOnGroupPost(requestParameters: HarvestApiXmlDataOnGroupPostRequest, options?: AxiosRequestConfig) {
        return HarvestApiFp(this.configuration).xmlDataOnGroupPost(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
