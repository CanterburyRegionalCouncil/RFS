define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters. app id /// db3e50d206684da09c8ff919ccd8f48d
    //"appid": "",
    //"webmap": "ce0486e138e7440aba0a560596532fa1",
    "itemInfo" : {"item" : {'title':'Aerial','snippet':'Canterbury Aerial BaseMap','extent':[[169.3616,-44.415],[174.9208,-42.2146]]}, "itemData" : {"operationalLayers":[{"id":"Canterbury_RFS_9812","layerType":"ArcGISFeatureLayer","url":"http://services1.arcgis.com/RNxkQaMWQcgbiF98/arcgis/rest/services/Canterbury_RFS/FeatureServer/0","visibility":true,"opacity":1,"title":"Canterbury_RFS","itemId":"97d8552cec44450cb3f64353636b2245","layerDefinition":{"drawingInfo":{"renderer":{"type":"simple","symbol":{"angle":0,"xoffset":12,"yoffset":12,"type":"esriPMS","url":"http://static.arcgis.com/images/Symbols/Basic/WhiteFlag.png","imageData":"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","contentType":"image/png","width":24,"height":24}},"labelingInfo":[{"labelExpression":"[IncidentType]","labelExpressionInfo":{"value":"{IncidentType}"},"useCodedValues":false,"maxScale":0,"minScale":0,"where":null,"sizeInfo":null,"labelPlacement":"esriServerPointLabelPlacementBelowCenter","symbol":{"color":[255,255,255,255],"type":"esriTS","backgroundColor":null,"borderLineColor":null,"horizontalAlignment":"center","rightToLeft":false,"angle":0,"xoffset":0,"yoffset":0,"text":"","rotated":false,"kerning":true,"font":{"size":9.75,"style":"normal","decoration":"none","weight":"bold","family":"Arial"}}}]}},"showLabels":true,"popupInfo":{"title":"Canterbury_RFS: {FullName}","fieldInfos":[{"fieldName":"OBJECTID","label":"OBJECTID","isEditable":false,"tooltip":"","visible":false,"format":null,"stringFieldOption":"textbox"},{"fieldName":"GlobalID","label":"GlobalID","isEditable":false,"tooltip":"","visible":false,"format":null,"stringFieldOption":"textbox"},{"fieldName":"IncidentType","label":"IncidentType","isEditable":true,"tooltip":"","visible":true,"format":{"places":0,"digitSeparator":true},"stringFieldOption":"textbox"},{"fieldName":"Description","label":"Description","isEditable":true,"tooltip":"","visible":true,"format":null,"stringFieldOption":"textbox"},{"fieldName":"FullName","label":"FullName","isEditable":true,"tooltip":"","visible":true,"format":null,"stringFieldOption":"textbox"},{"fieldName":"Email","label":"Email","isEditable":true,"tooltip":"","visible":true,"format":null,"stringFieldOption":"textbox"}],"description":null,"showAttachments":true,"mediaInfos":[]}}],"baseMap":{"baseMapLayers":[{"id":"Imagery_6396","layerType":"ArcGISTiledMapServiceLayer","opacity":1,"visibility":true,"url":"http://gis.ecan.govt.nz/ArcGIS/rest/services/Imagery/MapServer"}],"title":"Imagery"},"spatialReference":{"wkid":2193,"latestWkid":2193},"version":"2.0","applicationProperties":{"viewing":{"routing":{"enabled":true},"basemapGallery":{"enabled":true},"measure":{"enabled":true}}}} },

    "form_layer": {
        "id": "Canterbury_RFS_9812"
    },
    "details": {
        "Title": "Canterbury Councils Request for Service",
        "Logo": "images/logo.png",
        "Description": "<p>Please enter below</p><ul><li>the Incident Type</li><li>your Name</li><li>your Email <span style=\"font-style: italic;\">(so we can update you on the progress)</span></li></ul>"
    },
    "fields": [
            {
                "name": "IncidentType",
                "alias": "Incident Type",
                "fieldDescription": "Select from one of the incident types from this list",
                "visible": true
            },
            {
                "name": "Description",
                "alias": "Description",
                "fieldDescription": "Describe your issue",
                "visible": true,
                "displayType": "textarea"
            },
            {
                "name": "FullName",
                "alias": "Full Name",
                "fieldDescription": "Please enter your name (otherwise your request will be anonymous)",
                "visible": true,
                "displayType": "text"
            },
            {
                "name": "Email",
                "alias": "Email",
                "fieldDescription": "",
                "visible": true,
                "displayType": "email"
            }
    ],
    "pushpinColor": "red",
    "useSmallHeader": true,
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
    "sharinghost":  "http://" + "www.arcgis.com",
    "units": null,
    "enableSharing": true,
    "defaultMapExtent": true,
    "enableAttachments": true,
    "attachmentIsRequired": false,
    "attachmentHelpText": "Take a photo or upload one with your request",
    "attachmentLabel": "Add Image",
    "showLayer":true,
    "locationSearchOptions": {
        "enableMyLocation": true,
        "enableSearch": true,
        "enableLatLng": false,
        "enableUSNG": false,
        "enableMGRS": false,
        "enableUTM": false
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
        "geocode": 
        [{
          "url": "http://gis.ecan.govt.nz/arcgis/rest/services/Locators/Canterbury_Composite_Locator/GeocodeServer",
          singleLineFieldName: "Single Line Input",
          name: "My Locator",
          placeholder: "Search",
          placefinding: true,
          autoComplete: true
        }]
    },
    "bitlyLogin": "o_50vbh3eafi",
    "bitlyKey": "R_5e4af385d6f14944a7e084e518c0beef"
});