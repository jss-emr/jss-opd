Ext.define('Jss.Outpatient.view.opd.patient', {
    extend: 'Ext.Container',
    alias: 'widget.patient',
    id: 'patient-panel',
    config: {
        title: 'patient',
        style: 'background-color: #7FADCF',
        items: [{
            xtype: 'textfield',
            name : 'first',
            label: 'First name'
        },{
            xtype: 'textfield',
            name : 'last',
            label: 'Last name'
        },{
            xtype: 'textfield',
            name : 'age',
            label: 'Age'
        },{
            xtype: 'textfield',
            name : 'gender',
            label: 'Gender'
        } ]
    }
})

