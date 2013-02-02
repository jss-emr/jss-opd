Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
    alias: 'widget.examinationSummary',

    config: {
        layout: 'fit',
        items: [
            {
                xtype: 'titlebar',
                title: 'Examinations',
                docked: 'top',
                cls: 'summaryTitle'
            },
            {
                title: 'Examination',
                xtype: 'list',
                id: 'complaintsList',
                itemTpl: '{summary}',
                store: 'ExaminationObservations',
                inline: true,
            }
        ]
    },

    initialize: function() {
        this.callParent();
        this.summaryPanelList = Ext.getCmp("complaintsList");
        this.queueStore = Ext.getStore('ExaminationQueue');

        this.queueStore.on('addrecords', this.dataQueued, this);
        this.queueStore.on('removerecords', this.dataQueued, this);
    },

    dataQueued: function() {
        if(this.queueStore.getCount() >= 1)
            this.summaryPanelList.setBaseCls("warning");
        else
            this.summaryPanelList.setBaseCls("");
    }

});