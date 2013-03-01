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
        this.specsList.selectRecord(treatmentAdviceProperties.spec, 'value');
        this.modeList.selectRecord(treatmentAdviceProperties.mode, 'value');
        this.dosageList.selectRecord(treatmentAdviceProperties.dosage, 'value');
        if(treatmentAdviceProperties.instruction)
            this.instructionsList.selectRecord(treatmentAdviceProperties.instruction, 'value');
        if(treatmentAdviceProperties.timings)
            this.timingsList.selectRecord(treatmentAdviceProperties.timings, 'value');
        if(treatmentAdviceProperties.duration)
            this.selectDurationForEdit(treatmentAdviceProperties.duration);
    },

    getSummary:function () {
        var props = this.treatmentAdviceProperties;
        var propValues = Object.getOwnPropertyNames(props).map(function(key) { return props[key]});
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
            {"name": "Notes", "properties": {"type": "textarea"}},
        ]

        if(this.medicineDetails.get('instructions')) {
            return instructions.concat(this.medicineDetails.get('instructions'))
        }

        return instructions;
    },

    factory : {
        text: function() {
            return Ext.create('Ext.field.Text');
        },
        coded: function(values) {
            return new Jss.Outpatient.view.util.ArraySelectionBox().addData(values);
        }
    },

});


