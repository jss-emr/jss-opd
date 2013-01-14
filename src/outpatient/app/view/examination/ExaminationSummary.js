Ext.define('Jss.Outpatient.view.examination.ExaminationSummary', {
    extend: 'Jss.Outpatient.view.util.TouchableContainer',
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
        }]
    },

    addComplaint: function(complaint) {
        var list = Ext.getCmp('complaintsList')
        list.getStore().add(complaint);
    }

})