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
	var onSuccess2 = function(position) {
        $(".received").html('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n');
//              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
//              'Heading: '           + position.coords.heading           + '\n' +
//              'Speed: '             + position.coords.speed             + '\n' +
//              'Timestamp: '         + position.timestamp                + '\n');
   	};

        function onSuccess(acceleration) {
            $(".received").html('Acceleration X: ' + acceleration.x.toFixed(5) + '\n' +
            'Acceleration Y: ' + acceleration.y.toFixed(5) + '\n' +
            'Acceleration Z: ' + acceleration.z.toFixed(5) + '\n' +
            'Timestamp: '      + acceleration.timestamp.toFixed(5) + '\n');
	    
        }

	function onError() {
    		$(".received").html('onError!');
	}

	function getLocation() {
		navigator.geolocation.getCurrentPosition(onSuccess2);
	}

	function getAcceleration() {
		navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
	}

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        window.setInterval(getAcceleration, 500);
	console.log('Received Event: ' + id);
    }
};

app.initialize();
