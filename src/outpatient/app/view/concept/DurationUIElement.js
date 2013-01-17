Ext.define('Jss.Outpatient.view.concept.DurationUIElement', {
    extend:'Ext.Container',

    config:{
        height:300,
        layout:'hbox',
        width:'100%',
        scrollable:false,
    },

    for:function (concept) {
        this.concept = concept;
        this.durationListBox = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width:'80%',
        }).addData([1, 2, 3, 4, 5]);
        this.unitListBox = Ext.create('Jss.Outpatient.view.util.ArraySelectionBox', {
            width:'80%',
        }).addData(["days", "months", "years"]);

        this.add([
            {
                xtype:'panel',
                width:'10%',
                height:300,
                items:[this.durationListBox]
            },
            {
                xtype:'panel',
                width:'30%',
                height:300,
                items:[this.unitListBox]
            },
        ])

        return this;
    },

    getValue:function () {
        return Ext.create('Jss.Outpatient.model.history.Observation', {
            concept:this.concept,
            properties:{
                duration:this.durationListBox.getSelectedValue(),
                unit:this.unitListBox.getSelectedValue(),
            },
            summary:this.getSummary(),
        });
    },

    getSummary:function () {
        return this.concept.name + ":" + this.durationListBox.getSelectedValue() + " " + this.unitListBox.getSelectedValue();
    }
});