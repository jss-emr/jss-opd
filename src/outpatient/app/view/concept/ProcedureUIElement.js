Ext.define('Jss.Outpatient.view.concept.ProcedureUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',


    for:function (concept) {
        this.concept = concept;
        this.textfield = Ext.create('Ext.field.Text', {
            width:'100%',
            minHeight: 50,
            label: 'Notes',
            labelWidth: '10%',
            labelWrap: true,
            name:"value"
        });

        this.add({
            xtype:'fieldset',
            height: '100%',
            flex:2,
            scrollable:false,
            items: [this.textfield]
        });

        this.textfield.on('action', function() { this.fireEvent('detailsCaptured')}, this);

        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.textfield.getValue()
        });
        ob.setSummary();
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name + ":" + this.textfield.getValue();
    },

    setValueFrom: function(observation) {
        this.textfield.setValue(observation.get('value'));
    }
});