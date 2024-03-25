/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GeneralGeometry } from './general-geometry';

/**
 * 
 * @export
 * @interface PolygonOrBBoxSearchBase
 */
export interface PolygonOrBBoxSearchBase {
    /**
     * 
     * @type {GeneralGeometry}
     * @memberof PolygonOrBBoxSearchBase
     */
    'geometry': GeneralGeometry;
    /**
     * 
     * @type {string}
     * @memberof PolygonOrBBoxSearchBase
     */
    'time'?: string;
}

