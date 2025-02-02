/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ImageRepresentationAuthor } from './image-representation-author';

/**
 * A data set image.
 * @export
 * @interface ImageRepresentation
 */
export interface ImageRepresentation {
    /**
     * 
     * @type {string}
     * @memberof ImageRepresentation
     */
    'type'?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageRepresentation
     */
    'url'?: string;
    /**
     * 
     * @type {string}
     * @memberof ImageRepresentation
     */
    'thumbnailUrl'?: string;
    /**
     * 
     * @type {ImageRepresentationAuthor}
     * @memberof ImageRepresentation
     */
    'author'?: ImageRepresentationAuthor;
}

