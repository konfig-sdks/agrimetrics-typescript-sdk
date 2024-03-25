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
import { AuthenticationGetJwtRequest } from '../models';
// @ts-ignore
import { AuthenticationGetJwtResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * AuthenticationApi - axios parameter creator
 * @export
 */
export const AuthenticationApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve an Agrimetrics JWT to be used as additional authentication on specified endpoints
         * @summary Get JWT
         * @param {AuthenticationGetJwtRequest} [authenticationGetJwtRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJwt: async (authenticationGetJwtRequest?: AuthenticationGetJwtRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/authenticate`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication JWT required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: authenticationGetJwtRequest,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/authenticate',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(authenticationGetJwtRequest, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthenticationApi - functional programming interface
 * @export
 */
export const AuthenticationApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthenticationApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve an Agrimetrics JWT to be used as additional authentication on specified endpoints
         * @summary Get JWT
         * @param {AuthenticationApiGetJwtRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getJwt(requestParameters: AuthenticationApiGetJwtRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthenticationGetJwtResponse>> {
            const authenticationGetJwtRequest: AuthenticationGetJwtRequest = {
                username: requestParameters.username,
                password: requestParameters.password
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.getJwt(authenticationGetJwtRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * AuthenticationApi - factory interface
 * @export
 */
export const AuthenticationApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthenticationApiFp(configuration)
    return {
        /**
         * Retrieve an Agrimetrics JWT to be used as additional authentication on specified endpoints
         * @summary Get JWT
         * @param {AuthenticationApiGetJwtRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getJwt(requestParameters: AuthenticationApiGetJwtRequest = {}, options?: AxiosRequestConfig): AxiosPromise<AuthenticationGetJwtResponse> {
            return localVarFp.getJwt(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getJwt operation in AuthenticationApi.
 * @export
 * @interface AuthenticationApiGetJwtRequest
 */
export type AuthenticationApiGetJwtRequest = {
    
} & AuthenticationGetJwtRequest

/**
 * AuthenticationApiGenerated - object-oriented interface
 * @export
 * @class AuthenticationApiGenerated
 * @extends {BaseAPI}
 */
export class AuthenticationApiGenerated extends BaseAPI {
    /**
     * Retrieve an Agrimetrics JWT to be used as additional authentication on specified endpoints
     * @summary Get JWT
     * @param {AuthenticationApiGetJwtRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthenticationApiGenerated
     */
    public getJwt(requestParameters: AuthenticationApiGetJwtRequest = {}, options?: AxiosRequestConfig) {
        return AuthenticationApiFp(this.configuration).getJwt(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}