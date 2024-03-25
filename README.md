<div align="center">

[![Visit Agrimetrics](./header.png)](https://agrimetrics.co.uk)

# [Agrimetrics](https://agrimetrics.co.uk)<a id="agrimetrics"></a>

This API lists data sets available on Agrimetrics platform.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`agrimetrics.accessRequest.createNewRequest`](#agrimetricsaccessrequestcreatenewrequest)
  * [`agrimetrics.accessRequest.deleteRequestById`](#agrimetricsaccessrequestdeleterequestbyid)
  * [`agrimetrics.accessRequest.list`](#agrimetricsaccessrequestlist)
  * [`agrimetrics.admin.createNewDefinition`](#agrimetricsadmincreatenewdefinition)
  * [`agrimetrics.admin.deleteById`](#agrimetricsadmindeletebyid)
  * [`agrimetrics.admin.deleteLayer`](#agrimetricsadmindeletelayer)
  * [`agrimetrics.admin.getByLayerId`](#agrimetricsadmingetbylayerid)
  * [`agrimetrics.admin.ingestFile`](#agrimetricsadminingestfile)
  * [`agrimetrics.admin.ingestFileNewLayer`](#agrimetricsadminingestfilenewlayer)
  * [`agrimetrics.admin.removeFile`](#agrimetricsadminremovefile)
  * [`agrimetrics.admin.updateExistingDefinition`](#agrimetricsadminupdateexistingdefinition)
  * [`agrimetrics.authentication.getJwt`](#agrimetricsauthenticationgetjwt)
  * [`agrimetrics.dataset.createFileDataset`](#agrimetricsdatasetcreatefiledataset)
  * [`agrimetrics.dataset.createSingleCatalogEntry`](#agrimetricsdatasetcreatesinglecatalogentry)
  * [`agrimetrics.dataset.deleteSingleDataSet`](#agrimetricsdatasetdeletesingledataset)
  * [`agrimetrics.dataset.discardDraftChanges`](#agrimetricsdatasetdiscarddraftchanges)
  * [`agrimetrics.dataset.getDraftChanges`](#agrimetricsdatasetgetdraftchanges)
  * [`agrimetrics.dataset.getEntitlements`](#agrimetricsdatasetgetentitlements)
  * [`agrimetrics.dataset.getFileDatasetId`](#agrimetricsdatasetgetfiledatasetid)
  * [`agrimetrics.dataset.getNonSpatialDataForGroup`](#agrimetricsdatasetgetnonspatialdataforgroup)
  * [`agrimetrics.dataset.getSingleCatalogEntry`](#agrimetricsdatasetgetsinglecatalogentry)
  * [`agrimetrics.dataset.getValidationReport`](#agrimetricsdatasetgetvalidationreport)
  * [`agrimetrics.dataset.getValidationReport_0`](#agrimetricsdatasetgetvalidationreport_0)
  * [`agrimetrics.dataset.listAllDataSets`](#agrimetricsdatasetlistalldatasets)
  * [`agrimetrics.dataset.listValidCategories`](#agrimetricsdatasetlistvalidcategories)
  * [`agrimetrics.dataset.listValidTags`](#agrimetricsdatasetlistvalidtags)
  * [`agrimetrics.dataset.setEntitlements`](#agrimetricsdatasetsetentitlements)
  * [`agrimetrics.dataset.setImage`](#agrimetricsdatasetsetimage)
  * [`agrimetrics.dataset.updateSingleCatalogEntry`](#agrimetricsdatasetupdatesinglecatalogentry)
  * [`agrimetrics.dataset.updateSingleEntry`](#agrimetricsdatasetupdatesingleentry)
  * [`agrimetrics.eSRI.restServiceQuery`](#agrimetricsesrirestservicequery)
  * [`agrimetrics.eSRI.restServiceQuery_0`](#agrimetricsesrirestservicequery_0)
  * [`agrimetrics.graph.listConcepts`](#agrimetricsgraphlistconcepts)
  * [`agrimetrics.harvest.xmlDataOnGroup`](#agrimetricsharvestxmldataongroup)
  * [`agrimetrics.harvest.xmlDataOnGroupPost`](#agrimetricsharvestxmldataongrouppost)
  * [`agrimetrics.image.getRawImage`](#agrimetricsimagegetrawimage)
  * [`agrimetrics.import.dataSets`](#agrimetricsimportdatasets)
  * [`agrimetrics.manageDataset.ingestFileNewLayer`](#agrimetricsmanagedatasetingestfilenewlayer)
  * [`agrimetrics.manageLayer.addGeoTiff`](#agrimetricsmanagelayeraddgeotiff)
  * [`agrimetrics.manageLayer.autoGenerateStyle`](#agrimetricsmanagelayerautogeneratestyle)
  * [`agrimetrics.manageLayer.deleteLayer`](#agrimetricsmanagelayerdeletelayer)
  * [`agrimetrics.manageLayer.getStyle`](#agrimetricsmanagelayergetstyle)
  * [`agrimetrics.manageLayer.ingestFile`](#agrimetricsmanagelayeringestfile)
  * [`agrimetrics.manageLayer.removeFile`](#agrimetricsmanagelayerremovefile)
  * [`agrimetrics.manageLayer.removeStyle`](#agrimetricsmanagelayerremovestyle)
  * [`agrimetrics.manageLayer.setStyle`](#agrimetricsmanagelayersetstyle)
  * [`agrimetrics.ogcApiTiles.getConformance`](#agrimetricsogcapitilesgetconformance)
  * [`agrimetrics.ogcApiTiles.getQueryTilesCollection`](#agrimetricsogcapitilesgetquerytilescollection)
  * [`agrimetrics.ogcApiTiles.getTilesCollection`](#agrimetricsogcapitilesgettilescollection)
  * [`agrimetrics.ogcApiTiles.queryCollectionById`](#agrimetricsogcapitilesquerycollectionbyid)
  * [`agrimetrics.ogcApiTiles.queryCollectionQueryables`](#agrimetricsogcapitilesquerycollectionqueryables)
  * [`agrimetrics.ogcApiTiles.queryCollections`](#agrimetricsogcapitilesquerycollections)
  * [`agrimetrics.ogcApiTiles.queryTileMatrixSets`](#agrimetricsogcapitilesquerytilematrixsets)
  * [`agrimetrics.ogcApiTiles.queryTileMatrixSets_0`](#agrimetricsogcapitilesquerytilematrixsets_0)
  * [`agrimetrics.ogcApiTiles.queryTilesV1`](#agrimetricsogcapitilesquerytilesv1)
  * [`agrimetrics.oGCAPI.featuresQuery`](#agrimetricsogcapifeaturesquery)
  * [`agrimetrics.oGCAPI.featuresQueryConformance`](#agrimetricsogcapifeaturesqueryconformance)
  * [`agrimetrics.oGCAPI.featuresQueryOgc`](#agrimetricsogcapifeaturesqueryogc)
  * [`agrimetrics.oGCAPI.featuresQuery_0`](#agrimetricsogcapifeaturesquery_0)
  * [`agrimetrics.oGCAPI.featuresQueryables`](#agrimetricsogcapifeaturesqueryables)
  * [`agrimetrics.oGCAPI.getStyleForCssFile`](#agrimetricsogcapigetstyleforcssfile)
  * [`agrimetrics.oGCAPI.getSwaggerFile`](#agrimetricsogcapigetswaggerfile)
  * [`agrimetrics.oGCAPI.queryFeaturesCollection`](#agrimetricsogcapiqueryfeaturescollection)
  * [`agrimetrics.oGCAPI.queryFeaturesCollectionItems`](#agrimetricsogcapiqueryfeaturescollectionitems)
  * [`agrimetrics.oGCAPI.queryFeaturesFunction`](#agrimetricsogcapiqueryfeaturesfunction)
  * [`agrimetrics.oGCAPI.queryFeaturesOpenapi`](#agrimetricsogcapiqueryfeaturesopenapi)
  * [`agrimetrics.queryDataset.listLayersWithinDataset`](#agrimetricsquerydatasetlistlayerswithindataset)
  * [`agrimetrics.queryLayer.calculateCost`](#agrimetricsquerylayercalculatecost)
  * [`agrimetrics.queryLayer.calculateStatisticsWithinGeometry`](#agrimetricsquerylayercalculatestatisticswithingeometry)
  * [`agrimetrics.queryLayer.cutShapeBoundaryAndRetrieve`](#agrimetricsquerylayercutshapeboundaryandretrieve)
  * [`agrimetrics.queryLayer.metadata`](#agrimetricsquerylayermetadata)
  * [`agrimetrics.queryLayer.searchGeometry`](#agrimetricsquerylayersearchgeometry)
  * [`agrimetrics.serviceDefinition.createNewDefinition`](#agrimetricsservicedefinitioncreatenewdefinition)
  * [`agrimetrics.serviceDefinition.deleteById`](#agrimetricsservicedefinitiondeletebyid)
  * [`agrimetrics.serviceDefinition.getByLayerId`](#agrimetricsservicedefinitiongetbylayerid)
  * [`agrimetrics.serviceDefinition.updateExistingDefinition`](#agrimetricsservicedefinitionupdateexistingdefinition)
  * [`agrimetrics.shapefile.convertToGeoJson`](#agrimetricsshapefileconverttogeojson)
  * [`agrimetrics.status.getCatalogApiStatus`](#agrimetricsstatusgetcatalogapistatus)
  * [`agrimetrics.status.setDraftStatus`](#agrimetricsstatussetdraftstatus)
  * [`agrimetrics.template.createCatalogEntry`](#agrimetricstemplatecreatecatalogentry)
  * [`agrimetrics.template.deleteSpecificTemplate`](#agrimetricstemplatedeletespecifictemplate)
  * [`agrimetrics.template.getSpecificTemplate`](#agrimetricstemplategetspecifictemplate)
  * [`agrimetrics.template.listPermissionsToView`](#agrimetricstemplatelistpermissionstoview)
  * [`agrimetrics.template.updateTemplateItem`](#agrimetricstemplateupdatetemplateitem)
  * [`agrimetrics.template.updateTemplateItem_0`](#agrimetricstemplateupdatetemplateitem_0)
  * [`agrimetrics.wCS.queryData`](#agrimetricswcsquerydata)
  * [`agrimetrics.wCS.queryData_0`](#agrimetricswcsquerydata_0)
  * [`agrimetrics.wFS.queryDataOpenGis`](#agrimetricswfsquerydataopengis)
  * [`agrimetrics.wFS.queryDataOpenGis_0`](#agrimetricswfsquerydataopengis_0)
  * [`agrimetrics.wFS.queryDataWithOpenGis`](#agrimetricswfsquerydatawithopengis)
  * [`agrimetrics.wMS.queryLayerWithOpenGIS`](#agrimetricswmsquerylayerwithopengis)
  * [`agrimetrics.wMS.queryWithOpenGis`](#agrimetricswmsquerywithopengis)
  * [`agrimetrics.wMTS.queryDataSetWmts`](#agrimetricswmtsquerydatasetwmts)
  * [`agrimetrics.wmtsRest.queryTileMatrixSet`](#agrimetricswmtsrestquerytilematrixset)
  * [`agrimetrics.wmtsRest.queryTilejsonImageFormat`](#agrimetricswmtsrestquerytilejsonimageformat)
  * [`agrimetrics.wmtsRest.serviceQuery`](#agrimetricswmtsrestservicequery)
  * [`agrimetrics.dataRequest.createSingleAccessRequest`](#agrimetricsdatarequestcreatesingleaccessrequest)
  * [`agrimetrics.dataRequest.getGeoJsonGeometry`](#agrimetricsdatarequestgetgeojsongeometry)
  * [`agrimetrics.dataRequest.getRequestedData`](#agrimetricsdatarequestgetrequesteddata)
  * [`agrimetrics.dataRequest.getResults`](#agrimetricsdatarequestgetresults)
  * [`agrimetrics.dataRequest.grantUserAccess`](#agrimetricsdatarequestgrantuseraccess)
  * [`agrimetrics.dataRequest.listUserAccessRequests`](#agrimetricsdatarequestlistuseraccessrequests)
  * [`agrimetrics.dataRequest.rejectUserAccess`](#agrimetricsdatarequestrejectuseraccess)
  * [`agrimetrics.dataRequest.updateRequest`](#agrimetricsdatarequestupdaterequest)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Agrimetrics&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Agrimetrics } from "agrimetrics-typescript-sdk";

const agrimetrics = new Agrimetrics({
  // Defining the base path is optional and defaults to https://api-test.agrimetrics.co.uk/catalog
  // basePath: "https://api-test.agrimetrics.co.uk/catalog",
  accessToken: "ACCESS_TOKEN",
  apiKeyHeader: "API_KEY",
  apiKeyQuery: "API_KEY",
  sec0: "API_KEY",
  xUserHeader: "API_KEY",
});

const createNewRequestResponse =
  await agrimetrics.accessRequest.createNewRequest({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    requestingEntityId: "requestingEntityId_example",
    requestMessage: "requestMessage_example",
  });

console.log(createNewRequestResponse);
```

## Reference<a id="reference"></a>


### `agrimetrics.accessRequest.createNewRequest`<a id="agrimetricsaccessrequestcreatenewrequest"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRequestResponse =
  await agrimetrics.accessRequest.createNewRequest({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    requestingEntityId: "requestingEntityId_example",
    requestMessage: "requestMessage_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

The ID of a dataset in the catalog

##### requestingEntityId: `string`<a id="requestingentityid-string"></a>

ID for the entity which is requesting access.

##### requestMessage: `string`<a id="requestmessage-string"></a>

Free text message provided by the user when requesting access.

##### requesterName: `string`<a id="requestername-string"></a>

Name of the user who requested access.

##### requesterEmail: `string`<a id="requesteremail-string"></a>

Contact email address for the user who requested access.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.accessRequest.deleteRequestById`<a id="agrimetricsaccessrequestdeleterequestbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRequestByIdResponse =
  await agrimetrics.accessRequest.deleteRequestById({
    requestId: "requestId_example",
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

##### accepted: `boolean`<a id="accepted-boolean"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-requests/{requestId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.accessRequest.list`<a id="agrimetricsaccessrequestlist"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await agrimetrics.accessRequest.list({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

##### requestingEntityId: `string`<a id="requestingentityid-string"></a>

##### entityId: `string`[]<a id="entityid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/access-requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.createNewDefinition`<a id="agrimetricsadmincreatenewdefinition"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Create new service definition within a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDefinitionResponse = await agrimetrics.admin.createNewDefinition(
  {
    datasetId: "a420450f-ef42-4fc9-a137-69456bdad016",
    layerName: "Geospatial Layer",
    service: "WCS",
    WFS: "Y",
    WCS: "Y",
    WMS: "Y",
    WMTS: "Y",
    OGCApiFeatures: "Y",
    OGCApiTiles: "Y",
    temporal: true,
    datastore: "Datastore Name",
    geoserverHostName: "geoserver-test.agrimetrics.co.uk",
    geometryField: "geom",
    defaultEPSGCode: 4326,
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### layerName: `string`<a id="layername-string"></a>

##### service: `string`<a id="service-string"></a>

##### WFS: `string`<a id="wfs-string"></a>

##### WCS: `string`<a id="wcs-string"></a>

##### WMS: `string`<a id="wms-string"></a>

##### WMTS: `string`<a id="wmts-string"></a>

##### OGCApiFeatures: `string`<a id="ogcapifeatures-string"></a>

##### OGCApiTiles: `string`<a id="ogcapitiles-string"></a>

##### temporal: `boolean`<a id="temporal-boolean"></a>

##### datastore: `string`<a id="datastore-string"></a>

##### geoserverHostName: `string`<a id="geoserverhostname-string"></a>

##### geometryField: `string`<a id="geometryfield-string"></a>

##### billable: [`Billable`](./models/billable.ts)<a id="billable-billablemodelsbillablets"></a>

##### defaultEPSGCode: `number`<a id="defaultepsgcode-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.deleteById`<a id="agrimetricsadmindeletebyid"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Delete service definition given layer ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await agrimetrics.admin.deleteById({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.deleteLayer`<a id="agrimetricsadmindeletelayer"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Delete the datastore and layer relating to a zip file on a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteLayerResponse = await agrimetrics.admin.deleteLayer({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.getByLayerId`<a id="agrimetricsadmingetbylayerid"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Get the service definition for a given layer ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByLayerIdResponse = await agrimetrics.admin.getByLayerId({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.ingestFile`<a id="agrimetricsadminingestfile"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Ingest a file that has been uploaded to a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ingestFileResponse = await agrimetrics.admin.ingestFile({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  fileId:
    "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip",
  fileName: "samplehabitats.zip",
  datetime: "20130310T180000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### fileName: `string`<a id="filename-string"></a>

##### datetime: `string`<a id="datetime-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/ingest` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.ingestFileNewLayer`<a id="agrimetricsadminingestfilenewlayer"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Ingest a file that has been uploaded to the catalog to create a new layer.
See [supported ingest formats](doc:supported-ingest-formats) for supported formats.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ingestFileNewLayerResponse = await agrimetrics.admin.ingestFileNewLayer({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  fileUri:
    "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileUri: `string`<a id="fileuri-string"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[NewLayers](./models/new-layers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/layers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.removeFile`<a id="agrimetricsadminremovefile"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Remove a file from a layer. When you are deleting a file from a layer, the layer may remain if any other files were ingested onto the same layer. If removing a raster file, provide the fileName query parameter; if removing a vector file, provide the fileUri.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileResponse = await agrimetrics.admin.removeFile({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  fileUri:
    "https://api-test.agrimetrics.co.uk/file-management/data-sets/11111111-2222-3333-4444-55555555555/files/example.zip",
  filename: "example.tif",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### fileUri: `string`<a id="fileuri-string"></a>

##### filename: `string`<a id="filename-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/files` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.admin.updateExistingDefinition`<a id="agrimetricsadminupdateexistingdefinition"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Update an existing service definition with billing and coordinates reference system metadata.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExistingDefinitionResponse =
  await agrimetrics.admin.updateExistingDefinition({
    layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    defaultEPSGCode: 4326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### billable: [`Billable`](./models/billable.ts)<a id="billable-billablemodelsbillablets"></a>

##### defaultEPSGCode: `number`<a id="defaultepsgcode-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.authentication.getJwt`<a id="agrimetricsauthenticationgetjwt"></a>

Retrieve an Agrimetrics JWT to be used as additional authentication on specified endpoints

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJwtResponse = await agrimetrics.authentication.getJwt({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

Agrimetrics Catalog username

##### password: `string`<a id="password-string"></a>

Agrimetrics Catalog password

#### 🔄 Return<a id="🔄-return"></a>

[AuthenticationGetJwtResponse](./models/authentication-get-jwt-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/authenticate` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.createFileDataset`<a id="agrimetricsdatasetcreatefiledataset"></a>

Create and attach file dataset. If the file dataset already exists, this will not do anything. Note this should usually be automatically created when creating a catalogue entry.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFileDatasetResponse = await agrimetrics.dataset.createFileDataset({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetCreateFileDatasetResponse](./models/dataset-create-file-dataset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/fileDataset` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.createSingleCatalogEntry`<a id="agrimetricsdatasetcreatesinglecatalogentry"></a>

Creates a single catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSingleCatalogEntryResponse =
  await agrimetrics.dataset.createSingleCatalogEntry({
    title: "title_example",
    description: "description_example",
    id: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    entryType: "model",
    exchange: "agrimetrics",
    spatialCoverage: "United Kingdom",
    temporalResolution: "P1Y",
    accrualPeriodicity: "Hourly",
    category: "free",
    visibility: "visible",
    approvalForAccessStatus: "AfA (Information Requests only)",
    draftStatus: "submitted",
    publishedStatus: "published",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tags: `string`[]<a id="tags-string"></a>

List of tags on this data set.

##### summary: `string`<a id="summary-string"></a>

Summary of the data set.

##### title: `string`<a id="title-string"></a>

Title for the data set.

##### description: `string`<a id="description-string"></a>

Description of the data set.

##### id: `string`<a id="id-string"></a>

The ID of a dataset in the catalog

##### entryType: [`EntryType`](./models/entry-type.ts)<a id="entrytype-entrytypemodelsentry-typets"></a>

The type of the entry, data set or model

##### exchange: [`Exchange`](./models/exchange.ts)<a id="exchange-exchangemodelsexchangets"></a>

##### alternativeTitles: `string`[]<a id="alternativetitles-string"></a>

##### scoringURI: `string`<a id="scoringuri-string"></a>

Scoring URI of the model.

##### endpointKey: `string`<a id="endpointkey-string"></a>

Endpoint key for the model.

##### isOwner: `boolean`<a id="isowner-boolean"></a>

Whether the current user is the owner of this data set.

##### publisher: `string`<a id="publisher-string"></a>

The ID of the publisher.

##### createdAt: `number`<a id="createdat-number"></a>

Data set creation timestamp.

##### published: `number`<a id="published-number"></a>

Data set publication timestamp.

##### metadataModified: `number`<a id="metadatamodified-number"></a>

Metadata last-modification timestmap.

##### usedBy: [`BasicDataSetInfo`](./models/basic-data-set-info.ts)[]<a id="usedby-basicdatasetinfomodelsbasic-data-set-infots"></a>

Other data sets using this data set.

##### derivedFrom: [`DataSetDerivedFromInner`](./models/data-set-derived-from-inner.ts)[]<a id="derivedfrom-datasetderivedfrominnermodelsdata-set-derived-from-innerts"></a>

Data sets used to generate this data set. When updating a data set, use an array of IDs. When GETting the data set, the return type will be `BasicDataSetInfo`. 

##### entitlements: [`Entitlement`](./models/entitlement.ts)[]<a id="entitlements-entitlementmodelsentitlementts"></a>

Entitlements for the current user.

##### entitlementsByIdentity: Record<string, [`Entitlement`](./models/entitlement.ts)[]><a id="entitlementsbyidentity-record"></a>

Array of entitlements by user identity.

##### creator: `string`<a id="creator-string"></a>

Creator of the data set.

##### dataReliability: `string`<a id="datareliability-string"></a>

Free text description about the reliability of this dataset.

##### license: `string`<a id="license-string"></a>

License of the data set.

##### licence: [`Licence`](./models/licence.ts)<a id="licence-licencemodelslicencets"></a>

##### landingPage: `string`<a id="landingpage-string"></a>

DEPRECATED. This has been replaced with the resources attribute. Reference URI of the data set.

##### resources: [`Resource`](./models/resource.ts)[]<a id="resources-resourcemodelsresourcets"></a>

Links containing more information on the data set

##### dataFormats: [`DataFormat`](./models/data-format.ts)[]<a id="dataformats-dataformatmodelsdata-formatts"></a>

Format of the data set

##### pricingDescription: `string`<a id="pricingdescription-string"></a>

Pricing description of the data set.

##### spatialCoverage: [`SpatialCoverage`](./models/spatial-coverage.ts)<a id="spatialcoverage-spatialcoveragemodelsspatial-coveragets"></a>

The geo spatial coverage of the data set.

##### spatialResolution: `number`<a id="spatialresolution-number"></a>

The resolution of data set in meters.

##### geospatialExtent: [`GeospatialExtent`](./models/geospatial-extent.ts)<a id="geospatialextent-geospatialextentmodelsgeospatial-extentts"></a>

##### temporalCoverage: `string`<a id="temporalcoverage-string"></a>

The time frame this data set covers.

##### temporalResolution: `string`<a id="temporalresolution-string"></a>

The sampling time period of the data set.

##### accrualPeriodicity: [`AccrualPeriodicity`](./models/accrual-periodicity.ts)<a id="accrualperiodicity-accrualperiodicitymodelsaccrual-periodicityts"></a>

Accrual periodicity options

##### distributions: [`DataSetDistributionsInner`](./models/data-set-distributions-inner.ts)[]<a id="distributions-datasetdistributionsinnermodelsdata-set-distributions-innerts"></a>

##### issued: `string`<a id="issued-string"></a>

The date when the data set was issued.

##### modified: `number`<a id="modified-number"></a>

An timestamp of when the data in this dataset was last updated

##### keywords: `string`[]<a id="keywords-string"></a>

List of keywords on this data set. keywords is deprecated - use tags instead

##### topics: [`Topic`](./models/topic.ts)[]<a id="topics-topicmodelstopicts"></a>

List of topics on this data set

##### workflowKeywords: [`WorkflowKeywords`](./models/workflow-keywords.ts)[]<a id="workflowkeywords-workflowkeywordsmodelsworkflow-keywordsts"></a>

List of workflow keywords on this data set

##### taxonomyKeywords: [`TaxonomyKeywords`](./models/taxonomy-keywords.ts)[]<a id="taxonomykeywords-taxonomykeywordsmodelstaxonomy-keywordsts"></a>

List of keywords based on specific taxonomies

##### category: [`CategoryValue`](./models/category-value.ts)<a id="category-categoryvaluemodelscategory-valuets"></a>

The value of the category

##### visibility: `string`<a id="visibility-string"></a>

Whether or not this data set should be displayed in the index.

##### concepts: `string`[]<a id="concepts-string"></a>

List of concepts on this data set. Check the concepts endpoint to see valid values.

##### dataSet: [`DataSetDataSet`](./models/data-set-data-set.ts)<a id="dataset-datasetdatasetmodelsdata-set-data-setts"></a>

##### services: [`DataSetServicesInner`](./models/data-set-services-inner.ts)[]<a id="services-datasetservicesinnermodelsdata-set-services-innerts"></a>

List of services available on the data set

##### sampleData: [`DataSetSampleData`](./models/data-set-sample-data.ts)<a id="sampledata-datasetsampledatamodelsdata-set-sample-datats"></a>

##### image: [`ImageRepresentation`](./models/image-representation.ts)<a id="image-imagerepresentationmodelsimage-representationts"></a>

##### coordinateReferenceSystemId: `string`<a id="coordinatereferencesystemid-string"></a>

URL to the specification of the coordinate system used in the data

##### spatialRepresentationType: `string`<a id="spatialrepresentationtype-string"></a>

Type of the geospatial data

##### lineage: `string`<a id="lineage-string"></a>

Information about the creation and quality assurance process of the dataset

##### fromTemplate: `string`<a id="fromtemplate-string"></a>

Information about which template was used to create the dataset record

##### contacts: [`Contact`](./models/contact.ts)[]<a id="contacts-contactmodelscontactts"></a>

List of contacts for this data set

##### metadataContact: [`Contact`](./models/contact.ts)<a id="metadatacontact-contactmodelscontactts"></a>

##### publicContact: [`PublicContact`](./models/public-contact.ts)<a id="publiccontact-publiccontactmodelspublic-contactts"></a>

##### approvalForAccessNumber: `number`<a id="approvalforaccessnumber-number"></a>

Approval for access status number

##### approvalForAccessStatus: `string`<a id="approvalforaccessstatus-string"></a>

Approval for access status value

##### language: `string`<a id="language-string"></a>

Language used on the data set

##### characterSet: `string`<a id="characterset-string"></a>

Character set used on the data set

##### hierarchyLevel: `string`<a id="hierarchylevel-string"></a>

Hierarchy level of the data set

##### metadataLanguage: `string`<a id="metadatalanguage-string"></a>

Language used on the metadata

##### metadataCharacterSet: `string`<a id="metadatacharacterset-string"></a>

Character set used on the metadata

##### metadataStandardName: `string`<a id="metadatastandardname-string"></a>

##### metadataStandardVersion: `string`<a id="metadatastandardversion-string"></a>

##### draftStatus: [`DraftStatus`](./models/draft-status.ts)<a id="draftstatus-draftstatusmodelsdraft-statusts"></a>

The workflow status of this data set\\\'s draft

##### draftNotes: `string`<a id="draftnotes-string"></a>

Any notes added during review of the data set

##### publishedStatus: [`PublishedStatus`](./models/published-status.ts)<a id="publishedstatus-publishedstatusmodelspublished-statusts"></a>

The publication status of this data set. Published data-sets have been approved by an admin

##### templateId: `string`<a id="templateid-string"></a>

The ID of a template in the catalog

#### 🔄 Return<a id="🔄-return"></a>

[EntryUpdateResponse](./models/entry-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.deleteSingleDataSet`<a id="agrimetricsdatasetdeletesingledataset"></a>

Delete a single Data Set

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSingleDataSetResponse =
  await agrimetrics.dataset.deleteSingleDataSet({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetDeleteSingleDataSetResponse](./models/dataset-delete-single-data-set-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.discardDraftChanges`<a id="agrimetricsdatasetdiscarddraftchanges"></a>

Discards the draft changes on a data set catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const discardDraftChangesResponse =
  await agrimetrics.dataset.discardDraftChanges({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/draft` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getDraftChanges`<a id="agrimetricsdatasetgetdraftchanges"></a>

Get the draft changes on a data set catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDraftChangesResponse = await agrimetrics.dataset.getDraftChanges({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSet](./models/data-set.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/draft` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getEntitlements`<a id="agrimetricsdatasetgetentitlements"></a>

Gets the entitlements on a data set.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEntitlementsResponse = await agrimetrics.dataset.getEntitlements({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetGetEntitlementsResponse](./models/dataset-get-entitlements-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/access` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getFileDatasetId`<a id="agrimetricsdatasetgetfiledatasetid"></a>

Get file dataset id from dataset

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileDatasetIdResponse = await agrimetrics.dataset.getFileDatasetId({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetGetFileDatasetIdResponse](./models/dataset-get-file-dataset-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/fileDataset` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getNonSpatialDataForGroup`<a id="agrimetricsdatasetgetnonspatialdataforgroup"></a>

Get the DCAT metadata for the given group. This will retrieve metadata for all the non spatial datasets in the public domain.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getNonSpatialDataForGroupResponse =
  await agrimetrics.dataset.getNonSpatialDataForGroup({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group: [`GroupCode`](./models/group-code.ts)<a id="group-groupcodemodelsgroup-codets"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/harvest/{group}/dcat` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getSingleCatalogEntry`<a id="agrimetricsdatasetgetsinglecatalogentry"></a>

Get a single data set catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSingleCatalogEntryResponse =
  await agrimetrics.dataset.getSingleCatalogEntry({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSet](./models/data-set.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getValidationReport`<a id="agrimetricsdatasetgetvalidationreport"></a>

Get the schematron validation report using the data sets validation profile. Throws an error if there is no validation profile

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getValidationReportResponse =
  await agrimetrics.dataset.getValidationReport({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetGetValidationReportResponse](./models/dataset-get-validation-report-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/validationReport` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.getValidationReport_0`<a id="agrimetricsdatasetgetvalidationreport_0"></a>

Get the schematron validation report using the data sets validation profile. Throws an error if there is no validation profile

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getValidationReport_0Response =
  await agrimetrics.dataset.getValidationReport_0({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DatasetGetValidationReport200Response](./models/dataset-get-validation-report200-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/draft/validationReport` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.listAllDataSets`<a id="agrimetricsdatasetlistalldatasets"></a>

List all data sets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllDataSetsResponse = await agrimetrics.dataset.listAllDataSets({
  tagRelationship: "narrower",
  text: "Weather",
  extendedText: "Soil",
  searchType: "title",
  sort: "title",
  exchange: "agrimetrics",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`[]<a id="ids-string"></a>

List of data set ids

##### creator: `string`[]<a id="creator-string"></a>

The creator of the data set.

##### keywords: `string`[]<a id="keywords-string"></a>

Tags describing the data set. keywords is deprecated - use tags instead

##### tags: `string`[]<a id="tags-string"></a>

Tags describing the data set.

##### tagRelationship: [`Relationship`](./models/relationship.ts)<a id="tagrelationship-relationshipmodelsrelationshipts"></a>

Note - This feature will no longer be available as we are in the process of moving to a different backend and will soon be removed. If provided, include data sets that have been tagged with concepts that are related to the values provided in the `tags` parameter. If not provided, only include data sets tagged with exact matches.

##### category: [`CategoryValue`](./models/category-value.ts)[]<a id="category-categoryvaluemodelscategory-valuets"></a>

Indicates the type of data

##### spatialCoverage: [`SpatialCoverage`](./models/spatial-coverage.ts)[]<a id="spatialcoverage-spatialcoveragemodelsspatial-coveragets"></a>

The region the data is applicable to.

##### text: `string`<a id="text-string"></a>

Note - Use extendedText. This field has been deprecated. Free text search for data sets.

##### extendedText: `string`<a id="extendedtext-string"></a>

Free text search for data sets matching title; summary; description; tags; concepts; and source.

##### identities: `string`[]<a id="identities-string"></a>

Only show datasets accessible by these identities. Can be \'PUBLIC\', a user ID or an organisation ID.

##### onlyFeatured: `boolean`<a id="onlyfeatured-boolean"></a>

Defines whether to return only featured data sets

##### showEditable: `boolean`<a id="showeditable-boolean"></a>

Defines whether my editable data sets should be shown.

##### showHidden: `boolean`<a id="showhidden-boolean"></a>

Defines whether hidden data sets should be shown.

##### pageNum: `number`<a id="pagenum-number"></a>

Set the page number. Should not be specified in conjunction with offset or limit.

##### pageSize: `number`<a id="pagesize-number"></a>

Set the page size. Should not be specified in conjunction with offset or limit.

##### offset: `number`<a id="offset-number"></a>

Set the pagination offset. Should not be specified in conjunction with pageNum or pageSize.

##### searchType: `'title' | 'all'`<a id="searchtype-title--all"></a>

Choose whether to search across all metadata on a data set, or just the title.

##### limit: `number`<a id="limit-number"></a>

Set the pagination limit. Should not be specified in conjunction with pageNum or pageSize.

##### legacyConcepts: `boolean`<a id="legacyconcepts-boolean"></a>

Note - This feature will no longer be available once we move to a different backend. \"Format response to convert any new concepts to legacy concepts\"

##### sort: `'title' | 'title-descending' | 'relevance'`<a id="sort-title--title-descending--relevance"></a>

Criterion by which to order the results

##### exchange: [`Exchange`](./models/exchange.ts)<a id="exchange-exchangemodelsexchangets"></a>

The private data exchange for which to retrieve records

##### metadataStandardName: `string`[]<a id="metadatastandardname-string"></a>

##### draftStatus: [`DraftStatus`](./models/draft-status.ts)[]<a id="draftstatus-draftstatusmodelsdraft-statusts"></a>

##### publishedStatus: [`DataSetListAllDataSetsPublishedStatusParameterInner`](./models/data-set-list-all-data-sets-published-status-parameter-inner.ts)[]<a id="publishedstatus-datasetlistalldatasetspublishedstatusparameterinnermodelsdata-set-list-all-data-sets-published-status-parameter-innerts"></a>

##### licence: `string`[]<a id="licence-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSets](./models/data-sets.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.listValidCategories`<a id="agrimetricsdatasetlistvalidcategories"></a>

List all the valid categories of datasets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listValidCategoriesResponse =
  await agrimetrics.dataset.listValidCategories();
```

#### 🔄 Return<a id="🔄-return"></a>

[Category](./models/category.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/categories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.listValidTags`<a id="agrimetricsdatasetlistvalidtags"></a>

List all the valid tags that can be set on a data set.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listValidTagsResponse = await agrimetrics.dataset.listValidTags();
```

#### 🔄 Return<a id="🔄-return"></a>

[DatasetListValidTagsResponse](./models/dataset-list-valid-tags-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/tags` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.setEntitlements`<a id="agrimetricsdatasetsetentitlements"></a>

Set the entitlements and on a data set for all identities.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setEntitlementsResponse = await agrimetrics.dataset.setEntitlements({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  entitlements: [
    {
      identity: {
        type: "user",
      },
      entitlements: {
        catalog: {},
        isAdmin: true,
      },
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### entitlements: [`BatchIdentityInputEntitlementsInner`](./models/batch-identity-input-entitlements-inner.ts)[]<a id="entitlements-batchidentityinputentitlementsinnermodelsbatch-identity-input-entitlements-innerts"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/access` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.setImage`<a id="agrimetricsdatasetsetimage"></a>

Set the image for a data set. Can either be an image upload a plain text string representing the unsplash image id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setImageResponse = await agrimetrics.dataset.setImage({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/image` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.updateSingleCatalogEntry`<a id="agrimetricsdatasetupdatesinglecatalogentry"></a>

Updates a single catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSingleCatalogEntryResponse =
  await agrimetrics.dataset.updateSingleCatalogEntry({
    dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    spatialCoverage: "United Kingdom",
    temporalResolution: "P1Y",
    accrualPeriodicity: "Hourly",
    publishedStatus: "published",
    category: "free",
    visibility: "visible",
    approvalForAccessStatus: "AfA (Information Requests only)",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

##### tags: `string`[]<a id="tags-string"></a>

List of tags on this data set.

##### summary: `string`<a id="summary-string"></a>

Summary of the data set.

##### title: `string`<a id="title-string"></a>

Title for the data set.

##### description: `string`<a id="description-string"></a>

Description of the data set.

##### alternativeTitles: `string`[]<a id="alternativetitles-string"></a>

##### scoringURI: `string`<a id="scoringuri-string"></a>

ScoringURI for the model.

##### endpointKey: `string`<a id="endpointkey-string"></a>

Endpoint key for the model.

##### derivedFrom: [`DataSetDerivedFromInner`](./models/data-set-derived-from-inner.ts)[]<a id="derivedfrom-datasetderivedfrominnermodelsdata-set-derived-from-innerts"></a>

Data sets used to generate this data set. When updating a data set, use an array of IDs. When GETting the data set, the return type will be `BasicDataSetInfo`. 

##### creator: `string`<a id="creator-string"></a>

Creator of the data set.

##### dataReliability: `string`<a id="datareliability-string"></a>

Free text description about the reliability of this dataset.

##### license: `string`<a id="license-string"></a>

License of the data set.

##### licence: [`DataSetPatchLicence`](./models/data-set-patch-licence.ts)<a id="licence-datasetpatchlicencemodelsdata-set-patch-licencets"></a>

##### resources: [`Resource`](./models/resource.ts)[]<a id="resources-resourcemodelsresourcets"></a>

Links containing more information on the data set

##### dataFormats: [`DataFormat`](./models/data-format.ts)[]<a id="dataformats-dataformatmodelsdata-formatts"></a>

Format of the data set

##### spatialCoverage: `string`<a id="spatialcoverage-string"></a>

The geo spatial coverage of the data set.

##### spatialResolution: `number`<a id="spatialresolution-number"></a>

The resolution of data set in meters.

##### geospatialExtent: [`DataSetPatchGeospatialExtent`](./models/data-set-patch-geospatial-extent.ts)<a id="geospatialextent-datasetpatchgeospatialextentmodelsdata-set-patch-geospatial-extentts"></a>

##### temporalCoverage: `string`<a id="temporalcoverage-string"></a>

The time frame this data set covers.

##### temporalExtent: [`DataSetPatchTemporalExtent`](./models/data-set-patch-temporal-extent.ts)<a id="temporalextent-datasetpatchtemporalextentmodelsdata-set-patch-temporal-extentts"></a>

##### temporalResolution: `string`<a id="temporalresolution-string"></a>

The sampling time period of the data set.

##### topics: [`Topic`](./models/topic.ts)[]<a id="topics-topicmodelstopicts"></a>

##### workflowKeywords: [`WorkflowKeywords`](./models/workflow-keywords.ts)[]<a id="workflowkeywords-workflowkeywordsmodelsworkflow-keywordsts"></a>

List of workflow keywords on this data set

##### taxonomyKeywords: [`TaxonomyKeywords`](./models/taxonomy-keywords.ts)[]<a id="taxonomykeywords-taxonomykeywordsmodelstaxonomy-keywordsts"></a>

List of keywords based on specific taxonomies

##### accrualPeriodicity: `string`<a id="accrualperiodicity-string"></a>

The frequency at which data set is published.

##### issued: `string`<a id="issued-string"></a>

The date when the data set was issued.

##### createdAt: `number`<a id="createdat-number"></a>

Data set creation timestamp.

##### published: `number`<a id="published-number"></a>

Data set publication timestamp.

##### publishedStatus: [`PublishedStatus`](./models/published-status.ts)<a id="publishedstatus-publishedstatusmodelspublished-statusts"></a>

The publication status of this data set. Published data-sets have been approved by an admin

##### modified: `number`<a id="modified-number"></a>

An timestamp of when the data in this dataset was last updated

##### category: [`CategoryValue`](./models/category-value.ts)<a id="category-categoryvaluemodelscategory-valuets"></a>

The value of the category

##### visibility: `string`<a id="visibility-string"></a>

Whether or not this data set should be displayed in the index.

##### pricingDescription: `string`<a id="pricingdescription-string"></a>

Pricing description of the data set.

##### distributions: [`DataSetDistributionsInner`](./models/data-set-distributions-inner.ts)[]<a id="distributions-datasetdistributionsinnermodelsdata-set-distributions-innerts"></a>

##### approvalForAccessNumber: `number`<a id="approvalforaccessnumber-number"></a>

Approval for access status number

##### approvalForAccessStatus: `string`<a id="approvalforaccessstatus-string"></a>

Approval for access status value

##### contacts: [`Contact`](./models/contact.ts)[]<a id="contacts-contactmodelscontactts"></a>

List of contacts for this data set

##### metadataContact: [`DataSetPatchMetadataContact`](./models/data-set-patch-metadata-contact.ts)<a id="metadatacontact-datasetpatchmetadatacontactmodelsdata-set-patch-metadata-contactts"></a>

##### lineage: `string`<a id="lineage-string"></a>

Information about the creation and quality assurance process of the dataset

##### language: `string`<a id="language-string"></a>

Language used on the data set

##### characterSet: `string`<a id="characterset-string"></a>

Character set used on the data set

##### hierarchyLevel: `string`<a id="hierarchylevel-string"></a>

Hierarchy level of the data set

##### metadataLanguage: `string`<a id="metadatalanguage-string"></a>

Language used on the metadata

##### metadataCharacterSet: `string`<a id="metadatacharacterset-string"></a>

Character set used on the metadata

##### metadataStandardName: `string`<a id="metadatastandardname-string"></a>

##### metadataStandardVersion: `string`<a id="metadatastandardversion-string"></a>

##### coordinateReferenceSystemId: `string`<a id="coordinatereferencesystemid-string"></a>

URL to the specification of the coordinate system used in the data

##### spatialRepresentationType: `string`<a id="spatialrepresentationtype-string"></a>

Type of the geospatial data

#### 🔄 Return<a id="🔄-return"></a>

[DataSet](./models/data-set.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataset.updateSingleEntry`<a id="agrimetricsdatasetupdatesingleentry"></a>

Updates a single catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSingleEntryResponse = await agrimetrics.dataset.updateSingleEntry({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  title: "title_example",
  description: "description_example",
  id: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  entryType: "model",
  exchange: "agrimetrics",
  spatialCoverage: "United Kingdom",
  temporalResolution: "P1Y",
  accrualPeriodicity: "Hourly",
  category: "free",
  visibility: "visible",
  approvalForAccessStatus: "AfA (Information Requests only)",
  draftStatus: "submitted",
  publishedStatus: "published",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title for the data set.

##### description: `string`<a id="description-string"></a>

Description of the data set.

##### entryType: [`EntryType`](./models/entry-type.ts)<a id="entrytype-entrytypemodelsentry-typets"></a>

The type of the entry, data set or model

##### dataSetId: `string`<a id="datasetid-string"></a>

##### tags: `string`[]<a id="tags-string"></a>

List of tags on this data set.

##### summary: `string`<a id="summary-string"></a>

Summary of the data set.

##### id: `string`<a id="id-string"></a>

The ID of a dataset in the catalog

##### exchange: [`Exchange`](./models/exchange.ts)<a id="exchange-exchangemodelsexchangets"></a>

##### alternativeTitles: `string`[]<a id="alternativetitles-string"></a>

##### scoringURI: `string`<a id="scoringuri-string"></a>

Scoring URI of the model.

##### endpointKey: `string`<a id="endpointkey-string"></a>

Endpoint key for the model.

##### isOwner: `boolean`<a id="isowner-boolean"></a>

Whether the current user is the owner of this data set.

##### publisher: `string`<a id="publisher-string"></a>

The ID of the publisher.

##### createdAt: `number`<a id="createdat-number"></a>

Data set creation timestamp.

##### published: `number`<a id="published-number"></a>

Data set publication timestamp.

##### metadataModified: `number`<a id="metadatamodified-number"></a>

Metadata last-modification timestmap.

##### usedBy: [`BasicDataSetInfo`](./models/basic-data-set-info.ts)[]<a id="usedby-basicdatasetinfomodelsbasic-data-set-infots"></a>

Other data sets using this data set.

##### derivedFrom: [`DataSetDerivedFromInner`](./models/data-set-derived-from-inner.ts)[]<a id="derivedfrom-datasetderivedfrominnermodelsdata-set-derived-from-innerts"></a>

Data sets used to generate this data set. When updating a data set, use an array of IDs. When GETting the data set, the return type will be `BasicDataSetInfo`. 

##### entitlements: [`Entitlement`](./models/entitlement.ts)[]<a id="entitlements-entitlementmodelsentitlementts"></a>

Entitlements for the current user.

##### entitlementsByIdentity: Record<string, [`Entitlement`](./models/entitlement.ts)[]><a id="entitlementsbyidentity-record"></a>

Array of entitlements by user identity.

##### creator: `string`<a id="creator-string"></a>

Creator of the data set.

##### dataReliability: `string`<a id="datareliability-string"></a>

Free text description about the reliability of this dataset.

##### license: `string`<a id="license-string"></a>

License of the data set.

##### licence: [`Licence`](./models/licence.ts)<a id="licence-licencemodelslicencets"></a>

##### landingPage: `string`<a id="landingpage-string"></a>

DEPRECATED. This has been replaced with the resources attribute. Reference URI of the data set.

##### resources: [`Resource`](./models/resource.ts)[]<a id="resources-resourcemodelsresourcets"></a>

Links containing more information on the data set

##### dataFormats: [`DataFormat`](./models/data-format.ts)[]<a id="dataformats-dataformatmodelsdata-formatts"></a>

Format of the data set

##### pricingDescription: `string`<a id="pricingdescription-string"></a>

Pricing description of the data set.

##### spatialCoverage: [`SpatialCoverage`](./models/spatial-coverage.ts)<a id="spatialcoverage-spatialcoveragemodelsspatial-coveragets"></a>

The geo spatial coverage of the data set.

##### spatialResolution: `number`<a id="spatialresolution-number"></a>

The resolution of data set in meters.

##### geospatialExtent: [`GeospatialExtent`](./models/geospatial-extent.ts)<a id="geospatialextent-geospatialextentmodelsgeospatial-extentts"></a>

##### temporalCoverage: `string`<a id="temporalcoverage-string"></a>

The time frame this data set covers.

##### temporalResolution: `string`<a id="temporalresolution-string"></a>

The sampling time period of the data set.

##### accrualPeriodicity: [`AccrualPeriodicity`](./models/accrual-periodicity.ts)<a id="accrualperiodicity-accrualperiodicitymodelsaccrual-periodicityts"></a>

Accrual periodicity options

##### distributions: [`DataSetDistributionsInner`](./models/data-set-distributions-inner.ts)[]<a id="distributions-datasetdistributionsinnermodelsdata-set-distributions-innerts"></a>

##### issued: `string`<a id="issued-string"></a>

The date when the data set was issued.

##### modified: `number`<a id="modified-number"></a>

An timestamp of when the data in this dataset was last updated

##### keywords: `string`[]<a id="keywords-string"></a>

List of keywords on this data set. keywords is deprecated - use tags instead

##### topics: [`Topic`](./models/topic.ts)[]<a id="topics-topicmodelstopicts"></a>

List of topics on this data set

##### workflowKeywords: [`WorkflowKeywords`](./models/workflow-keywords.ts)[]<a id="workflowkeywords-workflowkeywordsmodelsworkflow-keywordsts"></a>

List of workflow keywords on this data set

##### taxonomyKeywords: [`TaxonomyKeywords`](./models/taxonomy-keywords.ts)[]<a id="taxonomykeywords-taxonomykeywordsmodelstaxonomy-keywordsts"></a>

List of keywords based on specific taxonomies

##### category: [`CategoryValue`](./models/category-value.ts)<a id="category-categoryvaluemodelscategory-valuets"></a>

The value of the category

##### visibility: `string`<a id="visibility-string"></a>

Whether or not this data set should be displayed in the index.

##### concepts: `string`[]<a id="concepts-string"></a>

List of concepts on this data set. Check the concepts endpoint to see valid values.

##### dataSet: [`DataSetDataSet`](./models/data-set-data-set.ts)<a id="dataset-datasetdatasetmodelsdata-set-data-setts"></a>

##### services: [`DataSetServicesInner`](./models/data-set-services-inner.ts)[]<a id="services-datasetservicesinnermodelsdata-set-services-innerts"></a>

List of services available on the data set

##### sampleData: [`DataSetSampleData`](./models/data-set-sample-data.ts)<a id="sampledata-datasetsampledatamodelsdata-set-sample-datats"></a>

##### image: [`ImageRepresentation`](./models/image-representation.ts)<a id="image-imagerepresentationmodelsimage-representationts"></a>

##### coordinateReferenceSystemId: `string`<a id="coordinatereferencesystemid-string"></a>

URL to the specification of the coordinate system used in the data

##### spatialRepresentationType: `string`<a id="spatialrepresentationtype-string"></a>

Type of the geospatial data

##### lineage: `string`<a id="lineage-string"></a>

Information about the creation and quality assurance process of the dataset

##### fromTemplate: `string`<a id="fromtemplate-string"></a>

Information about which template was used to create the dataset record

##### contacts: [`Contact`](./models/contact.ts)[]<a id="contacts-contactmodelscontactts"></a>

List of contacts for this data set

##### metadataContact: [`Contact`](./models/contact.ts)<a id="metadatacontact-contactmodelscontactts"></a>

##### publicContact: [`PublicContact`](./models/public-contact.ts)<a id="publiccontact-publiccontactmodelspublic-contactts"></a>

##### approvalForAccessNumber: `number`<a id="approvalforaccessnumber-number"></a>

Approval for access status number

##### approvalForAccessStatus: `string`<a id="approvalforaccessstatus-string"></a>

Approval for access status value

##### language: `string`<a id="language-string"></a>

Language used on the data set

##### characterSet: `string`<a id="characterset-string"></a>

Character set used on the data set

##### hierarchyLevel: `string`<a id="hierarchylevel-string"></a>

Hierarchy level of the data set

##### metadataLanguage: `string`<a id="metadatalanguage-string"></a>

Language used on the metadata

##### metadataCharacterSet: `string`<a id="metadatacharacterset-string"></a>

Character set used on the metadata

##### metadataStandardName: `string`<a id="metadatastandardname-string"></a>

##### metadataStandardVersion: `string`<a id="metadatastandardversion-string"></a>

##### draftStatus: [`DraftStatus`](./models/draft-status.ts)<a id="draftstatus-draftstatusmodelsdraft-statusts"></a>

The workflow status of this data set\\\'s draft

##### draftNotes: `string`<a id="draftnotes-string"></a>

Any notes added during review of the data set

##### publishedStatus: [`PublishedStatus`](./models/published-status.ts)<a id="publishedstatus-publishedstatusmodelspublished-statusts"></a>

The publication status of this data set. Published data-sets have been approved by an admin

#### 🔄 Return<a id="🔄-return"></a>

[DataSet](./models/data-set.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.eSRI.restServiceQuery`<a id="agrimetricsesrirestservicequery"></a>

Query the given dataset using ESRI Rest Services


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restServiceQueryResponse = await agrimetrics.eSRI.restServiceQuery({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  paramOne: "paramOne_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### paramOne: `string`<a id="paramone-string"></a>

Additional path element

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest/services/{datasetId}/{paramOne}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.eSRI.restServiceQuery_0`<a id="agrimetricsesrirestservicequery_0"></a>

Query the given dataset using ESRI Rest Services


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const restServiceQuery_0Response = await agrimetrics.eSRI.restServiceQuery_0({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  paramOne: "paramOne_example",
  paramTwo: "paramTwo_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### paramOne: `string`<a id="paramone-string"></a>

Additional path element

##### paramTwo: `string`<a id="paramtwo-string"></a>

Additional path element

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/rest/services/{datasetId}/{paramOne}/{paramTwo}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.graph.listConcepts`<a id="agrimetricsgraphlistconcepts"></a>

List All Concepts Available in Agrimetrics Ontology Graph.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listConceptsResponse = await agrimetrics.graph.listConcepts();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/linked-data/concepts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.harvest.xmlDataOnGroup`<a id="agrimetricsharvestxmldataongroup"></a>

Harvest xml data on the given group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const xmlDataOnGroupResponse = await agrimetrics.harvest.xmlDataOnGroup({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group: [`GroupCode`](./models/group-code.ts)<a id="group-groupcodemodelsgroup-codets"></a>

##### service: `'CSW'`<a id="service-csw"></a>

##### request: `'GetRecords' | 'GetRecordById' | 'GetCapabilities'`<a id="request-getrecords--getrecordbyid--getcapabilities"></a>

##### version: `string`<a id="version-string"></a>

##### startPosition: `number`<a id="startposition-number"></a>

##### maxRecords: `number`<a id="maxrecords-number"></a>

##### id: `string`[]<a id="id-string"></a>

##### outputSchema: `'http://www.isotc211.org/2005/gmd'`<a id="outputschema-httpwwwisotc211org2005gmd"></a>

##### elementsetname: `'full' | 'brief' | 'summary'`<a id="elementsetname-full--brief--summary"></a>

##### outputFormat: `'application/xml'`<a id="outputformat-applicationxml"></a>

##### typeNames: `'gmd:MD_Metadata' | 'csw:Record'`<a id="typenames-gmdmd_metadata--cswrecord"></a>

##### resultType: `string`<a id="resulttype-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/harvest/{group}/csw` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.harvest.xmlDataOnGroupPost`<a id="agrimetricsharvestxmldataongrouppost"></a>

Harvest xml data on the given group

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const xmlDataOnGroupPostResponse = await agrimetrics.harvest.xmlDataOnGroupPost(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### group: [`GroupCode`](./models/group-code.ts)<a id="group-groupcodemodelsgroup-codets"></a>

##### service: `'CSW'`<a id="service-csw"></a>

##### request: `'GetRecords' | 'GetRecordById' | 'GetCapabilities'`<a id="request-getrecords--getrecordbyid--getcapabilities"></a>

##### version: `string`<a id="version-string"></a>

##### startPosition: `number`<a id="startposition-number"></a>

##### maxRecords: `number`<a id="maxrecords-number"></a>

##### id: `string`[]<a id="id-string"></a>

##### outputSchema: `'http://www.isotc211.org/2005/gmd'`<a id="outputschema-httpwwwisotc211org2005gmd"></a>

##### elementsetname: `'full' | 'brief' | 'summary'`<a id="elementsetname-full--brief--summary"></a>

##### outputFormat: `'application/xml'`<a id="outputformat-applicationxml"></a>

##### typeNames: `'gmd:MD_Metadata' | 'csw:Record'`<a id="typenames-gmdmd_metadata--cswrecord"></a>

##### resultType: `string`<a id="resulttype-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/harvest/{group}/csw` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.image.getRawImage`<a id="agrimetricsimagegetrawimage"></a>

Get an image referenced on a data set. This will always return the raw image data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRawImageResponse = await agrimetrics.image.getRawImage({
  imageType: "custom",
  imageId: "imageId_example",
  thumbnail: "false",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### imageType: `'custom' | 'unsplash'`<a id="imagetype-custom--unsplash"></a>

##### imageId: `string`<a id="imageid-string"></a>

##### thumbnail: `'true' | 'false'`<a id="thumbnail-true--false"></a>

Whether to provide a thumbnail image. If set to true and no thumbnail exists, the full image will be returned

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/images/{imageType}/{imageId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.import.dataSets`<a id="agrimetricsimportdatasets"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const dataSetsResponse = await agrimetrics.import.dataSets();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/import` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageDataset.ingestFileNewLayer`<a id="agrimetricsmanagedatasetingestfilenewlayer"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Ingest a file that has been uploaded to the catalog to create a new layer.
See [supported ingest formats](doc:supported-ingest-formats) for supported formats.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ingestFileNewLayerResponse =
  await agrimetrics.manageDataset.ingestFileNewLayer({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    fileUri:
      "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileUri: `string`<a id="fileuri-string"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[NewLayers](./models/new-layers.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/layers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.addGeoTiff`<a id="agrimetricsmanagelayeraddgeotiff"></a>

> :warning: **The maximum file size accepted for this endpoint to work is 200 MiB.**

This endpoint will add a GeoTIFF to an existing GeoTIFF layer.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addGeoTiffResponse = await agrimetrics.manageLayer.addGeoTiff({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  datetime: "20130310T180000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### datetime: `string`<a id="datetime-string"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

The file to upload.

#### 🔄 Return<a id="🔄-return"></a>

[ManageLayerAddGeoTiffResponse](./models/manage-layer-add-geo-tiff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.autoGenerateStyle`<a id="agrimetricsmanagelayerautogeneratestyle"></a>

Generate a new style and apply it to the given layer.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const autoGenerateStyleResponse =
  await agrimetrics.manageLayer.autoGenerateStyle({
    layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    key: "LU_CODE",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### key: `string`<a id="key-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[RestError](./models/rest-error.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/style` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.deleteLayer`<a id="agrimetricsmanagelayerdeletelayer"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Delete the datastore and layer relating to a zip file on a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteLayerResponse = await agrimetrics.manageLayer.deleteLayer({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.getStyle`<a id="agrimetricsmanagelayergetstyle"></a>

Get the SLD style that has been applied to a layer.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStyleResponse = await agrimetrics.manageLayer.getStyle({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/style` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.ingestFile`<a id="agrimetricsmanagelayeringestfile"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Ingest a file that has been uploaded to a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const ingestFileResponse = await agrimetrics.manageLayer.ingestFile({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  fileId:
    "https://api.agrimetrics.co.uk/file-management/data-sets/5e74c298-515d-408d-8926-974abc696092/files/samplehabitats.zip",
  fileName: "samplehabitats.zip",
  datetime: "20130310T180000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### fileId: `string`<a id="fileid-string"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### fileName: `string`<a id="filename-string"></a>

##### datetime: `string`<a id="datetime-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/ingest` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.removeFile`<a id="agrimetricsmanagelayerremovefile"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Remove a file from a layer. When you are deleting a file from a layer, the layer may remain if any other files were ingested onto the same layer. If removing a raster file, provide the fileName query parameter; if removing a vector file, provide the fileUri.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeFileResponse = await agrimetrics.manageLayer.removeFile({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  fileUri:
    "https://api-test.agrimetrics.co.uk/file-management/data-sets/11111111-2222-3333-4444-55555555555/files/example.zip",
  filename: "example.tif",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### fileUri: `string`<a id="fileuri-string"></a>

##### filename: `string`<a id="filename-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/files` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.removeStyle`<a id="agrimetricsmanagelayerremovestyle"></a>

Delete an SLD style that has been applied to a layer.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeStyleResponse = await agrimetrics.manageLayer.removeStyle({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/style` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.manageLayer.setStyle`<a id="agrimetricsmanagelayersetstyle"></a>

Apply a new style to the given layer. The style must be provided as an SLD file (1.0.0 and 1.1.0 supported).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setStyleResponse = await agrimetrics.manageLayer.setStyle({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/style` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.getConformance`<a id="agrimetricsogcapitilesgetconformance"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getConformanceResponse = await agrimetrics.ogcApiTiles.getConformance({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/conformance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.getQueryTilesCollection`<a id="agrimetricsogcapitilesgetquerytilescollection"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueryTilesCollectionResponse =
  await agrimetrics.ogcApiTiles.getQueryTilesCollection({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    collectionId: "collectionId_example",
    tileMatrixSetId: "tileMatrixSetId_example",
    tileMatrix: "tileMatrix_example",
    tileRow: 1,
    tileCol: 1,
    f: "f_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

##### tileMatrixSetId: `string`<a id="tilematrixsetid-string"></a>

##### tileMatrix: `string`<a id="tilematrix-string"></a>

##### tileRow: `number`<a id="tilerow-number"></a>

##### tileCol: `number`<a id="tilecol-number"></a>

##### f: `string`<a id="f-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/map/tiles/{tileMatrixSetId}/{tileMatrix}/{tileRow}/{tileCol}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.getTilesCollection`<a id="agrimetricsogcapitilesgettilescollection"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTilesCollectionResponse =
  await agrimetrics.ogcApiTiles.getTilesCollection({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    collectionId: "collectionId_example",
    tileMatrixSetId: "tileMatrixSetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

##### tileMatrixSetId: `string`<a id="tilematrixsetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/tiles/{tileMatrixSetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryCollectionById`<a id="agrimetricsogcapitilesquerycollectionbyid"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryCollectionByIdResponse =
  await agrimetrics.ogcApiTiles.queryCollectionById({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryCollectionQueryables`<a id="agrimetricsogcapitilesquerycollectionqueryables"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryCollectionQueryablesResponse =
  await agrimetrics.ogcApiTiles.queryCollectionQueryables({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/collections/{collectionId}/queryables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryCollections`<a id="agrimetricsogcapitilesquerycollections"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryCollectionsResponse = await agrimetrics.ogcApiTiles.queryCollections(
  {
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryTileMatrixSets`<a id="agrimetricsogcapitilesquerytilematrixsets"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTileMatrixSetsResponse =
  await agrimetrics.ogcApiTiles.queryTileMatrixSets({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/tileMatrixSets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryTileMatrixSets_0`<a id="agrimetricsogcapitilesquerytilematrixsets_0"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTileMatrixSets_0Response =
  await agrimetrics.ogcApiTiles.queryTileMatrixSets_0({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    tileMatrixSetId: "tileMatrixSetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### tileMatrixSetId: `string`<a id="tilematrixsetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1/tileMatrixSets/{tileMatrixSetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.ogcApiTiles.queryTilesV1`<a id="agrimetricsogcapitilesquerytilesv1"></a>

Query the given data set with OGC API Tiles standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTilesV1Response = await agrimetrics.ogcApiTiles.queryTilesV1({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/tiles/v1` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.featuresQuery`<a id="agrimetricsogcapifeaturesquery"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuresQueryResponse = await agrimetrics.oGCAPI.featuresQuery({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.featuresQueryConformance`<a id="agrimetricsogcapifeaturesqueryconformance"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuresQueryConformanceResponse =
  await agrimetrics.oGCAPI.featuresQueryConformance({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/conformance` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.featuresQueryOgc`<a id="agrimetricsogcapifeaturesqueryogc"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuresQueryOgcResponse = await agrimetrics.oGCAPI.featuresQueryOgc({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  collectionId: "collectionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.featuresQuery_0`<a id="agrimetricsogcapifeaturesquery_0"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuresQuery_0Response = await agrimetrics.oGCAPI.featuresQuery_0({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  collectionId: "collectionId_example",
  featureId: "featureId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

##### featureId: `string`<a id="featureid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/items/{featureId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.featuresQueryables`<a id="agrimetricsogcapifeaturesqueryables"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const featuresQueryablesResponse = await agrimetrics.oGCAPI.featuresQueryables({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  collectionId: "collectionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/queryables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.getStyleForCssFile`<a id="agrimetricsogcapigetstyleforcssfile"></a>

Get CSS files

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getStyleForCssFileResponse = await agrimetrics.oGCAPI.getStyleForCssFile({
  cssFile: "cssFile_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cssFile: `string`<a id="cssfile-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/apicss/{cssFile}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.getSwaggerFile`<a id="agrimetricsogcapigetswaggerfile"></a>

Get swagger files

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSwaggerFileResponse = await agrimetrics.oGCAPI.getSwaggerFile({
  swaggerFile: "swaggerFile_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### swaggerFile: `string`<a id="swaggerfile-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/swagger-ui/{swaggerFile}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.queryFeaturesCollection`<a id="agrimetricsogcapiqueryfeaturescollection"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryFeaturesCollectionResponse =
  await agrimetrics.oGCAPI.queryFeaturesCollection({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.queryFeaturesCollectionItems`<a id="agrimetricsogcapiqueryfeaturescollectionitems"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryFeaturesCollectionItemsResponse =
  await agrimetrics.oGCAPI.queryFeaturesCollectionItems({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/collections/{collectionId}/items` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.queryFeaturesFunction`<a id="agrimetricsogcapiqueryfeaturesfunction"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryFeaturesFunctionResponse =
  await agrimetrics.oGCAPI.queryFeaturesFunction({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.oGCAPI.queryFeaturesOpenapi`<a id="agrimetricsogcapiqueryfeaturesopenapi"></a>

Query the given data set with the OGC-API Featuresinterface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryFeaturesOpenapiResponse =
  await agrimetrics.oGCAPI.queryFeaturesOpenapi({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/ogc/features/v1/openapi` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryDataset.listLayersWithinDataset`<a id="agrimetricsquerydatasetlistlayerswithindataset"></a>

Get the list of layers contained in a geospatial data set.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLayersWithinDatasetResponse =
  await agrimetrics.queryDataset.listLayersWithinDataset({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

This parameter corresponds to the Agrimetrics Catalogue dataset ID.

#### 🔄 Return<a id="🔄-return"></a>

[QueryDatasetListLayersWithinDatasetResponse](./models/query-dataset-list-layers-within-dataset-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryLayer.calculateCost`<a id="agrimetricsquerylayercalculatecost"></a>

Find out the cost of searching a specific geometry within a layer.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const calculateCostResponse = await agrimetrics.queryLayer.calculateCost({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  geometry: {
    type: "Point",
    coordinates: [-91.85, 15.52],
  },
  distance: 10,
  time: "2017-01-01T00:00:00.000Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### geometry: [`GeoJSONPoint`](./models/geo-jsonpoint.ts)<a id="geometry-geojsonpointmodelsgeo-jsonpointts"></a>

##### time: `string`<a id="time-string"></a>

##### distance: `number`<a id="distance-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostSummary](./models/cost-summary.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/search/cost` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryLayer.calculateStatisticsWithinGeometry`<a id="agrimetricsquerylayercalculatestatisticswithingeometry"></a>

> :warning: Search geometries are currently limited to areas up to 500 square km.

Calculates basic statistics of the raster layer within the specified geometry (and optionally time).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const calculateStatisticsWithinGeometryResponse =
  await agrimetrics.queryLayer.calculateStatisticsWithinGeometry({
    layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    geometry: null,
    time: "2017-01-01T00:00:00.000Z",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### geometry: [`GeneralGeometry`](./models/general-geometry.ts)<a id="geometry-generalgeometrymodelsgeneral-geometryts"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### time: `string`<a id="time-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[Statistics](./models/statistics.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/search/statistics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryLayer.cutShapeBoundaryAndRetrieve`<a id="agrimetricsquerylayercutshapeboundaryandretrieve"></a>

Cut one or more layers to a shape boundary and retrieve the features as multiple layers in a single downloadable file

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const cutShapeBoundaryAndRetrieveResponse =
  await agrimetrics.queryLayer.cutShapeBoundaryAndRetrieve({
    layer: ["97130f06-6242-463f-bf19-0dd6f5a58cfb"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layer: `string`[]<a id="layer-string"></a>

A layer to query

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/query` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryLayer.metadata`<a id="agrimetricsquerylayermetadata"></a>

Get the metadata for a given layer, including the geospatial extent.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const metadataResponse = await agrimetrics.queryLayer.metadata({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[QueryLayerMetadataResponse](./models/query-layer-metadata-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.queryLayer.searchGeometry`<a id="agrimetricsquerylayersearchgeometry"></a>

> :warning: Search geometries are currently limited to areas up to 500 square km.

Search a specific geometry within a layer. You can optionally specify a time range and/or choose the format of the response (file type, or json).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchGeometryResponse = await agrimetrics.queryLayer.searchGeometry({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  geometry: {
    type: "Point",
    coordinates: [-91.85, 15.52],
  },
  distance: 10,
  time: "2017-01-01T00:00:00.000Z",
  outputFormat: "shape-zip",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### geometry: [`GeoJSONPoint`](./models/geo-jsonpoint.ts)<a id="geometry-geojsonpointmodelsgeo-jsonpointts"></a>

##### time: `string`<a id="time-string"></a>

##### outputFormat: [`OutputFormats`](./models/output-formats.ts)<a id="outputformat-outputformatsmodelsoutput-formatsts"></a>

##### distance: `number`<a id="distance-number"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/layers/{layerId}/search` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.serviceDefinition.createNewDefinition`<a id="agrimetricsservicedefinitioncreatenewdefinition"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Create new service definition within a data set.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDefinitionResponse =
  await agrimetrics.serviceDefinition.createNewDefinition({
    datasetId: "a420450f-ef42-4fc9-a137-69456bdad016",
    layerName: "Geospatial Layer",
    service: "WCS",
    WFS: "Y",
    WCS: "Y",
    WMS: "Y",
    WMTS: "Y",
    OGCApiFeatures: "Y",
    OGCApiTiles: "Y",
    temporal: true,
    datastore: "Datastore Name",
    geoserverHostName: "geoserver-test.agrimetrics.co.uk",
    geometryField: "geom",
    defaultEPSGCode: 4326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### layerName: `string`<a id="layername-string"></a>

##### service: `string`<a id="service-string"></a>

##### WFS: `string`<a id="wfs-string"></a>

##### WCS: `string`<a id="wcs-string"></a>

##### WMS: `string`<a id="wms-string"></a>

##### WMTS: `string`<a id="wmts-string"></a>

##### OGCApiFeatures: `string`<a id="ogcapifeatures-string"></a>

##### OGCApiTiles: `string`<a id="ogcapitiles-string"></a>

##### temporal: `boolean`<a id="temporal-boolean"></a>

##### datastore: `string`<a id="datastore-string"></a>

##### geoserverHostName: `string`<a id="geoserverhostname-string"></a>

##### geometryField: `string`<a id="geometryfield-string"></a>

##### billable: [`Billable`](./models/billable.ts)<a id="billable-billablemodelsbillablets"></a>

##### defaultEPSGCode: `number`<a id="defaultepsgcode-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.serviceDefinition.deleteById`<a id="agrimetricsservicedefinitiondeletebyid"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Delete service definition given layer ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await agrimetrics.serviceDefinition.deleteById({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.serviceDefinition.getByLayerId`<a id="agrimetricsservicedefinitiongetbylayerid"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Get the service definition for a given layer ID


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByLayerIdResponse = await agrimetrics.serviceDefinition.getByLayerId({
  layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.serviceDefinition.updateExistingDefinition`<a id="agrimetricsservicedefinitionupdateexistingdefinition"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Update an existing service definition with billing and coordinates reference system metadata.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExistingDefinitionResponse =
  await agrimetrics.serviceDefinition.updateExistingDefinition({
    layerId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    defaultEPSGCode: 4326,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### layerId: `string`<a id="layerid-string"></a>

##### billable: [`Billable`](./models/billable.ts)<a id="billable-billablemodelsbillablets"></a>

##### defaultEPSGCode: `number`<a id="defaultepsgcode-number"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ServiceDefinitionResponse](./models/service-definition-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/serviceDefinition/{layerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.shapefile.convertToGeoJson`<a id="agrimetricsshapefileconverttogeojson"></a>

> :warning: **This is an Agrimetrics internal operation. It relies on information which is not exposed externally.**

Receive a shapefile and return GeoJson for explore page


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const convertToGeoJsonResponse = await agrimetrics.shapefile.convertToGeoJson();
```

#### 🔄 Return<a id="🔄-return"></a>

[GeoJSONPolygon](./models/geo-jsonpolygon.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/shapefile` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.status.getCatalogApiStatus`<a id="agrimetricsstatusgetcatalogapistatus"></a>

Get status of catalog API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCatalogApiStatusResponse =
  await agrimetrics.status.getCatalogApiStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[StatusGetCatalogApiStatusResponse](./models/status-get-catalog-api-status-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/status` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.status.setDraftStatus`<a id="agrimetricsstatussetdraftstatus"></a>

Set the draft status for the data set catalog entry.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const setDraftStatusResponse = await agrimetrics.status.setDraftStatus({
  dataSetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  status: null,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: [`StatusSetDraftStatusRequestStatus`](./models/status-set-draft-status-request-status.ts)<a id="status-statussetdraftstatusrequeststatusmodelsstatus-set-draft-status-request-statusts"></a>

##### dataSetId: `string`<a id="datasetid-string"></a>

##### notes: `string`<a id="notes-string"></a>

Any notes added during review of the data set

#### 🔄 Return<a id="🔄-return"></a>

[EntryUpdateResponse](./models/entry-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-sets/{dataSetId}/draft-status` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.createCatalogEntry`<a id="agrimetricstemplatecreatecatalogentry"></a>

Creates a single template that can be used to create similar catalogue entries.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCatalogEntryResponse =
  await agrimetrics.template.createCatalogEntry({
    name: "name_example",
    exchange: "agrimetrics",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### description: `string`<a id="description-string"></a>

##### dataSet: [`DataSetPatch`](./models/data-set-patch.ts)<a id="dataset-datasetpatchmodelsdata-set-patchts"></a>

##### entitlements: [`BatchIdentityInputEntitlementsInner`](./models/batch-identity-input-entitlements-inner.ts)[]<a id="entitlements-batchidentityinputentitlementsinnermodelsbatch-identity-input-entitlements-innerts"></a>

##### creatorEntitlements: [`Entitlements`](./models/entitlements.ts)<a id="creatorentitlements-entitlementsmodelsentitlementsts"></a>

##### exchange: [`Exchange`](./models/exchange.ts)<a id="exchange-exchangemodelsexchangets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EntryUpdateResponse](./models/entry-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.deleteSpecificTemplate`<a id="agrimetricstemplatedeletespecifictemplate"></a>

Delete a specific template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSpecificTemplateResponse =
  await agrimetrics.template.deleteSpecificTemplate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EntryUpdateResponse](./models/entry-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.getSpecificTemplate`<a id="agrimetricstemplategetspecifictemplate"></a>

Get a specific template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSpecificTemplateResponse =
  await agrimetrics.template.getSpecificTemplate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSetTemplateEntity](./models/data-set-template-entity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.listPermissionsToView`<a id="agrimetricstemplatelistpermissionstoview"></a>

List all templates you have permission to view.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPermissionsToViewResponse =
  await agrimetrics.template.listPermissionsToView();
```

#### 🔄 Return<a id="🔄-return"></a>

[TemplateListPermissionsToViewResponse](./models/template-list-permissions-to-view-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.updateTemplateItem`<a id="agrimetricstemplateupdatetemplateitem"></a>

Update a template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTemplateItemResponse =
  await agrimetrics.template.updateTemplateItem({
    name: "name_example",
    exchange: "agrimetrics",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### templateId: `string`<a id="templateid-string"></a>

##### description: `string`<a id="description-string"></a>

##### dataSet: [`DataSetPatch`](./models/data-set-patch.ts)<a id="dataset-datasetpatchmodelsdata-set-patchts"></a>

##### entitlements: [`BatchIdentityInputEntitlementsInner`](./models/batch-identity-input-entitlements-inner.ts)[]<a id="entitlements-batchidentityinputentitlementsinnermodelsbatch-identity-input-entitlements-innerts"></a>

##### creatorEntitlements: [`Entitlements`](./models/entitlements.ts)<a id="creatorentitlements-entitlementsmodelsentitlementsts"></a>

##### exchange: [`Exchange`](./models/exchange.ts)<a id="exchange-exchangemodelsexchangets"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSetTemplateEntity](./models/data-set-template-entity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.template.updateTemplateItem_0`<a id="agrimetricstemplateupdatetemplateitem_0"></a>

Update a template

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTemplateItem_0Response =
  await agrimetrics.template.updateTemplateItem_0({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### templateId: `string`<a id="templateid-string"></a>

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### dataSet: [`DataSetPatch`](./models/data-set-patch.ts)<a id="dataset-datasetpatchmodelsdata-set-patchts"></a>

##### entitlements: [`BatchIdentityInputEntitlementsInner`](./models/batch-identity-input-entitlements-inner.ts)[]<a id="entitlements-batchidentityinputentitlementsinnermodelsbatch-identity-input-entitlements-innerts"></a>

##### creatorEntitlements: [`Entitlements`](./models/entitlements.ts)<a id="creatorentitlements-entitlementsmodelsentitlementsts"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataSetTemplateEntity](./models/data-set-template-entity.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/templates/{templateId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wCS.queryData`<a id="agrimetricswcsquerydata"></a>

Query the given data set with the OpenGIS® Web Coverage Serice interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryDataResponse = await agrimetrics.wCS.queryData({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wcs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wCS.queryData_0`<a id="agrimetricswcsquerydata_0"></a>

Query the given data set with the OpenGIS® Web Coverage Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryData_0Response = await agrimetrics.wCS.queryData_0({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wcs` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wFS.queryDataOpenGis`<a id="agrimetricswfsquerydataopengis"></a>

Query the given data set with the OpenGIS® Web Feature Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryDataOpenGisResponse = await agrimetrics.wFS.queryDataOpenGis({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wfs` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wFS.queryDataOpenGis_0`<a id="agrimetricswfsquerydataopengis_0"></a>

Query the given data set with the OpenGIS® Web Feature Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryDataOpenGis_0Response = await agrimetrics.wFS.queryDataOpenGis_0({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wfs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wFS.queryDataWithOpenGis`<a id="agrimetricswfsquerydatawithopengis"></a>

Query the given data set with the OpenGIS® Web Feature Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryDataWithOpenGisResponse = await agrimetrics.wFS.queryDataWithOpenGis(
  {
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wfs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wMS.queryLayerWithOpenGIS`<a id="agrimetricswmsquerylayerwithopengis"></a>

Query the given layer with the OpenGIS® Web Map Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryLayerWithOpenGISResponse =
  await agrimetrics.wMS.queryLayerWithOpenGIS({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wMS.queryWithOpenGis`<a id="agrimetricswmsquerywithopengis"></a>

Query the given data set with the OpenGIS® Web Map Service interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryWithOpenGisResponse = await agrimetrics.wMS.queryWithOpenGis({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wms` `HEAD`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wMTS.queryDataSetWmts`<a id="agrimetricswmtsquerydatasetwmts"></a>

Query the given data set with the OpenGIS® Web Map Tile Serice interface standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryDataSetWmtsResponse = await agrimetrics.wMTS.queryDataSetWmts({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wmts` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wmtsRest.queryTileMatrixSet`<a id="agrimetricswmtsrestquerytilematrixset"></a>

Query the given data set with theWMTS standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTileMatrixSetResponse =
  await agrimetrics.wmtsRest.queryTileMatrixSet({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    layerName: "layerName_example",
    style: "style_example",
    tileMatrixSet: "tileMatrixSet_example",
    tileMatrix: "tileMatrix_example",
    tileRow: 0,
    tileCol: 0,
    format: "format_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### layerName: `string`<a id="layername-string"></a>

##### style: `string`<a id="style-string"></a>

##### tileMatrixSet: `string`<a id="tilematrixset-string"></a>

##### tileMatrix: `string`<a id="tilematrix-string"></a>

##### tileRow: `number`<a id="tilerow-number"></a>

##### tileCol: `number`<a id="tilecol-number"></a>

##### format: `string`<a id="format-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wmts/rest/{layerName}/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wmtsRest.queryTilejsonImageFormat`<a id="agrimetricswmtsrestquerytilejsonimageformat"></a>

Query the given data set with theWMTS standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const queryTilejsonImageFormatResponse =
  await agrimetrics.wmtsRest.queryTilejsonImageFormat({
    datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
    layerName: "layerName_example",
    style: "style_example",
    imageFormat: "imageFormat_example",
    format: "format_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### layerName: `string`<a id="layername-string"></a>

##### style: `string`<a id="style-string"></a>

##### imageFormat: `string`<a id="imageformat-string"></a>

##### format: `string`<a id="format-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wmts/rest/{layerName}/{style}/tilejson/{imageFormat}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.wmtsRest.serviceQuery`<a id="agrimetricswmtsrestservicequery"></a>

Query the given data set with theWMTS standard


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const serviceQueryResponse = await agrimetrics.wmtsRest.serviceQuery({
  datasetId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  layerName: "layerName_example",
  style: "style_example",
  tileMatrixSet: "tileMatrixSet_example",
  tileMatrix: "tileMatrix_example",
  tileRow: 0,
  tileCol: 0,
  j: 1,
  i: 1,
  format: "format_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### datasetId: `string`<a id="datasetid-string"></a>

##### layerName: `string`<a id="layername-string"></a>

##### style: `string`<a id="style-string"></a>

##### tileMatrixSet: `string`<a id="tilematrixset-string"></a>

##### tileMatrix: `string`<a id="tilematrix-string"></a>

##### tileRow: `number`<a id="tilerow-number"></a>

##### tileCol: `number`<a id="tilecol-number"></a>

##### j: `number`<a id="j-number"></a>

##### i: `number`<a id="i-number"></a>

##### format: `string`<a id="format-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/datasets/{datasetId}/wmts/rest/{layerName}/{style}/{TileMatrixSet}/{TileMatrix}/{TileRow}/{TileCol}/{J}/{I}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.createSingleAccessRequest`<a id="agrimetricsdatarequestcreatesingleaccessrequest"></a>

Create a single access request for an authenticated user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSingleAccessRequestResponse =
  await agrimetrics.dataRequest.createSingleAccessRequest({
    projectName: "projectName_example",
    projectManagerName: "projectManagerName_example",
    projectManagerEmail: "projectManagerEmail_example",
    datasetId: "datasetId_example",
    datasetName: "datasetName_example",
    requestedFormat: "application/geo+json",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectName: `string`<a id="projectname-string"></a>

The name of the project the data is for

##### projectManagerName: `string`<a id="projectmanagername-string"></a>

The name of the project manager who can approve the request

##### projectManagerEmail: `string`<a id="projectmanageremail-string"></a>

The email address of the project manager who can approve the request

##### datasetId: `string`<a id="datasetid-string"></a>

The ID of the dataset that the data request relates to

##### datasetName: `string`<a id="datasetname-string"></a>

The name of the dataset that the data request relates to

##### requestedFormat: `string`<a id="requestedformat-string"></a>

The format the user would like the data to be provided in

##### geoJsonAOI: `string`<a id="geojsonaoi-string"></a>

The area of interest that the user is requesting access to as a stringified GeoJSON

##### shapefileAOI: `Uint8Array | File | buffer.File`<a id="shapefileaoi-uint8array--file--bufferfile"></a>

The area of interest that the user is requesting access to as a zipped shapefile

#### 🔄 Return<a id="🔄-return"></a>

[DataRequestCreateSingleAccessRequestResponse](./models/data-request-create-single-access-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.getGeoJsonGeometry`<a id="agrimetricsdatarequestgetgeojsongeometry"></a>

Returns the geometry of the data request as GeoJSON

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getGeoJsonGeometryResponse =
  await agrimetrics.dataRequest.getGeoJsonGeometry({
    uniqueLinkId: "uniqueLinkId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uniqueLinkId: `string`<a id="uniquelinkid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[GeoJSONPolygon](./models/geo-jsonpolygon.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{uniqueLinkId}/geometry` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.getRequestedData`<a id="agrimetricsdatarequestgetrequesteddata"></a>

Returns the users requested data

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRequestedDataResponse = await agrimetrics.dataRequest.getRequestedData(
  {
    requestId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[DataRequestDetailsInner](./models/data-request-details-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{requestId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.getResults`<a id="agrimetricsdatarequestgetresults"></a>

Once a data access request has been approved, this endpoint returns the data requested.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResultsResponse = await agrimetrics.dataRequest.getResults({
  requestId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{requestId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.grantUserAccess`<a id="agrimetricsdatarequestgrantuseraccess"></a>

Grants access to a user on a given data request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const grantUserAccessResponse = await agrimetrics.dataRequest.grantUserAccess({
  uniqueLinkId: "uniqueLinkId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uniqueLinkId: `string`<a id="uniquelinkid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{uniqueLinkId}/approve` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.listUserAccessRequests`<a id="agrimetricsdatarequestlistuseraccessrequests"></a>

Query the given users data access requests


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserAccessRequestsResponse =
  await agrimetrics.dataRequest.listUserAccessRequests();
```

#### 🔄 Return<a id="🔄-return"></a>

[DataRequestResponseInner](./models/data-request-response-inner.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.rejectUserAccess`<a id="agrimetricsdatarequestrejectuseraccess"></a>

Rejects access to a user on a given data request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const rejectUserAccessResponse = await agrimetrics.dataRequest.rejectUserAccess(
  {
    uniqueLinkId: "uniqueLinkId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### uniqueLinkId: `string`<a id="uniquelinkid-string"></a>

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{uniqueLinkId}/reject` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `agrimetrics.dataRequest.updateRequest`<a id="agrimetricsdatarequestupdaterequest"></a>

Allows updating of the given data request |
- For example: cancelling the request


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRequestResponse = await agrimetrics.dataRequest.updateRequest({
  requestId: "97130f06-6242-463f-bf19-0dd6f5a58cfb",
  status: "cancelled",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### requestId: `string`<a id="requestid-string"></a>

##### status: `string`<a id="status-string"></a>

The status of the data request

#### 🔄 Return<a id="🔄-return"></a>

[DataRequestUpdateRequestResponse](./models/data-request-update-request-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/data-requests/{requestId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
