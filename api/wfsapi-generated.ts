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
import { RestError } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * WFSApi - axios parameter creator
 * @export
 */
export const WFSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {string} datasetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataOpenGis: async (datasetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryDataOpenGis', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wfs`
                .replace(`{${"datasetId"}}`, encodeURIComponent(String(datasetId !== undefined ? datasetId : `-datasetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'HEAD', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{datasetId}/wfs',
                httpMethod: 'HEAD'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {string} datasetId 
         * @param {object} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataOpenGis_1: async (datasetId: string, body?: object, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryDataOpenGis_1', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wfs`
                .replace(`{${"datasetId"}}`, encodeURIComponent(String(datasetId !== undefined ? datasetId : `-datasetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'text/xml';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: body,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{datasetId}/wfs',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(body, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {string} datasetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataWithOpenGis: async (datasetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryDataWithOpenGis', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wfs`
                .replace(`{${"datasetId"}}`, encodeURIComponent(String(datasetId !== undefined ? datasetId : `-datasetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/datasets/{datasetId}/wfs',
                httpMethod: 'GET'
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
 * WFSApi - functional programming interface
 * @export
 */
export const WFSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WFSApiAxiosParamCreator(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataOpenGisRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryDataOpenGis(requestParameters: WFSApiQueryDataOpenGisRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryDataOpenGis(requestParameters.datasetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataOpenGis0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryDataOpenGis_1(requestParameters: WFSApiQueryDataOpenGis0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const body: object = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryDataOpenGis_1(requestParameters.datasetId, body, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataWithOpenGisRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryDataWithOpenGis(requestParameters: WFSApiQueryDataWithOpenGisRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryDataWithOpenGis(requestParameters.datasetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WFSApi - factory interface
 * @export
 */
export const WFSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WFSApiFp(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataOpenGisRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataOpenGis(requestParameters: WFSApiQueryDataOpenGisRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryDataOpenGis(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataOpenGis0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataOpenGis_1(requestParameters: WFSApiQueryDataOpenGis0Request, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryDataOpenGis_1(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Query the given data set with the OpenGIS® Web Feature Service interface standard 
         * @summary Web Feature Service (WFS) query
         * @param {WFSApiQueryDataWithOpenGisRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataWithOpenGis(requestParameters: WFSApiQueryDataWithOpenGisRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryDataWithOpenGis(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryDataOpenGis operation in WFSApi.
 * @export
 * @interface WFSApiQueryDataOpenGisRequest
 */
export type WFSApiQueryDataOpenGisRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WFSApiQueryDataOpenGis
    */
    readonly datasetId: string
    
}

/**
 * Request parameters for queryDataOpenGis_1 operation in WFSApi.
 * @export
 * @interface WFSApiQueryDataOpenGis0Request
 */
export type WFSApiQueryDataOpenGis0Request = {
    
    /**
    * 
    * @type {string}
    * @memberof WFSApiQueryDataOpenGis0
    */
    readonly datasetId: string
    
} & object

/**
 * Request parameters for queryDataWithOpenGis operation in WFSApi.
 * @export
 * @interface WFSApiQueryDataWithOpenGisRequest
 */
export type WFSApiQueryDataWithOpenGisRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WFSApiQueryDataWithOpenGis
    */
    readonly datasetId: string
    
}

/**
 * WFSApiGenerated - object-oriented interface
 * @export
 * @class WFSApiGenerated
 * @extends {BaseAPI}
 */
export class WFSApiGenerated extends BaseAPI {
    /**
     * Query the given data set with the OpenGIS® Web Feature Service interface standard 
     * @summary Web Feature Service (WFS) query
     * @param {WFSApiQueryDataOpenGisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WFSApiGenerated
     */
    public queryDataOpenGis(requestParameters: WFSApiQueryDataOpenGisRequest, options?: AxiosRequestConfig) {
        return WFSApiFp(this.configuration).queryDataOpenGis(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query the given data set with the OpenGIS® Web Feature Service interface standard 
     * @summary Web Feature Service (WFS) query
     * @param {WFSApiQueryDataOpenGis0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WFSApiGenerated
     */
    public queryDataOpenGis_1(requestParameters: WFSApiQueryDataOpenGis0Request, options?: AxiosRequestConfig) {
        return WFSApiFp(this.configuration).queryDataOpenGis_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query the given data set with the OpenGIS® Web Feature Service interface standard 
     * @summary Web Feature Service (WFS) query
     * @param {WFSApiQueryDataWithOpenGisRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WFSApiGenerated
     */
    public queryDataWithOpenGis(requestParameters: WFSApiQueryDataWithOpenGisRequest, options?: AxiosRequestConfig) {
        return WFSApiFp(this.configuration).queryDataWithOpenGis(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
