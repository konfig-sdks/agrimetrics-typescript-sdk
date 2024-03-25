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
 * @interface CostSummary
 */
export interface CostSummary {
    /**
     * 
     * @type {number}
     * @memberof CostSummary
     */
    'totalCost': number;
    /**
     * 
     * @type {number}
     * @memberof CostSummary
     */
    'numberOfChargeableItems': number;
    /**
     * 
     * @type {number}
     * @memberof CostSummary
     */
    'totalNumberOfItems'?: number;
}
