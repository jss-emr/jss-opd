 //the chief complain view
 
Ext.define('Jss.Outpatient.view.opd.examinationlist', {
    extend: 'Ext.dataview.List',
    xtype: 'Examination-List',
    config: {
        cls: 'x-exam',
        id: 'examList',
        store: 'chiefcomplaints',
        itemTpl: ['<div id="{id}">', '<strong>{complaint}{duration}</strong>', '</div>'],
        items: [{
            xtype: 'toolbar',
            docked: 'top',
            items: [{
                xtype: 'spacer'
            }, {
                xtype: 'button',
                ui: 'plain',
                iconCls: 'locate',
                iconMask: true,
                hidden: false,
                id: 'addDuration'
            }, {
                xtype: 'button',
                ui: 'plain',
                iconCls: 'trash',
                iconMask: true,
                hidden: false,
                id: 'deleteComplaint'
            }]
        }]
    },
});