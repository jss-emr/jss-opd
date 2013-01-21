Ext.define('Jss.Outpatient.view.concept.NumericUIElement', {
    extend:'Ext.form.Panel',

    config:{
        height:100,
        flex:1,
        scrollable:'false',
        layout:'hbox',
    },

    for:function (concept) {
        this.concept = concept;
        var conceptLabel = concept.name;
        if (concept.properties.datatype.properties) {
            var properties = concept.properties.datatype.properties;
            conceptLabel = conceptLabel + ' (' + properties.unit + ')';
        }
        this.numberfield = Ext.create('Ext.field.Number', {
            height:50,
            width:'100%',
            label: conceptLabel,
            labelWidth: '60%',
            name:"value"
        });
        
        this.add({
            xtype:'fieldset',
            flex:1,
            items: [this.numberfield]
        })

        this.add({
            xtype:'label',
            flex:1,
            id:'errorMessage',
            height:50,
        })
        return this;
    },

    getValue:function () {
        return Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            properties:this.numberfield.getValue(),
            summary:this.getSummary(),
        });
    },

    getSummary:function () {
        return this.concept.name + ":" + this.numberfield.getValue();
    },

    isValid:function () {
        var value = this.numberfield.getValue();
        if (value == null || value == undefined) return false;

        var properties = this.concept.properties.datatype.properties;

        if (properties == null || properties == undefined) return true;

        var result = true;
        if (properties.hiAbsolute) result = (result && properties.hiAbsolute >= value);
        if (properties.lowAbsolute) result = (result && properties.lowAbsolute <= value);

        Ext.getCmp("errorMessage").setHtml('Value not in allowed range (' + properties.lowAbsolute + " - " + properties.hiAbsolute + ")");

        return result;
    },

    highlightErrors:function () {
        this.numberfield.setStyle('background:red');
    }
});