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
            itemTpl: '<table><tr><td>{firstName}, {lastName}</br>age :{age}</br>gender:M </br></td> <td><img src=\'../outpatient/resources/images/headshots/ram.png\'/></td></tr></table>' ,
            store: 'patient'

      }]
    }
})

