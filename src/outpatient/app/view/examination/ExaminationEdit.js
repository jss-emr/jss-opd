Ext.define('Jss.Outpatient.view.examination.ExaminationEdit', {
    extend: 'Ext.Container',
    alias: 'widget.examinationEdit',
    config: {
        layout: 'vbox',
        title: 'Examination',
        items: [
            {
                xtype: 'list',
                id:'examination-observationSummaryPanel',
                flex: 1,
                scrollable: 'vertical',
                inline: true,
                itemTpl: '{summary}',
                store: 'ExaminationObservations',
                listeners: {
                    itemswipe: function(list, index, target, record) {
                        list.getStore().remove(record);
                    }
                }
            },
            {
                xtype : 'addObservationPanel',
                id:'examination-addObservationsPanel',
                scrollable: false,
                autoCompleteStore: 'ExaminationConcepts',
                autoCompleteItemTpl: '{name}',
                autoCompleteFilterKey: 'name',
                flex: 3,
            }
        ]
    }
})