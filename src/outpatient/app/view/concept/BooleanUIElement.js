Ext.define('Jss.Outpatient.view.concept.BooleanUIElement', {
    extend:'Ext.Container',

    config:{
        height:'100%',
        layout:'hbox',
        width:'100%'
    },

    for:function (concept) {
        this.concept = concept;
        this.conceptListBox  = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width:'100%'
        }).addData(["YES", "NO"]);

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
            name: this.concept.get('name'),
            concept:this.concept,
            value: this.conceptListBox.getSelectedValue()
        });
        obs.set('summary', obs.get('concept').get('name') + '-' + obs.get('value'));
        return obs;
    },

    isValid:function () {
        return true;
    },

    setValueFrom: function(observation) {
        var value = observation.get('value');
        this.conceptListBox.selectRecord(value, 'value');
    },
});