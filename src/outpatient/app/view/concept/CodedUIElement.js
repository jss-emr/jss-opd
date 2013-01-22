Ext.define('Jss.Outpatient.view.concept.CodedUIElement', {
    extend:'Ext.Container',

    config:{
        height:300,
        layout:'hbox',
        width:'100%',
        scrollable:false
    },

    for:function (concept) {
        this.concept = concept;
        this.conceptListBox  = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width:'80%',
            itemTpl: '{name}'
        }).addData(concept.get('properties').datatype.properties.answers);                      ;

        this.add([
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
        obs.set('summary', obs.get('concept').get('name') + '-' + obs.get('value').get('name'));
        return obs;
    },

    isValid:function () {
        return true;
    }
});