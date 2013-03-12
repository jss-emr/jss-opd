Ext.define('Jss.Outpatient.view.concept.CodedUIElement', {
    extend:'Jss.Outpatient.view.concept.BaseUIElement',

    config:{
        height:'100%',
        layout:'hbox',
        width:'100%',
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

        this.conceptListBox.on('select', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);
        this.conceptListBox.on('deselect', function(){this.fireEvent('valueCaptured', this.getValueAsString()); }, this);

        this.add([
            {
                xtype:'panel',
                width:'50%',
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
        if(obs.get('value') === null || (obs.get('value') instanceof Array && obs.get('value').length == 0)) {
            obs.set('summary', null);
            return obs;
        } 
        obs.set('summary', obs.get('concept').get('name') + '-' + this.getValueAsString());
        return obs;
    },

    setValueFrom: function(observation) {
        var value = observation.get('value');
        if(value != null)
            this.conceptListBox.selectRecord(value, 'name');
    },

    getValueAsString: function(){
        var value = this.conceptListBox.getSelectedValue();
        if(value == null || (value instanceof Array && value.length == 0)) {
            return null;
        }
        if(this.isMultiSelect == true) {
            return value.map(function(elem) {return elem.name}).join(", ");
        } 
        return value.name;
    },
});