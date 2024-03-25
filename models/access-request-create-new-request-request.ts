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
 * @interface AccessRequestCreateNewRequestRequest
 */
export interface AccessRequestCreateNewRequestRequest {
    /**
     * The ID of a dataset in the catalog
     * @type {string}
     * @memberof AccessRequestCreateNewRequestRequest
     */
    'dataSetId': string;
    /**
     * ID for the entity which is requesting access.
     * @type {string}
     * @memberof AccessRequestCreateNewRequestRequest
     */
    'requestingEntityId': string;
    /**
     * Name of the user who requested access.
     * @type {string}
     * @memberof AccessRequestCreateNewRequestRequest
     */
    'requesterName'?: string;
    /**
     * Contact email address for the user who requested access.
     * @type {string}
     * @memberof AccessRequestCreateNewRequestRequest
     */
    'requesterEmail'?: string;
    /**
     * Free text message provided by the user when requesting access.
     * @type {string}
     * @memberof AccessRequestCreateNewRequestRequest
     */
    'requestMessage': string;
}
