/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Information about the file data set
 * @export
 * @interface DataSetDataSet
 */
export interface DataSetDataSet {
    /**
     * 
     * @type {string}
     * @memberof DataSetDataSet
     */
    'id'?: string;
    /**
     * 
     * @type {string}
     * @memberof DataSetDataSet
     */
    'type'?: DataSetDataSetTypeEnum;
}

type DataSetDataSetTypeEnum = 'file'


