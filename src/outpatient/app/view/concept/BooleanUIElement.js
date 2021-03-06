Ext.define('Jss.Outpatient.view.concept.BooleanUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',

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

        this.conceptListBox.on('select', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
        this.conceptListBox.on('deselect', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);

        this.add([
            {
                xtype:'panel',
                width:'20%',
                height:300,
                style: 'margin: 0px auto',
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
        if(obs.get('value') === null){
            obs.set('summary', null);
            return obs;
        }

        obs.set('summary', obs.get('concept').get('name') + '-' + obs.get('value'));
        return obs;
    },

    setValueFrom: function(observation) {
        var value = observation.get('value');
        this.conceptListBox.selectRecord(value, 'value');
    },

    getValueAsString: function() {
        return this.conceptListBox.getSelectedValue();
    },
});