/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EntryType } from './entry-type';

/**
 * 
 * @export
 * @interface BasicDataSetInfo
 */
export interface BasicDataSetInfo {
    /**
     * Title for the data set.
     * @type {string}
     * @memberof BasicDataSetInfo
     */
    'title': string;
    /**
     * The ID of a dataset in the catalog
     * @type {string}
     * @memberof BasicDataSetInfo
     */
    'id': string;
    /**
     * The type of the entry, data set or model
     * @type {EntryType}
     * @memberof BasicDataSetInfo
     */
    'entryType': EntryType;
}

