define([
    './LeafletMapView'
], function (
    LeafletMapView 
) {
    return function LeafletMapPlugin() {
	'use strict';
	return function install(openmct) {

	    openmct.types.addType('leafletmap', {
		name: 'Leaflet Map',
		creatable: true,
		description: 'Geopositioning for an object with latitude, longitude',
		cssClass: "icon-box-round-corners",
		initialize(domainObject) {
		    domainObject.composition = [];
		    domainObject.configuration = {
			mapController: {
			    lon: 49.1193089,
			    lat: 6.1757156
			}
		    };
		},
		form: [
		    {
			name: "Latitude Center of Map",
			control: "textfield",
			cssClass: "l-input-lg",
			key: "init.lat",
			property: [
			    "configuration", 
			    "gaugeController",
			    "lat"
			]
		    },
		    {
			name: "Longitude Center of Map",
			control: "textfield",
			cssClass: "l-input-lg",
			key: "init.lon",
			property: [
			    "configuration", 
			    "gaugeController",
			    "lon"
			]
		    }
		]
	    });

	    (openmct.mainViews || openmct.objectViews).addProvider({
		name: "Leaflet Map",
		key: "leafletmap",
		cssClass: "icon-object",
		canView: function (domainObject) {
		    return domainObject.type === 'view.leafletmap';
		},
		view: function (domainObject) {
		    return new LeafletMapView(domainObject, openmct, document);
		}
	    });
	};
    };
});
