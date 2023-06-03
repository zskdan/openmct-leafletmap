define([
    './LeafletMapView'
], function (
    LeafletMapView 
) {
    return function LeafletMapPlugin() {
	'use strict';
	return function install(openmct) {

	    openmct.types.addType('plugin.leafletmap', {
                key: 'plugin.leafletmap',
		name: 'Leaflet Map',
		cssClass: "icon-box-round-corners",
		description: 'Geopositioning for an object with latitude, longitude',
		creatable: true,
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
			    "mapController",
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
			    "mapController",
			    "lon"
			]
		    },
                    {
                        key: "lon",
                        name: "Longitude",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "lat",
                        name: "Latitude",
                        control: "textfield",
                        required: true
                    },
                    {
                        key: "namespace",
                        name: "Namespace",
                        control: "textfield",
                        required: true
                    },
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
