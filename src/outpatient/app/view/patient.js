Ext.define('Jss.Outpatient.view.patient', {
    extend: 'Ext.Container',
    xtype: 'patient-panel',
    alias:'widget.patient',
    id: 'patient-panel',
    config: {
        layout: 'hbox',
        style: 'background-color: #ccc; margin-top: 10px; border: 5px solid; border-radius: 10px',
        items: [
            {
                xtype: 'list',
                flex: 1,
                id: 'patientPanel',
                scrollable: 'false',
                itemTpl: '<table><tr><td>{firstName}, {lastName}</br>Age :{age} years<br/>Village: {village}</td></tr></table>' ,
                store: 'patient',
                style: 'background-color: #ccc',
                cls: 'no-border',
                selectedCls: '',
            },
            {
                xtype: 'image',
                layout: 'fit',
                src: '../outpatient/resources/images/no_image.jpeg',
                flex: 1,
            },
        ]
    }
});