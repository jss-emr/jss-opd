Ext.define('Jss.Outpatient.view.patient', {
    extend: 'Ext.Container',
    xtype: 'patient-panel',
    alias:'widget.patient',
    id: 'patient-panel',
    config: {
        layout: 'hbox',
        items: [{
            xtype: 'list',
            flex: 1,
            id: 'patientPanel',
            scrollable: 'false',
            itemTpl: '<table><tr><td>{firstName}, {lastName}</br>age :{age}</br>gender:M </br></td></tr></table>' ,
            store: 'patient',

        },{
            xtype: 'image',
            layout: 'fit',
            src: '../outpatient/resources/images/headshots/ram.png',
            flex: 1,
        }]
    }
})

