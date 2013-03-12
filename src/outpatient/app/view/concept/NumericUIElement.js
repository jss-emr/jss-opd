Ext.define('Jss.Outpatient.view.concept.NumericUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',

    config:{
        height: 150,
        layout:'hbox',
        cls: 'numericUIElement',
    },

    for:function (concept) {
        this.concept = concept;
        this.numberfield = Ext.create('Ext.field.Number', {
            width:'80%',
            minHeight: 40,
            label: this.concept.conceptName(),
            labelWrap: true,
            labelWidth: '40%',
            autoComplete: false,
            name:"value",
            placeHolder: "Please enter the value",
            style: 'margin: 0px auto',
        });

        this.add({
            xtype:'fieldset',
            height: '100%',
            flex:2,
            items: [this.numberfield]
        });

        this.numberfield.on('action', function() { 
            this.fireEvent('detailsCaptured');
            this.fireEvent('valueCaptured', this.numberfield.getValue());
        }, this);

        this.numberfield.on('clearicontap', function() {this.fireEvent('valueCaptured', this.numberfield.getValue());}, this);
        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.numberfield.getValue()
        });
        ob.setSummary();
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name + ":" + this.numberfield.getValue();
    },

    setValueFrom:function(observation){
        this.numberfield.setValue(observation.data.value);
    },
});