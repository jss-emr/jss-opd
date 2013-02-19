Ext.define('Jss.Outpatient.view.concept.NumericUIElement', {
    extend:'Ext.form.Panel',

    config:{
        height: 150,
        layout:'hbox'
    },

    for:function (concept) {
        this.concept = concept;
        this.numberfield = Ext.create('Ext.field.Number', {
            width:'100%',
            minHeight: 50,
            label: this.concept.conceptName(),
            labelWidth: '60%',
            labelWrap: true,
            name:"value"
        });

        this.add({
            xtype:'fieldset',
            height: '100%',
            flex:2,
            items: [this.numberfield]
        });

        this.add({
            xtype:'label',
            flex:1,
            id:'errorMessage',
            height:50

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

    isValid:function () {
        var value = this.numberfield.getValue();
        if (value == null || value == undefined) return false;

        var properties = this.concept.get('properties').datatype.properties;

        if (properties == null || properties == undefined) return true;

        var result = true;
        if (properties.hiAbsolute) result = (result && properties.hiAbsolute >= value);
        if (properties.lowAbsolute) result = (result && properties.lowAbsolute <= value);

        Ext.getCmp("errorMessage").setHtml('Value not in allowed range (' + properties.lowAbsolute + " - " + properties.hiAbsolute + ")");

        return result;
    },

    highlightErrors:function () {
        Ext.getCmp('errorMessage').addCls('textBoxError');
    },

    setValueFrom:function(observation){
        this.numberfield.setValue(observation.data.value);
    },

    isDefault:function(){
        return false;
    }
});