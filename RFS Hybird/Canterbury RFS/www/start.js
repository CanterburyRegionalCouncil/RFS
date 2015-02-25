/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');

        require(["application/templateOptions", "application/template", "application/main"], function (templateOptions, Template, Main) {
            // start template
            var myTemplate = new Template(templateOptions);
            // create my main application. Start placing your logic in the main.js file.
            var myApp = new Main();
            // create my main application. Start placing your logic in the main.js file.
            myTemplate.startup().then(function (config) {
                //The config object contains the following properties: helper services, (optionally)
                //i18n, appid, webmap and any custom values defined by the application.
                //In this example we have one called theme.
                if (config.edit && config.appid) {
                    // get the app builder code
                    require(["application/builder/builder"], function (builderMode) {
                        // create configuration app builder
                        var builder = new builderMode(config, myTemplate.appResponse);
                        // start it
                        builder.startup().otherwise(function (error) {
                            // something went wrong. Let's report it.
                            myApp.reportError(error);
                        });
                    });
                } else {
                    // lets go!
                    myApp.startup(config, myTemplate.appResponse);
                }
            }, function (error) {
                // something went wrong. Let's report it.
                myApp.reportError(error);
            });
        });

        
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        
        console.log('Received Event: ' + id);
    }
};

app.initialize();