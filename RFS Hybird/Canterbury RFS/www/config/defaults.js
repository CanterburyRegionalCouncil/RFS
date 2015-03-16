define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters.
    "appid": "",
    "webmap": "ce0486e138e7440aba0a560596532fa1",
    "itemInfo" : {"item":{'title':'Aerial','snippet':'CanterburyAerialBaseMap','extent':[[169.3616,-44.415],[174.9208,-42.2146]]},"itemData":{"operationalLayers":[{"id":"Region_Base_6490","layerType":"ArcGISTiledMapServiceLayer","url":"http://gis.ecan.govt.nz/arcgis/rest/services/Public/Region_Base/MapServer","visibility":true,"opacity":1,"title":"Region_Base","itemId":"64668c02b38c4c51b0d4f41cd24a1199","minScale":21992,"maxScale":0},{"id":"Region_Base_Labels_218","layerType":"ArcGISTiledMapServiceLayer","url":"http://gis.ecan.govt.nz/arcgis/rest/services/Public/Region_Base_Labels/MapServer","visibility":true,"opacity":1,"title":"Region_Base_Labels","itemId":"fb000cf397644392b8c794e1719acc5f","showLegend":false},{"id":"Canterbury_RFS_6717","layerType":"ArcGISFeatureLayer","url":"http://services1.arcgis.com/RNxkQaMWQcgbiF98/arcgis/rest/services/Canterbury_RFS/FeatureServer/0","visibility":true,"opacity":1,"title":"Canterbury_RFS","itemId":"00bb262a026f4d80949c99f0bff7c7c3","popupInfo":{"title":"{IncidentType}","fieldInfos":[{"fieldName":"OBJECTID","label":"OBJECTID","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":false},{"fieldName":"GlobalID","label":"GlobalID","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":false},{"fieldName":"IncidentType","label":"IncidentType","isEditable":true,"tooltip":"","visible":true,"format":{"places":0,"digitSeparator":true},"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Description","label":"Description","isEditable":true,"tooltip":"","visible":true,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Email","label":"Email","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"First_Name","label":"First Name","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Last_Name","label":"Last Name","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Address1","label":"Address1","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Address2","label":"Address2","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Address3","label":"Address3","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Suburb","label":"Suburb","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"City","label":"City","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Postcode","label":"Postcode","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"IncidentStartDate","label":"IncidentStartDate","isEditable":false,"tooltip":"","visible":true,"format":{"dateFormat":"longMonthDayYear"},"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"IncidentEndDate","label":"IncidentEndDate","isEditable":false,"tooltip":"","visible":true,"format":{"dateFormat":"longMonthDayYear"},"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Processed","label":"Processed","isEditable":false,"tooltip":"","visible":false,"format":{"places":0,"digitSeparator":true},"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"CouncilAssigned","label":"CouncilAssigned","isEditable":false,"tooltip":"","visible":false,"stringFieldOption":"textbox","isEditableOnLayer":true},{"fieldName":"Notification","label":"Notification","isEditable":false,"tooltip":"","visible":false,"format":{"places":0,"digitSeparator":true},"stringFieldOption":"textbox","isEditableOnLayer":true}],"description":null,"showAttachments":true,"mediaInfos":[]}}],"baseMap":{"baseMapLayers":[{"id":"Imagery_6396","layerType":"ArcGISTiledMapServiceLayer","opacity":1,"visibility":true,"url":"http://gis.ecan.govt.nz/ArcGIS/rest/services/Imagery/MapServer"}],"title":"Imagery"},"spatialReference":{"wkid":2193,"latestWkid":2193},"version":"2.1","applicationProperties":{"viewing":{"routing":{"enabled":true},"basemapGallery":{"enabled":true},"measure":{"enabled":true},"search":{"enabled":true,"disablePlaceFinder":false,"hintText":"Place or Address","layers":[]}}}}},
            
    "form_layer": {
        "id": "Canterbury_RFS_6717"
    },
    "details": {
        "Title": "Canterbury Councils Request for Service",
        "Logo": "http://test.canterburymaps.govt.nz/media/472a958e-cd67-4c6e-bdb9-0342af202e4c/400",
        "Description": "<p>Please enter below</p><ul><li>the Incident Type</li><li>your Name</li><li>your Email <span style=\"font-style: italic;\">(so we can update you on the progress)</span></li></ul>"
    },

    "fields": [  
            {  
               "name":"IncidentType",
               "alias":"Incident Type",
               "fieldDescription":"",
               "visible":true,
               "displayType":"dropdown"
            },
            {  
               "name":"Description",
               "alias":"Description",
               "fieldDescription":"",
               "visible":true,
               "displayType":"textarea"
            },
            {  
               "name":"Email",
               "alias":"Email",
               "fieldDescription":"",
               "visible":true,
               "displayType":"email"
            },
            {  
               "name":"Notification",
               "alias":"Notified by email",
               "fieldDescription":"I would like to be notified by email",
               "visible":true,
               "displayType":"radio"
            },
            {  
               "name":"First_Name",
               "alias":"First Name",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Last_Name",
               "alias":"Last Name",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Address1",
               "alias":"Address1",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Address2",
               "alias":"Address2",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Address3",
               "alias":"Address3",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Suburb",
               "alias":"Suburb",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"City",
               "alias":"City",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Postcode",
               "alias":"Postcode",
               "fieldDescription":"",
               "visible":true,
               "displayType":"text"
            },
            {  
               "name":"Incident Start Date",
               "alias":"IncidentStartDate",
               "fieldDescription":"",
               "visible":true
            },
            {  
               "name":"Incident End Date",
               "alias":"IncidentEndDate",
               "fieldDescription":"",
               "visible":true
            },
            {  
               "name":"Processed",
               "alias":"Processed",
               "fieldDescription":"",
               "visible":false,
               "displayType":"dropdown"
            },
            {  
               "name":"CouncilAssigned",
               "alias":"CouncilAssigned",
               "fieldDescription":"",
               "visible":false,
               "displayType":"text"
            }
         ],
    "theme": "flatly", // see values in themes.js
    "oauthappid": null,
    //Enter the url to the proxy if needed by the applcation. See the "Using the proxy page" help topic for details
    // //developers.arcgis.com/en/javascript/jshelp/ags_proxy.html
    "proxyurl": "",
    //Example of a template specific property. If your template had several color schemes
    //you could define the default here and setup configuration settings to allow users to choose a different
    //color theme.
    //Enter the url to your organizations bing maps key if you want to use bing basemaps
    "bingmapskey": "",
    //Defaults to arcgis.com. Set this value to your portal or organization host name.
    "sharinghost":   "http://" + "www.arcgis.com",
    "units": null,
    "useSmallHeader": true,
    "enableSharing": true,
    "defaultMapExtent": true,
    "pushpinColor": "red",
    "nextBasemap": "topo",
    "defaultBasemap": "hybrid",
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentHelpText": "Take a photo or upload one with your request",
    "attachmentLabel": "Add Image",
    "showLayer": true,
    "disableLogo": false,
    "locate":true,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": false,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
    },
    "attachmentInfo":{
		"Canterbury_RFS_6717": {
                "enableAttachments": true,
                "attachmentIsRequired": false,
                "attachmentLabel": "Attach Photos",
                "attachmentHelpText": "Add some photos of the incident if you have them"
            }
    },
    "helperServices": {
        "geometry": {
            "url": "http://gis.ecan.govt.nz/arcgis/rest/services/Utilities/Geometry/GeometryServer"
        },
        "printTask": {
            "url": "http://gis.ecan.govt.nz/arcgis/rest/services/Printing/MapPrinting/GPServer/Export%20Web%20Map"
        },
        "elevationSync": {
            "url": null
        },
        "geocode": [{
            "url": "http://gis.ecan.govt.nz/arcgis/rest/services/Locators/Canterbury_Composite_Locator/GeocodeServer"
        }]
    },
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e"
});