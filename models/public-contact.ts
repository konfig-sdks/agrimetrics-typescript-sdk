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
 * @interface PublicContact
 */
export interface PublicContact {
    /**
     * Organisation name for this contact
     * @type {string}
     * @memberof PublicContact
     */
    'organisationName': string;
    /**
     * Support url for this contact
     * @type {string}
     * @memberof PublicContact
     */
    'url'?: string;
    /**
     * Title of the support website
     * @type {string}
     * @memberof PublicContact
     */
    'urlLabel'?: string;
    /**
     * Email address for this contact
     * @type {string}
     * @memberof PublicContact
     */
    'emailAddress'?: string;
    /**
     * The role of this contact as it relates to the data set
     * @type {string}
     * @memberof PublicContact
     */
    'role': PublicContactRoleEnum;
}

type PublicContactRoleEnum = 'pointOfContact'


