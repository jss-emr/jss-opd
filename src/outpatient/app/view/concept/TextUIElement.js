Ext.define('Jss.Outpatient.view.concept.TextUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',

    config:{
        height: 150,
        layout:'hbox',
        cls: 'numericUIElement',
    },

    for:function (concept) {
        this.concept = concept;
        this.field = Ext.create('Ext.field.Text', {
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
            items: [this.field]
        });

        this.field.on('action', function() { 
            this.fireEvent('detailsCaptured');
            this.fireEvent('valueCaptured', this.field.getValue());
        }, this);

        this.field.on('clearicontap', function() {this.fireEvent('valueCaptured', this.field.getValue());}, this);
        return this;
    },

    getValue:function () {
        var ob = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.field.getValue()
        });
        ob.setSummary();
        return ob;
    },

    getSummary:function () {
        return this.concept.data.name + ":" + this.field.getValue();
    },

    setValueFrom:function(observation){
        this.field.setValue(observation.data.value);
    },
});