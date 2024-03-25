/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { DataSetTemplateEntity } from './data-set-template-entity';

/**
 * 
 * @export
 * @interface TemplateListPermissionsToViewResponse
 */
export interface TemplateListPermissionsToViewResponse {
    /**
     * 
     * @type {Array<DataSetTemplateEntity>}
     * @memberof TemplateListPermissionsToViewResponse
     */
    'templates': Array<DataSetTemplateEntity>;
}
