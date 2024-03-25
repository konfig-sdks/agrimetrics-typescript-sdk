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
import { EntryUpdateResponse } from '../models';
// @ts-ignore
import { StatusGetCatalogApiStatusResponse } from '../models';
// @ts-ignore
import { StatusSetDraftStatusRequest } from '../models';
// @ts-ignore
import { StatusSetDraftStatusRequestStatus } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * StatusApi - axios parameter creator
 * @export
 */
export const StatusApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get status of catalog API.
         * @summary Get status of catalog API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogApiStatus: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/status`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication apiKeyQuery required
            await setApiKeyToObject({object: localVarQueryParameter, key: "subscription-key", keyParamName: "apiKeyQuery", configuration})

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/status',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Set the draft status for the data set catalog entry.
         * @summary Set the draft status for the data set catalog entry.
         * @param {string} dataSetId 
         * @param {StatusSetDraftStatusRequest} [statusSetDraftStatusRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDraftStatus: async (dataSetId: string, statusSetDraftStatusRequest?: StatusSetDraftStatusRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'dataSetId' is not null or undefined
            assertParamExists('setDraftStatus', 'dataSetId', dataSetId)
            const localVarPath = `/data-sets/{dataSetId}/draft-status`
                .replace(`{${"dataSetId"}}`, encodeURIComponent(String(dataSetId !== undefined ? dataSetId : `-dataSetId-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: statusSetDraftStatusRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/data-sets/{dataSetId}/draft-status',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(statusSetDraftStatusRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StatusApi - functional programming interface
 * @export
 */
export const StatusApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = StatusApiAxiosParamCreator(configuration)
    return {
        /**
         * Get status of catalog API.
         * @summary Get status of catalog API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCatalogApiStatus(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StatusGetCatalogApiStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCatalogApiStatus(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Set the draft status for the data set catalog entry.
         * @summary Set the draft status for the data set catalog entry.
         * @param {StatusApiSetDraftStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async setDraftStatus(requestParameters: StatusApiSetDraftStatusRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<EntryUpdateResponse>> {
            const statusSetDraftStatusRequest: StatusSetDraftStatusRequest = {
                status: requestParameters.status,
                notes: requestParameters.notes
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.setDraftStatus(requestParameters.dataSetId, statusSetDraftStatusRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * StatusApi - factory interface
 * @export
 */
export const StatusApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = StatusApiFp(configuration)
    return {
        /**
         * Get status of catalog API.
         * @summary Get status of catalog API.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCatalogApiStatus(options?: AxiosRequestConfig): AxiosPromise<StatusGetCatalogApiStatusResponse> {
            return localVarFp.getCatalogApiStatus(options).then((request) => request(axios, basePath));
        },
        /**
         * Set the draft status for the data set catalog entry.
         * @summary Set the draft status for the data set catalog entry.
         * @param {StatusApiSetDraftStatusRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        setDraftStatus(requestParameters: StatusApiSetDraftStatusRequest, options?: AxiosRequestConfig): AxiosPromise<EntryUpdateResponse> {
            return localVarFp.setDraftStatus(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for setDraftStatus operation in StatusApi.
 * @export
 * @interface StatusApiSetDraftStatusRequest
 */
export type StatusApiSetDraftStatusRequest = {
    
    /**
    * 
    * @type {string}
    * @memberof StatusApiSetDraftStatus
    */
    readonly dataSetId: string
    
} & StatusSetDraftStatusRequest

/**
 * StatusApiGenerated - object-oriented interface
 * @export
 * @class StatusApiGenerated
 * @extends {BaseAPI}
 */
export class StatusApiGenerated extends BaseAPI {
    /**
     * Get status of catalog API.
     * @summary Get status of catalog API.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApiGenerated
     */
    public getCatalogApiStatus(options?: AxiosRequestConfig) {
        return StatusApiFp(this.configuration).getCatalogApiStatus(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Set the draft status for the data set catalog entry.
     * @summary Set the draft status for the data set catalog entry.
     * @param {StatusApiSetDraftStatusRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StatusApiGenerated
     */
    public setDraftStatus(requestParameters: StatusApiSetDraftStatusRequest, options?: AxiosRequestConfig) {
        return StatusApiFp(this.configuration).setDraftStatus(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
