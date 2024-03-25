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
 * @interface DataRequestDetailsInner
 */
export interface DataRequestDetailsInner {
    /**
     * The ID of the data request
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'requestId': string;
    /**
     * The ID of the dataset that the data request relates to
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'datasetId': string;
    /**
     * The name of the dataset that the data request relates to
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'datasetName': string;
    /**
     * The status of the data request
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'status': DataRequestDetailsInnerStatusEnum;
    /**
     * The date the data request was made
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'requestedDate': string;
    /**
     * The date the data request was approved or rejected
     * @type {any}
     * @memberof DataRequestDetailsInner
     */
    'reviewedDate'?: any;
    /**
     * The format the user would like the data to be provided in
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'requestedFormat'?: DataRequestDetailsInnerRequestedFormatEnum;
    /**
     * The name of the project the data is for
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'projectName'?: string;
    /**
     * The name of the project manager who can approve the request
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'projectManagerName'?: string;
    /**
     * The email address of the project manager who can approve the request
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'projectManagerEmail'?: string;
    /**
     * The email of the person who made the data request
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'requesterEmail'?: string;
    /**
     * The date until which the data from an approved request can be downloaded
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'expiryDate'?: string;
    /**
     * 
     * @type {string}
     * @memberof DataRequestDetailsInner
     */
    'uniqueLinkId'?: string;
}

type DataRequestDetailsInnerStatusEnum = 'pending' | 'approved' | 'denied' | 'cancelled'
type DataRequestDetailsInnerRequestedFormatEnum = 'application/geo+json' | 'application/gml+xml; version=3.2' | 'application/vnd.google-earth.kml+xml' | 'application/zipped-shapefile' | 'application/x.gdb+zip' | 'application/x.mid-mif+zip' | 'application/x.tab+zip' | 'application/dxf' | 'image/tiff'

