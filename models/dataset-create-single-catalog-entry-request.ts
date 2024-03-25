/*
Catalog API

This API lists data sets available on Agrimetrics platform.

The version of the OpenAPI document: 


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AccrualPeriodicity } from './accrual-periodicity';
import { BasicDataSetInfo } from './basic-data-set-info';
import { CategoryValue } from './category-value';
import { Contact } from './contact';
import { CreateFromTemplatePayload } from './create-from-template-payload';
import { DataFormat } from './data-format';
import { DataSet } from './data-set';
import { DataSetDataSet } from './data-set-data-set';
import { DataSetDerivedFromInner } from './data-set-derived-from-inner';
import { DataSetDistributionsInner } from './data-set-distributions-inner';
import { DataSetSampleData } from './data-set-sample-data';
import { DataSetServicesInner } from './data-set-services-inner';
import { DraftStatus } from './draft-status';
import { Entitlement } from './entitlement';
import { EntryType } from './entry-type';
import { Exchange } from './exchange';
import { GeospatialExtent } from './geospatial-extent';
import { ImageRepresentation } from './image-representation';
import { Licence } from './licence';
import { PublicContact } from './public-contact';
import { PublishedStatus } from './published-status';
import { Resource } from './resource';
import { SpatialCoverage } from './spatial-coverage';
import { TaxonomyKeywords } from './taxonomy-keywords';
import { Topic } from './topic';
import { WorkflowKeywords } from './workflow-keywords';

/**
 * @type DatasetCreateSingleCatalogEntryRequest
 * @export
 */
export type DatasetCreateSingleCatalogEntryRequest = CreateFromTemplatePayload | DataSet;


