define([
    './LeafletMap.vue',
//    './LeafletMap.html',
    'vue'
], function (
    LeafletMap,
    Vue
) {
    Vue = Vue.default || Vue;
    let component;
    function LeafletMapView(domainObject, openmct, document) {
	this.domainObject = domainObject;
	this.openmct = openmct;
        this.objectAPI = openmct.objects;
	this.document = document;
    }

    LeafletMapView.prototype.show = function (element) {
	component = new Vue({
	    el: element,
	    components: {
		LeafletMap
	    },
	    provide: {
		openmct,
		domainObject,
		composition: openmct.composition.get(domainObject)
	    }
	});

    };

    LeafletMapView.prototype.destroy = function () {
	component.$destroy();
	component = undefined;
    };
    return LeafletMapView;
});
