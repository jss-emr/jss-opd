Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Ext.Container',
    alias: 'widget.examinationSummary',
    config: {
        layout: 'fit',
        items: [{
            title: 'Examination',
            xtype: 'list',
            id: 'complaintsList',
            html:'<b>Examination</b>',
            itemTpl: Ext.create('Jss.Outpatient.view.examination.SummaryTemplate'),
            store: 'Examinations',
            inline: true,

            listeners: {
                touchstart: {
                    element: 'innerElement',
                    fn: function(event, div, listener) {
                        var l = Ext.getCmp('mainview');
                        l.push(Ext.getCmp('examination-editpanel'));
                    }
                }
            },

        }]
    },

    addComplaint: function(complaint) {
        var list = Ext.getCmp('complaintsList')
        list.getStore().add(complaint);
    }

})