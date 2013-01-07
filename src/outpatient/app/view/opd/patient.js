Ext.define('Jss.Outpatient.view.opd.patient', {
    extend: 'Ext.Container',
    xtype: 'patient-panel',
    alias:'widget.patient',
    id: 'patient-panel',
    config: {
        layout: {
            type: 'vbox'
        },
        activeItem: 1,
        items: [{
            xtype: 'formpanel',
            flex: 1,
            id: 'examinationPanel',
            scrollable: 'false',
            items: [{
                xtype: 'textfield',
                name : 'first',
                label: 'First name'
                },
                {
                  xtype: 'textfield',
                  name : 'last',
                  label: 'Last name'
                },
                {
                 xtype: 'textfield',
                 name : 'age',
                 label: 'Age'
                },
                {
                 xtype: 'textfield',
                 name : 'gender',
                 label: 'Gender'
                } ]
      }]
    }
})

