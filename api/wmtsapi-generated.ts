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
 * WMTSApi - axios parameter creator
 * @export
 */
export const WMTSApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Query the given data set with the OpenGIS® Web Map Tile Serice interface standard 
         * @summary Web Map Tile Service (WMTS) query
         * @param {string} datasetId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataSetWmts: async (datasetId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'datasetId' is not null or undefined
            assertParamExists('queryDataSetWmts', 'datasetId', datasetId)
            const localVarPath = `/datasets/{datasetId}/wmts`
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
                pathTemplate: '/datasets/{datasetId}/wmts',
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
 * WMTSApi - functional programming interface
 * @export
 */
export const WMTSApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WMTSApiAxiosParamCreator(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Map Tile Serice interface standard 
         * @summary Web Map Tile Service (WMTS) query
         * @param {WMTSApiQueryDataSetWmtsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async queryDataSetWmts(requestParameters: WMTSApiQueryDataSetWmtsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.queryDataSetWmts(requestParameters.datasetId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WMTSApi - factory interface
 * @export
 */
export const WMTSApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WMTSApiFp(configuration)
    return {
        /**
         * Query the given data set with the OpenGIS® Web Map Tile Serice interface standard 
         * @summary Web Map Tile Service (WMTS) query
         * @param {WMTSApiQueryDataSetWmtsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        queryDataSetWmts(requestParameters: WMTSApiQueryDataSetWmtsRequest, options?: AxiosRequestConfig): AxiosPromise<string> {
            return localVarFp.queryDataSetWmts(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for queryDataSetWmts operation in WMTSApi.
 * @export
 * @interface WMTSApiQueryDataSetWmtsRequest
 */
export type WMTSApiQueryDataSetWmtsRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof WMTSApiQueryDataSetWmts
    */
    readonly datasetId: string
    
}

/**
 * WMTSApiGenerated - object-oriented interface
 * @export
 * @class WMTSApiGenerated
 * @extends {BaseAPI}
 */
export class WMTSApiGenerated extends BaseAPI {
    /**
     * Query the given data set with the OpenGIS® Web Map Tile Serice interface standard 
     * @summary Web Map Tile Service (WMTS) query
     * @param {WMTSApiQueryDataSetWmtsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WMTSApiGenerated
     */
    public queryDataSetWmts(requestParameters: WMTSApiQueryDataSetWmtsRequest, options?: AxiosRequestConfig) {
        return WMTSApiFp(this.configuration).queryDataSetWmts(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
