Ext.define('Jss.Outpatient.view.concept.DurationUIElement', {
    extend: 'Ext.Container',

    config: {
        height: '100%',
        layout: 'hbox',
        width: '100%',
//        scrollable: false,
    },

    for: function (concept) {
        this.concept = concept;
        this.durationListBox = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width: '100%',
        }).addData([1, 2, 3, 4, 5]);
        this.unitListBox = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width: '80%', align: 'left'
        }).addData(["days", "months", "years"]);

        this.add([
            {
                xtype: 'label',
                html: concept.get('name') + ' for duration',
                width: '20%',
            },
            {
                xtype: 'panel',
                width: '10%',
                height: 300,
                items: [this.durationListBox]
            },
            {
                xtype: 'panel',
                width: '30%',
                height: 300,
                items: [this.unitListBox]
            }
        ]);

        return this;
    },

    getValue: function () {
        var obs = Ext.create('Jss.Outpatient.model.concept.Observation', {
            name: this.concept.get('name'),
            concept: this.concept,
            value: this.durationListBox.getSelectedValue() + this.unitListBox.getSelectedValue(),
            properties: {
                duration: this.durationListBox.getSelectedValue(),
                unit: this.unitListBox.getSelectedValue()
            }
        });
        obs.setSummary();
        return obs;
    },

    getSummary: function () {
        return this.concept.name + ":" + this.durationListBox.getSelectedValue() + " " + this.unitListBox.getSelectedValue();

    },

    isValid: function () {
        return true;
    }
});