/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CategoryValue } from './category-value';

/**
 * 
 * @export
 * @interface Category
 */
export interface Category {
    /**
     * The value of the category
     * @type {CategoryValue}
     * @memberof Category
     */
    'value'?: CategoryValue;
    /**
     * The label of the category
     * @type {string}
     * @memberof Category
     */
    'label'?: string;
}
