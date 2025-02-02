/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Concept } from './concept';
import { DataSet } from './data-set';

/**
 * 
 * @export
 * @interface DataSets
 */
export interface DataSets {
    /**
     * An array of data sets
     * @type {Array<DataSet>}
     * @memberof DataSets
     */
    'dataSets': Array<DataSet>;
    /**
     * 
     * @type {Array<Concept>}
     * @memberof DataSets
     */
    'concepts'?: Array<Concept>;
}

