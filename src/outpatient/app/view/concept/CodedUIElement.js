Ext.define('Jss.Outpatient.view.concept.CodedUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
        width:'100%',
//        scrollable:false
    },

    for:function (concept) {
        this.concept = concept;
        this.isMultiSelect = false;

        var arraySelectionBoxClass = "Jss.Outpatient.view.util.ArraySelectionBox"
        if(concept.get('properties').datatype.properties.multi === true){
            arraySelectionBoxClass = "Jss.Outpatient.view.util.ArrayMultiSelectionBox"
            this.isMultiSelect = true;
        }

        this.conceptListBox  = Ext.create(arraySelectionBoxClass, {
            width:'100%',
            itemTpl: '{name}'
        }).addData(concept.get('properties').datatype.properties.answers);

        this.add([
            {
                xtype:'label',
                html: this.concept.get('name'),
                width: '20%',
            },
            {
                xtype:'panel',
                width:'20%',
                height:300,
                items:[this.conceptListBox]
            }
        ]);

        return this;
    },

    getValue:function () {
        var obs = Ext.create('Jss.Outpatient.model.concept.Observation', {
            concept:this.concept,
            value: this.conceptListBox.getSelectedValue()
        });
        if(this.isMultiSelect == true) {
            var value = obs.get('value').map(function(elem) {return elem.name}).join(", ");
        } else {
            var value = obs.get('value').name;
        }
        obs.set('summary', obs.get('concept').get('name') + '-' + value);
        return obs;
    },

    isValid:function () {
        return true;
    }
});