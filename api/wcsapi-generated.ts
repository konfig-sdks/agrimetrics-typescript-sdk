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
 * WCSApi - axios parameter creator
 * @export
 */
export const WCSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Query the given data set with the OpenGIS® Web Coverage Serice interface standard 
         * @summary Web Coverage Service (WCS) query
         * @param {string} datasetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryData: async (datasetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryData', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wcs`
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
                pathTemplate: '/datasets/{datasetId}/wcs',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Query the given data set with the OpenGIS® Web Coverage Service interface standard 
         * @summary Web Coverage Service (WMS) query
         * @param {string} datasetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryData_1: async (datasetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryData_1', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wcs`
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
                pathTemplate: '/datasets/{datasetId}/wcs',
                httpMethod: 'HEAD'
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
 * WCSApi - functional programming interface
 * @export
 */
export const WCSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WCSApiAxiosParamCreator(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Coverage Serice interface standard 
         * @summary Web Coverage Service (WCS) query
         * @param {WCSApiQueryDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryData(requestParameters: WCSApiQueryDataRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryData(requestParameters.datasetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Query the given data set with the OpenGIS® Web Coverage Service interface standard 
         * @summary Web Coverage Service (WMS) query
         * @param {WCSApiQueryData0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryData_1(requestParameters: WCSApiQueryData0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryData_1(requestParameters.datasetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WCSApi - factory interface
 * @export
 */
export const WCSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WCSApiFp(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Coverage Serice interface standard 
         * @summary Web Coverage Service (WCS) query
         * @param {WCSApiQueryDataRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryData(requestParameters: WCSApiQueryDataRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryData(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Query the given data set with the OpenGIS® Web Coverage Service interface standard 
         * @summary Web Coverage Service (WMS) query
         * @param {WCSApiQueryData0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryData_1(requestParameters: WCSApiQueryData0Request, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryData_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryData operation in WCSApi.
 * @export
 * @interface WCSApiQueryDataRequest
 */
export type WCSApiQueryDataRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WCSApiQueryData
    */
    readonly datasetId: string
    
}

/**
 * Request parameters for queryData_1 operation in WCSApi.
 * @export
 * @interface WCSApiQueryData0Request
 */
export type WCSApiQueryData0Request = {
    
    /**
    * 
    * @type {string}
    * @memberof WCSApiQueryData0
    */
    readonly datasetId: string
    
}

/**
 * WCSApiGenerated - object-oriented interface
 * @export
 * @class WCSApiGenerated
 * @extends {BaseAPI}
 */
export class WCSApiGenerated extends BaseAPI {
    /**
     * Query the given data set with the OpenGIS® Web Coverage Serice interface standard 
     * @summary Web Coverage Service (WCS) query
     * @param {WCSApiQueryDataRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WCSApiGenerated
     */
    public queryData(requestParameters: WCSApiQueryDataRequest, options?: AxiosRequestConfig) {
        return WCSApiFp(this.configuration).queryData(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Query the given data set with the OpenGIS® Web Coverage Service interface standard 
     * @summary Web Coverage Service (WMS) query
     * @param {WCSApiQueryData0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WCSApiGenerated
     */
    public queryData_1(requestParameters: WCSApiQueryData0Request, options?: AxiosRequestConfig) {
        return WCSApiFp(this.configuration).queryData_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
