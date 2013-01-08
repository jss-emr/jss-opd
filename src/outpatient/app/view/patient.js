Ext.define('Jss.Outpatient.view.patient', {
    extend: 'Ext.Container',
    xtype: 'patient-panel',
    alias:'widget.patient',
    id: 'patient-panel',
    config: {
        layout: {
            type: 'card'
        },
        activeItem: 0,
        items: [{
            xtype: 'list',
            //flex: 1,
//            html : 'Hello',
            id: 'patientPanel',
            scrollable: 'false',
            itemTpl: '{firstName}, {lastName}</br>age :{age}</br>gender:M',
            store: 'patient'

      }]
    }
})

