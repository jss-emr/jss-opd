Ext.define('Jss.Outpatient.view.util.uiElements.Factory', {


    requires: [
        'Jss.Outpatient.view.util.uiElements.Text',
        'Jss.Outpatient.view.util.uiElements.TextArea',
        'Jss.Outpatient.view.util.uiElements.Number',
        'Jss.Outpatient.view.util.uiElements.Coded',
        'Jss.Outpatient.view.util.uiElements.Duration',
    ],

    map: {
    	"text": "Jss.Outpatient.view.util.uiElements.Text",
    	"textarea": "Jss.Outpatient.view.util.uiElements.TextArea",
    	"number": "Jss.Outpatient.view.util.uiElements.Number",
    	"coded": "Jss.Outpatient.view.util.uiElements.Coded",
    	"duration": "Jss.Outpatient.view.util.uiElements.Duration",
    },

	constructor: function() {
		this.cache = {}
	},

	get: function(concept) {
		if(this.cache[concept.name] != null)
			return this.cache[concept.name];

		var object = this.getObject(concept);
		this.cache[concept.name] = object.showFor(concept);
		return this.cache[concept.name];
	},

	getObject: function(concept) {
		if(this.map[concept.properties.type]) {
			return Ext.create(this.map[concept.properties.type]);
		}

		return this.default(concept);
	},

	default: function(concept) {
		return {
			showFor: function(concept) {
				return new Ext.Label({html: concept.name});
			},
			getValueAsString: function() {
				return null;
			}
		}
	},
});
