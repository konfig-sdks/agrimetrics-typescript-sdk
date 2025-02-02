/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { GeoJSONPoint } from './geo-jsonpoint';
import { OutputFormats } from './output-formats';
import { PointSearch } from './point-search';
import { PolygonOrBBoxSearch } from './polygon-or-bbox-search';

/**
 * @type QueryLayerSearchGeometryRequest
 * @export
 */
export type QueryLayerSearchGeometryRequest = PointSearch | PolygonOrBBoxSearch;


