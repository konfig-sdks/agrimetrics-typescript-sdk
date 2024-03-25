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
 * @interface TagOrConcept
 */
export interface TagOrConcept {
    /**
     * The id of the tag
     * @type {string}
     * @memberof TagOrConcept
     */
    'value'?: string;
    /**
     * The label of the tag
     * @type {string}
     * @memberof TagOrConcept
     */
    'label': string;
    /**
     * The type of the tag
     * @type {string}
     * @memberof TagOrConcept
     */
    'type': TagOrConceptTypeEnum;
}

type TagOrConceptTypeEnum = 'tag' | 'concept'


