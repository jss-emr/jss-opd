Ext.define('Jss.Outpatient.view.examination.ExaminationEdit', {
    extend: 'Ext.Container',
    alias: 'widget.examinationEdit',
    config: {
        layout: 'vbox',
        title: 'Examination',
        items: [
            {
                xtype: 'list',
                flex: 1,
                scrollable: 'vertical',
                inline: true,
                itemTpl: Ext.create('Jss.Outpatient.view.examination.SummaryTemplate'),
                store: 'Examinations',
                listeners: {
                    itemswipe: function(list, index, target, record) {
                        list.getStore().remove(record);
                    }
                }
            },
            {
                xtype: 'formpanel',
                flex: 3,
                scrollable: 'false',
                items: [{
                    xtype: 'fieldset',
                    title: 'Examination',
                    items: [{
                        xtype: 'selectfield',
                        id: 'patientComplaints',
                        label: 'Patient Complaints',
                        valueField: 'id',
                        displayField: 'complaint',
                        store: 'AllComplaints'
                    }]
                }]
            }
        ]
    }
})