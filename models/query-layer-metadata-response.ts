/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BoundingBox } from './bounding-box';
import { OutputFormats } from './output-formats';
import { QueryLayerMetadataResponseLinks } from './query-layer-metadata-response-links';

/**
 * 
 * @export
 * @interface QueryLayerMetadataResponse
 */
export interface QueryLayerMetadataResponse {
    /**
     * 
     * @type {string}
     * @memberof QueryLayerMetadataResponse
     */
    'description': string;
    /**
     * 
     * @type {string}
     * @memberof QueryLayerMetadataResponse
     */
    'layerId': string;
    /**
     * 
     * @type {QueryLayerMetadataResponseLinks}
     * @memberof QueryLayerMetadataResponse
     */
    'links': QueryLayerMetadataResponseLinks;
    /**
     * 
     * @type {BoundingBox}
     * @memberof QueryLayerMetadataResponse
     */
    'geometry': BoundingBox;
    /**
     * 
     * @type {Array<string>}
     * @memberof QueryLayerMetadataResponse
     */
    'times'?: Array<string>;
    /**
     * 
     * @type {Array<OutputFormats>}
     * @memberof QueryLayerMetadataResponse
     */
    'outputFormats': Array<OutputFormats>;
}

