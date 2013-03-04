Ext.define('Jss.Outpatient.view.treatment.uielements.InjectionUIElement', {
    extend:'Jss.Outpatient.view.treatment.uielements.BaseUIElement',

    config:{
        height:'100%',
        layout:'hbox',
    },

    for:function (medicineDetails) {
        this.medicineDetails = medicineDetails;
        this.showSelectionPage()
        return this;
    },

    showForEdit: function(treatmentAdviceProperties) {
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties;
        var propValues = Object.getOwnPropertyNames(props).map(function(key) { 
            return props[key] !=null || props[key] !=undefined ? key + " : " + props[key] : null;
        });
        propValues = propValues.filter(function(elem) {return elem != null});
        return {full: [this.medicineDetails.get('name')].concat(propValues),
                short: [this.medicineDetails.get('name'), props.Strength, props.Mode] };
    },

    getTreatmentAdviceProperties:function () {
        this.treatmentAdviceProperties = this.complexDataCaptureContainer.getDetails();
        return this.treatmentAdviceProperties;
    },

    showSelectionPage: function() {
        this.complexDataCaptureContainer = Ext.create('Jss.Outpatient.view.util.ComplexDataCaptureContainer', {
            concepts: this._instructions()
        });

        this.add(this.complexDataCaptureContainer);
    },

    _instructions: function() {
        var instructions = [
            {"name": "Strength", "properties": {"type": "coded", "values": this.medicineDetails.get('specs')}},
            {"name": "Mode", "properties": {"type": "coded", "values": ["IM", "IV push", "IV drip", "PR", "Intravaginal"]}},
            {"name": "Course", "properties": {"type": "duration"}},
            {"name": "Repeat", "properties": {"type": "duration"}},
        ]

        if(this.medicineDetails.get('instructions')) {
            var instructions =  instructions.concat(this.medicineDetails.get('instructions'));
        }

        return instructions.concat([{"name": "Notes", "properties": {"type": "textarea"}}]);
    },
});


