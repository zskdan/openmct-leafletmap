define([
    'vue',
    './LeafletMap',
    './LeafletMap.html'
], function (
    Vue,
    LeafletMap,
    LeafletTemplate
) {
    Vue = Vue.default || Vue;
    let component;
    function LeafletMapView(domainObject, openmct, document) {
	this.domainObject = domainObject;
	this.openmct = openmct;
	this.document = document;
    }

    LeafletMapView.prototype.show = function (element) {
    	var self = this;
	component = new Vue({
	    el: element,
	    template: LeafletTemplate,
	    mounted: function () {
		self.composition.on('add', this.addedToComposition);
		self.composition.on('remove', this.removeTelemetryObject);
		self.composition.load();
		self.openmct.time.on('bounds', this.refreshData);
		sel.openmct.time.on('timeSystem', this.setTimeSystem);
	    },
	    provide: {
		self.openmct,
		self.domainObject,
		composition: self.openmct.composition.get(self.domainObject)
	    }
	});

    };

    LeafletMapView.prototype.destroy = function () {
	component.$destroy();
	component = undefined;
    };
    return LeafletMapView;
});
