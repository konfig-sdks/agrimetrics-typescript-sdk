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
 * @interface DataRequestUpdateRequestRequest
 */
export interface DataRequestUpdateRequestRequest {
    /**
     * The status of the data request
     * @type {string}
     * @memberof DataRequestUpdateRequestRequest
     */
    'status'?: DataRequestUpdateRequestRequestStatusEnum;
}

type DataRequestUpdateRequestRequestStatusEnum = 'cancelled' | 'pending'

