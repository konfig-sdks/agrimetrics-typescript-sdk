/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { BoundingBox } from './bounding-box';
import { GeoJSONMultiPolygon } from './geo-jsonmulti-polygon';
import { GeoJSONPolygon } from './geo-jsonpolygon';
import { GeoJSONPolygonCoordinatesInnerInnerInner } from './geo-jsonpolygon-coordinates-inner-inner-inner';

/**
 * @type GeneralGeometry
 * @export
 */
export type GeneralGeometry = BoundingBox | GeoJSONMultiPolygon | GeoJSONPolygon;


