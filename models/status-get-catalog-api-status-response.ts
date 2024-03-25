/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { StatusGetCatalogApiStatusResponseLinks } from './status-get-catalog-api-status-response-links';

/**
 * 
 * @export
 * @interface StatusGetCatalogApiStatusResponse
 */
export interface StatusGetCatalogApiStatusResponse {
    /**
     * 
     * @type {string}
     * @memberof StatusGetCatalogApiStatusResponse
     */
    'version': string;
    /**
     * 
     * @type {StatusGetCatalogApiStatusResponseLinks}
     * @memberof StatusGetCatalogApiStatusResponse
     */
    '_links': StatusGetCatalogApiStatusResponseLinks;
}
