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
 * @interface Resource
 */
export interface Resource {
    /**
     * Description of what the URL represents.
     * @type {string}
     * @memberof Resource
     */
    'description'?: string;
    /**
     * URL to obtain more information on this data set.
     * @type {string}
     * @memberof Resource
     */
    'url': string;
    /**
     * ID for this resource item.
     * @type {string}
     * @memberof Resource
     */
    'id'?: string;
    /**
     * Name for what the URL represents.
     * @type {string}
     * @memberof Resource
     */
    'name'?: string;
    /**
     * Indicates whether the resource metadata is sensitive data.
     * @type {boolean}
     * @memberof Resource
     */
    'private'?: boolean;
}
