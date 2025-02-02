/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface DatasetGetValidationReport200Response
 */
export interface DatasetGetValidationReport200Response {
    /**
     * 
     * @type {boolean}
     * @memberof DatasetGetValidationReport200Response
     */
    'valid': boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetGetValidationReport200Response
     */
    'errorMessages': Array<string>;
}

