define({
    //Default configuration settings for the applciation. This is where you"ll define things like a bing maps key,
    //default web map, default app color theme and more. These values can be overwritten by template configuration settings
    //and url parameters. app id /// db3e50d206684da09c8ff919ccd8f48d
    "appid": "",
    "webmap": "ce0486e138e7440aba0a560596532fa1",
    "form_layer": {
        "id": "Canterbury_RFS_9812"
    },
    "details": {
        "Title": "Canterbury Councils Request for Service",
        "Logo": "http://test.canterburymaps.govt.nz/media/472a958e-cd67-4c6e-bdb9-0342af202e4c/400",
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
    "sharinghost": location.protocol + "//" + "www.arcgis.com",
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
        "geocode": [{
            "url":"http://gis.ecan.govt.nz/arcgis/rest/services/Locators/Canterbury_Composite_Locator/GeocodeServer"
        },
        {
            "url": "http://gis.ecan.govt.nz/arcgis/rest/services/Locators/Canterbury_Locator/GeocodeServer"
        }]
    },
    "bitlyLogin": "esri",
    "bitlyKey": "R_65fd9891cd882e2a96b99d4bda1be00e"
});